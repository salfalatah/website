import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/research')({
  component: Research,
})

// Bolds "Al Falatah" wherever it appears in an author list.
function highlightName(authors: string) {
  return authors.split(/(Al Falatah)/g).map((part, i) =>
    part === 'Al Falatah' ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

// To add a link to any entry, set its `link` to the real URL.
// An empty string ('') shows no link button.
const PEER_REVIEWED = [
   {
    year: '2026',
    status: 'Forthcoming',
      authors: 'Al Falatah, S., Tostlebe, J., & Hashimi, S.',
    title:
      'Beyond risk factors: A mixed-methods study of interpersonal dynamics in suicide attempts and reattempts from police narratives.',
    venue: 'Health & Justice.',
    link: '',
  },
  {
    year: '2025',
    authors: 'Vietto, N., Armstrong, T., Schroll, D., & Al Falatah, S.',
    title:
      'Differences in associations between autonomic nervous system activity and psychopathic traits across stress paradigms and measures.',
    venue: 'Psychopathology & Behavioral Assessment, 47(1), 1–12.',
    link: 'https://link.springer.com/article/10.1007/s10862-024-10185-6',
  },
]

const RESEARCH_REPORTS = [
  {
    year: '2026',
    authors:
      'Hamilton, Z., Tostlebe, J., Ursino, J., Gonzales, T., Hayes, A., Russell-Coprich, N., Jordan, C., Al Falatah, S., & Kigerl, A.',
    title: 'Evaluation of electronic monitoring in Nebraska parole supervision.',
    venue:
      'Advancing Research in Corrections Lab, School of Criminology and Criminal Justice, University of Nebraska Omaha.',
    note: 'Submitted to NDCS for review',
    link: '',
  },
  {
    year: '2026',
    authors:
      'Hamilton, Z., Tostlebe, J., Al Falatah, S., Towne, K., Ursino, J., Kigerl, A., & Campagna, M.',
    title:
      'Evaluation report: Sexual offense-specific treatment programming at the Nebraska Department of Correctional Services.',
    venue:
      'Nebraska Center for Justice Research, School of Criminology and Criminal Justice, University of Nebraska Omaha.',
    note: 'Submitted to NDCS for review',
    link: '',
  },
  {
    year: '2025',
    authors:
      'Campagna, M., Spohn, R., Hamilton, Z., Al Falatah, S., Ursino, J., Gildea, B., Tostlebe, J., Hayes, A., & Towne, K.',
    title:
      'Evaluation report: Anger management program at the Nebraska Department of Correctional Services.',
    venue:
      'Nebraska Center for Justice Research, School of Criminology and Criminal Justice, University of Nebraska Omaha.',
    note: '',
    link: 'https://www.unomaha.edu/college-of-public-affairs-and-community-service/nebraska-center-for-justice-research/documents/anger-management.pdf',
  },
  {
    year: '2024',
    authors: 'Hamilton, Z., Tostlebe, J., Kigerl, A., Kobie, A., & Al Falatah, S.',
    title:
      'The Iowa risk & needs assessment evaluation and development: Iowa Board of Parole.',
    venue:
      'Nebraska Center for Justice Research, School of Criminology and Criminal Justice, University of Nebraska Omaha.',
    note: '',
    link: '',
  },
  {
    year: '2024',
    authors:
      'Campagna, M., Towne, K., Spohn, R., Hamilton, Z., Tostlebe, J., Krushas, A., Gildea, B., Ursino, J., Al Falatah, S., & Hayes, A.',
    title:
      'Evaluation report: Violence reduction program at the Nebraska Department of Correctional Services.',
    venue:
      'Nebraska Center for Justice Research, School of Criminology and Criminal Justice, University of Nebraska Omaha.',
    note: '',
    link: 'https://www.unomaha.edu/college-of-public-affairs-and-community-service/nebraska-center-for-justice-research/documents/vrp-eval-report-2-2024.pdf',
  },
  {
    year: '2023',
    authors: 'Al Falatah, S., & Hashimi, S.',
    title:
      'The implications of the COVID-19 pandemic on attempted suicide trends.',
    venue: 'Omaha Police Department.',
    note: '',
    link: '',
  },
]

const PRESENTATIONS = [
  {
    year: '2026',
    authors: 'Al Falatah, S.',
    title:
      'The role of co-occurring mental health, physical health, and substance use on youth arrest.',
    venue: 'Academy of Criminal Justice Sciences, Philadelphia.',
    note: 'Poster',
  },
  {
    year: '2025',
    authors: 'Al Falatah, S.',
    title:
      'The role of co-occurring mental health, physical health, and substance use on criminal behavior.',
    venue: 'American Society of Criminology, Washington, DC.',
    note: 'Manuscript in progress',
  },
  {
    year: '2024',
    authors: 'Al Falatah, S., Tostlebe, J., & Hashimi, S.',
    title:
      'How do mental health concerns impact suicide attempts? A multi-method study of police calls for service.',
    venue: 'American Society of Criminology, San Francisco.',
    note: 'Panel presenter',
  },
  {
    year: '2024',
    authors: 'Spohn, R., Al Falatah, S., Tostlebe, J., & Ursino, J.',
    title:
      'Sex offender treatment: An evaluation of the effectiveness of prison- and community-based programming.',
    venue: 'American Society of Criminology, San Francisco.',
    note: 'Panel presenter',
  },
  {
    year: '2024',
    authors: 'Campagna, M., Ursino, J., Al Falatah, S., & Gildea, B.',
    title:
      'Evaluating violence programming in prison: Comparing cognitive-behavioral and psycho-educational approaches.',
    venue: 'American Society of Criminology, San Francisco.',
    note: '',
  },
  {
    year: '2023',
    authors: 'Al Falatah, S., & Hashimi, S.',
    title:
      'The effect of COVID-19 on suicide attempt calls for police service.',
    venue: 'American Society of Criminology, Philadelphia.',
    note: 'Panel presenter',
  },
  {
    year: '2023',
    authors: 'Vietto, N., Armstrong, T., Schroll, D., & Al Falatah, S.',
    title:
      'Associations between ANS activity and psychopathic traits: A consideration of differences in association across stress task.',
    venue: 'American Society of Criminology, Philadelphia.',
    note: 'Poster',
  },
  {
    year: '2023',
    authors: 'Al Falatah, S., & Hashimi, S.',
    title:
      'The implications of the COVID-19 pandemic on attempted suicide calls for police service.',
    venue: 'Suicide Research Symposium, Virtual.',
    note: 'Panel presenter',
  },
  {
    year: '2022',
    authors: 'Al Falatah, S., & Hashimi, S.',
    title:
      'The implications of the COVID-19 pandemic on police mental health calls for service.',
    venue: 'American Society of Criminology, Atlanta.',
    note: 'Panel presenter',
  },
  {
    year: '2022',
    authors: 'Vietto, N., Armstrong, T., Schroll, D., & Al Falatah, S.',
    title:
      'The evaluation of autonomic nervous system activity and psychopathic stressor across stress conditions.',
    venue: 'American Society of Criminology, Atlanta.',
    note: '',
  },
  {
    year: '2021',
    authors: 'Al Falatah, S., Jaynes, C., Fox, B., & Verona, E.',
    title:
      'The intersection of race, mental health, and disciplinary sanctions in a rural jail.',
    venue: 'American Society of Criminology, Chicago.',
    note: 'Panel presenter',
  },
  {
    year: '2021',
    authors: 'Vietto, N., Armstrong, T., Schroll, D., & Al Falatah, S.',
    title:
      'Autonomic nervous system reactivity and traits associated with antisocial behavior.',
    venue: 'American Society of Criminology, Chicago.',
    note: '',
  },
]

function LinkButton({ href }: { href: string }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline align-middle"
    >
      <ExternalLink size={12} />
      Link
    </a>
  )
}

function Research() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Research</h1>
      </div>

      <Separator />

      {/* Publications */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Publications</h2>

      {/* Peer-reviewed */}
<div className="space-y-4">
  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
    Peer-Reviewed Articles
  </h3>
  {PEER_REVIEWED.map((p, i) => (
    <div key={i} className="flex gap-4">
      <span className="text-sm text-muted-foreground w-12 shrink-0">{p.year}</span>
      <p className="text-sm leading-relaxed flex-1">
        {p.status && (
          <span className="mr-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800 align-middle">
            {p.status}
          </span>
        )}
        {highlightName(p.authors)} {p.title}{' '}
        <span className="italic text-muted-foreground">{p.venue}</span>
        <LinkButton href={p.link} />
      </p>
    </div>
  ))}
</div>
        {/* Research reports */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Research Reports
          </h3>
          {RESEARCH_REPORTS.map((p, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-sm text-muted-foreground w-12 shrink-0">{p.year}</span>
              <p className="text-sm leading-relaxed flex-1">
                {highlightName(p.authors)} {p.title}{' '}
                <span className="italic text-muted-foreground">{p.venue}</span>
                {p.note && (
                  <span className="text-muted-foreground"> {p.note}.</span>
                )}
                <LinkButton href={p.link} />
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          See my{' '}
          <a
            href="https://scholar.google.com/citations?authuser=1&user=imXN2XQAAAAJ"
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

      {/* Presentations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Conference Presentations</h2>
        <div className="space-y-4">
          {PRESENTATIONS.map((p, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-sm text-muted-foreground w-12 shrink-0">{p.year}</span>
              <p className="text-sm leading-relaxed flex-1">
                {highlightName(p.authors)} {p.title}{' '}
                <span className="italic text-muted-foreground">{p.venue}</span>
                {p.note && (
                  <span className="text-muted-foreground"> {p.note}.</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
