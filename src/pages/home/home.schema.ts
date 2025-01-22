import { z } from "zod"

export const SearchVerbeteSchema = z.object({
  query: z.string()
})

export type SearchVerbeteSchemaType = z.infer<typeof SearchVerbeteSchema>