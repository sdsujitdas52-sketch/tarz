import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-4 h-14 md:h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-1 text-gray-800">
            <Menu className="w-5 h-5" />
          </button>
          <Search className="w-5 h-5 text-gray-800 hidden md:block" />
        </div>
        
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase">TARZ</span>
        </Link>

        <div className="flex items-center gap-4">
          <button className="p-1 text-gray-800 md:hidden">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/checkout" className="p-1 text-gray-800 relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-primary text-white text-[9px] flex items-center justify-center rounded-full font-bold">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
