import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiHeadphones, TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();
  const toggleAudioIndicator = () => {
    setIsAudioPlaying(prev => !prev);
    setIsIndicatorActive(prev => !prev);
  }

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying])

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2
    })
  }, [isNavVisible])
  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map(item => (
                <a href={`#${item.toLowerCase()}`} className="nav-hover-btn">{item}</a>
              ))}
            </div>
            <button
              className="ml-10 relative flex items-center space-x-0.5 cursor-pointer text-(--blue-50) group"
              onClick={toggleAudioIndicator}
            >
              <audio
                src="/audio/loop.mp3"
                loop
                ref={audioElementRef}
                className="hidden"
              />

              <span className="pointer-events-none absolute -bottom-10 left-1/2
               -translate-x-1/2  whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-(--blue-50)
                opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {isAudioPlaying ? "Stop music" : "Play music"}
              </span>

              {!isAudioPlaying ? (
                <TiHeadphones />
              ) : (
                <>
                  {[1, 2, 3, 4].map(bar => (
                    <div
                      key={bar}
                      className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))}
                </>
              )}
            </button>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar