import { z } from "zod";

export const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("有効なメールアドレスを入力してください"),
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "お名前は100文字以内で入力してください"),
  content: z
    .string()
    .min(1, "お問い合わせ内容を入力してください")
    .max(1000, "お問い合わせ内容は1000文字以内で入力してください"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;