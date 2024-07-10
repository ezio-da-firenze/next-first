import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Content at least 10 characters" })
        .max(10, { message: "Content at max 300 characters" }),
});
