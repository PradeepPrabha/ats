import { Internship } from '../types'

const faq = (title: string) => [
  { q: `Who can apply for the ${title} program?`, a: 'Students and fresh graduates with an interest in the domain. Final eligibility will be confirmed by ATS.' },
  { q: 'Is prior experience required?', a: 'Basic knowledge helps, but motivated beginners are welcome. Details are confirmed by ATS.' },
  { q: 'Are the duration and mode fixed?', a: 'The values shown are placeholders in this demo and will be confirmed by ATS.' },
]

// SAMPLE PROGRAMS – proposed categories shown for demonstration until ATS confirms availability.
export const internships: Internship[] = [
  { slug: 'web-development', title: 'Web Development', icon: 'Globe', description: 'Learn to build complete websites using HTML, CSS, JavaScript and modern frameworks.', skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'], outcomes: ['Build responsive websites', 'Understand how the web works', 'Use version control'], projects: ['Portfolio website', 'Business landing page'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students or graduates in any discipline interested in web technologies.', faqs: faq('Web Development') },
  { slug: 'frontend-development', title: 'Frontend Development', icon: 'LayoutTemplate', description: 'Create modern user interfaces with React and TypeScript.', skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'], outcomes: ['Build component-based UIs', 'Work with APIs', 'Write maintainable TypeScript'], projects: ['Dashboard UI', 'Product listing app'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students with basic HTML, CSS and JavaScript knowledge.', faqs: faq('Frontend Development') },
  { slug: 'full-stack-development', title: 'Full Stack Development', icon: 'Layers', description: 'Work across frontend, backend and database layers to build complete applications.', skills: ['React', 'PHP / Laravel', 'MySQL', 'APIs'], outcomes: ['Design simple databases', 'Build backend endpoints', 'Connect UI to APIs'], projects: ['Task manager', 'Mini e-commerce app'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students with programming fundamentals.', faqs: faq('Full Stack Development') },
  { slug: 'python-development', title: 'Python Development', icon: 'Terminal', description: 'Learn Python programming and apply it to practical automation and application projects.', skills: ['Python', 'OOP', 'Flask basics', 'Databases'], outcomes: ['Write clean Python code', 'Automate tasks', 'Build small applications'], projects: ['Automation script', 'Simple web service'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students or graduates with basic programming interest.', faqs: faq('Python Development') },
  { slug: 'java-development', title: 'Java Development', icon: 'Coffee', description: 'Build strong programming foundations with Java and object-oriented design.', skills: ['Java', 'OOP', 'JDBC', 'MySQL'], outcomes: ['Apply OOP principles', 'Connect Java to databases', 'Build desktop-style applications'], projects: ['Billing application', 'Inventory tracker'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students in computer-related disciplines.', faqs: faq('Java Development') },
  { slug: 'mobile-app-development', title: 'Mobile App Development', icon: 'Smartphone', description: 'Design and build mobile apps for Android and iOS with Flutter.', skills: ['Flutter', 'Dart', 'UI Design', 'APIs'], outcomes: ['Build cross-platform apps', 'Design mobile interfaces', 'Integrate APIs'], projects: ['Service booking app', 'Notes app'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students with basic programming knowledge.', faqs: faq('Mobile App Development') },
  { slug: 'ui-ux-design', title: 'UI/UX Design', icon: 'PenTool', description: 'Learn user research, wireframing and interface design using Figma.', skills: ['Figma', 'Wireframing', 'Prototyping', 'Design systems'], outcomes: ['Create user flows', 'Design responsive screens', 'Build a design portfolio'], projects: ['Mobile app redesign', 'Website UI kit'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students or graduates with an interest in design.', faqs: faq('UI/UX Design') },
  { slug: 'digital-marketing', title: 'Digital Marketing', icon: 'Megaphone', description: 'Understand SEO, social media and paid campaigns through hands-on exercises.', skills: ['SEO', 'Social Media', 'Content', 'Analytics'], outcomes: ['Plan a campaign', 'Write marketing content', 'Read basic analytics'], projects: ['Content calendar', 'Mock ad campaign'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students and graduates from any discipline.', faqs: faq('Digital Marketing') },
  { slug: 'software-testing', title: 'Software Testing', icon: 'Bug', description: 'Learn how quality is assured through test planning, manual and basic automated testing.', skills: ['Test cases', 'Bug reporting', 'Manual testing', 'Test tools'], outcomes: ['Write test cases', 'Report defects clearly', 'Understand QA lifecycle'], projects: ['Test plan for a web app', 'Bug report portfolio'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students interested in software quality.', faqs: faq('Software Testing') },
  { slug: 'data-analytics', title: 'Data Analytics', icon: 'BarChart3', description: 'Work with data to find insights using spreadsheets, SQL and visualization.', skills: ['Excel', 'SQL', 'Python basics', 'Visualization'], outcomes: ['Clean and analyse data', 'Build charts', 'Present insights'], projects: ['Sales dashboard', 'Survey analysis'], duration: 'To be confirmed', mode: 'To be confirmed', eligibility: 'Students with an interest in data.', faqs: faq('Data Analytics') },
]

export const getInternship = (slug?: string) => internships.find(i => i.slug === slug)

export const internshipBenefits = [
  { title: 'Practical Learning', icon: 'BookOpen', text: 'Learn by doing, with hands-on exercises instead of theory alone.' },
  { title: 'Industry-Oriented Projects', icon: 'Briefcase', text: 'Work on project-style tasks that reflect real workplace needs.' },
  { title: 'Technical Mentorship', icon: 'Users', text: 'Guidance from experienced team members as you learn.' },
  { title: 'Portfolio Building', icon: 'FolderGit2', text: 'Finish with work you can show to future employers.' },
  { title: 'Communication Skills', icon: 'MessagesSquare', text: 'Practise explaining ideas and collaborating in a team.' },
  { title: 'Problem-Solving', icon: 'Puzzle', text: 'Break down challenges and build confident solutions.' },
  { title: 'Career Preparation', icon: 'Rocket', text: 'Prepare for interviews and your first professional role.' },
]

export const applicationSteps = [
  { title: 'Select Program', text: 'Choose the domain that matches your interests.' },
  { title: 'Submit Application', text: 'Fill in the application form with your details.' },
  { title: 'Application Review', text: 'The ATS team reviews your application.' },
  { title: 'Interview / Discussion', text: 'A short discussion, if applicable.' },
  { title: 'Confirmation and Onboarding', text: 'Receive confirmation and begin your program.' },
]
