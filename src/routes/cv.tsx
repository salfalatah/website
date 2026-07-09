import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'
import { Download } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/cv')({
  component: CV,
})

const EDUCATION = [
  {
    degree: 'Ph.D. in [Your Field]',
    institution: 'Your University',
    location: 'City, State',
    period: '2022–Present',
    details: [
      'Advisor: Prof. [Advisor Name]',
      'Dissertation: "[Working Title of Your Dissertation]"',
      'GPA: X.X / 4.0',
    ],
  },
  {
    degree: 'M.S. in [Your Field]',
    institution: 'Previous University',
    location: 'City, State',
    period: '2020–2022',
    details: [
      'Thesis: "[Thesis Title]"',
      'GPA: X.X / 4.0',
    ],
  },
  {
    degree: 'B.S. in [Your Undergraduate Major]',
    institution: 'Undergraduate University',
    location: 'City, State',
    period: '2016–2020',
    details: ['Graduated with honors'],
  },
]

const PUBLICATIONS = [
  'Your Name, Co-Author. (2025). "Paper Title." *Journal / Conference*, vol(issue), pages. DOI.',
  'Co-Author, Your Name, Other Author. (2024). "Another Paper Title." *Venue*, pages. DOI.',
]

const AWARDS = [
  { year: '2025', award: '[Fellowship / Award Name]', org: '[Awarding Organization]' },
  { year: '2024', award: '[Grant Name]', org: '[Granting Agency]' },
  { year: '2023', award: 'Best Paper Award', org: '[Conference Name]' },
]

const SERVICE = [
  { role: 'Reviewer', where: '[Journal / Conference Name]', period: '2024–Present' },
  { role: 'Session Chair', where: '[Conference Name]', period: '2025' },
  { role: 'Organizer', where: '[Workshop / Event Name]', period: '2024' },
]

const SKILLS = [
  { category: 'Languages', items: ['Python', 'R', 'MATLAB'] },
  { category: 'Tools', items: ['LaTeX', 'Git', 'Jupyter'] },
  { category: 'Methods', items: ['Method A', 'Method B', 'Method C'] },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <Separator />
      {children}
    </section>
  )
}

function CV() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-1">Your Name</h1>
          <p className="text-muted-foreground">Ph.D. Candidate · [Department] · [University]</p>
          <p className="text-muted-foreground text-sm mt-1">
            yourname@university.edu ·{' '}
            <a
              href="https://orcid.org/0000-0000-0000-0000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ORCID
            </a>{' '}
            ·{' '}
            <a
              href="https://scholar.google.com/citations?user=YOURID"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Google Scholar
            </a>
          </p>
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors shrink-0"
        >
          <Download size={15} />
          Download PDF
        </a>
      </div>

      {/* Education */}
      <Section title="Education">
        <div className="space-y-5">
          {EDUCATION.map((edu, i) => (
            <div key={i}>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">{edu.period}</span>
              </div>
              {edu.details.length > 0 && (
                <ul className="mt-1 space-y-0.5">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-sm text-muted-foreground">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section title="Publications">
        <ol className="space-y-2 list-decimal list-inside">
          {PUBLICATIONS.map((pub, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed">
              {pub}
            </li>
          ))}
        </ol>
      </Section>

      {/* Awards */}
      <Section title="Awards & Honors">
        <div className="space-y-2">
          {AWARDS.map((award, i) => (
            <div key={i} className="flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground w-10 shrink-0">{award.year}</span>
              <div>
                <span className="text-sm font-medium text-foreground">{award.award}</span>
                <span className="text-sm text-muted-foreground">, {award.org}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service */}
      <Section title="Service">
        <div className="space-y-2">
          {SERVICE.map((s, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4">
              <div className="text-sm">
                <span className="font-medium text-foreground">{s.role}</span>
                <span className="text-muted-foreground">, {s.where}</span>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">{s.period}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-3">
          {SKILLS.map((group) => (
            <div key={group.category} className="flex items-start gap-4">
              <span className="text-sm font-medium text-foreground w-24 shrink-0 pt-0.5">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <p className="text-xs text-muted-foreground text-center pt-4">
        Last updated: April 2026
      </p>
    </div>
  )
}
