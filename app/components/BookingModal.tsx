import React, { useState } from 'react';
import Image from 'next/image';
import { CreditCard, Star } from 'lucide-react';
import { GiPayMoney } from 'react-icons/gi';

interface Room {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

interface BookingModalProps {
  room: Room;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ room, onClose }) => {
  const [nights] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0a3a2a] rounded-4xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row transform transition-all animate-scale-in border border-white/20">
        
        {/* Left Panel: Room Info (Hidden on small mobile) */}
        <div className="hidden lg:block w-1/3 relative bg-bg-dark">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/room2.png"
              alt={room.name} 
              fill
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-transparent"></div>
          </div>
          <div className="flex items-center mt-15 justify-center">
                  <Image
                    src="/images/logo1.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="rounded-full w-20 h-20 object-cover mx-auto"
                  />
                </div>
          
          <div className="absolute bottom-0 left-0 px-10 py-15 z-10 w-full">
            
            <h2 className="font-display text-4xl font-bold text-white mb-3 leading-tight">{room.name}</h2>
            <i className="text-[#0a3a2a] text-lg leading-relaxed mb-8 font-semibold">
              Experience the pinnacle of comfort with panoramic views and premium curated amenities designed for the discerning traveler.
            </i>
            
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex justify-between items-end">
                <span className="text-[#0a3a2a] text-[18px] uppercase tracking-widest font-bold">Price per night</span>
                <span className="font-display font-bold text-primary text-2xl">#{room.price.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-icons text-sm ${i < room.rating ? '' : 'text-yellow-600'}`}><Star /></span>
                ))}
                <span className="text-[#C89F65] ml-2 text-xs font-light">({room.reviews} verified reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Booking Form */}
        <div className="flex-1 bg-white p-6 sm:p-10 lg:p-12 modal-scroll overflow-y-auto max-h-[90vh]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-display text-3xl font-bold text-gray-900 leading-none">Secure Booking</h3>
              <p className="text-gray-500 text-sm mt-3 font-light">Complete your reservation details in just a few steps.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <span className="material-icons">close</span>
            </button>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Guest Info Section */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89F65] mb-5 border-b border-gray-100 pb-2">Guest Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 px-1">Full Name</label>
                  <div className="relative group">
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 px-1">Email Address</label>
                  <div className="relative group">
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Details */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89F65] mb-5 border-b border-gray-100 pb-2">Stay Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 px-1">Check-in</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="date" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 px-1">Check-out</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="date" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 px-1">Guests</label>
                  <div className="relative">
                    <select
  defaultValue="2 Adults"
  className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
>
  <option value="1 Adult">1 Adult</option>
  <option value="2 Adults">2 Adults</option>
  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
  <option value="Family (4+)">Family (4+)</option>
</select>

                    <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89F65] mb-5 border-b border-gray-100 pb-2">Payment Method</h4>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`relative flex items-center justify-center p-5 border rounded-2xl cursor-pointer transition-all duration-300 ${paymentMethod === 'card' ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  {paymentMethod === 'card' && <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>}
                  <div className="flex flex-col items-center gap-2">
                    <span className={`material-icons text-3xl ${paymentMethod === 'card' ? 'text-primary' : 'text-gray-400'}`}><CreditCard /></span>
                    <span className={`text-sm font-bold ${paymentMethod === 'card' ? 'text-gray-900' : 'text-gray-500'}`}>Credit Card</span>
                  </div>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`relative flex items-center justify-center p-5 border rounded-2xl cursor-pointer transition-all duration-300 ${paymentMethod === 'paypal' ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  {paymentMethod === 'paypal' && <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>}
                  <div className="flex flex-col items-center gap-2">
                    <span className={`material-icons text-3xl ${paymentMethod === 'paypal' ? 'text-blue-600' : 'text-gray-400'}`}><GiPayMoney /></span>
                    <span className={`text-sm font-bold ${paymentMethod === 'paypal' ? 'text-gray-900' : 'text-gray-500'}`}>PayPal</span>
                  </div>
                </div>
              </div>

              {/* Card Form - Integrated directly */}
              <div className="mt-6 p-6 bg-gray-50 rounded-2xl space-y-5 border border-gray-100">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Card Number</label>
                  <div className="relative group">
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-primary outline-none text-sm tracking-widest" 
                      placeholder="0000 0000 0000 0000" 
                      type="text" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Expiry Date</label>
                    <input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="MM / YY" type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">CVC</label>
                    <input className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-primary outline-none text-sm" placeholder="123" type="text" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Summary Footer */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <p className="text-xs text-gray-400 uppercase tracking-[0.15em] font-bold mb-1">Total Amount</p>
                <p className="text-4xl font-display font-bold text-gray-900">#{(room.price * nights).toFixed(2)}</p>
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#C89F65] hover:bg-[#8C6A3B] text-secondary font-bold py-4 px-12 rounded-xl shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span className="text-base uppercase tracking-widest">Confirm & Pay</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
