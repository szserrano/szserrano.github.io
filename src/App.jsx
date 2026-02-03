import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero,
Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <section id="about" className='relative z-10'>
          <About />
        </section>
        <section id="experience" className='relative z-10'>
          <Experience />
        </section>
        <section id="tech">
          <Tech />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="feedbacks">
          <Feedbacks />
        </section>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
