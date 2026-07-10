import { createFileRoute } from '@tanstack/react-router'
import { FileText, Download } from 'lucide-react'

export const Route = createFileRoute('/cv')({
  component: CV,
})

function CV() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        My CV includes my education, research experience, publications,
        presentations, teaching, and professional service. It is updated regularly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <FileText size={18} />
          View CV
        </a>
        <a
          href="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/export?format=pdf"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    </div>
  )
}
