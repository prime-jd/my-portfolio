import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Feature /> */}
          <Projects />
          <Resume />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
