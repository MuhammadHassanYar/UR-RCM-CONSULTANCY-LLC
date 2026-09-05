import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
  Check,
  ArrowRight,
  ChevronRight,
  Shield,
  Calendar,
  HelpCircle,
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '@/lib/siteData';
import { ServiceDetailClient } from './ServiceDetailClient';

const ICON_MAP: Record<string, React.ElementType> = {
  ReceiptText,
  FileCode2,
  SendHorizontal,
  ShieldAlert,
  TrendingUp,
  Award,
  UserCheck,
  CheckCheck,
  CreditCard,
  Layers,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found | UR RCM CONSULTANCY LLC' };

  return {
    title: `${service.title} Services | UR RCM CONSULTANCY LLC`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | UR RCM CONSULTANCY LLC`,
      description: service.overview,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_LIST.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <ServiceDetailClient service={service} otherServices={otherServices} />
  );
}
