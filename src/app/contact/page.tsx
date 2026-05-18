import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="pt-24 bg-ibg-gray-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-ibg-navy py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-ibg-copper mx-auto mb-8"></div>
            <p className="text-xl text-ibg-gray-light max-w-2xl mx-auto">
              Get in touch with our team for inquiries, quotes, and partnerships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form Section */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-display font-bold text-ibg-navy mb-2">Send us a message</h2>
                <p className="text-ibg-gray mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                <Suspense fallback={<div className="h-96 bg-white animate-pulse rounded border border-gray-100"></div>}>
                  <ContactForm />
                </Suspense>
              </ScrollReveal>
            </div>

            {/* Info Section */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded shadow-sm border border-ibg-copper/10 h-full">
                  <h2 className="text-3xl font-display font-bold text-ibg-navy mb-8 border-b border-ibg-gray-light pb-4">Contact Information</h2>

                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-ibg-copper/10 rounded-full flex items-center justify-center text-ibg-copper shrink-0">
                        <MapPin />
                      </div>
                      <div>
                        <h4 className="font-bold text-ibg-navy mb-1">Headquarters</h4>
                        <p className="text-ibg-gray text-sm leading-relaxed">
                          Malaysia
                          <br />
                          <span className="opacity-70 italic">G-5 Block Melor, Jalan Perusahaan 2 Taman Taming Ria,
                            43200 Balakong Malaysia</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-ibg-copper/10 rounded-full flex items-center justify-center text-ibg-copper shrink-0">
                        <Phone />
                      </div>
                      <div>
                        <h4 className="font-bold text-ibg-navy mb-1">Phone</h4>
                        <p className="text-ibg-gray text-sm">
                          +60104121786
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-ibg-copper/10 rounded-full flex items-center justify-center text-ibg-copper shrink-0">
                        <Mail />
                      </div>
                      <div>
                        <h4 className="font-bold text-ibg-navy mb-1">Email</h4>
                        <p className="text-ibg-gray text-sm">
                          ironbridgeglobal25@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-ibg-copper/10 rounded-full flex items-center justify-center text-ibg-copper shrink-0">
                        <Clock />
                      </div>
                      <div>
                        <h4 className="font-bold text-ibg-navy mb-1">Business Hours</h4>
                        <p className="text-ibg-gray text-sm leading-relaxed">
                          Monday - Friday: 9:00 AM - 6:00 PM (PKT)<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="mt-12 h-48 rounded overflow-hidden relative border border-ibg-gray">
                    <iframe
                      src="https://maps.google.com/maps?q=G-5%20Block%20Melor,%20Jalan%20Perusahaan%202%20Taman%20Taming%20Ria,%2043200%20Balakong%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
