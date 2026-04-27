"use client";

import React from 'react';
import { StarIcon, Circle } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

export function Testimonials() {
  const controls = useAnimationControls();
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const firstCardRef = React.useRef<HTMLDivElement | null>(null);
  const [stepWidth, setStepWidth] = React.useState(0);

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

  const loopedReviews = React.useMemo(() => [...reviews, ...reviews], [reviews]);

  React.useEffect(() => {
    const updateStepWidth = () => {
      if (!trackRef.current || !firstCardRef.current) {
        return;
      }

      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      const computedStyle = window.getComputedStyle(trackRef.current);
      const gap = Number.parseFloat(computedStyle.gap || '0');
      setStepWidth(cardWidth + gap);
    };

    updateStepWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateStepWidth();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (!stepWidth) {
      return;
    }

    const pauseMs = 2800;
    const slideDuration = 2.5;
    let isMounted = true;

    const runCarousel = async () => {
      controls.set({ x: 0 });
      let nextIndex = 1;

      while (isMounted) {
        await controls.start({
          x: -nextIndex * stepWidth,
          transition: {
            duration: slideDuration,
            ease: [0.22, 1, 0.36, 1]
          }
        });

        await new Promise<void>((resolve) => {
          window.setTimeout(resolve, pauseMs);
        });

        if (!isMounted) {
          break;
        }

        if (nextIndex >= reviews.length) {
          controls.set({ x: 0 });
          nextIndex = 1;
          continue;
        }

        nextIndex += 1;
      }
    };

    runCarousel();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, reviews.length, stepWidth]);

  return (
    <section
      id="reviews"
      className="bg-[#F8EAFB] py-0">

      <div className="overflow-hidden rounded-t-[7rem] bg-[#FBB038] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-md font-inter font-semibold text-white tracking-wide mb-4">
            <Circle size={16} fill="white" stroke="white" className="inline-block mr-2 align-middle" />
            Reviews
          </h3>
          <h2 className="text-3xl sm:text-4xl font-inter font-semibold text-[#2D2D2D] mb-4">
            Discover What Our <br />Customers Say.
          </h2>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={controls}>
            {loopedReviews.map((review, index) =>
            <div
              key={`${review.name}-${index}`}
              ref={index === 0 ? firstCardRef : null}
              className="relative flex-none basis-full overflow-hidden rounded-3xl bg-white p-6 pb-16 pr-20 shadow-lg transition-shadow hover:shadow-2xl sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]">
            
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) =>
              <StarIcon
                key={i}
                className="text-yellow-400 fill-yellow-400"
                size={20} />

              )}
              </div>
              <p className="text-[#3B3B3B] font-inter font-medium italic mb-6 text-sm leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4">
                <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <p className="font-inter font-semibold text-[#3B3B3B]">{review.name}</p>
                  <p className="text-xs text-[#FFB235] font-inter font-semibold">Clients</p>
                </div>
              </div>
              <img
                src="/assets/review.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 right-4 w-12 select-none object-contain sm:w-16"
              />
            </div>
          )}
          </motion.div>
        </div>
      </div>
      </div>
    </section>);

}