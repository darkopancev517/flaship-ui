import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <div className="flex">
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <div className="space-y-4 px-6 lg:px-8">
            <h2 className="text-pretty font-hero text-5xl dark:text-white sm:text-6xl">
              Build your websites 10x faster
            </h2>
            <p className="text-md max-w-lg text-pretty text-muted-foreground sm:text-lg">
              Simply copy and paste components to build beautiful websites
              faster than ever. Fully accessible, customizable and open-source.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-10 sm:max-w-sm sm:grid-cols-2">
              <Link
                href="/docs/installation"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "font-semibold"
                )}
              >
                Get started &rarr;
              </Link>
              <Link
                href="https://flaship.io"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "font-semibold"
                )}
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="flex items-center gap-10 pt-8">
              <div className="flex items-center gap-3">
                <Icons.nextJs className="size-7" />
                <span className="hidden text-sm text-muted-foreground sm:block">
                  Next.js
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.react className="size-7" />
                <span className="hidden text-sm text-muted-foreground sm:block">
                  React
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.tailwind className="size-7" />
                <span className="hidden text-sm text-muted-foreground sm:block">
                  TailwindCSS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.radixUi className="size-7" />
                <span className="hidden text-sm text-muted-foreground sm:block">
                  Radix
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
