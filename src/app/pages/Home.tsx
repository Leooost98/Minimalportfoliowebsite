import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useTheme, themes, ThemeId } from "../context/ThemeContext";
// Import placeholder until real images are uploaded
import placeholder from "../../imports/placeholder.svg";

// Original image imports - will work once images are uploaded to src/imports/
// import scrollImage1 from "../../imports/IMG_8150_3.jpg";
// import scrollImage2 from "../../imports/IMG_8117_3.jpg";
// import scrollImage3 from "../../imports/IMG_8203.jpg";
// import scrollImage4 from "../../imports/IMG_8907_2.jpg";
// import scrollImage5 from "../../imports/Screenshot_2026-05-13_at_16.38.57-2.png";
// import scrollImage6 from "../../imports/Leo_vd_Oost_2-3.jpg";
// import scrollImage7 from "../../imports/IMG_0130.PNG";

const scrollImage1 = placeholder;
const scrollImage2 = placeholder;
const scrollImage3 = placeholder;
const scrollImage4 = placeholder;
const scrollImage5 = placeholder;
const scrollImage6 = placeholder;
const scrollImage7 = placeholder;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme, setThemeId } = useTheme();

  const scrollingImages = [
    scrollImage1,
    scrollImage2,
    scrollImage3,
    scrollImage4,
    scrollImage5,
    scrollImage6,
    scrollImage7,
  ];

  // Map each carousel image to its corresponding project ID
  const imageToProjectMap = [
    "womens-shirt-shawl-collar",      // scrollImage1
    "womens-striped-skirt",           // scrollImage2
    "womens-trousers",                // scrollImage3
    "18th-century-stays",             // scrollImage4
    "digital-patternmaking-clo3d",    // scrollImage5
    "mens-jeans-closed-redesign",     // scrollImage6
    "digital-patternmaking-clo3d",    // scrollImage7
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Times Square ticker speed

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;

        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleInfiniteScroll = () => {
      if (!scrollContainer) return;

      const maxScroll = scrollContainer.scrollWidth / 2;
      const currentScroll = scrollContainer.scrollLeft;

      // If scrolled past halfway point, jump back to start
      if (currentScroll >= maxScroll) {
        scrollContainer.scrollLeft = currentScroll - maxScroll;
      }
      // If scrolled back past start, jump to end
      else if (currentScroll <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      }
    };

    scrollContainer.addEventListener('scroll', handleInfiniteScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="fixed top-6 md:top-8 right-4 md:right-8 z-50 flex items-center gap-3 md:gap-4" style={{ fontFamily: 'serif', transform: 'scaleY(1.15)', transformOrigin: 'top', color: theme.text, transition: "color 0.7s ease" }}>
        <Link
          to="/work"
          className="text-sm md:text-sm hover:opacity-60 transition-opacity"
        >
          work
        </Link>
        <Link
          to="/about"
          className="text-sm md:text-sm hover:opacity-60 transition-opacity"
        >
          about
        </Link>
      </div>

      <nav
        className="fixed top-6 md:top-8 left-4 md:left-8 z-50 flex items-center gap-4"
        style={{
          fontFamily: "serif",
          transform: "scaleY(1.15)",
          transformOrigin: "top",
          color: theme.text,
          transition: "color 0.7s ease",
        }}
      >
        <div
          className="flex items-center rounded-full"
          style={{
            border: `1px solid ${theme.text}`,
            transition: "border-color 0.7s ease",
            padding: "3px 6px",
            gap: "5px",
            WebkitFontSmoothing: "antialiased",
            transform: "translateZ(0)",
          }}
        >
          {themes.map((t) => {
            const isActive = theme.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id as ThemeId)}
                className="cursor-pointer"
                style={{
                  width: "10px",
                  height: "9px",
                  minWidth: "10px",
                  minHeight: "9px",
                  maxWidth: "10px",
                  maxHeight: "9px",
                  borderRadius: "50%",
                  backgroundColor: t.bg,
                  outline: isActive ? `1px solid ${theme.text}` : "none",
                  outlineOffset: "1px",
                  boxShadow: "none",
                  WebkitFontSmoothing: "antialiased",
                  transform: "translateZ(0)",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  transition: "box-shadow 0.3s ease",
                  display: "block",
                  flexShrink: 0,
                  overflow: "hidden",
                  fontSize: 0,
                  lineHeight: 0,
                }}
                aria-label={`Switch to ${t.id} theme`}
              />
            );
          })}
        </div>
      </nav>

      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4">
        <div className="relative">
          <p
            className="text-[10px] md:text-sm italic mb-2 text-left"
            style={{ fontFamily: "serif", color: theme.text, transition: "color 0.7s ease" }}
          >
            Hi, I'm
          </p>
          <Link to="/about" className="block">
            <h1
              className="hover:opacity-60 transition-opacity cursor-pointer"
              style={{ color: theme.text, transition: "color 0.7s ease" }}
            >
              <span
                className="text-2xl sm:text-4xl md:text-6xl whitespace-nowrap"
                style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
              >
                Leo
              </span>
              <span
                className="text-3xl sm:text-5xl md:text-7xl italic whitespace-nowrap"
                style={{ fontFamily: "serif", fontWeight: "normal" }}
              >
                vanderOost
              </span>
            </h1>
          </Link>
          <p
            className="text-[10px] md:text-sm italic mt-2 md:mt-4 text-right"
            style={{ fontFamily: "serif", color: theme.text, transition: "color 0.7s ease" }}
          >
            Thanks for visiting my website :)
          </p>
        </div>
      </div>

      <div className="absolute bottom-[37vh] left-1/2 -translate-x-1/2 z-20 px-4 text-center max-w-[85%] md:max-w-none">
        <Link
          to="/work"
          className="text-[8px] md:text-xs tracking-wider uppercase hover:opacity-60 transition-opacity cursor-pointer inline-block"
          style={{
            fontFamily: "Courier New, monospace",
            color: theme.text,
            transition: "color 0.7s ease",
            letterSpacing: "0.1em",
          }}
        >
          Fashion patternmaking & tailoring portfolio
        </Link>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden hide-scrollbar"
          style={{
            width: "100%"
          }}
        >
          {[...scrollingImages, ...scrollingImages].map((image, index) => {
            const imageNames = [
              "IMG_8150_3.jpg",
              "IMG_8117_3.jpg",
              "IMG_8203.jpg",
              "IMG_8907_2.jpg",
              "Screenshot_2026-05-13_at_16.38.57-2.png",
              "Leo_vd_Oost_2-3.jpg",
              "IMG_0130.PNG",
            ];
            return (
              <Link
                key={index}
                to={`/work/${imageToProjectMap[index % scrollingImages.length]}`}
                className="flex-shrink-0 h-[30vh] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              >
                <ImageWithFallback
                  src={image}
                  alt={imageNames[index % scrollingImages.length]}
                  className="h-full w-auto object-contain"
                  loading="eager"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}