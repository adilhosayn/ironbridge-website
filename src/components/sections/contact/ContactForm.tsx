"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { services } from "@/data/services";
import { useSearchParams } from "next/navigation";

export const ContactForm = () => {
  // Replace "your-formspree-id" with the actual ID once available
  const [state, handleSubmit] = useForm("your-formspree-id");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  if (state.succeeded) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
        <p>Thank you for reaching out to IronBridge Global. We will get back to you shortly.</p>
      </div>
    );
  }

  const InputWrapper = ({ name, label, children }: { name: string, label: string, children: React.ReactNode }) => {
    const isFocused = focusedField === name;
    
    return (
      <div className="relative mb-6">
        <div className={cn(
          "absolute -top-2.5 left-3 px-1 text-xs font-medium bg-white transition-colors z-10",
          isFocused ? "text-ibg-copper" : "text-ibg-gray"
        )}>
          {label}
        </div>
        {children}
        <ValidationError prefix={label} field={name} errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-sm border border-ibg-gray-light">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <InputWrapper name="name" label="Full Name">
          <input
            id="name"
            type="text"
            name="name"
            required
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text"
          />
        </InputWrapper>

        <InputWrapper name="company" label="Company Name">
          <input
            id="company"
            type="text"
            name="company"
            onFocus={() => setFocusedField("company")}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text"
          />
        </InputWrapper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <InputWrapper name="email" label="Email Address">
          <input
            id="email"
            type="email"
            name="email"
            required
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text"
          />
        </InputWrapper>

        <InputWrapper name="phone" label="Phone Number">
          <input
            id="phone"
            type="tel"
            name="phone"
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text"
          />
        </InputWrapper>
      </div>

      <InputWrapper name="service" label="Service of Interest">
        <select
          id="service"
          name="service"
          defaultValue={defaultService}
          onFocus={() => setFocusedField("service")}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text appearance-none"
        >
          <option value="">General Inquiry</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
      </InputWrapper>

      <InputWrapper name="message" label="Your Message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-3 bg-transparent border border-ibg-gray-light rounded outline-none transition-colors focus:border-ibg-copper text-ibg-text resize-none"
        ></textarea>
      </InputWrapper>

      <Button
        type="submit"
        disabled={state.submitting}
        fullWidth
        className="mt-4"
      >
        {state.submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : "Send Message"}
      </Button>
    </form>
  );
};
