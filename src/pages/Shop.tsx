import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/mockData';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Panjabi', 'Saree', 'Kurti', 'Casuals'];

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-white">
      <Header />
      
      <div className="pt-6 pb-4 px-4 sticky top-14 md:top-16 bg-white z-30 border-b border-gray-100">
        <h1 className="font-serif text-3xl font-bold text-primary mb-4">Collection</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pr-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeFilter === f 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary border-l border-gray-200 pl-4">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      <div className="py-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate products just to fill the grid for demo */}
          {products.map((product) => (
            <ProductCard key={product.id + '_dup'} product={{...product, id: product.id + '_dup'}} />
          ))}
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
}
