import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import AppNetwork from "./AppNetwork.vue"
import ArrowRight from "./ArrowRight.vue"
import Blocks from "./Blocks.vue"
import ChartGrowth from "./ChartGrowth.vue"
import ChartPie from "./ChartPie.vue"
import Check from "./Check.vue"
import ChevronDown from "./ChevronDown.vue"
import CloudUpload from "./CloudUpload.vue"
import CodeWindow from "./CodeWindow.vue"
import Coins from "./Coins.vue"
import CursorClick from "./CursorClick.vue"
import Database from "./Database.vue"
import DocumentSigned from "./DocumentSigned.vue"
import Envelope from "./Envelope.vue"
import Facebook from "./Facebook.vue"
import Gamepad from "./Gamepad.vue"
import Globe from "./Globe.vue"
import HeadThinking from "./HeadThinking.vue"
import Hexagon from "./Hexagon.vue"
import Instagram from "./Instagram.vue"
import LaptopCode from "./LaptopCode.vue"
import Link from "./Link.vue"
import Linkedin from "./Linkedin.vue"
import Megaphone from "./Megaphone.vue"
import Menu from "./Menu.vue"
import Modules from "./Modules.vue"
import PenLine from "./PenLine.vue"
import Quote from "./Quote.vue"
import SearchChart from "./SearchChart.vue"
import ServerShield from "./ServerShield.vue"
import ShareNodes from "./ShareNodes.vue"
import Smartphone from "./Smartphone.vue"
import Star from "./Star.vue"
import Truck from "./Truck.vue"
import XIcon from "./XIcon.vue"

const iconComponents = {
  AppNetwork,
  ArrowRight,
  Blocks,
  ChartGrowth,
  ChartPie,
  Check,
  ChevronDown,
  CloudUpload,
  CodeWindow,
  Coins,
  CursorClick,
  Database,
  DocumentSigned,
  Envelope,
  Facebook,
  Gamepad,
  Globe,
  HeadThinking,
  Hexagon,
  Instagram,
  LaptopCode,
  Link,
  Linkedin,
  Megaphone,
  Menu,
  Modules,
  PenLine,
  Quote,
  SearchChart,
  ServerShield,
  ShareNodes,
  Smartphone,
  Star,
  Truck,
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
