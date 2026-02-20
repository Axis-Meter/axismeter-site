import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Owners — Book a Free Consultation | Axis Meter Solutions",
  description: "Find out how much you could save with submetering. Free consultation, $0 upfront, free leak detection. Book your call today.",
};

const benefits = [
  { icon: "💰", title: "Recover $2,000-4,000/Month", description: "Stop paying your tenants' utility bills. Per-unit metering puts that money back in your pocket — starting from day one." },
  { icon: "📈", title: "32% Average Property Value Increase", description: "Lower operating costs mean higher NOI, which means higher property value. It's one of the fastest ways to build equity." },
  { icon: "💧", title: "Free Leak & Flood Detection", description: "Every install includes leak detection sensors at no cost. Catch water damage before it costs you $50,000+." },
  { icon: "⚡", title: "Live in 8-10 Weeks", description: "From signed agreement to live meters, you're saving money in just 8-10 weeks. No drawn-out timelines." },
];

const testimonials = [
  { quote: "Axis Meter made the entire process seamless. Our operating costs dropped significantly.", name: "Jessica M.", role: "Property Manager, Ontario" },
  { quote: "What sold me was the free leak detection. We had a water leak that cost $40,000. With Axis, we would have caught it in minutes.", name: "Building Owner", role: "Commercial Property, Toronto" },
  { quote: "Finally, a submetering company that actually understands real estate investors.", name: "Real Estate Investor", role: "Residential Portfolio, Canada" },
];

export default function PropertyOwnersPage() {
  return (
    <>
      {/* Hero — Landing Page Style */}
      <section className="bg-navy relative overflow-hidden">
        <Image
          src="/images/hero/photo-1560448204-e02f11c3d0e2.jpg"
          alt="Impressive modern building representing property investment"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Copy */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Find Out How Much You Could{" "}
                <span className="text-accent">Save with Submetering</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Property owners across US and Canada are recovering thousands every month with per-unit utility billing.
                Book a free 15-30 minute consultation to get a custom assessment for your building.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <span className="text-2xl shrink-0">{b.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{b.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                <span>✅ Measurement Canada Approved</span>
                <span>✅ $0 Upfront</span>
                <span>✅ No Obligation</span>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Consultation</h2>
              <p className="text-gray-600 mb-6">15-30 minutes. No obligation. Just straight answers.</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                  <input type="text" id="address" name="address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" placeholder="Street address, city, province/state" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
                    <input type="number" id="units" name="units" placeholder="e.g. 20" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label htmlFor="utilities" className="block text-sm font-medium text-gray-700 mb-1">Utilities Interested In</label>
                    <select id="utilities" name="utilities" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-white">
                      <option value="">Select...</option>
                      <option value="electricity">Electricity</option>
                      <option value="water">Water</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="bg-accent hover:bg-accent-dark text-navy font-bold px-8 py-4 rounded-lg text-lg transition-colors w-full">
                  Book My Free Call →
                </button>
                <p className="text-xs text-gray-500 text-center">No obligation. No credit card. Just a conversation.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl font-bold text-accent mb-2">4.97/5</div>
            <p className="text-gray-600">Average Customer Rating</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-accent text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-600 leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">32%</div>
              <div className="text-sm text-gray-400 mt-1">Avg. Property Value Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">18%</div>
              <div className="text-sm text-gray-400 mt-1">Lower Operating Costs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">8-10 wks</div>
              <div className="text-sm text-gray-400 mt-1">From Agreement to Live</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">$0</div>
              <div className="text-sm text-gray-400 mt-1">Upfront Cost</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
