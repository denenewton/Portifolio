import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap', // Improves performance by showing system font until Geist loads
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});


export const metadata = {
    title: {
        default: "Daniel dos Santos Araujo | Software Engineer",
        template: "%s | Daniel dos Santos Araujo"
    },
    description: "Daniel dos Santos Araujo: Specialized in Kotlin (Mobile/Desktop) and modern Web ecosystems using JavaScript, React, and Next.js.",
    keywords: ["Kotlin", "Android", "JavaScript", "React", "Next.js", "Desktop Development", "Mobile Developer"],
    openGraph: {
        title: "Daniel dos Santos Araujo - Multi-Platform Portfolio",
        description: "Building native experiences with Kotlin and high-performance web apps with React.",
        type: "website",
        locale: "pt_BR",
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body
            className={
            `${geistSans.variable} ${geistMono.variable} 
            antialiased 
            min-h-screen 
           bg-white dark:bg-zinc-950 
           text-zinc-900 dark:text-zinc-100
           selection:bg-blue-500 selection:text-white
            `}
        >
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between font-medium">
                <span className="font-bold tracking-tighter">DA.</span>
                <div className="flex gap-6 text-sm">
                    <Link href="#about" className="hover:text-blue-500 transition">About</Link>
                    <Link href="#projects" className="hover:text-blue-500 transition">Projects</Link>
                    <a href="mailto:denenewton@icloud.com" className="hover:text-blue-500 transition">Contact</a>
                </div>
            </nav>
        </header>
        {/* You can add a Navbar here later */}
        <main>{children}</main>
        {/* 4. Footer: Minimal & Classic */}
        <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                © {new Date().getFullYear()} Daniel dos Santos Araujo
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-blue-600 transition">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-blue-600 transition">GitHub</a>
                <a href="mailto:denenewton@icloud.com" className="hover:text-blue-600 transition">Email</a>
            </div>
        </footer>
        </body>
        </html>
    );
}
