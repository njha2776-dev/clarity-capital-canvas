import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7827401396',
      action: 'tel:+917827401396',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'njha2776@gmail.com',
      action: 'mailto:njha2776@gmail.com',
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Jalpura, Greater Noida, UP 201306',
      action: 'https://maps.google.com/?q=Jalpura,Greater+Noida,UP+201306',
      description: 'Visit our office for consultation'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      action: '',
      description: 'Sunday by appointment only'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready to <span className="gradient-text">Transform Your Finances?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your financial goals and create a customized solution 
            that drives your business forward. Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="service-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-finance flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-playfair mb-1">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : '_self'}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.details}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <Card className="service-card">
              <h3 className="font-semibold font-playfair mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full btn-hero text-left justify-start"
                  onClick={() => window.open('https://wa.me/917827401396?text=Hello, I would like to inquire about your CA services.', '_blank')}
                >
                  WhatsApp Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="w-full text-left justify-start"
                  onClick={() => window.open('tel:+917827401396', '_self')}
                >
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="service-card animate-fade-in">
              <h3 className="text-2xl font-bold font-playfair mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirements or questions..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="service-card mt-8 animate-fade-in">
              <h3 className="text-xl font-bold font-playfair mb-4">Our Location</h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Jalpura, Greater Noida</p>
                  <p className="text-sm">Uttar Pradesh 201306</p>
                  <Button 
                    variant="link" 
                    className="mt-2"
                    onClick={() => window.open('https://maps.google.com/?q=Jalpura,Greater+Noida,UP+201306', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;