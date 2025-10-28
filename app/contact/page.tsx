import Navigation from "@/components/navigation"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form below and I'll
            get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
