import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Enterprises',
      rating: 5,
      text: 'Exceptional service! NJ Finance helped streamline our GST compliance and saved us significant time and penalties. Their professional approach and timely support have been invaluable for our business growth.',
      service: 'GST Compliance'
    },
    {
      name: 'Priya Sharma',
      company: 'Sharma Consultancy',
      rating: 5,
      text: 'The ITR filing service was seamless and professional. Got maximum refunds with proper tax planning. The team is knowledgeable, responsive, and always available for queries.',
      service: 'ITR Filing'
    },
    {
      name: 'Amit Singh',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'From company registration to ongoing compliance, they handled everything efficiently. The business setup consultancy was comprehensive and helped us avoid common pitfalls.',
      service: 'Business Setup'
    },
    {
      name: 'Sunita Gupta',
      company: 'Gupta Traders',
      rating: 5,
      text: 'Outstanding bookkeeping services! Our financial records are now well-organized and audit-ready. The monthly MIS reports provide valuable insights for business decisions.',
      service: 'Bookkeeping'
    },
    {
      name: 'Vikash Agarwal',
      company: 'Agarwal Industries',
      rating: 5,
      text: 'Professional financial planning advice that transformed our business. The cash flow analysis and investment advisory services have significantly improved our profitability.',
      service: 'Financial Advisory'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our professional CA and finance services have helped businesses 
            achieve their financial goals and maintain seamless compliance.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="service-card text-center p-8 md:p-12 animate-scale-in">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-accent fill-current"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Client Info */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold font-playfair text-primary">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].company}
              </p>
              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                {testimonials[currentIndex].service}
              </span>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24hrs</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;