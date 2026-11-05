import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, FileText } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { applicationSchema, ApplicationValues, MAX_RESUME_MB } from '../../utils/schemas'
import { internships } from '../../data/internships'
import { InputField, SelectField, TextAreaField } from './FormField'
import { FormSuccess, FormError, DemoBanner } from './FormSuccess'
import { useFakeSubmit } from '../../hooks/useFakeSubmit'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <fieldset className="card min-w-0 p-5 sm:p-6"><legend className="px-2 font-heading text-lg font-bold text-brand">{title}</legend><div className="mt-2 grid gap-5 sm:grid-cols-2">{children}</div></fieldset>
)

export function ApplicationForm() {
  const [params] = useSearchParams()
  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm<ApplicationValues>({ resolver: zodResolver(applicationSchema), defaultValues: { domain: '', mode: '', duration: '' } })
  const { state, run, reset: resetState } = useFakeSubmit()
  const reason = watch('reason') ?? ''
  const file = watch('resume')?.[0]

  useEffect(() => {
    const slug = params.get('domain'); const m = internships.find(i => i.slug === slug)
    if (m) setValue('domain', m.title)
  }, [params, setValue])

  if (state === 'success') return <FormSuccess title="Application form completed" message="Your application form has been completed successfully. This is a frontend demo; connect a backend to submit your application to ATS." onReset={() => { resetState(); reset() }} />

  return (
    <form onSubmit={handleSubmit(async () => { await run() })} noValidate className="space-y-6" aria-label="Internship application form">
      <DemoBanner>This is a UI demonstration. No application is actually delivered to ATS, and your resume is not uploaded anywhere.</DemoBanner>
      <Section title="Personal Information">
        <InputField id="a-name" label="Full Name" required autoComplete="name" error={errors.fullName} {...register('fullName')} />
        <InputField id="a-email" label="Email Address" type="email" required autoComplete="email" error={errors.email} {...register('email')} />
        <InputField id="a-phone" label="Phone Number" type="tel" required autoComplete="tel" error={errors.phone} {...register('phone')} />
        <InputField id="a-city" label="City" required error={errors.city} {...register('city')} />
        <InputField id="a-state" label="State" required error={errors.state} {...register('state')} />
      </Section>
      <Section title="Education">
        <InputField id="a-college" label="College Name" required error={errors.college} {...register('college')} />
        <InputField id="a-degree" label="Degree" required placeholder="e.g. B.E., B.Sc., MCA" error={errors.degree} {...register('degree')} />
        <InputField id="a-dept" label="Department" required error={errors.department} {...register('department')} />
        <InputField id="a-year" label="Graduation Year" required inputMode="numeric" maxLength={4} placeholder="2026" error={errors.graduationYear} {...register('graduationYear')} />
      </Section>
      <Section title="Internship">
        <SelectField id="a-domain" label="Select Domain" required options={internships.map(i => i.title)} error={errors.domain} {...register('domain')} />
        <SelectField id="a-mode" label="Preferred Mode" required options={['Onsite', 'Remote', 'Hybrid']} error={errors.mode} {...register('mode')} />
        <SelectField id="a-duration" label="Preferred Duration" required options={['1 Month', '2 Months', '3 Months', '6 Months']} error={errors.duration} {...register('duration')} />
        <div className="sm:col-span-2"><TextAreaField id="a-reason" label="Why do you want to join ATS?" required maxLength={800} limit={800} count={reason.length} error={errors.reason} {...register('reason')} /></div>
      </Section>
      <Section title="Documents">
        <div className="sm:col-span-2">
          <InputField id="a-resume" label="Resume Upload" type="file" required accept=".pdf,.doc,.docx" hint={`PDF, DOC or DOCX, up to ${MAX_RESUME_MB} MB`} error={errors.resume as never} {...register('resume')} />
          {file && !errors.resume && <p className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand-soft px-3 py-1.5 text-sm"><FileText size={14} className="text-brand" aria-hidden />{file.name} ({(file.size / 1024).toFixed(0)} KB)</p>}
        </div>
        <InputField id="a-gh" label="GitHub URL" type="url" placeholder="https://github.com/username" error={errors.github} {...register('github')} />
        <InputField id="a-li" label="LinkedIn URL" type="url" placeholder="https://linkedin.com/in/username" error={errors.linkedin} {...register('linkedin')} />
        <div className="sm:col-span-2"><InputField id="a-pf" label="Portfolio URL" type="url" placeholder="https://" error={errors.portfolio} {...register('portfolio')} /></div>
      </Section>
      {state === 'error' && <FormError message="Something went wrong in the demo. Please try again." />}
      <button type="submit" disabled={state === 'loading'} className="btn-primary w-full sm:w-auto disabled:opacity-70">
        {state === 'loading' ? <><Loader2 size={16} className="animate-spin" aria-hidden /> Submitting…</> : 'Submit Application'}
      </button>
    </form>
  )
}
