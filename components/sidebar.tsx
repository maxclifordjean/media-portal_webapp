"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  User, Home, List, Plus, Users, Mail, Headphones, Settings, LogOut,
  Grid
} from 'lucide-react';
import {signout} from "../utils/signout";

const sidebarItems = [
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Home, label: 'Accueil', href: '/' },
  { icon: List, label: 'Mes Projets', href: '/projects' },
  { icon: Plus, label: 'Nouveau Projet', href: '/new-project' },
  { icon: Grid, label: 'Apps & Services', href: '/apps' },
  { icon: Users, label: 'Networks&YOU', href: '/network' },
  { icon: Mail, label: 'Messages', href: '/messages' },
  { icon: Headphones, label: 'Support', href: '/support' },
  { icon: Settings, label: 'Paramètres', href: '/settings' },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async()=>{
    await signout(); //TODO Fix not working
    router.push("https://auth.portal.clifftechnologies.co");
  }

  return (
    <div className="w-16 md:w-64 h-screen bg-gray-100 border-r flex flex-col">
      <div className="p-4">
        <h1 className="hidden md:block text-xl font-bold">Console</h1>
      </div>
      
      <nav className="flex-1 px-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-gray-200"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="hidden md:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
          <LogOut className="h-5 w-5" />
          <span className="hidden md:block" onClick={logout}>Déconnexion</span>
        </button>
      </div>
    </div>
  );
}