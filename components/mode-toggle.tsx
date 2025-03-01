"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggleButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="size-fit p-0 text-muted-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-transparent"
    >
      <Icons.sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="size-fit p-0 text-muted-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-transparent"
        >
          <Icons.sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="mt-3 flex flex-col gap-y-1 rounded-xl"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "rounded-lg",
            theme === "light" && "bg-accent text-accent-foreground"
          )}
        >
          <Icons.sun className="mr-2 size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "rounded-lg",
            theme === "dark" && "bg-accent text-accent-foreground"
          )}
        >
          <Icons.moon className="mr-2 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "rounded-lg",
            theme === "system" && "bg-accent text-accent-foreground"
          )}
        >
          <Icons.laptop className="mr-2 size-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
