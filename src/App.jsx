import BannerSection from "./components/BannerSection"
import { BlogSection } from "./components/BlogSection"
import Catagory from "./components/Category"
import FeaturedSectionBreakFast from "./components/FeaturedSectionBreakFast"
import FeatureSection from "./components/FeatureSection"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLater from "./components/NewsLater"
import Footer from "./components/Footer"


function App() {
 
  return (
    <>
    <main className="center p-15">
        <Navbar/>
        <Hero/>
        <Catagory/>
        <FeatureSectionFruits/>
        <FeaturedSectionBreakFast/>
        <BannerSection/>
        <BlogSection/>
        <NewsLater/>
        <FeatureSection/>
        <Footer/>
    </main>
    
    </>
  )
}

export default App


