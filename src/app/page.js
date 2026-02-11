import Link from 'next/link';
import ProfileImage from "@/components/ProfileImage";

export default function ProfilePage() {
    return (
        <div className="min-h-screen max-w-3xl mx-auto px-8 py-24 selection:bg-zinc-200 dark:selection:bg-zinc-800">

            {/* 1. Header: Minimalist & Focused */}
            <header className="flex flex-col items-center text-center mb-32">
                {/* Image with grayscale effect */}
                <div className="w-28 h-28 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out mb-8">
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
                        <ProfileImage />
                    </div>
                </div>

                <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
                    Daniel dos Santos Araujo
                </h1>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-600 dark:text-blue-500 mb-8">
                    Software Engineer • M.Sc. Mathematics
                </p>

                <div className="flex gap-3">
                    <a
                        href='https://github.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-1.5 text-sm border border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-transparent dark:hover:bg-transparent hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                    >
                        GitHub
                        <span className="text-[10px] leading-none">↗</span>
                    </a>

                    <a
                        href="mailto:denenewton@icloud.com"
                        className="inline-flex items-center gap-2 px-5 py-1.5 text-sm border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-white transition-colors duration-300"
                    >
                        Contact
                    </a>
                </div>
            </header>

            {/* 2. Bio Section: Editorial Style */}
            <section id="about" className="mb-32 scroll-mt-24">
                <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Biography</h2>
                        <div className="text-xl leading-relaxed text-zinc-800 dark:text-zinc-200 font-serif">
                            <p>
                                Based in Brazil, I bridge the gap between high-level <span className="italic">mathematical theory</span> and pragmatic software engineering. With a Master’s Degree in Mathematics, my approach to code is defined by rigor, logic, and scalability.
                            </p>
                            <p className="mt-6">
                                I specialize in native systems with <span className="font-medium text-blue-600">Kotlin</span> and interactive web interfaces via <span className="font-medium text-blue-600">React</span>.
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-4">Sobre</h2>
                        <p className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
                            Engenheiro de Software com Mestrado em Matemática. Minha prática é pautada pelo rigor analítico, focada em criar soluções de alta performance com Kotlin e ecossistemas React.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Projects Grid: Clean Lines */}
            <section id="projects" className="w-full mb-32">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-12">Selected Work</h2>
                <div className="grid grid-cols-1 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden">
                    {[
                        { title: "Native Mobile", tech: "Kotlin", desc: "Android architecture focused on performance." },
                        { title: "React Ecosystem", tech: "Next.js", desc: "Scalable web platforms with seamless UX." },
                        { title: "Desktop Core", tech: "Kotlin", desc: "Multi-platform tools for power users." },
                        { title: "Logical Systems", tech: "JS / Math", desc: "Complex algorithm visualization engines." }
                    ].map((project, i) => (
                        <Link key={i} href={`/movie/${i}`} className="group relative bg-white dark:bg-zinc-950 p-10 transition-colors duration-500 hover:bg-zinc-50 dark:hover:bg-zinc-900">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-2xl font-light tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">{project.tech}</span>
                            </div>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">{project.desc}</p>
                            <div className="mt-4 overflow-hidden h-0 group-hover:h-5 transition-all duration-300">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Case Study →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
