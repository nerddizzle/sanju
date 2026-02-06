import { Mail, Instagram, Phone, Facebook, Youtube } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-32 text-center text-black">
            <h1 className="font-serif text-4xl md:text-5xl mb-8">Get in Touch</h1>
            <p className="text-lg text-black/60 mb-12 font-light">
                For inquiries regarding available work, commissions, or exhibitions, please contact:
            </p>

            <div className="space-y-6 flex flex-col items-center">
                <a href="mailto:dabstractface@gmail.com" className="flex items-center gap-3 text-xl hover:text-black/60 transition-colors">
                    <Mail className="w-5 h-5" />
                    dabstractface@gmail.com
                </a>

                <a href="tel:+9779803041676" className="flex items-center gap-3 text-xl hover:text-black/60 transition-colors">
                    <Phone className="w-5 h-5" />
                    +977 980-03041676
                </a>

                <a href="https://www.instagram.com/sanjeetmaharjan?igsh=MjY3cW1nYnpubmEx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:text-black/60 transition-colors">
                    <Instagram className="w-5 h-5" />
                    @sanjeetmaharjan
                </a>

                <a href="https://www.facebook.com/share/17oGGCJzKx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:text-black/60 transition-colors">
                    <Facebook className="w-5 h-5" />
                    Sanjeet.Maharjan.9
                </a>

                <a href="https://www.youtube.com/@maharjansanjeet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:text-black/60 transition-colors">
                    <Youtube className="w-5 h-5" />
                    @maharjansanjeet
                </a>
            </div>

            <div className="mt-20 w-full space-y-8">
                <div className="space-y-2">
                    <h2 className="font-serif text-3xl">Visit the Studio</h2>
                    <p className="text-black/60 font-light">Artan Nepal, Lalitpur</p>
                </div>

                {/* Map Container */}
                <div className="w-full h-80 bg-stone-100 grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=Artan%20Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full"
                        title="Artan Nepal Location"
                    ></iframe>
                </div>

                <a
                    href="https://www.google.com/maps/place/Artan+Nepal/@27.6709443,85.3180661,17z/data=!4m14!1m7!3m6!1s0x39eb19ce2ea4ceb5:0x706436f58505a85c!2sArtan+Nepal!8m2!3d27.6709443!4d85.320641!16s%2Fg%2F11f263z_90!3m5!1s0x39eb19ce2ea4ceb5:0x706436f58505a85c!8m2!3d27.6709443!4d85.320641!16s%2Fg%2F11f263z_90?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors"
                >
                    View on Google Maps
                </a>
            </div>
        </div>
    );
}
