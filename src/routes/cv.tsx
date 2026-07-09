import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/cv')({
  component: CV,
})

function CV() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Curriculum Vitae
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        My current curriculum vitae includes my education, research experience,
        publications, presentations, teaching, awards, and professional service.
      </p>

      <a
        href="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/preview"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        <Download size={18} />
        View My CV
      </a>

      <p className="text-sm text-muted-foreground mt-6">
        The CV opens in a new tab and is updated regularly.
      </p>
    </div>
  )
}
