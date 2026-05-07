import { User, MapPin, Package, Settings, LogOut, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';

export default function Profile() {
  const menuItems = [
    { icon: Package, title: 'My Orders', subtitle: 'Track, return, or buy things again' },
    { icon: MapPin, title: 'Saved Addresses', subtitle: 'Manage your delivery addresses' },
    { icon: Settings, title: 'Account Settings', subtitle: 'Password, email, and notifications' },
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-gray-50">
      <Header />
      
      <div className="max-w-md mx-auto pt-6 px-4">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-sm shadow-sm flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-cream rounded-full border border-gray-100 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold">Sumit Das</h2>
            <p className="text-gray-500 text-sm">01711-223344</p>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-sm shadow-sm overflow-hidden mb-6">
          {menuItems.map((item, idx) => (
            <div 
              key={item.title} 
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 bg-white rounded-sm shadow-sm font-medium hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>

      <MobileNav />
    </div>
  );
}
