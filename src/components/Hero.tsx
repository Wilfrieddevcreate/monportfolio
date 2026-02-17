import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import SectionWrapper from './SectionWrapper';
const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <SectionWrapper  className="relative h-screen flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // Options personnalisées : particules bleues, liens au hover, etc.
          particles: { number: { value: 50 }, color: { value: '#00ff00' }, links: { enable: true } },
          interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Bonjour, je suis Wilfried</h1>
        <p className="text-xl mt-4">Développeur web full-stack</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">Mes Projets</a>
      </div>
    </SectionWrapper>
  );
};

export default Hero;