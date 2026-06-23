import { Star, CheckCircle, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function ReviewWall() {
  const reviews: Testimonial[] = [
    {
      id: 'rev_1',
      name: 'Victoria & Arthur Vance',
      location: 'Silverleaf, Scottsdale',
      date: 'June 18, 2026',
      quote: 'Our glass-tiled pool has very delicate finishes and hard water scale was starting to destroy the grout. Lucas and the Scottsdale Pool Club team have been an absolute savior. They balance the chemical saturation index to exact surgical ranges, and the water has never looked this crystal-clear. The same-day digital report card is an incredible touch of luxury.',
      highlightedPhrase: 'Water has never looked this crystal-clear',
      rating: 5
    },
    {
      id: 'rev_2',
      name: 'Dr. Charles Sterling',
      location: 'Troon North, Scottsdale',
      date: 'June 12, 2026',
      quote: 'I travel extensively for operations and used to worry constantly about my saltwater pool going green during Scottsdale summer power outages. Since hiring Scottsdale Pool Club, that worry is gone. Their same-day emailed reports show before/after photos and chemical levels. Knowing they backwashed the filter and balanced the pH gives me complete peace of mind.',
      highlightedPhrase: 'Weekly digital reports are a game-changer',
      rating: 5
    },
    {
      id: 'rev_3',
      name: 'The Harrison Short-Term Luxury Trust',
      location: 'DC Ranch, Scottsdale',
      date: 'June 05, 2026',
      quote: 'We manage three luxury vacation properties in Scottsdale. Guest satisfaction depends entirely on a pristine pool. Scottsdale Pool Club responds to storms under 4 hours, coordinates cleanups before guest arrivals, and keeps detailed logs for liability. Reliable, professional, and certified CPO® technicians who actually understand chemistry.',
      highlightedPhrase: 'Responds to storms under 4 hours',
      rating: 5
    },
    {
      id: 'rev_4',
      name: 'Brooke & Donald Croft',
      location: 'Paradise Valley, AZ',
      date: 'May 28, 2026',
      quote: 'Our old pool service kept dumping massive amounts of generic chlorine tabs, making our eyes burn and fading the liner. Scottsdale Pool Club converted us to an advanced Ozone sanitation cell, decreasing chlorine usage by 80%. The water is soft, completely odorless, and looks like a pristine resort in the Mediterranean. Best decision we ever made.',
      highlightedPhrase: 'Decreased chlorine usage by 80%',
      rating: 5
    },
    {
      id: 'rev_5',
      name: 'Richard Vance',
      location: 'Saddleback, Scottsdale',
      date: 'May 14, 2026',
      quote: 'After trying three different pool cleaners who spent less than 5 minutes on-site, I finally found professionals. These guys brush the plaster, vacuum sand, check filter gauges, and scrub the tile lines meticulously. They spend actual time engineering the water, and it shows. Simply outstanding service.',
      highlightedPhrase: 'Saturates tile scrub lines meticulously',
      rating: 5
    },
    {
      id: 'rev_6',
      name: 'Elizabeth S.',
      location: 'Ancala Country Club, Scottsdale',
      date: 'May 02, 2026',
      quote: 'The weekly report logs are fantastic. I can check our salt levels and water temperature directly from my phone. I have recommended Scottsdale Pool Club to all my neighbors who care about high-end travertine care and exact water sanitation.',
      highlightedPhrase: 'Weekly email logs are fantastic',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-20 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Elegant Section Title */}
        <div className="max-w-3xl text-left space-y-3 mb-16">
          <span className="font-mono text-[10px] tracking-widest text-[#00828A] font-bold uppercase block">
            // Verified Resident Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2421] uppercase tracking-tight">
            The Scottsdale Review Wall
          </h2>
          <p className="font-sans text-sm text-[#1A2421]/70 leading-relaxed">
            Read real feedback from elite homeowners who expect perfection in Silverleaf, DC Ranch, and Paradise Valley.
          </p>
        </div>

        {/* Testimonials Grid with sharp 90-degree corners, thin borders, inline highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-[#1A2421]/15 p-8 flex flex-col justify-between space-y-6 rounded-none relative hover:border-[#00828A]/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 size-12 text-[#1A2421]/5 select-none pointer-events-none" />

              <div className="space-y-4">
                {/* 5-Star Rating Indicator */}
                <div className="flex gap-1 text-[#EBB042]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text with inline highlighting */}
                <p className="font-sans text-xs md:text-sm text-[#1A2421]/80 leading-relaxed italic relative">
                  "{test.quote.split(test.highlightedPhrase)[0]}
                  <span className="text-[#00828A] border-b border-[#00828A]/30 pb-0.5 font-semibold not-italic">
                    {test.highlightedPhrase}
                  </span>
                  {test.quote.split(test.highlightedPhrase)[1]}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-[#1A2421]/10 flex items-center justify-between">
                <div className="text-left">
                  <h4 className="font-serif text-xs font-black text-[#1A2421] uppercase tracking-wider">
                    {test.name}
                  </h4>
                  <p className="font-sans text-[10px] text-[#00828A] font-semibold uppercase mt-0.5">
                    {test.location}
                  </p>
                </div>
                <span className="font-mono text-[9px] text-[#1A2421]/55 uppercase">
                  {test.date}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
