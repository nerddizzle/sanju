import { Hero } from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Featured Work Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Selected Works</h2>
          <Link href="/gallery" className="hidden md:block text-sm font-medium hover:underline underline-offset-4">
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden mb-4">
              <Image
                src="/hero1.jpg"
                alt="Abstract Still Life"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-serif text-xl group-hover:text-black/70 transition-colors">Abstract Still Life</h3>
            <p className="text-sm text-black/50 mt-1">Oil on Canvas, 2024</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden mb-4">
              <Image
                src="/hero2.jpg"
                alt="Musical Harmony"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-serif text-xl group-hover:text-black/70 transition-colors">Musical Harmony</h3>
            <p className="text-sm text-black/50 mt-1">Acrylic on Canvas, 2024</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden mb-4">
              <Image
                src="/hero3.jpg"
                alt="Urban Dreams"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-serif text-xl group-hover:text-black/70 transition-colors">Urban Dreams</h3>
            <p className="text-sm text-black/50 mt-1">Mixed Media, 2024</p>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
            View All Works
          </Link>
        </div>
      </section>
    </div>
  );
}
