import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isToggled, setToggle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState('translate-y-0 opacity-100');


  const handleMouseEnter = (e) => {
    const link = e.target;
    const { left, width } = link.getBoundingClientRect();
    const mouseX = e.clientX;
    const underline = link.querySelector("span");

    if (mouseX < left + width / 2) {
      underline.style.left = "0";
      underline.style.right = "auto";
      underline.style.transform = "scaleX(0)";
      underline.style.transformOrigin = "left";
    } else {
      underline.style.left = "auto";
      underline.style.right = "0";
      underline.style.transform = "scaleX(0)";
      underline.style.transformOrigin = "right";
    }

    setTimeout(() => {
      underline.style.transform = "scaleX(1)";
      underline.style.width = "100%";
    }, 100);
  };

  const handleMouseLeave = (e) => {
    const link = e.target;
    const underline = link.querySelector("span");
    underline.style.transform = "scaleX(0)";
    setTimeout(() => {
      underline.style.width = "0";
    }, 100);
  };

  const controlNavbar = () => {
    // Calculate the scroll difference
    const scrollDiff = window.scrollY - lastScrollY;
  
    if (window.scrollY <= 0 || scrollDiff < -40) {
      // Translate navbar down (visible) if scrolled up or at the top
      setNavbarStyle('translate-y-0 opacity-100');
    } else if (scrollDiff > 20) {
      // Translate navbar up (hidden) only if scrolled down more than 50px
      setNavbarStyle('-translate-y-12 opacity-0');
    }
    // Update the last scroll position
    setLastScrollY(window.scrollY);
  };
  
  const debounce = (func, wait = 10) => { // Adjusted wait time to 10ms
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func();
      }, wait);
    };
  };
  
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Apply the behavior based on screen width
      if (window.innerWidth < 1024 && window.location.pathname === '/') {
        console.log(window.location.pathname)
        controlNavbar();
      } else {
        // Always visible on larger screens
        setNavbarStyle('translate-y-0 opacity-100');
      }
    });
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <header className={`sticky top-0 w-full flex items-center justify-between z-40 px-4 h-20 shadow-md backdrop-filter backdrop-blur-sm bg-blue-50/50 dark:bg-zinc-900/90 transition duration-300 ease-in-out ${navbarStyle}`}>
      <NavLink to={'/'}>
        <Logo isToggled={isToggled} />
      </NavLink>
      <div className="flex space-x-4 items-center justify-center">
        <div className="hidden md:flex space-x-4 items-center justify-center">
          <a
            href="/#home"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#about"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#worked"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Work Experience
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#projects"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Projects
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#references"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            References
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
        </div>
        <ThemeToggle isToggled={isToggled} setToggle={setToggle} />

        <a
          href="/myCV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-zinc-600 bg-[linear-gradient(110deg,#09090b,45%,#333,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          My CV
        </a>
      </div>
    </header>
  );
}
