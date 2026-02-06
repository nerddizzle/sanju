import Image from 'next/image';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                    <Image
                        src="/portrait.jpg"
                        alt="Sanjeet Maharjan"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <h1 className="font-serif text-4xl md:text-5xl mb-4">About Sanju</h1>
                    <div className="space-y-4 text-lg text-black/70 font-light leading-relaxed">
                        <p>
                            Sanju is a contemporary visual artist known for his evocative paintings that explore the intersection of memory, nature, and the subconscious.
                        </p>
                        <p>
                            With a background in fine arts and years of experimentation with oil and acrylic mediums, his work invites viewers into a contemplative space where colors speak the unspoken languages of emotion.
                        </p>
                        <p>
                            Based in [City, Country], Sanju draws inspiration from the silent rhythms of the natural world, translating them into vibrant, textured canvases that challenge our perception of reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
