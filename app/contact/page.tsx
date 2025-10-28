import Navigation from "@/components/navigation"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hubungi Saya</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Punya proyek dalam pikiran atau ingin berkolaborasi? Saya ingin mendengar dari Anda. Isi formulir di bawah
            ini dan saya akan menghubungi Anda sesegera mungkin.
          </p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
