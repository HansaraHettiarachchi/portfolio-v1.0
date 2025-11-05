
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
        description: "A full-featured e-commerce platform with secure payment integration, real-time inventory management, and advanced search functionality. Built with modern tech stack for optimal performance.",
        tags: ["React", "TypeScript", "MySQL", "Bootstrap", "Node.js", "Exprese.js", "Prisma"],
        githubLink: "https://github.com/HansaraHettiarachchi/Adora-project.git",
        liveLink: "https://hansarahettiarachchi.github.io/Adora-project/",
        gradient: "from-purple-400 via-purple-700 to-sky-600"
    },
    {
        title: "Adora E-Commerce - SpringBoot Backend",
        description: "Enterprise Resource Planning system with modules for inventory, HR, finance, and analytics. Features role-based access control and real-time dashboards for business insights.",
        tags: ["SpringBoot", "MySQL"],
        githubLink: "https://github.com/HansaraHettiarachchi/Adora-Spring-Boot-Backend.git",
        gradient: "from-teal-400 via-cyan-600 to-blue-600"
    },
    {
        title: "Saddha Web Front End",
        description: "Face recognition-based attendance tracking system with real-time detection, automated reporting, and comprehensive analytics dashboard. Includes mobile app for field employees.",
        tags: ["Next.js", "Tailwind"],
        githubLink: "https://github.com/HansaraHettiarachchi/saddha-project-frontend.git",
        liveLink: "https://saddha-project-frontend.vercel.app/",
        gradient: "from-pink-400 via-rose-600 to-orange-600"
    },
    {
        title: "Gymnasium Management System",
        description: "Collaborative project management tool with real-time updates, team communication, file sharing, and advanced task tracking. Includes Kanban boards and Gantt charts.",
        tags: ["php", "Mysql", "HTML", "CSS", "Js", "Bootstrap", "JQuery"],
        githubLink: "https://github.com/HansaraHettiarachchi/GYM.git",
        liveLink: "http://hansarahettiarachchi.space/",
        gradient: "from-indigo-400 via-purple-600 to-pink-600"
    },
    {
        title: "Beauty Saloon E-Commerce Web",
        description: "A full-featured e-commerce platform with secure payment integration, real-time inventory management, and advanced search functionality. Built with modern tech stack for optimal performance.",
        tags: ["React", "TypeScript", "MySQL", "Tailwind", "Springboot"],
        githubLink: "https://github.com/HansaraHettiarachchi/project-beauty-salon-front-end.git",
        liveLink: "https://project-beauty-salon-front-end.vercel.app/",
        gradient: "from-purple-400 via-purple-700 to-sky-600"
    },
    {
        title: "Institute Management System",
        description: "Enterprise Resource Planning system with modules for inventory, HR, finance, and analytics. Features role-based access control and real-time dashboards for business insights.",
        tags: ["Java Swing", "MySQL", "Python", "Deepface", "Tenserflow", "OpenCv", "Machine Learning"],
        githubLink: "https://github.com/HansaraHettiarachchi/Institute-Management-System.git",
        gradient: "from-teal-400 via-cyan-600 to-blue-600"
    },
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
