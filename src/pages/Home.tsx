import About from "../components/home/About"
import FloatingIcons from "../components/home/FloatingIcons"
import Hero from "../components/home/Hero"
import NavBar from "../components/NavBar/NavBar"
// import image from "../assets/images/basic/img-2.png"

export default function Home() {
    return (
        <>
            <FloatingIcons iconColor="#173857" iconSize={24} speed={200} density={3} />
            <div className="overflow-visible font-sans" id="">
                <NavBar />
                {/* <div className="xl:px-25 px-4 sm:px-6 lg:px-8 "> */}
                <div className="container mx-auto px-6 ">
                    <Hero />
                    <About />

                </div>

            </div>
        </>
    )
}
