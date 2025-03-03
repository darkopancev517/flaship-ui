import * as React from "react"

import { SiteHeader } from "@/components/site-header"

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader className="top sticky z-50 bg-background px-8 2xl:px-16" />
      <main className="flex grow">{children}</main>
    </div>
  )
}
