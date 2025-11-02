import fullstack_img from "../../assets/images/basic/fullstack.png"
import frontend_img from "../../assets/images/basic/front-end.png"
import backend_img from "../../assets/images/basic/backend.png"
import react_img from "../../assets/images/basic/react.png"

const jobs = [
    {
        name: "Front end Developer",
        img: fullstack_img
    }, {
        name: "Backend Developer",
        img: backend_img
    },
    {
        name: "React / React Native Developer",
        img: react_img
    },
    {
        name: "Fullstack Developer",
        img: frontend_img
    }];

export default function About() {
    return (
        <div className="relative" id="about">
            <h1 className="text-xl text-slate-500 uppercase">Introduction</h1>
            <h1 className="text-6xl font-bold text-white">Overview</h1>

            <div className="mt-10 text-slate-500 w-full lg:w-7/8">
                <p className="text-lg mb-4">
                    I'm a software engineer driven by curiosity and creativity—building full-stack applications that blend technical precision with clean, modern design. My toolkit includes <span className="font-semibold text-blue-600">Java Spring Boot</span> for scalable backends, and <span className="font-semibold text-blue-600">React, Next.js</span>, and <span className="font-semibold text-blue-600">Tailwind CSS</span> for responsive, user-friendly interfaces.
                </p>
                <p className="text-lg mb-4">
                    I’ve engineered secure authentication systems, dynamic APIs, and real-time features using <span className="font-semibold text-purple-600">Node.js, Express, Prisma</span>, and <span className="font-semibold text-purple-600">MySQL</span>. From face recognition attendance tools to e-commerce platforms, I thrive on solving real-world problems with elegant code and thoughtful UX.
                </p>
                <p className="text-lg mb-4">
                    Certified in <span className="font-semibold text-green-600">Generative AI</span>, <span className="font-semibold text-green-600">Spring Boot</span>, and <span className="font-semibold text-green-600">cloud technologies</span>, I’m always exploring new frameworks and design patterns. With a strong grasp of <span className="font-semibold text-indigo-600">REST APIs, JWT authentication</span>, and agile development, I aim to build reliable systems that scale and inspire.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-15 items-center justify-center">

                {jobs.map((job, i) => (

                    <div key={i} className="rounded-3xl">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-slate-600 via-indigo-600 to-violet-600 opacity-60 blur-lg animate-gradient-x bg-[length:200%_200%]"></div>

                            <div className="relative border h-64 border-zinc-700 rounded-lg flex items-center text-slate-300 bg-linear-to-br from-[#0b0516] ">
                                <div className="mx-auto">
                                    <img src={job.img} className="w-20 mx-auto" alt="" />
                                    <h1 className="text-md font-bold mx-10 mt-5 text-center">{job.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}





            </div>

        </div>
    )
}
