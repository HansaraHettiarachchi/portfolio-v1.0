import oci_foundations_associate from "../../assets/images/certificates/oci_ai_fundation_associate.jpg";
import oci_foundations_associate_badge from "../../assets/images/certificates/oci_ai_fundations_associate_badge.png";
import oci_gen_ai_professional from "../../assets/images/certificates/oci_gen_ai_professional.jpg";
import oci_gen_ai_professional_badge from "../../assets/images/certificates/oci_gen_ai_professional_badge.png";
import coursera_springboot_certificate from "../../assets/images/certificates/springboot_react_cosera_certificate.jpeg";
import { GiTiredEye } from "react-icons/gi";
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
        date: "April 2022 - Nov 2022"
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
        date: "May 2023 - Present"
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
        date: "April 2024 – July 2024"
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
        date: "Aug 2022 – Oct 2024"
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
        date: "Jul 2024 – Jan 2025"
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
        date: "March 2025 – April 2025"
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
        date: "May 2025 – Jul 2025"
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
        date: "01 Aug 2024 – 25 Aug 2025"
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
        date: "27 Aug 2025 – 29 Aug 2025"
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
        date: "Jul 2024 – Jan 2025"
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
        date: "28 Oct 2025 – Present"
    }
].reverse();


export default function () {
    const [showImageViewerModal, setShowImageViewerModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image>({ img: '', link: '' });

    return (
        <div className='' id='edu&exp'>
            <h1 className="text-md md:text-xl text-slate-500 uppercase text-center">What I have done so far</h1>
            <h1 className="text-3xl md:text-6xl font-extrabold text-center mt-1 text-white">Qualifications & Experience</h1>


            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-20">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex ${item.side === 'left' ? 'flex-row-reverse md:contents' : 'md:contents'}`}
                    >
                        {item.side === 'right' && (
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-linear-to-b from-[#0c014d] via-[#0f3a4b] to-[#0c014d] pointer-events-none"></div>
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -ml-2 -mt-4 rounded-full bg-white shadow"></div>
                            </div>
                        )}
                        <div
                            className={`bg-[#080946]  ${item.side === 'left' ? 'col-start-1 col-end-5 mr-auto ml-0 md:ml-auto md:mr-0' : 'col-start-6 col-end-10 mr-auto'
                                } px-6 py-4 rounded-xl my-4 shadow-md text-shadow-blue-300`}
                        >
                            <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                            <h3 className="font-semibold text-md mb-1 text-slate-600 tracking-wider">{item.institute}</h3>
                            {/* <p className=" text-justify">{item.content}</p> */}

                            <ol className="list-disc ms-6 font-medium text-slate-300">
                                {item.content.map((data) => (
                                    <li>{data}</li>
                                ))}
                            </ol>

                            {item.skills.length !== 0 && (
                                <div>
                                    <h1 className="mt-3 mb-1 text-gray-300 font-semibold">{item.type}</h1>
                                    <div className="flex flex-wrap gap-2 items-center">

                                        {item.skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="rounded-full bg-blue-800 text-white py-1 px-3 text-sm"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {item.images?.length !== 0 && (
                                <div className="flex flex-wrap p-5 gap-3">
                                    <ImageViewerModal img={selectedImage.img} verifyLink={selectedImage.link} setOpen={() => setShowImageViewerModal(false)} open={showImageViewerModal} />
                                    {item.images?.map((img, i) => (
                                        <div key={i} className="w-32 h-24 rounded overflow-hidden shadow-sm relative group cursor-pointer">
                                            <div
                                                className="w-full h-full bg-center bg-cover"
                                                style={{ backgroundImage: `url(${img.img})` }}
                                                role="img"
                                                aria-label={img.link ? 'certificate' : 'image'}
                                            />

                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-300/80 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => {
                                                setSelectedImage(img);
                                                setShowImageViewerModal(true)
                                            }}>
                                                <span className="text-sm font-semibold text-gray-800" ><GiTiredEye size={40} /></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}


                            <p className="text-slate-600 font-medium text-start mt-3 italic">{item.date}</p>
                        </div>
                        {item.side === 'left' && (
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-linear-to-b from-[#120561] via-[#067285] to-[#221764] pointer-events-none"></div>
                                </div>
                                <div className="w-10 h-10 absolute top-1/2 -ml-2 -mt-4 rounded-full bg-white shadow"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}
