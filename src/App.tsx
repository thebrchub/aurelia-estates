import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home';

function App() {
  // Initialize Global Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // FIXED: Changed 'overflow-x-hidden' to 'overflow-clip' to restore sticky positioning!
    <main className="bg-luxury-900 min-h-screen w-full overflow-clip text-luxury-paper selection:bg-luxury-gold selection:text-luxury-900">
      <Home />
    </main>
  );
}

export default App;