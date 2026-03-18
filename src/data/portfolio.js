import {
  Cloud,
  Code2,
  Cpu,
  MonitorSmartphone,
  Network,
  PanelsTopLeft,
} from 'lucide-react'

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Swapnil Badgujar',
  title: 'Linux Admin',
  summary:
    'B.Tech in Computer Science graduate working as a Linux Admin, with strong hands-on knowledge of Linux systems, networking, AWS, and modern frontend development using JavaScript, React, and Tailwind CSS.',
  location: 'India',
  phone: '7666377673',
  email: 'badgujarswapnil14@gmail.com',
}

export const aboutHighlights = [
  {
    title: 'Current Focus',
    description:
      'Managing Linux environments, troubleshooting production issues, and strengthening cloud and infrastructure fundamentals.',
  },
  {
    title: 'Academic Foundation',
    description:
      'Completed B.Tech in Computer Science with a strong base in systems, networking concepts, and software engineering.',
  },
  {
    title: 'Builder Mindset',
    description:
      'Combines infrastructure thinking with frontend execution to build polished, user-facing experiences with clean code.',
  },
]

export const timelineItems = [
  {
    period: '2022',
    summary: 'Passed out with a Diploma in Computer Science.',
  },
  {
    period: '2025',
    summary: 'Completed B.Tech in Computer Science.',
  },
  {
    period: 'Aug 2025',
    summary: 'Joined Matfly as a Linux Admin.',
  },
]

export const skills = [
  {
    title: 'Linux',
    icon: Cpu,
    accent: 'from-cyan-400/30 via-cyan-300/8 to-transparent',
    category: 'Systems Administration',
    overview: 'Hands-on Linux administration with a focus on reliability, troubleshooting, and disciplined server operations.',
    focus: ['User and permission handling', 'Shell-based operations', 'Production issue isolation'],
    stack: ['Linux', 'Bash', 'Monitoring'],
    impact: 'Supports stable day-to-day operations with strong command-line confidence and practical debugging skills.',
  },
  {
    title: 'Networking',
    icon: Network,
    accent: 'from-sky-400/30 via-sky-300/8 to-transparent',
    category: 'Connectivity and Diagnostics',
    overview: 'Strong networking fundamentals applied to routing, connectivity checks, and real-world troubleshooting.',
    focus: ['TCP/IP understanding', 'Routing and trace analysis', 'DNS and connectivity checks'],
    stack: ['IP Tools', 'DNS', 'Tracing'],
    impact: 'Improves issue resolution speed by identifying network bottlenecks and communication failures efficiently.',
  },
  {
    title: 'AWS',
    icon: Cloud,
    accent: 'from-orange-400/30 via-orange-300/8 to-transparent',
    category: 'Cloud Foundations',
    overview: 'Foundational AWS knowledge across compute, storage, access control, and scalable deployment thinking.',
    focus: ['Compute and storage services', 'Access and identity basics', 'Cloud-ready architecture mindset'],
    stack: ['EC2', 'S3', 'IAM'],
    impact: 'Brings infrastructure awareness that supports scalable systems and cleaner production decision-making.',
  },
  {
    title: 'JavaScript',
    icon: Code2,
    accent: 'from-amber-300/30 via-amber-200/8 to-transparent',
    category: 'Frontend Logic',
    overview: 'Modern JavaScript for interactive interfaces, dynamic behavior, and clean reusable frontend logic.',
    focus: ['ES6+ syntax and patterns', 'Interactive UI behavior', 'Readable maintainable code'],
    stack: ['ES Modules', 'DOM Logic', 'Async Flows'],
    impact: 'Enables dynamic user experiences without sacrificing clarity, structure, or maintainability.',
  },
  {
    title: 'React',
    icon: PanelsTopLeft,
    accent: 'from-blue-400/30 via-blue-300/8 to-transparent',
    category: 'Component Systems',
    overview: 'Composable React interfaces built with reusable sections, clean structure, and polished visual delivery.',
    focus: ['Reusable component design', 'State-driven rendering', 'Single-page experience patterns'],
    stack: ['Hooks', 'Composition', 'SPA Patterns'],
    impact: 'Creates scalable UI sections that stay maintainable while still looking refined and modern.',
  },
  {
    title: 'Tailwind CSS',
    icon: MonitorSmartphone,
    accent: 'from-teal-300/30 via-teal-200/8 to-transparent',
    category: 'Interface Polish',
    overview: 'Responsive styling and visual system control with strong spacing, hierarchy, and fast iteration speed.',
    focus: ['Responsive layout building', 'Utility-first styling flow', 'Consistent design polish'],
    stack: ['Layouts', 'Spacing', 'Visual Systems'],
    impact: 'Helps translate frontend ideas into clean interfaces quickly with consistent spacing and design balance.',
  },
]

export const projectPlaceholders = [
  {
    title: 'Empty Project Card',
    tag: 'Coming Soon',
    description: 'This section is intentionally left empty for your first featured project.',
  },
  {
    title: 'Empty Project Card',
    tag: 'Coming Soon',
    description: 'Add a real case study here later without changing the section structure.',
  },
  {
    title: 'Empty Project Card',
    tag: 'Coming Soon',
    description: 'Keep this card empty for now and replace it when your next project is ready.',
  },
]

export const socialPlaceholders = [
  { label: 'GitHub', href: 'https://github.com/badgujarswapnil14' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swapnil-badgujar-5a5b00268' },
  { label: 'Resume', href: '/Swapnil-Badgujar-Resume.pdf' },
]