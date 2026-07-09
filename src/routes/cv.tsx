import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cv')({
  component: CV,
})

function CV() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-muted-foreground">
          My current curriculum vitae includes my education, research experience,
          publications, presentations, teaching, awards, and professional service.
        </p>
      </div>

      <iframe
        src="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/preview"
        className="w-full h-[1000px] rounded-lg border shadow-sm"
        title="Curriculum Vitae"
      />

      <p className="text-sm text-muted-foreground mt-6 text-center">
        This CV is updated regularly. You can also{' '}
        <a
          href="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/export?format=pdf"
          className="underline hover:opacity-80"
        >
          download it as a PDF
        </a>
        .
      </p>
    </div>
  )
}
