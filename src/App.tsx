import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RainbowButton } from '@/src/components/ui/rainbow-button';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/src/components/Logo';
import { LoadingSpinner } from '@/src/components/ui/loading-spinner';
import { Page } from '@/src/types';

// Lazy load pages for performance
const HomePage = React.lazy(() => import('@/src/pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = React.lazy(() => import('@/src/pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const AboutPage = React.lazy(() => import('@/src/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ResultsPage = React.lazy(() => import('@/src/pages/ResultsPage').then(module => ({ default: module.ResultsPage })));
const FAQPage = React.lazy(() => import('@/src/pages/FAQPage').then(module => ({ default: module.FAQPage })));

const BOOKING_URL = "https://cal.com/monder/quick-chat";

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background glass effect threshold
      setIsScrolled(currentScrollY > 20);
      
      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Results', value: 'results' },
    { label: 'FAQ', value: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 bg-white/5 backdrop-blur-lg' : 'py-4 bg-transparent'} ${isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <Logo iconSize="w-6 h-6" textSize="text-lg" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setPage(item.value)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${currentPage === item.value ? 'text-brand-primary' : 'text-white/60'}`}
            >
              {item.label}
            </button>
          ))}
          <RainbowButton 
            onClick={() => setPage('home')}
            className="h-9 px-5 text-xs"
          >
            Book Call
          </RainbowButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setPage(item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${currentPage === item.value ? 'text-brand-primary' : 'text-white/60'}`}
                >
                  {item.label}
                </button>
              ))}
              <RainbowButton 
                className="w-full mt-4" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open(BOOKING_URL, '_blank');
                }}
              >
                Book Your Strategy Call
              </RainbowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <Logo iconSize="w-7 h-7" textSize="text-2xl" className="mb-6" />
        <p className="text-white/40 max-w-md leading-relaxed">
          The future of B2B client acquisition. We engineer AI-powered revenue engines that replace fragmented stacks with predictable, scalable growth systems.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/20 mb-6">Solutions</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li className="hover:text-brand-primary cursor-pointer">Outbound AI Engine</li>
          <li className="hover:text-brand-primary cursor-pointer">AI Caller (Inbound)</li>
          <li className="hover:text-brand-primary cursor-pointer">Proprietary AI CRM</li>
          <li className="hover:text-brand-primary cursor-pointer">Dashboard Analytics</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/20 mb-6">Company</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li className="hover:text-brand-primary cursor-pointer">About Us</li>
          <li className="hover:text-brand-primary cursor-pointer" onClick={() => window.open("https://casestudies.advmedia.online/", '_blank')}>Case Studies</li>
          <li className="hover:text-brand-primary cursor-pointer">FAQ</li>
          <li className="hover:text-brand-primary cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-white/20">© 2024 Adventure Media Systems. All rights reserved.</p>
      <div className="flex gap-6 text-xs text-white/20">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="xl" text="Loading..." />
              </div>
            }>
              {page === 'home' && <HomePage setPage={setPage} />}
              {page === 'services' && <ServicesPage />}
              {page === 'about' && <AboutPage />}
              {page === 'results' && <ResultsPage />}
              {page === 'faq' && <FAQPage />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
