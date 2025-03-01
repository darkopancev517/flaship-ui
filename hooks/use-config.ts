"use client"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Themes } from "@/components/registry/themes"

type Config = {
  theme: Themes["name"]
  radius: number
}

const defaultConfig = atomWithStorage<Config>("config", {
  theme: "ocean",
  radius: 0.5,
})

export function useConfig() {
  return useAtom(defaultConfig)
}
