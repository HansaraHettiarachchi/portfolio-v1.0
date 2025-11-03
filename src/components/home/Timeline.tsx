
type TimelineData = {
    side: string;
    title: string;
    institute: string;
    content: string[];
    skills: string[];
    date: string;
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
        skills: ["C#.net", "MS SQL"],
        date: "April 2022 - Nov 2022"
    },
    {
        side: 'right',
        title: 'Started BSc (Hons) in Software Engineering',
        institute: 'At JIAT Affiliated with Birmingham City University',
        content: [
            "Completed Diploma awarded by UK Awards",
            "Completed Higher Diploma awarded by UK Awards",
            "Commenced BSc studies at Birmingham City University",
            "Developed several real word projects with gathered skills",
        ],
        skills: ["Java", "php", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL", "OOP", "JSP", "React Native", "OOPC", "OODP"],
        date: "May 2023 - Now"
    },
    {
        side: 'left',
        title: 'Lorem ipsum',
        institute: 'NIBM',
        content: [],
        skills: [],
        date: "April 2022 - Nov 2022"
    },
    {
        side: 'left',
        title: 'Lorem ipsum',
        institute: 'NIBM',
        content: [],
        skills: [],
        date: "April 2022 - Nov 2022"
    },
    {
        side: 'right',
        title: 'Lorem ipsum',
        institute: 'NIBM',
        content: [],
        skills: [],
        date: "April 2022 - Nov 2022"
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
                                <div className="flex flex-wrap gap-2 items-center mt-5">
                                    {item.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="rounded-full bg-blue-800 text-white py-1 px-3 text-sm"
                                        >
                                            {skill}
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
