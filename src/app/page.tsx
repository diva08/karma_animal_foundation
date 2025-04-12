import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/custom/animated-section';

// This is a server component that doesn't use client components directly
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Using 16:9 aspect ratio (common for hero images) */}
      <section className="relative bg-cover bg-center bg-no-repeat h-[calc(100vw*0.5625)] min-h-[60vh] max-h-[80vh]" style={{ backgroundImage: 'url(/images/Home.png)' }}>
        <div className="absolute inset-0 bg-black/30 z-0" /> {/* Dark overlay */}
        <div className="container mx-auto px-4 relative z-10 flex h-full">
          <div className="max-w-xl space-y-4 md:space-y-6 self-center text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in">
              Animals change our lives. <span className="text-teal-300">We're on a quest to change theirs.</span>
            </h1>
            <p className="text-lg md:text-xl text-white animate-fade-in animate-delay-200">
              Karma Animal Foundation is a nonprofit organization dedicated towards the unwavering care of animals in need & distress.
            </p>
            <p className="text-lg md:text-xl text-white animate-fade-in animate-delay-300">
              Together we can make a difference in the lives of these wonderful animals who deserve to co-exist with us.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
              <Button className="bg-teal-600 hover:bg-teal-700 text-base md:text-lg hover-scale">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 mb-12 md:mb-20 text-gradient-teal">
              What We Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Animal Rehabilitation */}
              <div className="flex flex-col items-center animate-fade-in h-full">
                <div className="relative w-full md:w-[90%] mx-auto mb-8 rounded-lg overflow-hidden image-hover-zoom transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:border-teal-500" style={{ width: '100%', paddingTop: '100%' }}>
                  <img
                    src="/images/rehab.png"
                    alt="Animal Rehabilitation"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center animated-underline">Animal Rehabilitation</h3>
                  <p className="text-lg text-gray-700 text-center">
                    We focus on rehabilitating rescued dogs by ensuring nutritious meals; proper medical attention; exercise and love to heal.
                  </p>
                </div>
              </div>

              {/* Animal Vaccination */}
              <div className="flex flex-col items-center animate-fade-in h-full">
                <div className="relative w-full md:w-[90%] mx-auto mb-8 rounded-lg overflow-hidden image-hover-zoom transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:border-teal-500" style={{ width: '100%', paddingTop: '100%' }}>
                  <img
                    src="/images/vaccine.png"
                    alt="Animal Vaccination"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center animated-underline">Animal Vaccination</h3>
                  <p className="text-lg text-gray-700 text-center">
                    We provide essential vaccinations to strays, including rabies, distemper, parvovirus, and more to prevent disease spread.
                  </p>
                </div>
              </div>

              {/* Community Awareness */}
              <div className="flex flex-col items-center animate-fade-in h-full">
                <div className="relative w-full md:w-[90%] mx-auto mb-8 rounded-lg overflow-hidden image-hover-zoom transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:border-teal-500" style={{ width: '100%', paddingTop: '100%' }}>
                  <img
                    src="/images/awareness.png"
                    alt="Community Awareness"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center animated-underline">Community Awareness</h3>
                  <p className="text-lg text-gray-700 text-center">
                    We conduct educational programs, workshops, and outreach activities to promote responsible pet ownership and animal welfare.
                  </p>
                </div>
              </div>

              {/* Feeding Programs */}
              <div className="flex flex-col items-center animate-fade-in h-full">
                <div className="relative w-full md:w-[90%] mx-auto mb-8 rounded-lg overflow-hidden image-hover-zoom transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:border-teal-500" style={{ width: '100%', paddingTop: '100%' }}>
                  <img
                    src="/images/feeding.png"
                    alt="Feeding Programs"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center animated-underline">Feeding Programs</h3>
                  <p className="text-lg text-gray-700 text-center">
                    We maintain regular feeding spots across the city to ensure stray dogs receive nutritious food and clean water daily.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Why Support Us Section */}
      <div className="bg-white py-16 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-16 text-gradient-teal inline-block px-8">
              Why Support Us?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 animate-slide-left">
                <p className="text-lg md:text-xl text-gray-700">
                  Karma Animal Foundation has been working tirelessly for over a decade to improve the lives of stray dogs in Gurgaon.
                  With your support, we can continue to make a difference:
                </p>

                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-start gap-3 md:gap-4 animate-fade-in">
                    <span className="text-teal-600 font-bold mt-1 text-lg md:text-xl flex-shrink-0">✓</span>
                    <span className="text-base md:text-xl">We have rescued over 500 dogs since our inception</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4 animate-fade-in">
                    <span className="text-teal-600 font-bold mt-1 text-lg md:text-xl flex-shrink-0">✓</span>
                    <span className="text-base md:text-xl">We provide comprehensive veterinary care to all our rescues</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4 animate-fade-in">
                    <span className="text-teal-600 font-bold mt-1 text-lg md:text-xl flex-shrink-0">✓</span>
                    <span className="text-base md:text-xl">We conduct thorough adoption processes to ensure perfect matches</span>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4 animate-fade-in">
                    <span className="text-teal-600 font-bold mt-1 text-lg md:text-xl flex-shrink-0">✓</span>
                    <span className="text-base md:text-xl">We run community awareness programs about animal welfare</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-6 animate-slide-right">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-md image-hover-zoom">
                  <img
                    src="/images/dog1.png"
                    alt="Rescued dog"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-md image-hover-zoom animate-delay-100">
                  <img
                    src="/images/dog2.png"
                    alt="Rescued dog"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-md image-hover-zoom animate-delay-200">
                  <img
                    src="/images/dog3.png"
                    alt="Rescued dog"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-md image-hover-zoom animate-delay-300">
                  <img
                    src="/images/dog4.png"
                    alt="Rescued dog"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-white py-16 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-16 text-gradient-teal">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
              {[
                { id: 1, name: "Mala Sahni Seth", image: "/images/team/Mala.png" },
                { id: 2, name: "Sumer Dev Seth", image: "/images/team/SDS.png" },
                { id: 3, name: "Meena Malhotra", image: "/images/team/MM.png" },
                { id: 4, name: "Manjunath Kamath", image: "/images/team/MK.png" },
              ].map((member) => (
                <div key={member.id} className="text-center">
                  <div
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden bg-white border border-gray-200
                    transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:border-teal-500"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{member.name}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Why Adopt an Indian Dog Section */}
      <div className="bg-gray-50 py-16 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-16 text-gradient-teal">
              Why Adopt an Indian Dog?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative lg:w-[80%] mx-auto aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/dog5.png"
                  alt="Indian Street Dog"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-gray-700">
                  Every animal deserves to live with dignity and we can definitely decide to adopt instead of buying a pedigree dog which accelerates breeding which is completely unethical.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  By making the choice to adopt, you not only provide the adopted dog with the best life but also in turn save a life by making space for another rescue.
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  Further adopting an Indian dog is even more special to us as they are resilient and well acclimatised to our indigenous conditions. So we do envision a future where Indies will be adopted by choice.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-teal-600 hover:bg-teal-700 text-base md:text-lg hover-scale">
                    <Link href="/dogs">View Our Dogs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 md:mb-16 text-gradient-teal">
              Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  id: "testimonial-1",
                  text: "It's a place full of love. Team is doing so much for the dogs who need help and shelter. Every animal lover should help them and encourage them for continuing this kindness.",
                },
                {
                  id: "testimonial-2",
                  text: "It's a safe haven for abandoned dogs. Everyone caring for them are lovely people. Please visit them for adoptions, donations and feeding!",
                },
                {
                  id: "testimonial-3",
                  text: "I decided to spend my birthday here!! Commendable job done by the owner and the staff. Really appreciate the efforts. There are so many adorable dogs for adoption guys. Please adopt and provide them a better home!",
                },
                {
                  id: "testimonial-4",
                  text: "Awesome construction. Dogs were very clean and kept in very hygienic conditions wholesome nutrients and fresh from the farm human grade ingredients were used by well trained staff for cooking fresh evening meals. It shows they cook every meal fresh. Thanks for giving such wonderful care to these beautiful babies god bless the whole team for a successful future",
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-5 md:p-8 rounded-lg shadow-sm relative"
                >
                  <div className="text-4xl md:text-6xl text-teal-200 absolute top-3 left-3 md:top-4 md:left-4">
                    "
                  </div>
                  <p className="text-sm md:text-base text-gray-700 italic mb-4 md:mb-6 relative z-10 pl-5 md:pl-6">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
