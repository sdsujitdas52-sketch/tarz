import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Heart, ShoppingBag, Truck, Info, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/mockData';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // fallback
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen pb-24 md:pb-10 bg-white">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 inset-x-0 h-14 flex items-center justify-between px-4 z-50 md:hidden bg-gradient-to-b from-black/30 to-transparent">
        <Link to="/shop" className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <button className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="md:max-w-6xl md:mx-auto md:grid md:grid-cols-2 md:gap-10 md:pt-10">
        {/* Images */}
        <div className="relative aspect-[3/4] md:aspect-auto md:h-[80vh] w-full bg-gray-100 snap-x snap-mandatory overflow-x-auto flex">
          {product.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={product.name}
              className="w-full h-full object-cover shrink-0 snap-center"
            />
          ))}
          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 md:hidden">
            {product.images.map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full ${activeImage === idx ? 'bg-primary' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>

        {/* Details Context */}
        <div className="px-4 pt-6 md:px-0">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2 block">{product.category}</span>
            <h1 className="font-serif text-3xl font-bold text-primary mb-1">{product.name}</h1>
            <p className="font-serif text-lg text-gray-600 mb-4">{product.bengaliName}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">৳ {product.price.toLocaleString()}</span>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold">4.8</span>
                <span className="text-gray-500">(124)</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-100 my-6" />

          {/* Color Selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold uppercase tracking-wider">Color: {selectedColor}</span>
            </div>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 p-0.5 transition-all ${selectedColor === color ? 'border-primary' : 'border-transparent'}`}
                >
                  <div className={`w-full h-full rounded-full ${color === 'Black' ? 'bg-black' : color === 'Navy' ? 'bg-blue-900' : color === 'Cream' ? 'bg-orange-50' : color === 'Red' ? 'bg-red-800' : color === 'White' ? 'bg-white border border-gray-200' : 'bg-stone-500'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold uppercase tracking-wider">Size: {selectedSize}</span>
              <button className="text-xs text-gray-500 underline underline-offset-4">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-12 border flex items-center justify-center font-medium transition-colors ${
                    selectedSize === size 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-gray-200 text-gray-900 hover:border-gray-900 px-6'
                  }`}
                  style={{ width: size === 'Free Size' ? 'auto' : '3rem', padding: size === 'Free Size' ? '0 1.5rem' : '0' }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 font-sans text-sm leading-relaxed text-gray-700">
            <p>{product.description}</p>
          </div>

          {/* Collapsibles */}
          <div className="border-t border-gray-100">
            <div className="py-4 border-b border-gray-100 flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-semibold">Delivery within Bangladesh</p>
                <p className="text-xs text-gray-500">Inside Dhaka: 2-3 Days | Outside: 3-5 Days</p>
              </div>
            </div>
            <div className="py-4 border-b border-gray-100 flex items-center gap-3">
              <Info className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-semibold">Care Instructions</p>
                <p className="text-xs text-gray-500">Dry clean only. Do not bleach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-safe-area z-40 md:relative md:border-t-0 md:bg-transparent md:p-0 md:mt-8">
        <Link 
          to="/checkout"
          className="w-full bg-primary text-white h-14 flex items-center justify-center font-semibold text-sm uppercase tracking-wider gap-2 rounded-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart - ৳ {product.price.toLocaleString()}
        </Link>
      </div>
    </div>
  );
}
