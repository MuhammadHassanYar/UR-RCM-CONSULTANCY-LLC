'use client';

import React, { createContext, useContext, useState } from 'react';
import { ConsultationModal } from './ConsultationModal';

interface ConsultationContextType {
  openConsultation: (serviceSlug?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openConsultation = (serviceSlug?: string) => {
    setSelectedService(serviceSlug);
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
      {children}
      <ConsultationModal
        isOpen={isOpen}
        onClose={closeConsultation}
        defaultService={selectedService}
      />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
}
