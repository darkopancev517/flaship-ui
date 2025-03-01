"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { themes } from "@/components/registry/themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"

export function DarkModeSwitcher({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={cn("flex w-full items-center justify-between", className)}
      {...props}
    >
      <span>Dark mode</span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
        className="scale-90 data-[state=checked]:bg-foreground"
      />
    </div>
  )
}

export function ThemeToggle() {
  const [config, setConfig] = useConfig()
  const { resolvedTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-foreground/60 hover:bg-transparent hover:text-foreground focus-visible:ring-transparent"
        >
          <span>Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex flex-col rounded-xl bg-input py-2"
      >
        <ScrollArea className="h-[16rem] px-1">
          {themes.map((theme, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() =>
                setConfig({
                  ...config,
                  theme: theme.name,
                })
              }
              className="py-1 focus:bg-transparent focus:text-foreground"
            >
              <div
                className={cn(
                  "flex h-10 w-[10rem] items-center justify-between rounded-lg bg-[--theme-bg] px-4 ring-[0.12rem] hover:cursor-pointer hover:ring-accent",
                  config.theme === theme.name
                    ? "ring-accent"
                    : "ring-transparent"
                )}
                style={
                  {
                    "--theme-bg": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.background
                        : theme.cssVars.dark.background
                    })`,
                    "--theme-fo": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.foreground
                        : theme.cssVars.dark.foreground
                    })`,
                    "--theme-pr": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.primary
                        : theme.cssVars.dark.primary
                    })`,
                    "--theme-se": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.secondary
                        : theme.cssVars.dark.secondary
                    })`,
                    "--theme-ac": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.accent
                        : theme.cssVars.dark.accent
                    })`,
                    "--theme-ne": `oklch(${
                      resolvedTheme === "light"
                        ? theme.cssVars.light.neutral
                        : theme.cssVars.dark.neutral
                    })`,
                  } as React.CSSProperties
                }
              >
                <span className="text-[--theme-fo]">{theme.name}</span>
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-6 w-2 rounded-sm bg-[--theme-pr]" />
                  <div className="h-6 w-2 rounded-sm bg-[--theme-se]" />
                  <div className="h-6 w-2 rounded-sm bg-[--theme-ac]" />
                  <div className="h-6 w-2 rounded-sm bg-[--theme-ne]" />
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
