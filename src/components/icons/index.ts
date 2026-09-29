import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import ArrowRight from "./ArrowRight.vue"
import Check from "./Check.vue"
import ChevronDown from "./ChevronDown.vue"
import Facebook from "./Facebook.vue"
import Instagram from "./Instagram.vue"
import Linkedin from "./Linkedin.vue"
import Menu from "./Menu.vue"
import XIcon from "./XIcon.vue"

const iconComponents = {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
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
