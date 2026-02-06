import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-tight mb-8">
                    Capturing the unspoken through colors.
                </h1>
                <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto font-light leading-relaxed">
                    An online portfolio by Sanjeet Maharjan, delving into emotion, nature, and the human condition through oil, acrylic, sketch, and watercolor.
                </p>
                <div className="pt-8">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition-all duration-300 text-sm font-medium tracking-wide group"
                    >
                        View Collection
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
