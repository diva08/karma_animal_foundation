import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/custom/animated-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-white py-28 md:py-36">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 text-gradient-teal animate-fade-in">
              About Us
            </h1>
            <p className="text-2xl text-gray-600 animate-fade-in animate-delay-200">
              A shelter with love, commitment, and care
            </p>
          </AnimatedSection>

          {/* Main About Section with Landscape Image */}
          <AnimatedSection className="mb-16" delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-xl max-w-none animate-slide-left">
                <p className="text-xl text-gray-600">
                  Established in April 2015, we are a private, non-profit organization located on the outskirts of Gurgaon in Bhondsi. Our 2.3 acre sanctuary is home to 100 rescued dogs, housed in 24 well-ventilated sheds and 4 container homes, with access to open playgrounds and grassy enclosures.
                </p>
                <p className="text-xl text-gray-600 mt-4">
                  Today, our mission is to offer safety, healing, and dignity to urban animals while working towards a future where every animal in need receives immediate help. We aim to foster a compassionate society through feeding, adoption, sterilization, and awareness.
                </p>
              </div>
              <div className="animate-slide-right">
                <div className="aspect-square w-full relative rounded-lg overflow-hidden shadow-md image-hover-zoom">
                  <img
                    src="/images/About_Us.png"
                    alt="Our Shelter"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-gray-50 py-28 md:py-36">
        <div className="container">
          {/* Our Journey Section with 4:5 Portrait Image */}
          <AnimatedSection className="mb-16" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-gradient-teal">
              Our Journey
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                <div className="prose max-w-none text-left">
                  <p className="text-base text-gray-600">
                    What started with a simple gesture of feeding a few hungry dogs some 30 years back, slowly culminated into the need for our sanctuary – a place to care for dogs with compassion and commitment.
                  </p>
                  <p className="text-base text-gray-600 mt-4">
                    Our biggest challenge in performing our daily chores was resentment from the apathetic residents which resulted in regular unpleasantness; and our second most difficult challenge was lack of suitable medical boarding for dogs needing long-term care.
                  </p>
                  <p className="text-base text-gray-600 mt-4">
                    Through persistence and dedication, we've overcome many obstacles to create a safe haven for animals in need. Our journey has been one of learning, growth, and unwavering commitment to animal welfare.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="aspect-[4/5] w-full lg:w-[120%] relative rounded-lg overflow-hidden shadow-lg transform lg:translate-x-[-10%]">
                  <img
                    src="/images/mala.png"
                    alt="Our journey through the years"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-white py-28 md:py-36">
        <div className="container">
          {/* Our Mission Section with One Square Image */}
          <AnimatedSection className="mb-16" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-gradient-teal">
              Our Mission
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Single square image - moved to left */}
              <div className="lg:col-span-1 flex items-center justify-center">
                <div className="aspect-square w-full lg:w-[120%] relative rounded-lg overflow-hidden shadow-lg transform lg:translate-x-[10%]">
                  <img
                    src="/images/dog6.png"
                    alt="Our mission in action"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text moved to right */}
              <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="prose max-w-none text-left">
                  <p className="text-base text-gray-600">
                    Today, our mission is to offer safety, healing, and dignity to urban animals while working towards a future where every animal in need receives immediate help. We aim to foster a compassionate society through feeding, adoption, sterilization, and awareness.
                  </p>
                  <p className="text-base text-gray-600 mt-4">
                    We believe every animal deserves respect, care, and the chance to live with dignity. We envision a future where Indies will be adopted by choice.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="bg-gray-50 py-28 md:py-36">
        <div className="container">
          {/* Our Facilities Section with Landscape Image */}
          <AnimatedSection className="mb-16" delay={0.3}>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 text-gradient-teal">
              Our Facilities
            </h2>

            <div className="grid grid-cols-1 gap-8">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/facility.png"
                  alt="Our shelter facilities"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                  loading="lazy"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-teal-600">Shelter Infrastructure</h3>
                  <p className="text-base text-gray-600">
                    Our 2.3-acre sanctuary has been designed with the comfort and safety of our dogs in mind. It features 24 well-ventilated sheds, 4 container homes, open playgrounds for exercise, grassy enclosures, an on-site medical facility, and CCTV surveillance to ensure safety.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-teal-600">Care Standards</h3>
                  <p className="text-base text-gray-600">
                    We pride ourselves on providing exceptional care to all our animals with home-cooked nutritious meals prepared daily, regular exercise and playtime, thorough bathing and anti-flea treatments, climate control measures, regular veterinary checkups, and behavioral training.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
