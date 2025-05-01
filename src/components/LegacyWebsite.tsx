import React, { useEffect } from 'react';

// Import legacy components
import HeroSection from '../legacy_website/components/sections/hero-section';
import ProblemSection from '../legacy_website/components/sections/problem-section';
import HowItWorksSection from '../legacy_website/components/sections/how-it-works-section';
import ProductTeaserSection from '../legacy_website/components/sections/product-teaser-section';
import ExclusiveAccessSection from '../legacy_website/components/sections/exclusive-access-section';
import FaqSection from '../legacy_website/components/sections/faq-section';
import FinalCtaSection from '../legacy_website/components/sections/final-cta-section';
import NavigationBar from '../legacy_website/components/navigation-bar';
import ParticleBackground from '../legacy_website/components/particle-background';
import NotificationSystem from '../legacy_website/components/notification-system';

// Import legacy services and utilities
import { initAnalytics, trackEvent } from '../legacy_website/utils/analyticsService';
import notificationService from '../legacy_website/services/notificationService';

// Import legacy styles
import '../legacy_website/index.css';

const LegacyWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('hero');
  
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  
  // Initialize services on component mount
  useEffect(() => {
    // Initialize analytics
    initAnalytics();
    
    // Track page view
    trackEvent('app_initialized', {
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
    
    // Show welcome notification (for demonstration)
    setTimeout(() => {
      notificationService.info(
        'Welcome to CRED-ABILITY! Explore our revolutionary credential management system.',
        'Welcome'
      );
    }, 2000);
    
    // Add scroll position tracker for analytics
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, and 100% scroll depth
      if (scrollPercentage === 25 || scrollPercentage === 50 || 
          scrollPercentage === 75 || scrollPercentage === 100) {
        trackEvent('scroll_depth', { depth: scrollPercentage });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle form submission
  const handleAccessRequest = (formData: any) => {
    console.log('Access request submitted:', formData.fullName);
    // Note: actual submission is handled in the component
  };
  
  return (
    <div className="relative bg-slate-950 min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Notification System */}
      <NotificationSystem />
      
      {/* Top Navigation */}
      <NavigationBar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* All sections */}
        <HeroSection isActive={true} />
        <ProblemSection isActive={true} />
        <HowItWorksSection isActive={true} />
        <ProductTeaserSection isActive={true} />
        <ExclusiveAccessSection isActive={true} onRequestAccess={handleAccessRequest} />
        <FaqSection isActive={true} />
        <FinalCtaSection
          isActive={true}
          onGetStarted={() => console.log('Get Started clicked')}
        />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} CRED-ABILITY, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-white/60 hover:text-white/90 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white/60 hover:text-white/90 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-white/60 hover:text-white/90 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-white/50 text-xs">
            <p>CRED-ABILITY is a registered trademark. Patent pending.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyWebsite;