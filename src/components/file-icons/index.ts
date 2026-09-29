import { kebabize } from "@/utils"
import type { TKebabKeys } from "../types"
import FileDocument from "./Document.vue"
import FileImage from "./Image.vue"
import FilePdf from "./Pdf.vue"

const iconComponents = {
  FileDocument,
  FileImage,
  FilePdf,
}

export default iconComponents

const iconNames = Object.keys(iconComponents)
const icons = iconNames.reduce((obj: Record<string, unknown>, name: string) => {
  obj[kebabize(name)] = (iconComponents as Record<string, unknown>)[name]
  return obj
}, {})

export type TFileIcons = keyof TKebabKeys<typeof iconComponents>;

export const FILE_ICONS = { ...icons }
