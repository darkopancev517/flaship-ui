import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import CardDemo from "@/components/examples/card-demo"
import SliderDemo from "@/components/examples/slider-demo"
import CheckboxDemo from "@/components/examples/checkbox-demo"
import HoverCardDemo from "@/components/examples/hover-card-demo"
import TabsDemo from "@/components/examples/tabs-demo"
import MenubarDemo from "@/components/examples/menubar-demo"
import AvatarDemo from "@/components/examples/avatar-demo"
import ButtonDemo from "@/components/examples/button-demo"
import ButtonSecondary from "@/components/examples/button-secondary"
import ButtonDestructive from "@/components/examples/button-destructive"
import ButtonOutline from "@/components/examples/button-outline"
import ButtonLink from "@/components/examples/button-link"
import ButtonGhost from "@/components/examples/button-ghost"
import ButtonWithIcon from "@/components/examples/button-with-icon"
import ButtonLoading from "@/components/examples/button-loading"

export default function ExamplesPage() {
  return (
    <div className="px-6 lg:px-8">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="grid gap-4">
            <ComponentWrapper>
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper>
              <SliderDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper className="spa flex-col items-start space-x-0 space-y-2">
              <p className="text-sm text-muted-foreground">Documentation</p>
              <p className="text-sm font-medium leading-none">
                You can customize the theme using{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                  CSS variables
                </code>
                .{" "}
                <Link
                  href="#"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Click here
                </Link>{" "}
                to learn more.
              </p>
            </ComponentWrapper>
            <ComponentWrapper>
              <CheckboxDemo />
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
              <TabsDemo />
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <MenubarDemo />
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
              <div className="flex space-x-2">
                <ButtonDemo />
                <ButtonSecondary />
                <ButtonDestructive />
              </div>
              <div className="flex space-x-2">
                <ButtonOutline />
                <ButtonLink />
                <ButtonGhost />
              </div>
              <div className="flex space-x-2">
                <ButtonWithIcon />
                <ButtonLoading />
              </div>
              <div className="flex space-x-2">
                <Button size="lg">Large</Button>
                <Button size="sm">Small</Button>
              </div>
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentWrapper({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between space-x-4 rounded-md p-4",
        className
      )}
    >
      {children}
    </div>
  )
}
