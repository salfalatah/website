import { createFileRoute } from '@tanstack/react-router'
import { Mail, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: Home,
})

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: 'mailto:salfalatah@unomaha.edu',
    display: 'salfalatah@unomaha.edu',
    icon: <Mail size={16} />,
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0009-9349-1913',
    display: '0009-0009-9349-1913',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.409 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarah-al-falatah-275925137/',
    display: 'https://www.linkedin.com/in/sarah-al-falatah',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?authuser=1&user=imXN2XQAAAAJ',
    display: 'Google Scholar',
    icon: <ExternalLink size={16} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/salfalatah',
    display: 'github.com/salfalatah',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

const RESEARCH_INTERESTS = [
  'Health Criminology',
  'Program Evaluation',
  'Hospital-Based Violence Intervention Programs (HVIPs)',
  'Adverse Childhood Experiences (ACEs)',
]

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-12">
        <div className="flex-1 space-y-4">
          <div>
           <h1 className="text-4xl font-bold text-foreground mb-1">
  Sarah Al Falatah
</h1>
<p className="text-lg text-muted-foreground">
  Doctoral Candidate in Criminology and Criminal Justice
</p>
<p className="text-muted-foreground">
  University of Nebraska at Omaha
</p>
          </div>

          <p className="text-foreground leading-relaxed">
            Welcome! I am a doctoral candidate in the School of Criminology and Criminal Justice at
  the University of Nebraska at Omaha. I am a health criminologist with an emphasis
  on mental and physical health within the criminal justice system and a secondary
  focus on violence prevention and program evaluation.
          </p>
          <p className="text-foreground leading-relaxed">
             My research explores health conditions as both precursors and consequences of
  criminal justice involvement and victimization. Specifically, I examine how
  mental and physical health shape pathways into offending and victimization, and
  how those experiences may amplify future health conditions. My dissertation
  evaluates the implementation and effectiveness of a Hospital-Based Violence
  Intervention Program (HVIP).
          </p>

          {/* Contact links */}
          <div className="space-y-2 pt-2">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.icon}
                </span>
                <span className="font-medium w-28 shrink-0">{link.label}:</span>
                <span className="text-primary hover:underline">{link.display}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <img
            src="/headshot-on-white.jpg"
            alt="Sarah Al Falatah"
            className="w-48 h-56 object-cover rounded-2xl shadow-sm border border-border"
          />
        </div>
      </div>

      <Separator className="mb-10" />

      {/* Research interests */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          {RESEARCH_INTERESTS.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-sm px-3 py-1">
              {interest}
            </Badge>
          ))}
        </div>
      </section>

      {/* Updates section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Updates</h2>
        <div className="space-y-3">
          {[
            { date: 'June 2026', text: 'Completed a 4-Day Data Visualization Workshop' },
            { date: 'March 2026', text: 'Doctoral Student Summit Fellow, ACJS' },
            { date: 'October 2025', text: 'Awarded a Graduate Research and Creative Activity Grant' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 text-sm">
              <span className="text-muted-foreground whitespace-nowrap w-28 shrink-0">{item.date}</span>
              <span className="text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
