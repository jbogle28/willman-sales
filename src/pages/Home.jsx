
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
