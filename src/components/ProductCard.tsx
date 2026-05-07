import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products } from '@/data/mockData';

type ProductCardProps = {
  key?: string | number;
  product: typeof products[0];
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-2"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <button className="absolute top-2 right-2 p-1.5 bg-white/40 backdrop-blur-md rounded-full text-gray-800 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        {product.badge && (
          <div className="absolute top-2 left-2 bg-primary text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
            {product.badge}
          </div>
        )}
      </div>
      <Link to={`/product/${product.id}`} className="flex flex-col">
        <h3 className="font-sans text-xs md:text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>
        <span className="font-serif text-gray-500 text-xs truncate">
          {product.bengaliName}
        </span>
        <span className="text-sm font-semibold mt-1">
          ৳ {product.price.toLocaleString()}
        </span>
      </Link>
    </motion.div>
  );
}
