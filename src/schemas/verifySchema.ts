import { z } from "zod";

export const verifySchema = z.object({
    code: z.string().min(6, { message: "At least 6 digits" }),
});
