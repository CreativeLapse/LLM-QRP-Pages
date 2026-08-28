export const basePath = process.env.NODE_ENV === "production" ? "/LLM-QRP-Pages" : ""

export function withBasePath(path: string): string {
  return `${basePath}${path}`
}
