import { createFileRoute } from '@tanstack/react-router'
import { FileText, Download } from 'lucide-react'

export const Route = createFileRoute('/cv')({
  component: CV,
})

function CV() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          My CV includes my education, research experience, publications,
          presentations, teaching, and professional service. It is updated
          regularly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <FileText size={18} />
            View CV
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </div>

      <object
        data="/cv.pdf"
        type="application/pdf"
        className="hidden md:block w-full h-[900px] rounded-lg border shadow-sm"
      >
        <p className="text-center text-muted-foreground">
          Your browser cannot display the PDF.{' '}
          <a href="/cv.pdf" className="text-primary hover:underline">
            Open it here.
          </a>
        </p>
      </object>
    </div>
  )
}
