import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Please enter minimum 3 charecters" })
    .max(20, { message: "Please enter within 20 charecters" }),

  lastName: z
    .string()
    .min(3, { message: "Please enter minimum 3 charecters" })
    .max(20, { message: "Please enter within 20 charecters" }),

  email: z.string().email({ message: "Please enter Valid Email addrees" }),

  phnNo: z.string().min(10, { message: "Please enter Valid Phone No." }),

  service: z.string(),
});
