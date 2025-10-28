import type { LucideIcon } from 'lucide-react';
import { MapPin, Calendar, BookOpen, Users, ShoppingCart, Layers } from 'lucide-react';

export const iconMap = {
  MapPin,
  Calendar,
  BookOpen,
  Users,
  ShoppingCart,
  Layers,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export const fallbackIcon: LucideIcon = Layers;

export const isIconName = (name: string): name is IconName => name in iconMap;
