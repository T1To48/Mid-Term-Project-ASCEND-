import { useEffect, useState } from 'react';

function BodyColor() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        document.body.style.background = 'linear-gradient(to bottom, #fff, #f5f5f5)';
        setScrollDirection(null);
      } else if (scrollY > window.lastScrollY) {
        if (scrollDirection !== 'down') {
          document.body.style.background = 'linear-gradient(to bottom, #eee, #e0e0e0)';
          setScrollDirection('down');
        }
      } else {
        if (scrollDirection !== 'up') {
          document.body.style.background = 'linear-gradient(to bottom, #fff, #f5f5f5)';
          setScrollDirection('up');
        }
      }
      window.lastScrollY = scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return null;
}

export default BodyColor;