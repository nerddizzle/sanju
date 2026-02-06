"use client";

import { useState } from "react";

import { X, Search } from "lucide-react";

import Image from 'next/image';

const categories = ["All", "Oil", "Acrylic", "Watercolor", "Sketch"];

const allPaintings = [
    { id: 1, title: "Coastal Sunset", year: "2024", medium: "Oil", dimensions: "24 x 30 in", category: "Oil", aspect: "aspect-[4/5]", src: "/artworks/sunset-sea.jpg" },
    { id: 2, title: "Urban Twilight", year: "2024", medium: "Oil", dimensions: "30 x 40 in", category: "Oil", aspect: "aspect-[4/3]", src: "/artworks/city-abstract.jpg" },
    { id: 3, title: "Bluebird Serenade", year: "2023", medium: "Watercolor", dimensions: "12 x 16 in", category: "Watercolor", aspect: "aspect-[3/4]", src: "/artworks/bluebird.jpg" },
    { id: 4, title: "Loyal Companion", year: "2024", medium: "Watercolor", dimensions: "20 x 20 in", category: "Watercolor", aspect: "aspect-square", src: "/artworks/dog-popart.jpg" },
    { id: 5, title: "Starry Tree", year: "2023", medium: "Acrylic", dimensions: "24 x 36 in", category: "Acrylic", aspect: "aspect-[4/3]", src: "/artworks/tree-starry.jpg" },
    { id: 6, title: "Starry Tree", year: "2023", medium: "Acrylic", dimensions: "24 x 36 in", category: "Sketch", aspect: "aspect-[4/3]", src: "/artworks/sketch1.jpeg" },
    { id: 7, title: "Starry Tree", year: "2023", medium: "Acrylic", dimensions: "24 x 36 in", category: "Sketch", aspect: "aspect-[4/3]", src: "/artworks/sketch2.jpeg" },

];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPainting, setSelectedPainting] = useState<typeof allPaintings[0] | null>(null);

    const filteredPaintings = allPaintings.filter(painting => {
        const matchesCategory = activeCategory === "All" || painting.category === activeCategory;
        const matchesSearch = painting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            painting.medium.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="font-serif text-4xl md:text-5xl mb-8">The Collection</h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${activeCategory === cat
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black/60 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                    <input
                        type="text"
                        placeholder="Search artworks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black/20 transition-all font-sans"
                    />
                </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[50vh]">
                {filteredPaintings.map((painting) => (
                    <div
                        key={painting.id}
                        onClick={() => setSelectedPainting(painting)}
                        className="group cursor-pointer break-inside-avoid animate-in fade-in zoom-in-95 duration-500"
                    >
                        <div className={`${painting.aspect} w-full bg-stone-200 relative overflow-hidden mb-4`}>
                            <Image
                                src={painting.src}
                                alt={painting.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="space-y-1">
                            <h2 className="font-serif text-2xl group-hover:text-black/70 transition-colors">{painting.title}</h2>
                            <p className="text-sm text-black/50">{painting.medium}, {painting.year}</p>
                            <p className="text-xs text-black/40">{painting.dimensions}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedPainting && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedPainting(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedPainting(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full bg-white/5 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`relative w-full md:w-2/3 h-[50vh] md:h-auto bg-stone-200 flex items-center justify-center overflow-hidden`}>
                            <Image
                                src={selectedPainting.src}
                                alt={selectedPainting.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 800px"
                                priority
                            />
                        </div>

                        <div className="w-full md:w-1/3 bg-white p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="font-serif text-3xl md:text-4xl mb-4">{selectedPainting.title}</h2>
                            <div className="space-y-4 text-black/70">
                                <p className="text-lg">{selectedPainting.medium}</p>
                                <p>{selectedPainting.year}</p>
                                <p>{selectedPainting.dimensions}</p>
                                <p className="text-sm opacity-60 pt-4">Category: {selectedPainting.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
