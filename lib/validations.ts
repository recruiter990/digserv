import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  businessName: z.string().min(2, "Business/Organization name is required"),
  businessType: z.enum(["student", "professional", "business", "other"], {
    required_error: "Please select a business type",
  }),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  budget: z.enum(["<500", "500-1000", "1000-2000", ">2000"]).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

