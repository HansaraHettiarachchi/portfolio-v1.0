import About from "../components/home/About"
import FloatingIcons from "../components/home/subcomponents/FloatingIcons"
import Hero from "../components/home/Hero"
import NavBar from "../components/NavBar/NavBar"
import Timeline from "../components/home/Timeline"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
// import image from "../assets/images/basic/img-2.png"

export default function Home() {
    return (
        <>
            <FloatingIcons iconColor="#173857" iconSize={30} speed={150} density={10} />

            <div className="overflow-visible font-sans  " id="">
                <NavBar />
                {/* <div className="xl:px-25 px-4 sm:px-6 lg:px-8 "> */}
                <div className="container mx-auto xl:px-35 px-4 sm:px-6 lg:px-8  ">
                    <Hero />
                    <About />
                    <Timeline />
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    )
}
