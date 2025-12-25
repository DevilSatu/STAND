import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Specialties />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
