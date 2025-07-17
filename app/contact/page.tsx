import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { PageDescription } from "@/components/ui/page-description";

export const runtime = "edge";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div>
        <h1 className="text-3xl font-bold text-center mb-2">お問い合わせ</h1>
        <PageDescription>
          お仕事のご依頼・ご相談など、お気軽にお問い合わせください。
        </PageDescription>
      </div>

      <Card>
        <CardContent className="p-6">
          <ContactForm />
        </CardContent>
      </Card>

      <PageDescription className="mt-4">
        通常2〜3営業日以内にご返信いたします。
      </PageDescription>
      <PageDescription>
        お急ぎの場合は、GitHubやTwitter(X)のDMでもご連絡いただけます。
      </PageDescription>
    </div>
  );
}
