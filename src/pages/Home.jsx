import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "../components/StarBackground"
import {Navbar} from "../components/Navbar"
import {HeroSection} from "../components/HeroSection"
import {AboutSection} from "../components/AboutSection"
import {SkillsSection} from "../components/SkillsSection"

export const Home = () => { 
    return <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
        

        {/** Theme toggle */}
        <ThemeToggle/>

        {/** Background effects */}
        <StarBackground/>
        {/** Navbar */}
        <Navbar/>

        {/** Main content*/}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </main>

        {/** Footer */}
    </div>
}