"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export function CodeBlock({ code, language = "tsx", filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative rounded-lg border border-border bg-card overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          {filename && <span className="text-sm font-mono text-muted-foreground">{filename}</span>}
          {!filename && <span className="text-xs font-mono text-muted-foreground uppercase">{language}</span>}
        </div>
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-2 hover:bg-secondary">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              <span className="ml-2 text-xs text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span className="ml-2 text-xs">Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  )
}
