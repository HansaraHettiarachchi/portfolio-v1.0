
import image from "../../assets/images/basic/img-3.png"
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaLaravel, FaWhatsapp } from 'react-icons/fa'
import { SiSpringboot, SiTailwindcss } from 'react-icons/si'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center mt-5" id="hero">

            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-18 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 order-1 text-center lg:text-left">

                        {/* Status Badge */}
                        {/* <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </div>
                            <span className="text-green-400 text-sm font-semibold">Available for new projects</span>
                        </div> */}

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-slate-400 text-lg sm:text-xl font-medium">Hello, I'm</p>
                                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
                                    <span className="block bg-linear-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                                        Hansara
                                    </span>
                                    <span className="block bg-linear-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                                        Hettiarachchi
                                    </span>
                                </h1>
                            </div>

                            <div className="space-y-4">
                                <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
                                    Full-Stack Developer
                                </p>
                                {/* <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                    I build <span className="text-teal-400 font-semibold">fullstack solutions</span> - from lightweight tools to enterprise-grade systems.
                                </p> */}
                            </div>
                        </div>

                        {/* Specialized In - One Line */}
                        <div className="space-y-3">
                            <p className="text-sm sm:text-base text-slate-500 font-semibold uppercase tracking-wider">Specialized in:</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                                <span className="bg-linear-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">ERP Systems</span>
                                <span className="text-slate-600">•</span>
                                <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">E-Commerce</span>
                                <span className="text-slate-600">•</span>
                                <span className="bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">Custom Applications</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <div className="space-y-1">
                                <p className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    2+
                                </p>
                                <p className="text-slate-500 text-sm sm:text-base font-medium">Years Experience</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                    100%
                                </p>
                                <p className="text-slate-500 text-sm sm:text-base font-medium">Client Satisfaction</p>
                            </div>
                        </div>

                        {/* Tech Stack with Animated Icons */}
                        <div className="space-y-3">
                            <p className="text-sm sm:text-base text-slate-500 font-semibold uppercase tracking-wider">Tech Stack:</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                <div className="group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300">
                                    <FaReact className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-cyan-400 transition-colors animate-spin-slow group-hover:animate-spin" title="React" />
                                </div>
                                <div className="group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300">
                                    <SiSpringboot className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-green-400 transition-colors" title="Spring Boot" />
                                </div>
                                <div className="group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-red-400/50 hover:bg-white/10 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300">
                                    <FaLaravel className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-red-400 transition-colors" title="Laravel" />
                                </div>
                                <div className="group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300">
                                    <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-green-500 transition-colors" title="Node.js" />
                                </div>
                                <div className="group p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-white/10 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300">
                                    <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-teal-400 transition-colors" title="Tailwind CSS" />
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                            <a
                                href="mailto:hansarasasanka@gmail.com"
                                className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
                            >
                                <HiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span>Get In Touch</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/94783061492"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 text-white text-base sm:text-lg font-semibold transition-all"
                            >
                                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-100" />
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                            <div className="h-px w-12 sm:w-16 bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
                            <a
                                href="https://github.com/HansaraHettiarachchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hansara-hettiarachchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-all"
                            >
                                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-transparent max-w-20 sm:max-w-[100px]"></div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative order-2">
                        <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">

                            {/* Image Card with Gradient Border */}
                            <div className="relative rounded-2xl sm:rounded-3xl">
                                {/* Outer Glow */}
                                <div className="absolute -inset-[0.5px] rounded-2xl sm:rounded-3xl bg-linear-to-l from-purple-600 via-purple-600 to-sky-600 opacity-50 blur-sm"></div>

                                {/* Gradient Border */}
                                <div className="relative p-0.5 rounded-2xl sm:rounded-3xl bg-linear-to-r from-purple-400 via-purple-700 to-sky-600">
                                    {/* Inner Dark Background */}
                                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-[#050916] to-[#090a38]">
                                        <img
                                            src={image}
                                            alt="Hansara Hettiarachchi - Full Stack Developer"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Subtle Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-[#050916]/60 to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Top Left */}
                            <div className="absolute -top-3 -left-3 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-[#0a0b2e]/90 backdrop-blur-sm border border-green-500/30 shadow-xl">
                                <div className="flex items-center gap-1.5">
                                    <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-semibold text-green-400">Available</span>
                                </div>
                            </div>

                            {/* Floating Badge - Bottom Right */}
                            <div className="absolute -bottom-3 -right-3 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#0a0b2e]/90 backdrop-blur-sm border border-purple-500/30 shadow-xl">
                                <span className="text-[10px] sm:text-xs font-semibold text-purple-400">2+ Years Exp</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
