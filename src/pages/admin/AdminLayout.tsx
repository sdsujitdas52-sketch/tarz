import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, ShoppingCart, Image, Tag, Menu, X, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Products', icon: ShoppingBag, path: '/admin/products' },
    { name: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-primary text-white transition-transform duration-300 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <span className="font-serif text-2xl font-bold tracking-widest">TARZ Admin</span>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-sm transition-colors",
                isActive ? "bg-white/10 font-bold" : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 rounded-sm text-red-400 hover:bg-white/5 w-full transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sticky top-0 z-30">
          <button className="md:hidden p-2 -ml-2 text-primary" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-primary font-bold border border-gray-200">
              A
            </div>
            <span className="font-medium text-sm hidden sm:inline">Admin User</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
