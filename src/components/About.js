import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
  const scrollAnimation = useScrollAnimation();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-brown-700 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center opacity-20 text-6xl sm:text-9xl">🟫🟫🟫</div>
      <motion.div {...scrollAnimation} className="max-w-2xl text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white font-retro">About Me</h2>
        <p className="text-xl sm:text-3xl text-white font-retro">
          I&apos;ve been developing Minecraft content for over five years now. In that time, I&apos;ve worked with multiple teams and studios, creating a wide range of add-ons and dynamic worlds for the Marketplace. I really enjoy bringing ideas to life through scripting and custom gameplay mechanics.  <br /><br />I have solid experience with entities, block components, and building custom mechanics. I also work a lot with particles and custom sounds to obtain better user experience. My goal is always to keep things clean, functional and to deliver on time.  <br /><br /> I regularly use GitHub, Notion and Jira to manage projects and maintain clear workflows. 
        </p>
      </motion.div>
    </section>
  );
}