import { ContactForm } from "@/components/contact/ContactForm";
import { BorderedContainer } from "@/components/ui/bordered-container";

export const runtime = 'edge'; 

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">お問い合わせ</h1>
        <p className="text-gray-600 text-center">
          お仕事のご依頼・ご相談など、お気軽にお問い合わせください。
        </p>
      </div>
      
      <BorderedContainer>
        <ContactForm />
      </BorderedContainer>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>通常2〜3営業日以内にご返信いたします。</p>
        <p className="mt-2">
          お急ぎの場合は、GitHubやTwitter(X)のDMでもご連絡いただけます。
        </p>
      </div>
    </div>
  );
}