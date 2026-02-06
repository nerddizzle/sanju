export function Footer() {
    return (
        <footer className="w-full py-12 border-t border-black/5 mt-auto bg-black/5">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm text-black/40 font-medium">
                    &copy; {new Date().getFullYear()} Sanjeet Maharjan. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
