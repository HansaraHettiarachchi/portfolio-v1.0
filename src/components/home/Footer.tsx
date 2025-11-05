import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative w-full mt-20 border-t border-purple-500/20">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-t from-[#020112] via-[#040218] to-transparent pointer-events-none"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-sky-400 text-transparent bg-clip-text">
                            Hansara Hettiarachchi
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Full-stack developer passionate about building elegant solutions to complex problems. Let's create something amazing together.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://github.com/HansaraHettiarachchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#0a0b2e]/50 border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all transform hover:scale-110"
                            >
                                <FaGithub className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hansara-hettiarachchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#0a0b2e]/50 border border-purple-500/20 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all transform hover:scale-110"
                            >
                                <FaLinkedin className="w-5 h-5 text-slate-300 hover:text-sky-400 transition-colors" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/16JEruXkFh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#0a0b2e]/50 border border-purple-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all transform hover:scale-110"
                            >
                                <FaFacebook className="w-5 h-5 text-slate-300 hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/hansara_hettiarachchi?igsh=MXgwM25sbzExdmdvcQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#0a0b2e]/50 border border-purple-500/20 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all transform hover:scale-110"
                            >
                                <FaInstagram className="w-5 h-5 text-slate-300 hover:text-pink-400 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">About</a>
                            </li>
                            <li>
                                <a href="#timeline" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Experience</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-slate-400 text-sm">Full-Stack Development</li>
                            <li className="text-slate-400 text-sm">Web Applications</li>
                            <li className="text-slate-400 text-sm">E-Commerce Solutions</li>
                            <li className="text-slate-400 text-sm">ERP Systems</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <HiMail className="w-4 h-4 text-purple-400" />
                                <a href="mailto:hansarasasanka@gmail.com" className="hover:text-purple-400 transition-colors">
                                    hansarasasanka@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <HiPhone className="w-4 h-4 text-teal-400" />
                                <a href="tel:+94783061492" className="hover:text-teal-400 transition-colors">
                                    +94 78 3061 492 / +94 70 5260 208
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <IoLogoWhatsapp className="w-4 h-4 text-green-400" />
                                <a href="https://wa.me/94783061492" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                    +94 78 3061 492
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-purple-500/20 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm text-center md:text-left">
                        © {currentYear} Hansara Hettiarachchi. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
                    </p>
                </div>

                {/* Decorative gradient orbs */}
                <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-10 w-40 h-40 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </footer>
    )
}
