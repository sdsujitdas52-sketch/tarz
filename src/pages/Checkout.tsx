import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8 max-w-sm">Thank you for your purchase. We will contact you shortly to confirm your delivery.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-4 w-full max-w-xs rounded-sm font-semibold uppercase tracking-wider text-sm">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-10 bg-gray-50">
      <div className="bg-white border-b border-gray-100 flex items-center justify-between px-4 h-14 sticky top-0 z-50">
        <Link to="/shop" className="p-2 -ml-2 text-gray-800">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <span className="font-semibold uppercase tracking-widest text-sm">Checkout</span>
        <div className="w-10 flex items-center justify-end">
          <ShieldCheck className="w-5 h-5 text-green-600" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto md:px-4 md:grid md:grid-cols-12 md:gap-8 pt-6">
        <div className="px-4 md:col-span-7 bg-white p-6 md:rounded-sm md:shadow-sm">
          <h2 className="font-serif text-2xl font-bold mb-6">Delivery Details</h2>
          
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
              <input type="text" required className="w-full border border-gray-200 p-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
              <input type="tel" required className="w-full border border-gray-200 p-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="01XXX-XXXXXX" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Division</label>
                <select className="w-full border border-gray-200 p-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                  <option>Sylhet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">District</label>
                <select className="w-full border border-gray-200 p-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                  <option>Dhaka City</option>
                  <option>Gazipur</option>
                  <option>Narayanganj</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Full Address</label>
              <textarea required rows={3} className="w-full border border-gray-200 p-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="House/Flat No, Road No, Area..."></textarea>
            </div>
          </form>

          <h2 className="font-serif text-2xl font-bold mt-10 mb-6">Payment Method</h2>
          <div className="space-y-3">
            <label className={`flex items-center p-4 border rounded-sm cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-primary bg-gray-50' : 'border-gray-200'}`}>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300'}`}>
                {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-primary" />}
              </div>
              <span className="font-medium">Cash on Delivery</span>
            </label>

            <label className={`flex items-center p-4 border rounded-sm cursor-pointer transition-colors ${paymentMethod === 'bkash' ? 'border-[#E2136E] bg-[#E2136E]/5' : 'border-gray-200'}`}>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'bkash' ? 'border-[#E2136E]' : 'border-gray-300'}`}>
                {paymentMethod === 'bkash' && <div className="w-3 h-3 rounded-full bg-[#E2136E]" />}
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="font-medium text-[#E2136E]">bKash Payment</span>
                <img src="https://scripts.sandbox.bka.sh/resources/img/bkash_logo.png" alt="bKash" className="h-6" />
              </div>
            </label>
            
            <label className={`flex items-center p-4 border rounded-sm cursor-pointer transition-colors ${paymentMethod === 'nagad' ? 'border-[#F15822] bg-[#F15822]/5' : 'border-gray-200'}`}>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${paymentMethod === 'nagad' ? 'border-[#F15822]' : 'border-gray-300'}`}>
                {paymentMethod === 'nagad' && <div className="w-3 h-3 rounded-full bg-[#F15822]" />}
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="font-medium text-[#F15822]">Nagad Payment</span>
              </div>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="px-4 mt-8 md:col-span-5 md:mt-0">
          <div className="bg-cream p-6 rounded-sm">
            <h3 className="font-serif text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">৳ 4,500</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-600">Delivery Charge</span>
              <span className="font-medium">৳ 70</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-4" />
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>৳ 4,570</span>
            </div>
            
            <button 
              type="submit" 
              form="checkout-form"
              className="w-full bg-primary text-white py-4 rounded-sm font-semibold uppercase tracking-wider text-sm hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              Place Order
              <ShieldCheck className="w-4 h-4 opacity-80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
