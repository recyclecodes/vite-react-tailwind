import Nav from './components/Nav';
import { Hero, About, Skills, Projects, Contact, Footer } from './sections';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="bg-about padding lg:py-9">
        <About />
      </div>
      <div className="lg:pb-16">
        <Skills />
      </div>
      <div className="bg-about padding lg:py-0 lg:pb-10">
        <Projects />
      </div>
      <div className='lg:py-36'>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
