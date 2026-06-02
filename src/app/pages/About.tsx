import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTheme, themes, ThemeId, ABOUT_TEXT_COLOR } from "../context/ThemeContext";
import profileImage from "../../imports/4b1fa4ff-c376-419a-a05e-42b04e80527e_2.jpg";

export default function About() {
  const { theme, setThemeId } = useTheme();
  const navColor = ABOUT_TEXT_COLOR;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-6 md:top-8 right-4 md:right-8 z-50 flex items-center gap-3 md:gap-4" style={{ fontFamily: 'serif', transform: 'scaleY(1.15)', transformOrigin: 'top', color: '#F5F0E8' }}>
        <Link
          to="/work"
          className="text-sm hover:opacity-60 transition-opacity"
        >
          work
        </Link>
        <Link
          to="/"
          className="text-sm hover:opacity-60 transition-opacity"
        >
          home
        </Link>
      </div>

      <nav
        className="fixed top-6 md:top-8 left-4 md:left-8 z-50 flex items-center gap-4"
        style={{
          fontFamily: "serif",
          transform: "scaleY(1.15)",
          transformOrigin: "top",
          color: navColor,
          transition: "color 0.7s ease",
        }}
      >
        <div
          className="flex items-center rounded-full"
          style={{
            border: `1px solid ${navColor}`,
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
                  outline: isActive ? `1px solid ${navColor}` : "none",
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

      <div className="min-h-screen flex flex-col justify-center px-6 md:px-8 lg:px-16 py-24 md:py-32" style={{ color: '#F5F0E8' }}>
        <h1 className="text-[10px] md:text-xs tracking-widest text-center mb-12 md:mb-20">LEO VAN DER OOST</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
          <div className="w-full max-w-sm mx-auto">
            <ImageWithFallback
              src={profileImage}
              alt="Profile"
              className="w-full h-auto object-cover rounded-lg"
              loading="eager"
            />
          </div>

          <div className="max-w-md">
            <p className="text-xs md:text-sm leading-relaxed opacity-80">
              My name is Leo, I am 27 years old and based in Amsterdam. My strengths are combining my creative skills I learned at the Amsterdam Fashion Institute with my technical skills in patternmaking, tailoring and digital garment development using CLO3D. My focus lies in pattern adjustment, made-to-measure construction, and translating designs into well-fitted garments.
            </p>
            <p className="text-xs md:text-sm leading-relaxed opacity-80 mt-4 md:mt-6">
              I am currently developing my skills further through the Tailor Professional programme (formerly the Meesteropleiding Coupeur), one of the leading tailoring and patternmaking programmes in the Netherlands. Here, I am deepening my knowledge of tailoring techniques, fit development, and garment construction.
            </p>
            <p className="text-xs md:text-sm leading-relaxed opacity-80 mt-4 md:mt-6">
              My practice combines traditional craftsmanship with digital workflows and creative pattern development.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-between px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-16 md:pb-20 relative" style={{ color: '#F5F0E8' }}>
        <div className="grid grid-cols-3 text-[9px] md:text-xs tracking-wider gap-2">
          <div className="text-left">
            <p className="opacity-40 mb-2">LEO VAN DER OOST</p>
          </div>
          <div className="text-center">
            <p className="opacity-40 mb-2 hidden md:block">PATTERN MAKER & TAILOR</p>
            <p className="opacity-40 mb-2 md:hidden">TAILOR</p>
          </div>
          <div className="text-right">
            <p className="opacity-40 mb-2">AMSTERDAM, NL</p>
          </div>
        </div>

        <div className="grid grid-cols-3 text-[9px] md:text-xs tracking-wider mt-12 md:mt-16 gap-2">
          <div className="text-left">
            <a
              href="mailto:leovanderoost@live.nl"
              className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer inline-block"
            >
              EMAIL
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://instagram.com/leovanderoost"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer inline-block"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="text-right">
            <a
              href="https://linkedin.com/in/leo-van-der-oost-83369226a"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer inline-block"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] font-bold leading-none mt-16 md:mt-20 opacity-10 text-center">
          L .O
        </div>
      </div>
    </div>
  );
}