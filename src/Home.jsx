import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
import MovableSquare from './components/cursor';
import BackgroundEffect from './components/background-hover';
import Timeline from './components/timeline';
import ErtdfgcvbBG from './components/ertdfgcvb cube';
import AnimatedText from './components/text';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className='py-2'>
      {/* <MovableSquare /> */}
        <Join className='z-20'/>
        <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20">
          <div className='text-5xl font-neuebit text-left pt-3'>ENIGMA</div>
          <Hamburger className='fixed right-0'/>
        </nav>
        <ErtdfgcvbBG className='z-0'/>
        <AnimatedText text="TIMELINE" className="font-neuebit uppercase text-9xl" customText='グミヸ✨' time={2} preStyle='font-neuebit uppercase text-9xl text-yellow-500'/>
        <Timeline className='z-10'/>
        <Footer />
        {/* <BackgroundEffect /> */}
    </div>
  );
}

export default Home;