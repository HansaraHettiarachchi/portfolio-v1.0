import oci_foundations_associate from "../../assets/images/certificates/oci_ai_fundation_associate.jpg";
import oci_foundations_associate_badge from "../../assets/images/certificates/oci_ai_fundations_associate_badge.png";
import oci_gen_ai_professional from "../../assets/images/certificates/oci_gen_ai_professional.jpg";
import oci_gen_ai_professional_badge from "../../assets/images/certificates/oci_gen_ai_professional_badge.png";
import coursera_springboot_certificate from "../../assets/images/certificates/springboot_react_cosera_certificate.jpeg";
import { GiTiredEye } from "react-icons/gi";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import ImageViewerModal from "./subcomponents/ImageViewerModal";
import { useState } from "react";

type Image = { img: string; link: string; }

type TimelineData = {
    side: string;
    title: string;
    institute: string;
    content: string[];
    skills: string[];
    date: string;
    type: string;
    images?: Image[];
    category: 'education' | 'work' | 'project' | 'certification';
}

const timelineData: TimelineData[] = [
    {
        side: 'left',
        title: 'Certificate in Software Engineering',
        institute: 'At NIBM',
        content: [
            "Learned my first programming language: C#.NET",
            "Learned to work with Microsoft SQL Server",
            "Developed a small CRUD application using C#.NET and SQL Server",
        ],
        type: "Skills:",
        skills: ["C#.NET", "MS SQL"],
        date: "April 2022 - Nov 2022",
        category: 'education' as const
    },
    {
        side: 'left',
        title: 'Started BSc (Hons) in Software Engineering',
        institute: 'At JIAT Affiliated with Birmingham City University',
        content: [
            "Completed Diploma awarded by UK Awards",
            "Completed Higher Diploma awarded by UK Awards",
            "Commenced BSc studies at Birmingham City University",
            "Developed several real-world projects with gathered skills",
        ],
        type: "Skills:",
        skills: ["Java", "PHP", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "MySQL", "OOP", "JSP", "React Native", "OOPC", "OODP"],
        date: "May 2023 - Present",
        category: 'education' as const
    },
    {
        side: 'right',
        title: 'Gymnasium Management System 1.0V',
        institute: 'For Country Fitness Gymnasium',
        content: [
            "Developed a responsive system to manage members, schedules, payments, and employee salaries.",
            "Implemented secure user roles and access control for efficient administration.",
            "Automated monthly financial and performance reporting.",
            "Optimized database structure for scalability and fast data retrieval.",
            "Provided training and documentation for smooth system adoption."
        ],
        type: "Tech Stack:",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jQuery"],
        date: "April 2024 – July 2024",
        category: 'project' as const
    },
    {
        side: 'left',
        title: 'React, TypeScript & Spring Boot',
        institute: 'Self-Studied',
        content: [
            "Self-taught using AI tools, YouTube tutorials, and technical blogs as primary learning resources.",
            "Gained hands-on experience with React, TypeScript, Axios, and animation libraries like Framer Motion.",
            "Built and tested RESTful APIs using Spring Boot and Postman.",
            "Explored monolithic and layered architecture patterns in backend development.",
            "Developed a full-stack CRUD application applying learned concepts across frontend and backend."
        ],
        type: "Skills:",
        skills: ["Spring Boot", "React", "TypeScript", "Postman", "Monolithic Architecture", "Layered Architecture"],
        date: "Aug 2022 – Oct 2024",
        category: 'education' as const
    },
    {
        side: 'right',
        title: 'Fully Functional Institute Management System',
        institute: 'At JIAT',
        content: [
            "Integrated facial recognition attendance using Python and the DeepFace library for real-time identity verification.",
            "Self-studied Python and explored libraries such as TensorFlow, OpenCV, Keras, and DeepFace to build and train models.",
            "Established communication between a Java-based frontend and Python scripts via tunneling to handle image classification.",
            "Fine-tuned ResNet models to enhance recognition accuracy, achieving approximately 70% success in identifying individuals.",
            "Implemented core institute management features including user roles, class scheduling, salary tracking, and student-teacher records.",
            "Focused on modular architecture for scalability and maintainability, applying layered and monolithic design principles."
        ],
        type: "Skills:",
        skills: ["Python", "TensorFlow", "Keras", "Java", "OpenCV", "DeepFace"],
        date: "Jul 2024 – Jan 2025",
        category: 'project' as const
    },
    {
        side: 'right',
        title: 'Collaborated Spring Boot Project',
        institute: 'With Mr. Shaleen Thilanka',
        content: [
            "Migrated a legacy C#.NET backend system to a modern Spring Boot architecture.",
            "Utilized JDBC Template to connect with a large-scale Microsoft SQL Server database.",
            "Developed both paginated and non-paginated RESTful endpoints following layered architecture principles."
        ],
        type: "Skills:",
        skills: ["JDBC Template", "Spring Boot", "C#.NET", "REST"],
        date: "March 2025 – April 2025",
        category: 'project' as const
    },
    {
        side: 'left',
        title: 'Intern Software Engineer',
        institute: 'Chiox Software Solutions',
        content: [
            "Assisted in frontend and backend development using HTML, CSS, JavaScript, PHP, and Laravel.",
            "Contributed to UI enhancements and bug fixes across multiple client-facing modules.",
            "Collaborated with senior developers to understand Laravel architecture and MVC patterns.",
            "Gained hands-on experience in deploying and testing web applications in a production environment."
        ],
        type: "Skills:",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
        date: "May 2025 – Jul 2025",
        category: 'work' as const
    },
    {
        side: 'right',
        title: 'Adora E-Commerce Web Application',
        institute: 'Collaborative project with multiple developers',
        content: [
            "Led the development team and guided contributors to achieve project goals effectively.",
            "Independently designed the Entity Relationship Diagram (ERD) for the entire system.",
            "Managed the project workflow and resolved implementation issues introduced by contributors.",
            "Redesigned several UI components to improve usability and consistency.",
            "Developed the backend using a layered architecture with Node.js, Express, Prisma, and MySQL."
        ],
        type: "Skills:",
        skills: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "MySQL"],
        date: "01 Aug 2024 – 25 Aug 2025",
        category: 'project' as const
    },
    {
        side: 'right',
        title: 'Saddha Web Front-End',
        institute: 'Self-Studied',
        content: [
            "Designed the front-end based on a Figma prototype.",
            "Self-studied Next.js and Tailwind CSS to build responsive UI components.",
            "Developed and styled the full layout using modern frontend practices."
        ],
        type: "Skills:",
        skills: ["Next.js", "Tailwind CSS"],
        date: "27 Aug 2025 – 29 Aug 2025",
        category: 'project' as const
    },
    {
        side: 'right',
        title: 'Spring Boot Backend – Adora E-Commerce Application',
        institute: 'Self-Studied',
        content: [
            "Developed the backend for the Adora E-Commerce frontend using Spring Boot.",
            "Implemented JWT-based authentication and integrated Spring Security for role-based access control.",
            "Designed RESTful APIs following layered architecture principles.",
            "Handled user registration, login, and protected routes with token validation.",
            "Tested endpoints using Postman and ensured secure data flow across the system."
        ],
        type: "Skills:",
        skills: ["Spring Boot", "Spring Security", "JWT", "REST", "Postman"],
        date: "Jul 2024 – Jan 2025",
        category: 'project' as const
    },
    {
        side: 'left',
        title: 'Full-Stack React with Spring Boot Certification',
        institute: 'By Pearson on Coursera',
        content: [
            "Completed a comprehensive full-stack development course covering both frontend and backend technologies.",
            "Studied core principles and methodologies behind request handling and screen flow in Spring Boot.",
            "Learned how React DOM works and how it efficiently updates and renders UI components.",
            "Worked with MongoDB for data persistence and implemented full CRUD operations across the stack."
        ],
        type: "Skills:",
        skills: ["Spring Boot", "Spring Security", "JWT", "React", "MongoDB", "REST", "Postman"],
        date: "September 16, 2025",
        category: 'certification' as const,
        images: [
            {
                img: coursera_springboot_certificate,
                link: "https://coursera.org/share/8cfb931c92a87c0299fd015addb93638"
            }
        ]
    },
    {
        side: 'left',
        title: 'OCI 2025 Certified AI Foundations Associate',
        institute: 'Oracle Race to Certification Program',
        content: [
            "Earned the OCI AI Foundations Associate certification through Oracle's Race to Certification 2025 initiative.",
            "Studied core concepts of Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI.",
            "Explored practical applications of AI using Oracle Cloud Infrastructure (OCI) services.",
            "Completed free digital training and passed the official certification exam (1Z0-1122-25).",
            "Gained foundational knowledge in deploying and managing AI solutions on OCI."
        ],
        type: "Skills:",
        skills: ["Python", "OCI", "GenAI", "Vector DB", "Select AI", "Machine Learning", "Deep Learning", "Model Evaluation", "Prompt Engineering", "AI Use Cases", "OCI Data Science"],
        date: "20 October 2025",
        category: 'certification' as const,
        images: [
            {
                img: oci_foundations_associate,
                link: ""
            },
            {
                img: oci_foundations_associate_badge,
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BD94091D9DB1685A40622FC04A0A96A4B5072121BCA35856899DBA3794320269"
            }
        ]
    },
    {
        side: 'left',
        title: 'OCI 2025 Certified Generative AI Professional',
        institute: 'Self-Studied',
        content: [
            "Earned the OCI Generative AI Professional certification by completing Oracle's Race to Certification 2025 program.",
            "Studied advanced Generative AI concepts including Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI agents.",
            "Gained hands-on experience with Oracle Cloud Infrastructure (OCI) services for building and deploying GenAI applications.",
            "Explored prompt engineering, model fine-tuning, and responsible AI practices.",
            "Passed the official certification exam (1Z0-1127-25) demonstrating proficiency in applying GenAI solutions on OCI."
        ],
        type: "Skills:",
        skills: [
            "Generative AI", "LLMs", "RAG", "Prompt Engineering", "OCI AI Services",
            "Model Fine-Tuning", "AI Agents", "Responsible AI", "Python", "Oracle Cloud"
        ],
        category: 'certification' as const,
        images: [
            {
                img: oci_gen_ai_professional,
                link: ""
            },
            {
                img: oci_gen_ai_professional_badge,
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FD1589F3924B87C33B9EDA854B838A0F6921E6EBD869B5E6166C4113129791AC"
            }
        ],
        date: "22 October 2025"
    },
    {
        side: 'right',
        title: 'Beauty Salon E-Commerce Web',
        institute: 'At Kaleox Software Solutions',
        content: [
            "Initiated a collaborative project to help aspiring developers gain hands-on experience through real-world development.",
            "Defined the project scope and provided guidance to contributors, allowing them to apply and grow their skills.",
            "Created a free-to-join environment where developers could build, learn, and showcase their work on their CVs.",
            "Supported contributors through challenges and ensured quality across both frontend and backend development.",
            "Built the application using React with TypeScript and Tailwind CSS for the frontend, and Spring Boot for the backend."
        ],
        type: "Skills:",
        skills: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "Project Management", "Mentorship"],
        date: "28 Oct 2025 – Present",
        category: 'project' as const
    }
].reverse();


export default function Timeline() {
    const [showImageViewerModal, setShowImageViewerModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image>({ img: '', link: '' });

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'education':
                return <FaGraduationCap className="w-5 h-5" />;
            case 'work':
                return <FaBriefcase className="w-5 h-5" />;
            case 'certification':
                return <FaCertificate className="w-5 h-5" />;
            case 'project':
                return <FaCode className="w-5 h-5" />;
            default:
                return null;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'education':
                return {
                    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
                    glow: 'shadow-violet-500/20',
                    border: 'border-violet-500/30',
                    bgGradient: 'from-violet-950/40 via-purple-950/30 to-fuchsia-950/40'
                };
            case 'work':
                return {
                    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
                    glow: 'shadow-emerald-500/20',
                    border: 'border-emerald-500/30',
                    bgGradient: 'from-emerald-950/40 via-teal-950/30 to-cyan-950/40'
                };
            case 'certification':
                return {
                    gradient: 'from-amber-600 via-orange-600 to-red-600',
                    glow: 'shadow-amber-500/20',
                    border: 'border-amber-500/30',
                    bgGradient: 'from-amber-950/40 via-orange-950/30 to-red-950/40'
                };
            case 'project':
                return {
                    gradient: 'from-blue-600 via-cyan-600 to-sky-600',
                    glow: 'shadow-blue-500/20',
                    border: 'border-blue-500/30',
                    bgGradient: 'from-blue-950/40 via-cyan-950/30 to-sky-950/40'
                };
            default:
                return {
                    gradient: 'from-slate-500 to-slate-600',
                    glow: 'shadow-slate-500/20',
                    border: 'border-slate-500/30',
                    bgGradient: 'from-slate-950/40 to-slate-900/40'
                };
        }
    };

    const getCategoryBadge = (category: string) => {
        switch (category) {
            case 'education':
                return { label: 'Education', color: 'bg-violet-500/30 text-violet-200 border-violet-400/50 shadow-violet-500/30' };
            case 'work':
                return { label: 'Work', color: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50 shadow-emerald-500/30' };
            case 'certification':
                return { label: 'Certification', color: 'bg-amber-500/30 text-amber-200 border-amber-400/50 shadow-amber-500/30' };
            case 'project':
                return { label: 'Project', color: 'bg-blue-500/30 text-blue-200 border-blue-400/50 shadow-blue-500/30' };
            default:
                return { label: 'Other', color: 'bg-slate-500/20 text-slate-300 border-slate-500/30 shadow-none' };
        }
    };

    return (
        <div className='relative py-16' id='edu&exp'>
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl animate-pulse"></div>
                <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute left-1/3 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-md md:text-xl text-slate-400 uppercase tracking-wider mb-3 animate-pulse">
                    What I have done so far
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-violet-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Qualifications & Experience
                </h1>
                <div className="mt-4 mx-auto w-32 h-1.5 bg-linear-to-r from-violet-500 via-amber-500 to-cyan-500 rounded-full shadow-lg"></div>
                <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                    A journey through learning, building, and growing as a full-stack developer
                </p>
            </div>

            {/* Timeline Container */}
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-20 max-w-7xl">
                {timelineData.map((item, index) => {
                    const badge = getCategoryBadge(item.category);
                    const colors = getCategoryColor(item.category);
                    
                    return (
                        <div
                            key={index}
                            className={`flex ${item.side === 'left' ? 'flex-row-reverse md:contents' : 'md:contents'} timeline-item`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Timeline Node (Right Side) */}
                            {item.side === 'right' && (
                                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className={`h-full w-0.5 bg-linear-to-b ${colors.gradient} opacity-40`}></div>
                                    </div>
                                    <div className={`w-14 h-14 absolute top-8 -ml-4 rounded-xl bg-linear-to-br ${colors.gradient} shadow-xl ${colors.glow} flex items-center justify-center text-white border-4 border-[#040218] hover:scale-125 hover:rotate-12 transition-all duration-500 backdrop-blur-sm`}>
                                        {getCategoryIcon(item.category)}
                                    </div>
                                </div>
                            )}

                            {/* Content Card */}
                            <div
                                className={`relative ${
                                    item.side === 'left'
                                        ? 'col-start-1 col-end-5 mr-auto ml-0 md:ml-auto md:mr-0'
                                        : 'col-start-6 col-end-10 mr-auto'
                                } my-6 group`}
                            >
                                {/* Animated Gradient Border Effect */}
                                <div className={`absolute -inset-px rounded-2xl bg-linear-to-r ${colors.gradient} opacity-20 group-hover:opacity-60 blur-md transition-all duration-700`}></div>
                                <div className={`absolute -inset-px rounded-2xl bg-linear-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                                
                                {/* Card Content with Themed Background */}
                                <div className={`relative bg-linear-to-br ${colors.bgGradient} backdrop-blur-xl rounded-2xl p-6 md:p-7 shadow-2xl ${colors.border} border-2 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02]`}>
                                    
                                    {/* Decorative Corner Accent */}
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${colors.gradient} opacity-10 rounded-bl-full`}></div>
                                    <div className={`absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr ${colors.gradient} opacity-10 rounded-tr-full`}></div>

                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between mb-4 relative z-10">
                                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold border-2 ${badge.color} backdrop-blur-sm shadow-lg`}>
                                            {getCategoryIcon(item.category)}
                                            {badge.label}
                                        </span>
                                        <span className="text-slate-400 text-xs md:text-sm font-semibold italic bg-slate-900/40 px-3 py-1 rounded-full backdrop-blur-sm">{item.date}</span>
                                    </div>

                                    {/* Title & Institute */}
                                    <h3 className={`font-extrabold text-xl md:text-2xl mb-2 bg-linear-to-r ${colors.gradient} bg-clip-text text-transparent drop-shadow-lg relative z-10`}>
                                        {item.title}
                                    </h3>
                                    <h4 className="font-semibold text-sm md:text-base mb-5 text-slate-300 tracking-wide relative z-10">
                                        📍 {item.institute}
                                    </h4>

                                    {/* Content List */}
                                    <ol className="list-disc ms-5 space-y-2.5 font-medium text-slate-300 text-sm md:text-base relative z-10">
                                        {item.content.map((data, i) => (
                                            <li key={i} className="leading-relaxed hover:text-white hover:translate-x-1 transition-all duration-300">
                                                {data}
                                            </li>
                                        ))}
                                    </ol>

                                    {/* Skills Tags */}
                                    {item.skills.length !== 0 && (
                                        <div className="mt-6 relative z-10">
                                            <h5 className="mb-3 text-slate-200 font-bold text-sm flex items-center gap-2">
                                                <span className={`w-1 h-4 bg-linear-to-b ${colors.gradient} rounded-full`}></span>
                                                {item.type}
                                            </h5>
                                            <div className="flex flex-wrap gap-2.5">
                                                {item.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className={`relative overflow-hidden rounded-lg bg-linear-to-r ${colors.gradient} px-4 py-2 text-xs md:text-sm font-bold text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default`}
                                                    >
                                                        <span className="relative z-10">{skill}</span>
                                                        <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300"></div>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Certificate Images */}
                                    {item.images && item.images.length > 0 && (
                                        <div className="mt-6 flex flex-wrap gap-4 relative z-10">
                                            <ImageViewerModal
                                                img={selectedImage.img}
                                                verifyLink={selectedImage.link}
                                                setOpen={() => setShowImageViewerModal(false)}
                                                open={showImageViewerModal}
                                            />
                                            {item.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className={`relative w-36 h-28 rounded-xl overflow-hidden shadow-xl group/img cursor-pointer border-3 ${colors.border} hover:border-opacity-100 transition-all duration-500 hover:scale-110 hover:rotate-2`}
                                                    onClick={() => {
                                                        setSelectedImage(img);
                                                        setShowImageViewerModal(true);
                                                    }}
                                                >
                                                    <div
                                                        className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover/img:scale-125"
                                                        style={{ backgroundImage: `url(${img.img})` }}
                                                        role="img"
                                                        aria-label={img.link ? 'certificate' : 'image'}
                                                    />
                                                    <div className={`absolute inset-0 flex items-center justify-center bg-linear-to-t ${colors.gradient} opacity-0 group-hover/img:opacity-90 transition-opacity duration-500`}>
                                                        <GiTiredEye className="text-white drop-shadow-lg" size={40} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Timeline Node (Left Side) */}
                            {item.side === 'left' && (
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className={`h-full w-0.5 bg-linear-to-b ${colors.gradient} opacity-40`}></div>
                                    </div>
                                    <div className={`w-14 h-14 absolute top-8 -ml-4 rounded-xl bg-linear-to-br ${colors.gradient} shadow-xl ${colors.glow} flex items-center justify-center text-white border-4 border-[#040218] hover:scale-125 hover:rotate-12 transition-all duration-500 backdrop-blur-sm`}>
                                        {getCategoryIcon(item.category)}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
