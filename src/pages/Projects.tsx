
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink?: string;
    gradient: string;
}

const projects: ProjectCardProps[] = [
    {
        title: "Adora E-Commerce Web Application",
        description: "A complete e-commerce web application built using React, TypeScript, and Bootstrap for the frontend, and Node.js, Express.js, Prisma, and MySQL for the backend. Includes product catalog, cart, wishlist, authentication, and admin dashboard. Designed to demonstrate full-stack development skills.",
        tags: ["React", "TypeScript", "Bootstrap", "Node.js", "Express.js", "Prisma", "MySQL"],
        githubLink: "https://github.com/HansaraHettiarachchi/Adora-project.git",
        liveLink: "https://hansarahettiarachchi.github.io/Adora-project/",
        gradient: "from-purple-400 via-purple-700 to-sky-600"
    },
    {
        title: "Adora E-Commerce - SpringBoot Backend",
        description: "Spring Boot backend developed to complement the Adora frontend and showcase enterprise-grade backend development. Features include RESTful APIs, JWT authentication, role-based access, and MySQL integration. Created to gain hands-on experience with Spring Boot and backend architecture.",
        tags: ["SpringBoot", "MySQL", "JWT", "REST API", "Spring Security"],
        githubLink: "https://github.com/HansaraHettiarachchi/Adora-Spring-Boot-Backend.git",
        gradient: "from-teal-400 via-cyan-600 to-blue-600"
    },
    {
        title: "Saddha Web Front End",
        description: "Frontend-only application built with Next.js and Tailwind CSS for a face recognition-based attendance system. Designed to integrate with a Python backend, it features real-time detection, attendance logging, and analytics dashboard.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubLink: "https://github.com/HansaraHettiarachchi/saddha-project-frontend.git",
        liveLink: "https://saddha-project-frontend.vercel.app/",
        gradient: "from-pink-400 via-rose-600 to-orange-600"
    },
    {
        title: "Gymnasium Management System",
        description: "A PHP-based management system built for Country Fitness Gymnasium to handle daily operations. Includes modules for member registration, scheduling, payments, staff management, and expense tracking. Developed with Bootstrap, jQuery, and PHPMailer integration.",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHPMailer"],
        githubLink: "https://github.com/HansaraHettiarachchi/GYM.git",
        liveLink: "http://hansarahettiarachchi.space/",
        gradient: "from-indigo-400 via-purple-600 to-pink-600"
    },
    {
        title: "Beauty Saloon E-Commerce Web",
        description: "📍 At Kaleox Software Solutions — An open-source collaborative project aimed at helping aspiring developers gain real-world experience. Led project scope definition and mentored contributors. Built with React, TypeScript, and Tailwind CSS for the frontend, and Spring Boot for the backend. Designed to be a free-to-join platform for learning and portfolio building.",
        tags: ["React", "TypeScript", "Tailwind CSS", "SpringBoot"],
        githubLink: "https://github.com/HansaraHettiarachchi/project-beauty-salon-front-end.git",
        liveLink: "https://project-beauty-salon-front-end.vercel.app/",
        gradient: "from-purple-400 via-purple-700 to-sky-600"
    },
    {
        title: "Institute Management System",
        description: "Management system for educational institutes with facial recognition-based attendance marking. Built using Java Swing for UI and Python (DeepFace, OpenCV, TensorFlow) for detection. Includes modules for student management and daily operations.",
        tags: ["Java Swing", "Python", "MySQL", "DeepFace", "TensorFlow", "OpenCV", "Machine Learning"],
        githubLink: "https://github.com/HansaraHettiarachchi/Institute-Management-System.git",
        gradient: "from-teal-400 via-cyan-600 to-blue-600"
    }
];



function ProjectCard({ title, description, tags, githubLink, liveLink, gradient }: ProjectCardProps) {
    return (
        <div className="group relative rounded-xl transition-all duration-300 hover:-translate-y-2">
            {/* Glow Effect */}
            <div className={`absolute -inset-px rounded-xl bg-linear-to-l ${gradient} opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-300`}></div>

            {/* Card Border */}
            <div className={`p-px rounded-xl bg-linear-to-r ${gradient}`}>
                <div className="relative h-full rounded-xl bg-linear-to-br from-[#050916] to-[#090a38] p-6 flex flex-col">

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 grow">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-purple-400/50 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 group/link"
                        >
                            <FaGithub className="text-lg" />
                            <span className="text-sm font-medium">Code</span>
                        </a>

                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 group/link"
                            >
                                <FaExternalLinkAlt className="text-sm" />
                                <span className="text-sm font-medium">Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <section className="relative mt-20 mb-10" id="projects">
            {/* Section Header */}
            <div className="mb-12">
                <h2 className="text-md md:text-lg text-slate-500 uppercase tracking-wider">Portfolio</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Projects</h1>
                <p className="text-slate-400 text-lg max-w-2xl">
                    Explore my recent work showcasing full-stack development, modern UI/UX, and innovative solutions.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center mt-16">
                <Link
                    to="/projects"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    {/* Button Glow */}
                    <div className="absolute -inset-px rounded-full bg-linear-to-r from-purple-400 via-pink-500 to-orange-400 opacity-70 blur group-hover:opacity-100 transition-opacity"></div>

                    {/* Button Background */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600 transition-all"></div>

                    {/* Button Content */}
                    <span className="relative text-white font-semibold text-lg">
                        View All Projects
                    </span>
                    <FaArrowRight className="relative text-white text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
