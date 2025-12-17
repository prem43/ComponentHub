"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface CompleteCodeBlockProps {
  componentName: string
  componentCode: string
  dependencies?: string[]
  cssCode?: string
  instructions?: string
  className?: string
}

export function CompleteCodeBlock({
  componentName,
  componentCode,
  dependencies = [],
  cssCode,
  instructions,
  className,
}: CompleteCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const allCode = `// ${componentName}.tsx
// Copy this complete component into your project

${
  dependencies.length > 0
    ? `// Dependencies to install:
// npm install ${dependencies.join(" ")}

`
    : ""
}${componentCode}${
  cssCode
    ? `

// =============== CSS (Add to globals.css) ===============
${cssCode}`
    : ""
}`

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(allCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyComponentOnly = async () => {
    await navigator.clipboard.writeText(componentCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("space-y-3", className)}>
      {/* Instructions */}
      {instructions && (
        <Card className="p-4 bg-primary/5 border-primary/20">
          <p className="text-sm text-foreground/90">
            <span className="font-semibold text-primary">How to use: </span>
            {instructions}
          </p>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Ready to use in your project</span>
          {dependencies.length > 0 && (
            <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {dependencies.length} {dependencies.length === 1 ? "dependency" : "dependencies"}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={copyComponentOnly}>
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1.5 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1.5" />
                Component Only
              </>
            )}
          </Button>
          <Button
            size="sm"
            onClick={copyToClipboard}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1.5 text-white" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1.5" />
                Copy All Code
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Dependencies Section */}
      {dependencies.length > 0 && (
        <Card className="p-4 bg-muted/30">
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Install Dependencies
          </h4>
          <code className="text-sm font-mono bg-background px-3 py-2 rounded block">
            npm install {dependencies.join(" ")}
          </code>
        </Card>
      )}

      {/* Code Display */}
      <div className="relative rounded-lg border border-border bg-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
          <span className="text-sm font-mono text-muted-foreground">{componentName}.tsx</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="h-7 px-2 text-xs hover:bg-secondary"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3 w-3 mr-1" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3 mr-1" />
                Expand
              </>
            )}
          </Button>
        </div>

        {/* Code Content */}
        <div className={cn("overflow-x-auto transition-all", expanded ? "max-h-[800px]" : "max-h-[400px]")}>
          <pre className="p-4 text-xs font-mono leading-relaxed">
            <code className="text-foreground whitespace-pre-wrap">{allCode}</code>
          </pre>
        </div>

        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        )}
      </div>

      {/* CSS Section */}
      {cssCode && (
        <Card className="p-4 bg-amber-500/5 border-amber-500/20">
          <p className="text-sm text-foreground/90 mb-2">
            <span className="font-semibold text-amber-600 dark:text-amber-400">Additional CSS required: </span>
            Add the CSS code shown above to your globals.css file for proper styling.
          </p>
        </Card>
      )}
    </div>
  )
}
