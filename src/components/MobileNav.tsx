import { Home, ShoppingBag, Heart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const tabs = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Shop', icon: ShoppingBag, path: '/shop' },
    { name: 'Wishlist', icon: Heart, path: '/wishlist' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-safe-area flex justify-between items-center z-50 md:hidden h-16">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center gap-1 transition-colors duration-200',
              isActive ? 'text-primary' : 'text-gray-400'
            )
          }
        >
          <tab.icon className="w-5 h-5" strokeWidth={2} />
          <span className="text-[10px] font-medium uppercase tracking-wider">{tab.name}</span>
        </NavLink>
      ))}
    </div>
  );
}
