import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import SocialLinks from '@/components/ui/SocialLinks';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <SocialLinks />
      </main>
    </>
  );
}