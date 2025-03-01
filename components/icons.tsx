import * as React from "react"

import { LucideIcon, Sun, Moon, Laptop } from "lucide-react"

export type Icon = LucideIcon

type IconSvgProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconSvgProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z" />
    </svg>
  ),
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}
