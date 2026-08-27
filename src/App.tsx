import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Biography from "./components/Biography"
import Snapshot from "./components/Snapshot"
import SelectedWork from "./components/SelectedWork"
import EngineeringProfile from "./components/EngineeringProfile"
import Certifications from "./components/Certifications"
import HowIWork from "./components/HowIWork"
import Experience from "./components/Experience"
import Education from "./components/Education"
import MoreWork from "./components/MoreWork"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-background-base font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <div className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-20" />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-[1920px] px-margin-desktop pt-[120px]">
        <Hero />
        <Biography />
        <Snapshot />
        <SelectedWork />
        <EngineeringProfile />
        <Certifications />
        <HowIWork />
        <Experience />
        <Education />
        <MoreWork />
      </main>
      <Footer />
    </div>
  )
}

export default App
