import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import AccountSetting from "./AccountSetting.vue"
import AppNetwork from "./AppNetwork.vue"
import ArrowRight from "./ArrowRight.vue"
import ArrowsCycle from "./ArrowsCycle.vue"
import BadgeBlob from "./BadgeBlob.vue"
import BadgeCircle from "./BadgeCircle.vue"
import BadgeDiamond from "./BadgeDiamond.vue"
import BadgeOctagon from "./BadgeOctagon.vue"
import BadgePentagon from "./BadgePentagon.vue"
import BadgeSquircle from "./BadgeSquircle.vue"
import Banknote from "./Banknote.vue"
import Blocks from "./Blocks.vue"
import Building from "./Building.vue"
import Calculator from "./Calculator.vue"
import ChartGrowth from "./ChartGrowth.vue"
import ChartPie from "./ChartPie.vue"
import Check from "./Check.vue"
import ChevronDown from "./ChevronDown.vue"
import ChevronLeft from "./ChevronLeft.vue"
import Clipboard from "./Clipboard.vue"
import Clock from "./Clock.vue"
import CloudUpload from "./CloudUpload.vue"
import CodeWindow from "./CodeWindow.vue"
import Coins from "./Coins.vue"
import CoinsStack from "./CoinsStack.vue"
import CreditCard from "./CreditCard.vue"
import CursorClick from "./CursorClick.vue"
import CursorEdit from "./CursorEdit.vue"
import Database from "./Database.vue"
import DocumentSigned from "./DocumentSigned.vue"
import Envelope from "./Envelope.vue"
import Facebook from "./Facebook.vue"
import Factory from "./Factory.vue"
import Gamepad from "./Gamepad.vue"
import Gem from "./Gem.vue"
import Globe from "./Globe.vue"
import HeadThinking from "./HeadThinking.vue"
import Headset from "./Headset.vue"
import Hexagon from "./Hexagon.vue"
import Instagram from "./Instagram.vue"
import Invoice from "./Invoice.vue"
import Kanban from "./Kanban.vue"
import LaptopCode from "./LaptopCode.vue"
import Link from "./Link.vue"
import Linkedin from "./Linkedin.vue"
import Location from "./Location.vue"
import Mail from "./Mail.vue"
import Megaphone from "./Megaphone.vue"
import Menu from "./Menu.vue"
import Modules from "./Modules.vue"
import Network from "./Network.vue"
import PenLine from "./PenLine.vue"
import Quote from "./Quote.vue"
import Receipt from "./Receipt.vue"
import SearchChart from "./SearchChart.vue"
import ServerShield from "./ServerShield.vue"
import ShareNodes from "./ShareNodes.vue"
import ShieldCheck from "./ShieldCheck.vue"
import ShoppingCart from "./ShoppingCart.vue"
import Smartphone from "./Smartphone.vue"
import Sprout from "./Sprout.vue"
import Star from "./Star.vue"
import Telephone from "./Telephone.vue"
import TimeQuarterPass from "./TimeQuarterPass.vue"
import Truck from "./Truck.vue"
import User from "./User.vue"
import UserMultiple from "./UserMultiple.vue"
import Users from "./Users.vue"
import UserShield from "./UserShield.vue"
import XIcon from "./XIcon.vue"

const iconComponents = {
  AccountSetting,
  AppNetwork,
  ArrowRight,
  ArrowsCycle,
  BadgeBlob,
  BadgeCircle,
  BadgeDiamond,
  BadgeOctagon,
  BadgePentagon,
  BadgeSquircle,
  Banknote,
  Blocks,
  Building,
  Calculator,
  ChartGrowth,
  ChartPie,
  Check,
  ChevronDown,
  ChevronLeft,
  Clipboard,
  Clock,
  CloudUpload,
  CodeWindow,
  Coins,
  CoinsStack,
  CreditCard,
  CursorClick,
  CursorEdit,
  Database,
  DocumentSigned,
  Envelope,
  Facebook,
  Factory,
  Gamepad,
  Gem,
  Globe,
  HeadThinking,
  Headset,
  Hexagon,
  Instagram,
  Invoice,
  Kanban,
  LaptopCode,
  Link,
  Linkedin,
  Location,
  Mail,
  Megaphone,
  Menu,
  Modules,
  Network,
  PenLine,
  Quote,
  Receipt,
  SearchChart,
  ServerShield,
  ShareNodes,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Star,
  Telephone,
  TimeQuarterPass,
  Truck,
  User,
  UserMultiple,
  Users,
  UserShield,
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
