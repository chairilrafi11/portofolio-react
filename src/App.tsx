import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Biography from "./components/Biography"
import Snapshot from "./components/Snapshot"
import Experience from "./components/Experience"
import EngineeringProfile from "./components/EngineeringProfile"
import Education from "./components/Education"
import SelectedWork from "./components/SelectedWork"
import Certifications from "./components/Certifications"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-background-base font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <div className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-20" />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-[1920px] px-margin-desktop pt-[80px]">
        <Hero />
        <Biography />
        <Snapshot />
        <Experience />
        <EngineeringProfile />
        <Education />
        <SelectedWork />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App
