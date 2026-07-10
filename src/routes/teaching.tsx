import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/teaching')({
  component: Teaching,
})

const UPCOMING = [
  {
    term: 'Fall 2026',
    code: 'CRMJST 305',
    title: 'Criminological Theory & Policy',
    detail: 'University of Wisconsin–Milwaukee',
    mode: 'Online',
  },
]

const INSTRUCTOR_OF_RECORD = [
  {
    term: 'Summer 2025',
    code: 'CRIM 400',
    title: 'Mental Health and the Criminal Justice System',
    mode: 'Online',
  },
]

const TEACHING_ASSISTANT = [
  {
    term: '2023 – 2024',
    code: 'CRCJ 2210',
    title: 'Survey of Corrections',
    detail: 'Dr. Jenn Tostlebe',
    mode: 'In-person',
  },
  {
    term: '2021 – 2022',
    code: 'CRCJ 4450',
    title: 'Gangs and Gang Control',
    detail: 'Dr. Sadaf Hashimi',
    mode: 'In-person',
  },
]

const PROFESSIONAL_DEVELOPMENT = [
  {
    year: '2025',
    title: 'Improving the Accessibility of Your Canvas Course',
    detail: 'Digital Learning Course, University of Nebraska at Omaha. May 5, 2025.',
  },
  {
    year: '2024',
    title: 'Foundations of Teaching Online',
    detail: 'Digital Learning Course, University of Nebraska at Omaha. October 25, 2024.',
  },
]

function CourseRow({
  term,
  code,
  title,
  detail,
  mode,
}: {
  term: string
  code: string
  title: string
  detail?: string
  mode?: string
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground w-32 shrink-0">{term}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          <span className="text-primary">{code}</span> — {title}
        </p>
        {detail && (
          <p className="text-sm text-muted-foreground mt-0.5">{detail}</p>
        )}
      </div>
      {mode && (
        <Badge variant="secondary" className="text-xs shrink-0 mt-2 sm:mt-0 self-start">
          {mode}
        </Badge>
      )}
    </div>
  )
}

function Teaching() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Teaching</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I teach and assist courses in criminology and criminal justice, with a
          focus on criminological theory, corrections, and the intersection of
          mental health and the justice system. I am committed to accessible,
          evidence-based instruction across both online and in-person formats.
        </p>
      </div>

      <Separator />

      {/* Upcoming */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Upcoming Courses</h2>
        <div>
          {UPCOMING.map((c, i) => (
            <CourseRow
              key={i}
              term={c.term}
              code={c.code}
              title={c.title}
              detail={c.detail}
              mode={c.mode}
            />
          ))}
        </div>
      </section>

      <Separator />

      {/* Teaching experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Teaching Experience</h2>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Instructor of Record
          </h3>
          <p className="text-sm text-muted-foreground -mt-1">
            Department of Criminology and Criminal Justice, University of Nebraska at Omaha
          </p>
          <div>
            {INSTRUCTOR_OF_RECORD.map((c, i) => (
              <CourseRow
                key={i}
                term={c.term}
                code={c.code}
                title={c.title}
                mode={c.mode}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Graduate Teaching Assistant
          </h3>
          <p className="text-sm text-muted-foreground -mt-1">
            Department of Criminology and Criminal Justice, University of Nebraska at Omaha
          </p>
          <div>
            {TEACHING_ASSISTANT.map((c, i) => (
              <CourseRow
                key={i}
                term={c.term}
                code={c.code}
                title={c.title}
                detail={c.detail}
                mode={c.mode}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Professional development */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Professional Development</h2>
        <div>
          {PROFESSIONAL_DEVELOPMENT.map((c, i) => (
            <div
              key={i}
              className="flex gap-4 py-3 border-b border-border last:border-0"
            >
              <span className="text-sm text-muted-foreground w-12 shrink-0">{c.year}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{c.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
