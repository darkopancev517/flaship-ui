import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <div className="mx-auto flex items-center">
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
            <span className="hidden text-muted-foreground sm:block">React</span>
          </div>
          <div className="flex items-center gap-3">
            <Icons.tailwind className="size-8" />
            <span className="hidden text-muted-foreground sm:block">
              TailwindCSS
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Icons.radixUi className="size-8" />
            <span className="hidden text-muted-foreground sm:block">Radix</span>
          </div>
        </div>
      </div>
    </div>
  )
}
