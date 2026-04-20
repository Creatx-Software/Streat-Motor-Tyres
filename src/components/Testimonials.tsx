import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const reviews = [
  {
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'Absolutely fantastic service! Had a flat tyre on the M25 and they arrived within 40 minutes. Professional, friendly, and got me back on the road quickly. Highly recommend!',
    image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'James Wilson',
    rating: 5,
    text: 'Called them for an emergency tyre replacement at my office. The technician was knowledgeable, efficient, and the price was very reasonable. Will definitely use again.',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    name: 'Emma Thompson',
    rating: 5,
    text: 'Best mobile tyre service in London! They fitted new tyres at my home while I worked. Saved me so much time. The quality of work and customer service is outstanding.',
    image:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Professional and reliable. Had a puncture repaired quickly and efficiently. Fair pricing and excellent communication throughout. These guys know their stuff!',
    image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  }];

  return (
    <section
      id="reviews"
      className="py-16 bg-gradient-to-br from-orange-400 to-amber-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Discover What Our Customers Say.
          </h2>
          <p className="text-orange-100 text-lg">
            Real reviews from real customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) =>
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
            
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) =>
              <StarIcon
                key={i}
                className="text-yellow-400 fill-yellow-400"
                size={20} />

              )}
              </div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}