import { FaGraduationCap, FaUserCheck } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contact() {
    return (
        <section className="relative w-full py-16 px-4 sm:px-6 lg:py-24 lg:px-8" id='contacts'>
            {/* Decorative floating blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute -left-10 top-8 w-72 h-72 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'float1 12s ease-in-out infinite' }}>
                    <defs>
                        <linearGradient id="g1" x1="0%" x2="100%">
                            <stop offset="0%" stopColor="#7C3AED" />
                            <stop offset="100%" stopColor="#0EA5E9" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#g1)" d="M41.5,-58.9C53.7,-52.5,64.1,-41.6,69.9,-28.2C75.8,-14.9,77.1,0.9,72.6,14.9C68.2,29,58,41.1,45.3,48.9C32.5,56.6,17.2,60,2.7,57.1C-11.7,54.2,-23.3,44.9,-36.3,37.5C-49.2,30,-63.6,24.5,-67.9,14.9C-72.2,5.2,-66.4,-9.5,-59.1,-22.8C-51.8,-36.1,-43,-48,-31.3,-55.9C-19.6,-63.8,-5,-67.7,9,-66.6C23,-65.5,46.6,-65.3,41.5,-58.9Z" transform="translate(100 100)" />
                </svg>

                <svg className="absolute -right-24 bottom-6 w-96 h-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'float2 18s ease-in-out infinite' }}>
                    <defs>
                        <linearGradient id="g2" x1="0%" x2="100%">
                            <stop offset="0%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#7C3AED" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#g2)" d="M35.1,-52.7C46.3,-44.2,57.1,-35.4,63,-22.9C68.9,-10.3,69.9,6.9,63.9,22.5C58,38.1,45.2,52.1,29.6,58.9C14.1,65.6,-4.2,65.1,-20.8,59.9C-37.3,54.8,-52,45,-60.6,31.6C-69.1,18.2,-71.5,1.2,-67.1,-14.3C-62.7,-29,-51.6,-41.1,-38.6,-50.9C-25.6,-60.7,-12.8,-68.3,0.9,-69.5C14.6,-70.7,29.3,-65.1,35.1,-52.7Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="mx-auto max-w-4xl">
                <div className="relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    {/* Gradient border effect */}
                    <div className="absolute -inset-[0.5px] rounded-2xl bg-linear-to-l from-purple-600 via-purple-600 to-sky-600 opacity-50 blur-sm"></div>
                    <div className="absolute inset-0 p-0.5 rounded-2xl bg-linear-to-r from-purple-400 via-purple-700 to-sky-600">
                        <div className="h-full w-full rounded-2xl bg-linear-to-br from-[#050916] to-[#090a38]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 pb-3">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">Hansara Hettiarachchi</h2>
                                <p className="mt-2 text-slate-300">BCs (Hons) Software Engineering (Undergraduate)</p>
                                <p className="mt-4 text-slate-400 max-w-xl">Developer-facing contact card — animated, modern and easy to scan. Replace demo details below with your real content as needed.</p>
                            </div>

                            <div className="shrink-0 flex gap-3 items-center">
                                <a href="mailto:hansarasasanka@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 shadow-md transform hover:-translate-y-1 transition-all">
                                    <HiMail className="w-5 h-5" />
                                    Email
                                </a>

                                <a href="https://wa.me/94783061492" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-4 py-2 shadow-md transform hover:-translate-y-1 transition-all">
                                    <IoLogoWhatsapp className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-[#0a0b2e]/50 backdrop-blur-sm shadow-md border border-purple-500/20 flex items-start gap-4 hover:scale-[1.01] hover:border-purple-500/40 transition-all">
                                <div className="p-3 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 text-white">
                                    <HiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className='text-sky-400 hover:text-sky-300 hover:underline wrap-break-word'>
                                        <a className="text-xs md:text-[15px]" href="mailto:hansarasasanka@gmail.com">hansarasasanka@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0a0b2e]/50 backdrop-blur-sm shadow-md border border-purple-500/20 flex items-start gap-4 hover:scale-[1.01] hover:border-purple-500/40 transition-all">
                                <div className="p-3 rounded-lg bg-linear-to-br from-teal-500 to-green-500 text-white">
                                    <HiPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">WhatsApp / Mobile</h3>
                                    <div className="text-slate-300">
                                        <a className="text-emerald-400 hover:text-emerald-300 hover:underline" href="https://wa.me/94783061492">+94 78 3061 492</a>
                                        <div className="mt-1 text-sm">Call - <a className="text-slate-300 hover:text-white font-medium" href="tel:+94783061492">+94 78 3061 492</a> / <a className="text-slate-300 hover:text-white font-medium" href="tel:+94705260208">+94 70 5260 208</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0a0b2e]/50 backdrop-blur-sm shadow-md border border-purple-500/20 flex items-start gap-4 hover:scale-[1.01] hover:border-purple-500/40 transition-all">
                                <div className="p-3 rounded-lg bg-linear-to-br from-amber-500 to-orange-500 text-white">
                                    <FaGraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Education</h3>
                                    <p className="text-slate-300">BCs (Hons) Software Engineering — Undergraduate</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0a0b2e]/50 backdrop-blur-sm shadow-md border border-purple-500/20 flex items-start gap-4 hover:scale-[1.01] hover:border-purple-500/40 transition-all">
                                <div className="p-3 rounded-lg bg-linear-to-br from-green-500 to-blue-500 text-white">
                                    <FaUserCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Availability</h3>
                                    <p className="text-slate-300">Open to collaboration and developer-focused opportunities. Use any of the contact methods above.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Inline keyframes for subtle floating motion */}
            <style>
                {`@keyframes float1 { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(6deg); } 100% { transform: translateY(0px) rotate(0deg); } }
          @keyframes float2 { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(16px) rotate(-6deg); } 100% { transform: translateY(0px) rotate(0deg); } }
        `}
            </style>
        </section>
    )
}
