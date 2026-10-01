import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import ArrowRight from "./ArrowRight.vue"
import Blocks from "./Blocks.vue"
import ChartGrowth from "./ChartGrowth.vue"
import Check from "./Check.vue"
import ChevronDown from "./ChevronDown.vue"
import CodeWindow from "./CodeWindow.vue"
import Database from "./Database.vue"
import Facebook from "./Facebook.vue"
import Gamepad from "./Gamepad.vue"
import Globe from "./Globe.vue"
import HeadThinking from "./HeadThinking.vue"
import Hexagon from "./Hexagon.vue"
import Instagram from "./Instagram.vue"
import LaptopCode from "./LaptopCode.vue"
import Linkedin from "./Linkedin.vue"
import Megaphone from "./Megaphone.vue"
import Menu from "./Menu.vue"
import Modules from "./Modules.vue"
import Quote from "./Quote.vue"
import ServerShield from "./ServerShield.vue"
import Smartphone from "./Smartphone.vue"
import Star from "./Star.vue"
import XIcon from "./XIcon.vue"

const iconComponents = {
  ArrowRight,
  Blocks,
  ChartGrowth,
  Check,
  ChevronDown,
  CodeWindow,
  Database,
  Facebook,
  Gamepad,
  Globe,
  HeadThinking,
  Hexagon,
  Instagram,
  LaptopCode,
  Linkedin,
  Megaphone,
  Menu,
  Modules,
  Quote,
  ServerShield,
  Smartphone,
  Star,
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
