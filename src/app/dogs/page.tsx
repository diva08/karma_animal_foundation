import Link from "next/link";
import { Button } from "@/components/ui/button";

// Dog data
const dogsOfKarma = [
  { id: 1, name: "JACK", image: "/images/dogs/jack.png", age: "2 years", gender: "Male", size: "Medium", description: "Playful and energetic, loves to run and play fetch." },
  { id: 2, name: "SHIVA", image: "/images/dogs/shiva.png", age: "3 years", gender: "Female", size: "Large", description: "Calm and gentle, great with children and other pets." },
  { id: 3, name: "SASHA AKA SANDY", image: "/images/dogs/sasha.png", age: "1 year", gender: "Female", size: "Medium", description: "Sweet and affectionate, loves cuddles and attention." },
  { id: 4, name: "MACK", image: "/images/dogs/mack.png", age: "4 years", gender: "Male", size: "Large", description: "Loyal and protective, would make a great guard dog." },
  { id: 5, name: "CHAI", image: "/images/dogs/chai.png", age: "6 months", gender: "Male", size: "Small", description: "Playful puppy, full of energy and curiosity." },
  { id: 6, name: "GUPPY", image: "/images/dogs/guppy.png", age: "5 years", gender: "Female", size: "Medium", description: "Quiet and reserved, enjoys peaceful walks and relaxation." },
  { id: 7, name: "BHURA", image: "/images/dogs/bhura.png", age: "2 years", gender: "Male", size: "Medium", description: "Friendly and sociable, gets along well with everyone." },
  { id: 8, name: "DIESEL", image: "/images/dogs/diesel.png", age: "3 years", gender: "Male", size: "Large", description: "Strong and athletic, perfect for an active family." },
];

export default function DogsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Dogs of Karma</h1>
        <p className="text-xl text-gray-600">
          Every animal deserves to live with dignity. Meet our current residents looking for forever homes.
        </p>
      </div>

      {/* Dog Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {dogsOfKarma.map((dog) => (
          <div
            key={dog.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src={dog.image}
                alt={dog.name}
                className="absolute inset-0 w-full h-full object-cover p-2"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{dog.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{dog.age}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{dog.gender}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{dog.size}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
