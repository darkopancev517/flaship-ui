import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <h1 className="font-semibold text-6xl">Flaship UI</h1>
        <div className="flex items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="neutral">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="destructive">Button</Button>
        </div>
      </div>
    </div>
  )
}
