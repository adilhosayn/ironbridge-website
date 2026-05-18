import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-ibg-navy pt-20 pb-10 border-t border-ibg-copper/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-40 h-24 flex items-center justify-start">
                <Image
                  src="/logo.png"
                  alt="IronBridge Global Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-ibg-gray max-w-sm mt-2 leading-relaxed">
              Bridging global markets with local demand. Specialized in scrap trading, industrial supply, and international sourcing.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-ibg-navy-light flex items-center justify-center text-ibg-copper hover:bg-ibg-copper hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ibg-navy-light flex items-center justify-center text-ibg-copper hover:bg-ibg-copper hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ibg-navy-light flex items-center justify-center text-ibg-copper hover:bg-ibg-copper hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-display font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-ibg-copper"></span>
            </h3>
            <ul className="flex flex-col gap-4 mt-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-ibg-gray hover:text-ibg-copper-light transition-colors relative group inline-block"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-ibg-copper transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-display font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-ibg-copper"></span>
            </h3>
            <ul className="flex flex-col gap-5 mt-2">
              <li className="flex items-start gap-4 text-ibg-gray">
                <MapPin className="w-6 h-6 text-ibg-copper shrink-0 mt-0.5" />
                <span>Headquarters<br />Malaysia & Pakistan</span>
              </li>
              <li className="flex items-center gap-4 text-ibg-gray">
                <Phone className="w-6 h-6 text-ibg-copper shrink-0" />
                <span>+92-302-1519571</span>

              </li>
              <li className="flex items-center gap-4 text-ibg-gray">
                <Mail className="w-6 h-6 text-ibg-copper shrink-0" />
                <span>ironbridgeglobal25@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ibg-navy-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ibg-gray">
            &copy; {new Date().getFullYear()} IronBridge Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-ibg-gray">
            <span className="flex items-center gap-2">
              Made in Pakistan <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            </span>
            <Link href="/privacy" className="hover:text-ibg-copper transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
