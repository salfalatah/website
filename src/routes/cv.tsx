import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cv')({
  component: CV,
})

function CV() {
  return (
   <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        Curriculum Vitae
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
          href="https://docs.google.com/document/d/1lkUjuazFn_BC_OQhjPxuVDt5mgw31IK1v6wZugfFQrY/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <FileText size={18} />
          View CV
        </a>
        
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
This gives you a clean, centered page with two buttons: a pink View CV (opens the Google Doc in a new tab) and a Download PDF. On a phone the buttons stack vertically; on desktop they sit side by side. Much cleaner than the cramped embed, and it works identically well on every device.
One thing to confirm: I changed the "View CV" link to end in /view instead of /preview. For a full-screen open in a new tab, /view is the better choice (it gives the reader Google's normal document view with all its controls). Test it after deploying — if /view prompts anything odd, switch it back to /preview, which also works.
If you'd rather keep the embed on desktop but show buttons on mobile, that's possible too, but honestly the buttons-only version is cleaner everywhere and simpler to maintain — I'd go with it. Upload this cv.tsx the same way that worked before, and your CV page will look sharp on your phone.
Claude is AI and can 
