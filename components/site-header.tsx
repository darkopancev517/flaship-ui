"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggleButton } from "@/components/mode-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export function SiteHeader({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <header className={cn(className)}>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-1">
            <Icons.logo className="size-7" />
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold">Flaship UI</span>
            </div>
          </Link>
          <Badge variant="outline">v0.7.4</Badge>
          <nav className="ml-4">
            <Link
              href="/examples"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground",
                pathname?.startsWith("/examples")
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Examples
            </Link>
          </nav>
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
