import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  FileText,
  Calculator,
  Building2,
  TrendingUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'ITR Filing', href: '#services' },
    { name: 'GST Services', href: '#services' },
    { name: 'Business Setup', href: '#services' },
    { name: 'ROC Compliance', href: '#services' }
  ];

  const services = [
    { name: 'Bookkeeping', href: '#services', icon: Calculator },
    { name: 'MSME Registration', href: '#services', icon: Building2 },
    { name: 'Financial Planning', href: '#services', icon: TrendingUp },
    { name: 'E-Invoicing', href: '#services', icon: FileText }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-finance flex items-center justify-center">
                <span className="text-white font-bold text-xl font-playfair">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair text-white">
                  NJ Finance & Tax
                </h3>
                <p className="text-sm text-background/70">Chartered Accountant</p>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Professional CA services with personalized attention. 
              Your trusted partner for all taxation, compliance, 
              and financial advisory needs.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-background group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-background group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/917827401396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-background group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-playfair text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-playfair text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-background/80 hover:text-white transition-colors flex items-center group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-primary group-hover:text-white transition-colors" />
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-playfair text-white mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+91 7827401396</p>
                  <p className="text-background/70 text-sm">Mon - Sat, 9 AM - 7 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">njha2776@gmail.com</p>
                  <p className="text-background/70 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Jalpura, Greater Noida</p>
                  <p className="text-background/70 text-sm">UP 201306, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © {currentYear} NJ Finance & Tax. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-background/70 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Professional Disclaimer */}
          <div className="mt-6 pt-6 border-t border-background/10">
            <p className="text-background/60 text-xs leading-relaxed max-w-4xl">
              <strong>Professional Disclaimer:</strong> NJ Finance & Tax is a qualified Chartered Accountancy practice. 
              All services are provided in accordance with professional standards and regulatory requirements. 
              Tax advice is subject to changes in legislation. Please consult for specific situations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;