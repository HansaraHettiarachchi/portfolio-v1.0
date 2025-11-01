
import image from "../../assets/images/basic/img-3.png"

export default function Hero() {
    return (
        <div className="lg:grid grid-cols-2 items-center">
            <div className="flex items-center space-x-6">
                <div className="relative top-5">
                    <div className="relative rounded-full h-4 aspect-square bg-purple-500"></div>
                    <div className="relative w-2 mx-auto bottom-1.5 h-85 bg-linear-to-b  from-purple-500"></div>
                </div>

                <div className="text-white max-w-xl ">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Hi, I'm
                        <span className="bg-linear-to-br from-yellow-500 via-purple-500 to-orange-500 text-transparent bg-clip-text"> Hansara</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-gray-300">
                        I build <span className="text-teal-400 font-semibold uppercase">fullstack solutions</span> - from lightweight tools to enterprise-grade systems.
                    </p>

                    <br /><br />
                    <ul className="mt-4 space-y-2 text-sm sm:text-base font-semibold tracking-wide uppercase">
                        <li className="bg-linear-to-l from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
                            ERP Systems
                        </li>
                        <li className="bg-linear-to-l from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
                            E-Commerce Platforms
                        </li>
                        <li className="bg-linear-to-l from-orange-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
                            Custom Web Applications
                        </li>
                    </ul>
                </div>
            </div>

            <img src={image} className="relative aspect-square  mx-auto" alt="" />

        </div>
    )
}
