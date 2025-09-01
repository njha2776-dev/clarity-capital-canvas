import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Qualified Chartered Accountant with professional certification and continuous education'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated support with one-on-one consultations tailored to your business needs'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Quick turnaround times ensuring all deadlines are met without compromising quality'
    },
    {
      icon: Shield,
      title: 'Complete Trust',
      description: 'Confidential handling of all financial information with transparent communication'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About Our Practice
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Your Trusted <span className="gradient-text">Financial Partner</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to NJ Finance & Tax, your comprehensive solution for all taxation, 
                compliance, and financial advisory needs. As a qualified Chartered Accountant, 
                I provide professional services with a personal touch.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in the finance and taxation domain, 
                I specialize in helping businesses and individuals navigate complex 
                financial regulations while maximizing their growth potential.
              </p>
            </div>

            {/* Professional Highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Chartered Accountant (CA) with professional certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Specialized in Tax Planning & Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Expert in Business Setup & ROC Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground">Financial Advisory & Strategic Planning</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="service-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-finance flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-playfair mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;