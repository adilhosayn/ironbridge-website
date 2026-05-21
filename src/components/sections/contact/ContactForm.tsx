"use client";

import { useForm, ValidationError } from "@formspree/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { services } from "@/data/services";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const InputWrapper = ({ 
  name, 
  label, 
  errors, 
  children 
}: { 
  name: string, 
  label: string, 
  errors: any,
  children: React.ReactNode 
}) => {
  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor={name} className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-2">
        {label}
      </label>
      <div className="relative group">
        {children}
      </div>
      <ValidationError prefix={label} field={name} errors={errors} className="text-red-500 text-sm mt-2 ml-2 font-medium" />
    </div>
  );
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzdwbkbl");
  
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50/80 backdrop-blur-xl text-green-800 p-12 rounded-[2rem] border border-green-200 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-display font-bold mb-3 text-green-900">Message Sent!</h3>
        <p className="text-lg text-green-700">Thank you for reaching out to IronBridge Global. We will get back to you shortly.</p>
      </motion.div>
    );
  }

  const inputClasses = "w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none transition-all duration-300 focus:bg-white focus:border-ibg-copper focus:ring-4 focus:ring-ibg-copper/15 hover:border-slate-300 text-slate-800 shadow-sm placeholder:text-slate-400 font-medium text-[15px]";

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
      {/* Subtle background flair */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ibg-copper/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 relative z-10">
        <InputWrapper name="name" label="Full Name" errors={state.errors}>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className={inputClasses}
          />
        </InputWrapper>

        <InputWrapper name="company" label="Company Name" errors={state.errors}>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Your Company Ltd."
            className={inputClasses}
          />
        </InputWrapper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 relative z-10">
        <InputWrapper name="email" label="Email Address" errors={state.errors}>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className={inputClasses}
          />
        </InputWrapper>

        <InputWrapper name="phone" label="Phone Number" errors={state.errors}>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className={inputClasses}
          />
        </InputWrapper>
      </div>

      <div className="relative z-10">
        <InputWrapper name="service" label="Service of Interest" errors={state.errors}>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className={cn(inputClasses, "appearance-none cursor-pointer")}
          >
            <option value="">General Inquiry</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
          {/* Custom Select Arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </InputWrapper>
      </div>

      <div className="relative z-10">
        <InputWrapper name="message" label="Your Message" errors={state.errors}>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="How can we help you?"
            className={cn(inputClasses, "resize-none")}
          ></textarea>
        </InputWrapper>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full mt-6 bg-gradient-to-r from-[#d4af37] to-[#aa8822] hover:from-[#aa8822] hover:to-[#d4af37] text-white font-bold text-lg py-5 px-8 rounded-2xl shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative z-10"
      >
        {state.submitting ? (
          <>
            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending Message...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};
