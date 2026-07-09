import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/research')({
  component: Research,
})

const PUBLICATIONS = [
  {
    title: 'Your Paper Title Here',
    authors: 'Your Name, Co-Author Name, Senior Author Name',
    venue: 'Proceedings of [Conference Name] (CONF), 2025',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'arXiv', href: '#' },
      { label: 'Code', href: '#' },
    ],
    tags: ['Topic A', 'Topic B'],
    highlight: true,
  },
  {
    title: 'Another Paper Title',
    authors: 'Co-Author Name, Your Name, Other Author Name',
    venue: 'Journal of [Field] ([JF]), 2024',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'DOI', href: '#' },
    ],
    tags: ['Topic C'],
    highlight: false,
  },
]

const PROJECTS = [
  {
    title: 'Research Project 1',
    description:
      'A brief description of this ongoing research project, what problem it addresses, and what methods or approaches you are using.',
    status: 'Ongoing',
    tags: ['Method A', 'Domain B'],
  },
  {
    title: 'Research Project 2',
    description:
      'A brief description of a completed or past project. Summarize contributions and outcomes in 1–2 sentences.',
    status: 'Completed',
    tags: ['Method C', 'Domain D'],
  },
]

function Research() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Research</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          My research addresses [broad theme]. I am particularly interested in
          [specific angle or question], with the goal of [impact or outcome you
          care about]. I use methods from [disciplines or methodologies].
        </p>
      </div>

      <Separator />

      {/* Publications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Publications</h2>
        <div className="space-y-5">
          {PUBLICATIONS.map((pub, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl border ${pub.highlight ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}
            >
              <h3 className="font-semibold text-foreground mb-1">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
              <p className="text-sm italic text-muted-foreground mb-3">{pub.venue}</p>
              <div className="flex flex-wrap items-center gap-3">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-1 ml-auto">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          See my{' '}
          <a
            href="https://scholar.google.com/citations?user=YOURID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Scholar profile
          </a>{' '}
          for a complete list.
        </p>
      </section>

      <Separator />

      {/* Current projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <Card key={project.title}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <Badge
                    variant={project.status === 'Ongoing' ? 'default' : 'secondary'}
                    className="text-xs shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
