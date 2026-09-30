import type { Metadata } from 'next';
import { getHelpArticles } from '@/lib/help-centre';
import HelpCentre from './subpage';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Help Centre | Axis Meter',
  description: 'Find articles and video guides for your Axis Meter account, bills, payments and utility service.',
  alternates: { canonical: 'https://www.axismeter.com/help' },
};

export default async function HelpPage() {
  return <HelpCentre articles={await getHelpArticles()} />;
}
