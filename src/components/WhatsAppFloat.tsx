import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the WhatsApp button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first time users
      const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem('whatsapp-tooltip-seen', 'true');
        }, 3000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your CA and Finance services. Could you please provide more information?"
    );
    window.open(`https://wa.me/917827401396?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-32 right-8 z-40 animate-scale-in">
          <div className="bg-card border border-border rounded-lg p-4 shadow-finance max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h4 className="font-semibold text-sm mb-1">Need Quick Help?</h4>
              <p className="text-xs text-muted-foreground">
                Chat with us on WhatsApp for instant support and consultation!
              </p>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-finance-hover group animate-bounce"
        style={{ 
          backgroundColor: '#25D366',
          animationDuration: '2s',
          animationIterationCount: '3'
        }}
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
      </Button>
    </>
  );
};

export default WhatsAppFloat;