import React from 'react';
import { ArrowRight, Calculator, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-finance.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-finance opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>
        <Calculator className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <FileText className="w-12 h-12 text-secondary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-14 h-14 text-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Chartered Accountant & Finance Expert
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              <span className="gradient-text">Simplifying Taxes,</span><br />
              <span className="text-foreground">Empowering Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Professional tax consultancy, compliance solutions, and financial advisory services 
              to help your business thrive. Get expert CA services with personalized attention 
              and complete transparency.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              className="btn-hero group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="btn-outline-hero"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="animate-slide-up">
          <div className="relative">
            <div className="absolute inset-0 gradient-finance rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
            <img
              src={heroImage}
              alt="Professional Finance and Tax Consultancy Services"
              className="relative rounded-2xl shadow-finance-hover w-full h-auto max-w-lg mx-auto"
            />
            
            {/* Floating Info Cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-border/50 rounded-lg p-4 shadow-finance animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Expert CA Services</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 rounded-lg p-4 shadow-finance animate-scale-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">100% Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;