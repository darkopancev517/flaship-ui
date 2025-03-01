import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggleButton } from "@/components/mode-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

function Navbar() {
  return (
    <header className="sticky top z-50 bg-background px-8 2xl:px-16">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <Icons.logo className="size-7" />
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold">Flaship UI</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggleButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
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
    </div>
  )
}
