"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  User, 
  Home, 
  FolderOpen, 
  Plus, 
  Zap,
  MessageSquare, 
  Headphones, 
  Settings, 
  LogOut,
  ChevronDown,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { signout } from "../utils/signout";
import { useState } from 'react';

const sidebarItems = [
  { icon: Home, label: 'Accueil', href: '/', section: 'main' },
  { icon: FolderOpen, label: 'Mes Projets', href: '/projects', section: 'main' },
  { icon: Plus, label: 'Nouveau Projet', href: '/projects/new', section: 'main' },
];

const suiteItems = [
  { icon: Briefcase, label: 'BaseCamp', href: '/apps/basecamp', section: 'suites' },
  { icon: Zap, label: 'Momentum', href: '/apps/momentum', section: 'suites' },
  { icon: Zap, label: 'Summit', href: '/apps/summit', section: 'suites' },
];

const supportItems = [
  { icon: MessageSquare, label: 'Messages', href: '/messages', section: 'support' },
  { icon: Headphones, label: 'Support', href: '/support', section: 'support' },
  { icon: Settings, label: 'Paramètres', href: '/settings', section: 'support' },
  { icon: User, label: 'Profil', href: '/profile', section: 'support' },
];

const authAppURL = 'https://localhost:3001';

export function Sidebar() {
  const pathname = usePathname();
  const [suitesOpen, setSuitesOpen] = useState(true);
  const [supportOpen, setSupportOpen] = useState(false);

  const logout = async () => {
    await signout();
    window.location.href = authAppURL;
  };

  const isActive = (href: string) => pathname === href;

  const SidebarLink = ({ icon: Icon, label, href, section }: any) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
        isActive(href)
          ? "bg-[#8f1724] text-white shadow-md"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="hidden lg:block">{label}</span>
    </Link>
  );

  return (
    <div className="w-16 lg:w-72 h-screen bg-white border-r border-slate-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 lg:p-6 border-b border-slate-100">
        <div className="hidden lg:flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8f1724]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-black text-slate-900">Smedia</span>
        </div>
        <p className="hidden lg:block text-xs text-slate-500 font-semibold uppercase tracking-wider">
          Portail Client
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 lg:px-4 py-4">
        {/* Main Section */}
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <SidebarLink key={item.href} {...item} />
          ))}
        </div>

        {/* Suites Section */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <button
            onClick={() => setSuitesOpen(!suitesOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors mb-2"
          >
            <span className="hidden lg:block">Nos Suites</span>
            <span className="lg:hidden text-xs">Suites</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                suitesOpen && "rotate-180"
              )}
            />
          </button>

          {suitesOpen && (
            <div className="space-y-1">
              {suiteItems.map((item) => (
                <SidebarLink key={item.href} {...item} />
              ))}
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <button
            onClick={() => setSupportOpen(!supportOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors mb-2"
          >
            <span className="hidden lg:block">Aide & Compte</span>
            <span className="lg:hidden text-xs">Compte</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                supportOpen && "rotate-180"
              )}
            />
          </button>

          {supportOpen && (
            <div className="space-y-1">
              {supportItems.map((item) => (
                <SidebarLink key={item.href} {...item} />
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Footer - Logout */}
      <div className="p-2 lg:p-4 border-t border-slate-200 bg-slate-50">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-sm font-medium"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className="hidden lg:block">Déconnexion</span>
        </button>
      </div>
    </div>
  );
}