import {
  Boxes,
  CalendarCheck,
  CircleUserRound,
  Clock3,
  Cpu,
  Languages,
  MapPin,
  Newspaper,
  PackageOpen,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'

export type IconType = LucideIcon

export const steps: Array<{ icon: IconType; title: string; body: string }> = [
  {
    icon: Boxes,
    title: 'Choose Scrap',
    body: 'Select the types of scrap you want to sell and check the rates shown in the app.',
  },
  {
    icon: CalendarCheck,
    title: 'Book Pickup',
    body: 'Choose a convenient time and request doorstep pickup directly through the Android app.',
  },
  {
    icon: WalletCards,
    title: 'Get Paid',
    body: 'Get paid after your scrap is picked up and weighed with a digital scale.',
  },
]

export const features: Array<{ icon: IconType; title: string; body: string }> = [
  {
    icon: MapPin,
    title: 'Doorstep Pickup',
    body: 'Request a pickup from your location through the app.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Rates',
    body: 'Review scrap rates before you schedule a pickup.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure OTP Login',
    body: 'Access your account with a simple OTP-based sign-in.',
  },
  {
    icon: Clock3,
    title: 'Order Tracking',
    body: 'Follow your pickup status from one clear screen.',
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    body: 'Use the app in English, Hindi, or Gujarati.',
  },
  {
    icon: CircleUserRound,
    title: 'Profile Management',
    body: 'Manage your addresses and personal details in the app.',
  },
]

export const categories: Array<{ icon: IconType; label: string }> = [
  { icon: Newspaper, label: 'Paper' },
  { icon: PackageOpen, label: 'Cardboard' },
  { icon: Sparkles, label: 'Metal' },
  { icon: Recycle, label: 'Plastic' },
  { icon: Cpu, label: 'E-waste' },
  { icon: Boxes, label: 'Mixed Scrap' },
]
