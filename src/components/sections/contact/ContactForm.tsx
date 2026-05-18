"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { services } from "@/data/services";
import { useSearchParams } from "next/navigation";

// 1. Moved InputWrapper OUTSIDE the main component
const InputWrapper = ({ 
  name, 
  label, 
  isFocused, 
  errors, 
  children 
}: { 
  name: string, 
  label: string, 
  isFocused: boolean,
  errors: any,
  children: React.ReactNode 
}) => {
  return (
    <div className="relative mb-6">
      <div className={cn(
        "absolute -top-2.5 left-3 px-1 text-xs font-medium bg-white transition-colors z-10",
        isFocused ? "text-ibg-copper" : "text-ibg-gray"
      )}>
        {label}
      </div>
      {children}
      <ValidationError prefix={label} field={name} errors={errors} className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzdwbkbl");
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

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-sm border border-ibg-gray-light">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        {/* 2. Passed isFocused and errors as props to the wrapper */}
        <InputWrapper 
          name="name" 
          label="Full Name" 
          isFocused={focusedField === "name"} 
          errors={state.errors}
        >
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

        <InputWrapper 
          name="company" 
          label="Company Name" 
          isFocused={focusedField === "company"} 
          errors={state.errors}
        >
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
        <InputWrapper 
          name="email" 
          label="Email Address" 
          isFocused={focusedField === "email"} 
          errors={state.errors}
        >
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

        <InputWrapper 
          name="phone" 
          label="Phone Number" 
          isFocused={focusedField === "phone"} 
          errors={state.errors}
        >
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

      <InputWrapper 
        name="service" 
        label="Service of Interest" 
        isFocused={focusedField === "service"} 
        errors={state.errors}
      >
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

      <InputWrapper 
        name="message" 
        label="Your Message" 
        isFocused={focusedField === "message"} 
        errors={state.errors}
      >
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
