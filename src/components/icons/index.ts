import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import ArrowRight from "./ArrowRight.vue"
import Check from "./Check.vue"
import ChevronDown from "./ChevronDown.vue"
import XIcon from "./XIcon.vue"

const iconComponents = {
  ArrowRight,
  Check,
  ChevronDown,
  XIcon,
}

export default iconComponents

const iconNames = Object.keys(iconComponents)
const icons = iconNames.reduce((obj: Record<string, unknown>, name: string) => {
  obj[kebabize(name)] = (iconComponents as Record<string, unknown>)[name]
  return obj
}, {})

export type TIcons = keyof TKebabKeys<typeof iconComponents>;

export const ICONS = { ...icons }
