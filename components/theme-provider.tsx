"use client"

import * as React from "react"
import { Provider as JotaiProvider } from "jotai"
import {
  useTheme, 
  ThemeProvider as NextThemeProvider, 
  ThemeProviderProps as NextThemeProviderProps,
} from "next-themes"
import NextTopLoader from "nextjs-toploader"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { TooltipProvider } from "@/components/ui/tooltip"
import { themes } from "@/components/registry/themes"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeProvider({ children, ...props }: NextThemeProviderProps) {
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <JotaiProvider>
      <NextThemeProvider {...props}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </NextThemeProvider>
    </JotaiProvider>
  )
}

function getThemePrimaryRGBColor() {
  const [config] = useConfig()
  const { resolvedTheme } = useTheme()

  if (themes.find((theme) => theme.name === config.theme)) {
    return resolvedTheme === "light"
      ? themes.find((theme) => theme.name === config.theme)?.cssVars.light
          .primaryRGB
      : themes.find((theme) => theme.name === config.theme)?.cssVars.dark
          .primaryRGB
  } else {
    return resolvedTheme === "light" ? "#1f2937" : "#a6adbb"
  }
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
        } as React.CSSProperties
      }
    >
      <NextTopLoader
        color={getThemePrimaryRGBColor()}
        height={1}
        showSpinner={false}
      />
      {children}
    </div>
  )
}

export function ThemeSwitcher() {
  const [config] = useConfig()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const themeName = config.theme
    if (themeName) {
      return document.body.classList.add(`theme-${themeName}`)
    }
  }, [config])

  return null
}
