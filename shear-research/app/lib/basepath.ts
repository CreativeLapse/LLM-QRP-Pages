export const basePath = process.env.NODE_ENV === "production" ? "/SHEAR-Research" : ""

export const basePathForOutput = "/SHEAR-Research"

export function withBasePath(path: string): string {
  return `${basePath}${path}`
}
