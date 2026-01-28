import Footer from '@/components/footer.server'
import Hero from '@/components/sections/Hero/hero.server'
import Projects from '@/components/sections/Projects/projects.server'
import About from '@/components/sections/About/about.server'
import Contact from '@/components/sections/Contact/contact.server'
import BottomNav from '@/components/navigation/buttomnav.server'

export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Projects></Projects>

      <About></About>

      <Contact></Contact>

      <Footer></Footer>

      <BottomNav></BottomNav>
    </>
  );
}
