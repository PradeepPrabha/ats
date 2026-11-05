import { z } from 'zod'

const phone = z.string().trim().min(1, 'Phone number is required').regex(/^[+]?[0-9\s-]{8,15}$/, 'Enter a valid phone number')
const optionalUrl = (host?: string) => z.string().trim().refine(v => v === '' || /^https?:\/\/.+\..+/.test(v), 'Enter a valid URL starting with http(s)://').refine(v => v === '' || !host || v.includes(host), `URL should be a ${host} link`)

export const enquiryTypes = ['General Enquiry', 'ERP Development', 'Mobile App Development', 'Desktop Application', 'Digital Marketing', 'Web Design', 'Web Development', 'E-commerce', 'Branding', 'Internship']

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Full name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone,
  company: z.string().trim().max(80).optional(),
  enquiryType: z.string().min(1, 'Select an enquiry type'),
  service: z.string().optional(),
  message: z.string().trim().min(10, 'Please enter at least 10 characters').max(1000, 'Maximum 1000 characters'),
})
export type ContactValues = z.infer<typeof contactSchema>

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  service: z.string().min(1, 'Select a service'),
  details: z.string().trim().min(10, 'Please add a few details').max(500, 'Maximum 500 characters'),
})
export type QuoteValues = z.infer<typeof quoteSchema>

export const MAX_RESUME_MB = 2
export const resumeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export const applicationSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone,
  city: z.string().trim().min(2, 'City is required'),
  state: z.string().trim().min(2, 'State is required'),
  college: z.string().trim().min(2, 'College name is required'),
  degree: z.string().trim().min(2, 'Degree is required'),
  department: z.string().trim().min(2, 'Department is required'),
  graduationYear: z.string().regex(/^(19|20)\d{2}$/, 'Enter a valid year, e.g. 2026'),
  domain: z.string().min(1, 'Select a domain'),
  mode: z.string().min(1, 'Select a preferred mode'),
  duration: z.string().min(1, 'Select a preferred duration'),
  reason: z.string().trim().min(20, 'Please write at least 20 characters').max(800, 'Maximum 800 characters'),
  resume: z.custom<FileList>().refine(f => f && f.length > 0, 'Resume is required')
    .refine(f => !f || !f[0] || resumeTypes.includes(f[0].type), 'Only PDF, DOC or DOCX files are allowed')
    .refine(f => !f || !f[0] || f[0].size <= MAX_RESUME_MB * 1024 * 1024, `File must be under ${MAX_RESUME_MB} MB`),
  github: optionalUrl('github.com'),
  linkedin: optionalUrl('linkedin.com'),
  portfolio: optionalUrl(),
})
export type ApplicationValues = z.infer<typeof applicationSchema>
