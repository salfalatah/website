import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/teaching')({
  component: Teaching,
})

const COURSES = [
  {
    term: 'Spring 2026',
    role: 'Teaching Assistant',
    code: 'DEPT 101',
    title: 'Introduction to [Subject]',
    university: 'Your University',
    description:
      'Assisted with weekly lab sections, held office hours, and graded assignments for an undergraduate introductory course in [subject].',
    enrollment: '~120 students',
  },
  {
    term: 'Fall 2025',
    role: 'Instructor of Record',
    code: 'DEPT 205',
    title: 'Intermediate [Subject]',
    university: 'Your University',
    description:
      'Independently designed and delivered lectures, assignments, and exams for this upper-division undergraduate course covering [topics].',
    enrollment: '~35 students',
  },
  {
    term: 'Spring 2025',
    role: 'Teaching Assistant',
    code: 'DEPT 302',
    title: 'Advanced Topics in [Field]',
    university: 'Your University',
    description:
      'Supported seminar discussions and mentored student research projects in this graduate-level course.',
    enrollment: '~20 students',
  },
]

const MENTORING = [
  {
    name: 'Student Name',
    period: '2025–Present',
    project: 'Brief description of the project or thesis topic you are mentoring them on.',
    level: 'Undergraduate',
  },
  {
    name: 'Another Student',
    period: '2024–2025',
    project: 'Short description of the research project this student completed under your guidance.',
    level: 'Master\'s',
  },
]

function Teaching() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Teaching</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I am committed to accessible, inclusive instruction that emphasizes
          critical thinking and hands-on practice. My teaching experience spans
          [undergraduate / graduate] courses in [general field], and I enjoy
          mentoring students at all levels of their academic journey.
        </p>
      </div>

      <Separator />

      {/* Courses */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Courses</h2>
        <div className="space-y-4">
          {COURSES.map((course, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">
                      {course.code} — {course.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {course.university}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge
                      variant={course.role === 'Instructor of Record' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {course.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{course.term}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  Enrollment: {course.enrollment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Mentoring */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Student Mentoring</h2>
        <div className="space-y-4">
          {MENTORING.map((student, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground text-sm">{student.name}</span>
                  <Badge variant="outline" className="text-xs">{student.level}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{student.project}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 pt-0.5">
                {student.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="p-6 rounded-2xl bg-muted/50 border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-3">Teaching Philosophy</h2>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Write a short paragraph here describing your teaching philosophy — what you believe
          about learning, how you structure your courses, what methods you use, and what
          outcomes you care about for your students. This gives prospective students and
          hiring committees insight into your values as an educator.
        </p>
      </section>
    </div>
  )
}
