import React from 'react';
import { 
  FileText, 
  Calculator, 
  Building2, 
  ClipboardList, 
  Receipt, 
  CreditCard,
  Briefcase,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'ITR Filing',
      description: 'Comprehensive income tax return filing for individuals and businesses with maximum refunds',
      features: ['Individual ITR', 'Business Returns', 'Tax Optimization', 'Refund Processing']
    },
    {
      icon: Calculator,
      title: 'GST Services',
      description: 'Complete GST registration, filing, and compliance management for seamless operations',
      features: ['GST Registration', 'Monthly Returns', 'Input Credit', 'Compliance Check']
    },
    {
      icon: ClipboardList,
      title: 'Bookkeeping & Accounting',
      description: 'Professional accounting services to maintain accurate financial records and statements',
      features: ['Books of Accounts', 'Financial Statements', 'MIS Reports', 'Audit Support']
    },
    {
      icon: Building2,
      title: 'MSME Registration',
      description: 'Quick MSME registration to avail government benefits and business opportunities',
      features: ['Udyam Registration', 'Benefits Guidance', 'Documentation', 'Renewal Support']
    },
    {
      icon: Receipt,
      title: 'E-Invoicing & E-way Bill',
      description: 'Digital compliance solutions for modern business transaction management',
      features: ['E-Invoice Setup', 'E-way Bill', 'Portal Management', 'Compliance Updates']
    },
    {
      icon: CreditCard,
      title: 'TDS & TCS Work',
      description: 'Complete TDS/TCS compliance including returns, certificates, and reconciliation',
      features: ['TDS Returns', 'TCS Filing', 'Certificates', 'Reconciliation']
    },
    {
      icon: Briefcase,
      title: 'Business Setup Consultancy',
      description: 'End-to-end business incorporation services for companies, LLPs, and startups',
      features: ['Company Registration', 'LLP Formation', 'Startup Support', 'Legal Compliance']
    },
    {
      icon: Shield,
      title: 'ROC Compliance',
      description: 'Regulatory compliance management for companies with ROC requirements',
      features: ['Annual Filing', 'Board Resolutions', 'Statutory Updates', 'Penalty Avoidance']
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning & Advisory',
      description: 'Strategic financial planning and advisory services for business growth',
      features: ['Business Planning', 'Cash Flow Analysis', 'Investment Advisory', 'Growth Strategy']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Comprehensive <span className="gradient-text">CA & Finance Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From tax filing to business setup, we provide complete financial and compliance 
            services tailored to your specific needs with professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="service-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl gradient-finance flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold font-playfair mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center gradient-finance-subtle rounded-2xl p-12 animate-fade-in">
          <h3 className="text-2xl font-bold font-playfair mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and 
            create a tailored financial solution that fits your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://wa.me/917827401396', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;