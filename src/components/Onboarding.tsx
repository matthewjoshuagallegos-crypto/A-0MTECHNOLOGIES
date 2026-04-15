/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel, Samsung, Android
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Gamepad2, ShoppingBag, ArrowRight, Check } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const steps = [
  {
    title: "Welcome to A#0M",
    description: "Your gateway to the artisan guild. Trade, invest, and build the future.",
    icon: Zap,
  },
  {
    title: "Gaming Host Network",
    description: "Host high-performance gaming nodes and play directly on the A#0M network.",
    icon: Gamepad2,
  },
  {
    title: "Asset Trading",
    description: "Discover, trade, and invest in verified A#0M assets and commodities.",
    icon: ShoppingBag,
  }
];

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border p-8 rounded-3xl max-w-lg w-full text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              {React.createElement(steps[currentStep].icon, { className: "w-10 h-10 text-accent" })}
            </div>
            <h2 className="text-3xl font-display italic tracking-tighter mb-4">{steps[currentStep].title}</h2>
            <p className="text-text-secondary mb-8">{steps[currentStep].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === currentStep ? 'bg-accent' : 'bg-border'}`} />
            ))}
          </div>
          <button
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                onComplete();
              }
            }}
            className="bg-accent text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all"
          >
            {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
            {currentStep < steps.length - 1 ? <ArrowRight size={18} /> : <Check size={18} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
