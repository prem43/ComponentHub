export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-accent rounded-full animate-bounce [animation-delay:0.2s]" />
        <div className="w-3 h-3 bg-chart-3 rounded-full animate-bounce [animation-delay:0.4s]" />
      </div>
    </div>
  )
}
