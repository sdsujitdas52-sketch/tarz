import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { products, categories } from '@/data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1549298240-0d8e60513026?w=1200&q=80" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif italic text-lg mb-2"
          >
            The New Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            EID ROYALE '24
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link 
              to="/shop" 
              className="bg-white text-primary px-8 py-3.5 rounded-sm font-semibold uppercase tracking-wider text-xs border hover:bg-transparent hover:text-white transition-all backdrop-blur-sm"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <SectionHeader title="Shop by Category" subtitle="Find your style" />
        <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 pb-4 snap-x">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to="/shop" 
              className="flex-shrink-0 w-[240px] md:w-[300px] h-[320px] relative rounded-sm overflow-hidden group snap-center"
            >
              <img 
                src={category.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={category.name} 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-x-0 bottom-6 flex justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-primary px-6 py-2 text-sm font-medium uppercase tracking-wider rounded-sm">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-8 bg-white">
        <SectionHeader title="Trending Now" subtitle="Most loved pieces" actionText="View All" actionLink="/shop" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="my-10 relative overflow-hidden">
        <div className="aspect-[4/5] md:aspect-[21/9] w-full">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" 
            alt="Editorial" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-center p-6 text-white">
          <Sparkles className="w-8 h-8 mb-4 opacity-80" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Artisan Craft</h2>
          <p className="font-sans text-sm md:text-base max-w-md opacity-90 mb-6">
            Discover the rich heritage of handcrafted fabrics and careful tailoring that goes into every TARZ piece.
          </p>
          <Link to="/about" className="border-b border-white pb-1 text-sm font-semibold uppercase tracking-wider">
            Our Story
          </Link>
        </div>
      </section>

      {/* Floating Action Buttons for Whatsapp/Messenger */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-40 md:bottom-8">
        <a href="https://wa.me/880123456789" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="https://m.me/tarzbd" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Footer minimal */}
      <footer className="bg-primary text-cream py-12 px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-widest mb-6">TARZ</h2>
        <div className="flex justify-center gap-6 mb-8">
          <Instagram className="w-5 h-5 opacity-80" />
          <MessageCircle className="w-5 h-5 opacity-80" />
        </div>
        <p className="text-xs opacity-50 uppercase tracking-widest">© 2024 Tarz Bangladesh. All rights reserved.</p>
      </footer>

      <MobileNav />
    </div>
  );
}
