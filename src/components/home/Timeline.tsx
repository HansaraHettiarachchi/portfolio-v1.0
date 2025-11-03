
type TimelineData = {
    side: string;
    title: string;
    institute: string;
    content: string[];
    skills: string[];
    date: string;
    type: string;
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
        type: "Skills :",
        skills: ["C#.net", "MS SQL"],
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
            "Developed several real word projects with gathered skills",
        ],
        type: "Skills :",
        skills: ["Java", "php", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL", "OOP", "JSP", "React Native", "OOPC", "OODP"],
        date: "May 2023 - Now"
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
        type: "Techstack :",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jQuery"],
        date: "April 2024 – November Jul"
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
        type: "Skills :",
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
        type: "Learned Skills and Tech Stack :",
        skills: ["Python", "TensorFlow", "Keras", "Java", "OpenCV", "DeepFace"],
        date: "Jul 2024 – Jan 2025"
    },
    {
        side: 'right',
        title: 'Fully Functional Institute Management System',
        institute: 'At JIAT',
        content: [
            "",
            "",
            "",
            "",
            "",
        ],
        type: "Learned Skills and Tech Stack :",
        skills: ["Python", "TensorFlow", "Keras", "Java", "OpenCV", "DeepFace"],
        date: "Jul 2024 – Jan 2025"
    },
];

export default function () {
    return (
        <div className='' id='edu&exp'>
            <h1 className="text-xl text-slate-500 uppercase text-center">What I have done so far</h1>
            <h1 className="text-6xl font-extrabold text-center mt-1 text-white">Work Experience</h1>


            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mt-20">
                {timelineData.reverse().map((item, index) => (
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
                                    <h1 className="mt-2 mb-1 text-gray-300 font-semibold">{item.type}</h1>
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
