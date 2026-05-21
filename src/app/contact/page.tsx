"use client";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, Globe2 } from "lucide-react";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const OfficeCard = ({
  country,
  title,
  address,
  phone,
  email,
  hours,
  mapQuery,
  mapWatermarkSrc,
}: {
  country: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapQuery: string;
  mapWatermarkSrc?: string;
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onClick={() => setIsRevealed(!isRevealed)}
      className={`cursor-pointer lg:cursor-default group relative rounded-[2rem] bg-ibg-navy p-[1px] overflow-hidden transition-all duration-1000 shadow-2xl h-full flex flex-col ${isRevealed ? "max-lg:-translate-y-2 max-lg:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)]" : ""
        } lg:hover:-translate-y-2 lg:hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)]`}
    >
      {/* Subtle Outer Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-br from-ibg-copper/40 via-transparent to-ibg-copper/20 rounded-[2.2rem] blur-xl transition-all duration-1000 ${isRevealed ? "max-lg:opacity-100" : "max-lg:opacity-0"
        } lg:opacity-0 lg:group-hover:opacity-100`}></div>

      {/* Animated Border Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-ibg-copper/50 via-[#0a1526] to-ibg-copper/30 transition-all duration-1000 ${isRevealed ? "max-lg:opacity-100" : "max-lg:opacity-40"
        } lg:opacity-40 lg:group-hover:opacity-100`}></div>

      {/* Inner Card Content */}
      <div className="relative h-full flex-grow bg-gradient-to-br from-[#0a1526]/95 via-[#0c1a30]/95 to-[rgba(212,175,55,0.03)] backdrop-blur-2xl rounded-[calc(2rem-1px)] p-8 sm:p-10 flex flex-col border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">

        {/* Country Map Watermark Image */}
        {mapWatermarkSrc && (
          <div 
            className="absolute inset-0 m-auto w-[80%] h-[80%] opacity-[0.03] pointer-events-none bg-center bg-contain bg-no-repeat z-0" 
            style={{ backgroundImage: `url(${mapWatermarkSrc})` }}
          ></div>
        )}

        {/* Header */}
        <div className="flex justify-between items-start mb-10 relative z-10">
          <div>
            <div className="flex items-center mb-3">
              <span className="text-ibg-copper text-[11px] font-black tracking-[0.2em] uppercase">{country}</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-display font-bold text-white transition-colors duration-700 ${isRevealed ? "max-lg:text-ibg-copper" : ""
              } lg:group-hover:text-ibg-copper`}>{title}</h3>
          </div>
          <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-700 text-ibg-copper ${isRevealed
              ? "max-lg:bg-ibg-copper/10 max-lg:border-ibg-copper/50 max-lg:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              : "max-lg:bg-white/5 max-lg:border-white/10 max-lg:shadow-sm"
            } lg:bg-white/5 lg:border-white/10 lg:shadow-sm lg:group-hover:border-ibg-copper/50 lg:group-hover:bg-ibg-copper/10 lg:group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]`}>
            <Globe2 className="w-6 h-6" />
          </div>
        </div>

        {/* Info List */}
        <div className="space-y-6 flex-grow relative z-10">
          <div className="flex gap-5 items-start group/item">
            <div className={`mt-1 p-2.5 rounded-xl border transition-all duration-700 shrink-0 ${isRevealed ? "max-lg:border-ibg-copper/50 max-lg:bg-ibg-copper/10 max-lg:shadow-[0_0_15px_rgba(212,175,55,0.15)]" : "max-lg:bg-white/5 max-lg:border-white/10 max-lg:shadow-sm"
              } lg:bg-white/5 lg:border-white/10 lg:shadow-sm lg:group-hover/item:border-ibg-copper/50 lg:group-hover/item:bg-ibg-copper/10 lg:group-hover/item:shadow-[0_0_15px_rgba(212,175,55,0.15)]`}>
              <MapPin className="w-5 h-5 text-ibg-copper" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Address</span>
              <p className={`text-[15px] leading-relaxed transition-colors duration-700 ${isRevealed ? "max-lg:text-white" : "max-lg:text-stone-300"
                } lg:text-stone-300 lg:group-hover/item:text-white`}>{address}</p>
            </div>
          </div>

          <div className="flex gap-5 items-center group/item">
            <div className={`p-2.5 rounded-xl border transition-all duration-700 shrink-0 ${isRevealed ? "max-lg:border-ibg-copper/50 max-lg:bg-ibg-copper/10 max-lg:shadow-[0_0_15px_rgba(212,175,55,0.15)]" : "max-lg:bg-white/5 max-lg:border-white/10 max-lg:shadow-sm"
              } lg:bg-white/5 lg:border-white/10 lg:shadow-sm lg:group-hover/item:border-ibg-copper/50 lg:group-hover/item:bg-ibg-copper/10 lg:group-hover/item:shadow-[0_0_15px_rgba(212,175,55,0.15)]`}>
              <Phone className="w-5 h-5 text-ibg-copper" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Phone</span>
              <a onClick={(e) => e.stopPropagation()} href={`tel:${phone.replace(/\s+/g, '')}`} className={`text-[15px] transition-colors duration-700 font-medium ${isRevealed ? "max-lg:text-ibg-copper" : "max-lg:text-stone-300"
                } lg:text-stone-300 lg:hover:text-ibg-copper`}>{phone}</a>
            </div>
          </div>

          <div className="flex gap-5 items-center group/item">
            <div className={`p-2.5 rounded-xl border transition-all duration-700 shrink-0 ${isRevealed ? "max-lg:border-ibg-copper/50 max-lg:bg-ibg-copper/10 max-lg:shadow-[0_0_15px_rgba(212,175,55,0.15)]" : "max-lg:bg-white/5 max-lg:border-white/10 max-lg:shadow-sm"
              } lg:bg-white/5 lg:border-white/10 lg:shadow-sm lg:group-hover/item:border-ibg-copper/50 lg:group-hover/item:bg-ibg-copper/10 lg:group-hover/item:shadow-[0_0_15px_rgba(212,175,55,0.15)]`}>
              <Mail className="w-5 h-5 text-ibg-copper" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Email</span>
              <a onClick={(e) => e.stopPropagation()} href={`mailto:${email}`} className={`text-[15px] transition-colors duration-700 font-medium ${isRevealed ? "max-lg:text-ibg-copper" : "max-lg:text-stone-300"
                } lg:text-stone-300 lg:hover:text-ibg-copper`}>{email}</a>
            </div>
          </div>

          <div className="flex gap-5 items-start group/item">
            <div className={`mt-1 p-2.5 rounded-xl border transition-all duration-700 shrink-0 ${isRevealed ? "max-lg:border-ibg-copper/50 max-lg:bg-ibg-copper/10 max-lg:shadow-[0_0_15px_rgba(212,175,55,0.15)]" : "max-lg:bg-white/5 max-lg:border-white/10 max-lg:shadow-sm"
              } lg:bg-white/5 lg:border-white/10 lg:shadow-sm lg:group-hover/item:border-ibg-copper/50 lg:group-hover/item:bg-ibg-copper/10 lg:group-hover/item:shadow-[0_0_15px_rgba(212,175,55,0.15)]`}>
              <Clock className="w-5 h-5 text-ibg-copper" />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Business Hours</span>
              <p className={`text-[15px] leading-relaxed transition-colors duration-700 ${isRevealed ? "max-lg:text-white" : "max-lg:text-stone-300"
                } lg:text-stone-300 lg:group-hover/item:text-white`}>{hours}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className={`mt-10 h-56 rounded-2xl overflow-hidden relative border transition-all duration-1000 shadow-inner z-10 ${isRevealed ? "max-lg:border-ibg-copper/40" : "max-lg:border-white/10"
          } lg:border-white/10 lg:group-hover:border-ibg-copper/40`}>
          <div className={`absolute inset-0 bg-ibg-navy/50 mix-blend-overlay pointer-events-none transition-opacity duration-1000 z-10 ${isRevealed ? "max-lg:opacity-0" : "max-lg:opacity-100"
            } lg:opacity-100 lg:group-hover:opacity-0`}></div>
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`transition-all duration-1000 ${isRevealed ? "max-lg:grayscale-0 max-lg:opacity-100 max-lg:scale-100" : "max-lg:grayscale max-lg:opacity-75 max-lg:scale-105"
              } lg:grayscale lg:opacity-75 lg:scale-105 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-100`}
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-ibg-gray-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B132B] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">Contact Us</h1>
            <div className="w-24 h-1.5 bg-ibg-copper mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Get in touch with our team for inquiries, quotes, and international logistics partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-slate-200/60 border-t border-slate-200 relative overflow-hidden">
        {/* Decorative background element for form section */}
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-white/40 pointer-events-none rounded-t-[5rem] blur-3xl transform -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-24 sm:gap-32"
          >
            {/* Office Cards Section */}
            <div>
              <div className="text-center mb-16">
                <span className="text-ibg-copper font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Global Presence</span>
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-ibg-navy tracking-tight">Our Offices</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                <OfficeCard
                  country="Malaysia"
                  title="Malaysia Office"
                  address="G-5 Block Melor, Jalan Perusahaan 2 Taman Taming Ria, 43200 Balakong Malaysia"
                  phone="+60 10 412 1786"
                  email="ironbridgeglobal25@gmail.com"
                  hours="Monday - Friday: 9:00 AM - 6:00 PM (PKT)"
                  mapQuery="G-5 Block Melor, Jalan Perusahaan 2 Taman Taming Ria, 43200 Balakong Malaysia"
                  mapWatermarkSrc="/images/maps/malaysiaHigh.svg"
                />

                <OfficeCard
                  country="Pakistan"
                  title="Pakistan Office"
                  address="Office #112 - Street #96, i-8/4, Islamabad, Pakistan"
                  phone="+92 302 1519571"
                  email="ironbridgeglobal25@gmail.com"
                  hours="Monday - Friday: 9:00 AM - 6:00 PM (PKT)"
                  mapQuery="Street 96, I-8/4, Islamabad, Pakistan"
                  mapWatermarkSrc="/images/maps/pakistanHigh.svg"
                />
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div className="text-center mb-16">
                <span className="text-ibg-copper font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Reach Out</span>
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-ibg-navy mb-6 tracking-tight">Send us a message</h2>
                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                  Fill out the form below and our dedicated logistics team will get back to you within 24 hours.
                </p>
              </div>

              <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                <Suspense fallback={<div className="h-[600px] bg-white/50 animate-pulse rounded-[2rem] border border-white shadow-xl"></div>}>
                  <ContactForm />
                </Suspense>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
