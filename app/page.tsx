import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggleButton } from "@/components/mode-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

function Navbar() {
  return (
    <header className="top sticky z-50 bg-background px-8 2xl:px-16">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-1">
            <Icons.logo className="size-7" />
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold">Flaship UI</span>
            </div>
          </Link>
          <Badge variant="outline">v0.7.4</Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="pt-1.5">
            <Link href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "size-fit p-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
                )}
              >
                <Icons.github className="size-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
          </div>
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
      <div className="flex grow items-center">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-6 lg:px-8">
          <h2 className="text-pretty text-center font-hero text-5xl dark:text-white sm:text-6xl">
            Build your websites 10x faster
          </h2>
          <p className="text-md mx-auto max-w-2xl text-pretty text-center text-muted-foreground sm:text-lg">
            Simply copy and paste components to build beautiful websites faster
            than ever. Fully accessible, customizable and open-source.
          </p>
          <div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:max-w-md sm:grid-cols-2">
            <Link
              href="https://flaship.io"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "font-semibold"
              )}
            >
              Getting started &rarr;
            </Link>
            <Link
              href="https://flaship.io/docs/components/accordion"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "font-semibold"
              )}
            >
              Browse components &rarr;
            </Link>
          </div>
          <div className="flex items-center justify-center gap-10 pt-10">
            <div className="flex items-center gap-3">
              <Icons.nextJs className="size-8" />
              <span className="hidden text-muted-foreground sm:block">
                Next.js
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.react className="size-8" />
              <span className="hidden text-muted-foreground sm:block">
                React
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.tailwind className="size-8" />
              <span className="hidden text-muted-foreground sm:block">
                TailwindCSS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.radixUi className="size-8" />
              <span className="hidden text-muted-foreground sm:block">
                Radix
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
