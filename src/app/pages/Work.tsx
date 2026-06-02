import { ProjectRow } from "../components/ProjectRow";
import { Link, useParams } from "react-router";
import { useTheme, themes, ThemeId } from "../context/ThemeContext";
import { useEffect, useRef, useState } from "react";

// Placeholder until real images are uploaded
import placeholder from "../../imports/placeholder.svg";

// Using placeholders for all images - uncomment and replace after uploading real images to src/imports/
const interior1 = placeholder, interior2 = placeholder, interior3 = placeholder, interior4 = placeholder;
const skirt1 = placeholder, skirt2 = placeholder, skirt3 = placeholder, skirt4 = placeholder, skirt5 = placeholder, skirt6 = placeholder, skirt7 = placeholder, skirt8 = placeholder, skirt9 = placeholder, skirt10 = placeholder, skirt11 = placeholder, skirt12 = placeholder, skirt13 = placeholder;
const pattern1 = placeholder, pattern2 = placeholder, pattern3 = placeholder, pattern4 = placeholder, pattern5 = placeholder, pattern6 = placeholder, pattern7 = placeholder, pattern8 = placeholder, pattern9 = placeholder, pattern10 = placeholder, pattern11 = placeholder, pattern12 = placeholder, pattern13 = placeholder, pattern14 = placeholder, pattern15 = placeholder, pattern16 = placeholder, pattern17 = placeholder, pattern18 = placeholder, pattern19 = placeholder, pattern20 = placeholder, pattern21 = placeholder, pattern22 = placeholder, pattern23 = placeholder, pattern24 = placeholder, pattern25 = placeholder, pattern26 = placeholder;
const product1 = placeholder, product2 = placeholder, product3 = placeholder, product4 = placeholder, product5 = placeholder, product6 = placeholder, product7 = placeholder, product8 = placeholder, product9 = placeholder, product10 = placeholder, product11 = placeholder, product12 = placeholder, product13 = placeholder, product14 = placeholder, product15 = placeholder, product16 = placeholder, product17 = placeholder;
const fashion1 = placeholder, fashion2 = placeholder, fashion3 = placeholder, fashion4 = placeholder, fashion5 = placeholder, fashion6 = placeholder, fashion7 = placeholder, fashion8 = placeholder, fashion9 = placeholder;
const landscape1 = placeholder, landscape2 = placeholder, landscape3 = placeholder, landscape4 = placeholder, landscape5 = placeholder, landscape6 = placeholder, landscape7 = placeholder, landscape8 = placeholder, landscape9 = placeholder, landscape10 = placeholder;
const urban1 = placeholder, urban2 = placeholder, urban3 = placeholder, urban4 = placeholder, urban5 = placeholder, urban6 = placeholder, urban7 = placeholder, urban8 = placeholder, urban9 = placeholder, urban10 = placeholder, urban11 = placeholder, urban12 = placeholder, urban13 = placeholder, urban14 = placeholder, urban15 = placeholder, urban16 = placeholder, urban17 = placeholder, urban18 = placeholder, urban19 = placeholder, urban20 = placeholder;
const clo1 = placeholder, clo2 = placeholder, clo3 = placeholder, clo4 = placeholder, clo5 = placeholder, clo6 = placeholder, clo7 = placeholder, clo8 = placeholder;
const sleeve1 = placeholder, sleeve2 = placeholder, sleeve3 = placeholder, sleeve4 = placeholder, sleeve5 = placeholder, sleeve6 = placeholder, sleeve7 = placeholder, sleeve8 = placeholder, sleeve9 = placeholder, sleeve10 = placeholder, sleeve11 = placeholder;
const jeans1 = placeholder, jeans2 = placeholder, jeans3 = placeholder, jeans4 = placeholder, jeans5 = placeholder, jeans6 = placeholder, jeans7 = placeholder;

export default function Work() {
  const { theme, setThemeId } = useTheme();
  const { projectId } = useParams();
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const [homeOverlap, setHomeOverlap] = useState(false);
  const [aboutOverlap, setAboutOverlap] = useState(false);
  const [themePickerOverlap, setThemePickerOverlap] = useState(false);

  // Scroll to project when projectId is present
  useEffect(() => {
    if (projectId) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(projectId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [projectId]);

  useEffect(() => {
    const checkOverlap = () => {
      if (!homeRef.current || !aboutRef.current || !themePickerRef.current) return;

      const homeRect = homeRef.current.getBoundingClientRect();
      const aboutRect = aboutRef.current.getBoundingClientRect();
      const themePickerRect = themePickerRef.current.getBoundingClientRect();

      // Get all image elements on the page
      const images = document.querySelectorAll('[data-image-container]');
      
      let homeOverlapsImage = false;
      let aboutOverlapsImage = false;
      let themePickerOverlapsImage = false;

      images.forEach((container) => {
        const imgElement = container.querySelector('img');
        if (!imgElement || !imgElement.complete || imgElement.naturalWidth === 0) return;

        const containerRect = container.getBoundingClientRect();
        
        // Calculate actual rendered image bounds within container
        const naturalWidth = imgElement.naturalWidth;
        const naturalHeight = imgElement.naturalHeight;
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        const imageAspect = naturalWidth / naturalHeight;
        const containerAspect = containerWidth / containerHeight;

        let renderedWidth, renderedHeight, offsetX, offsetY;

        if (imageAspect > containerAspect) {
          renderedWidth = containerWidth;
          renderedHeight = containerWidth / imageAspect;
          offsetX = 0;
          offsetY = (containerHeight - renderedHeight) / 2;
        } else {
          renderedHeight = containerHeight;
          renderedWidth = containerHeight * imageAspect;
          offsetX = (containerWidth - renderedWidth) / 2;
          offsetY = 0;
        }

        const imageRect = {
          left: containerRect.left + offsetX,
          right: containerRect.left + offsetX + renderedWidth,
          top: containerRect.top + offsetY,
          bottom: containerRect.top + offsetY + renderedHeight,
        };

        // Check if home overlaps with this image
        if (
          homeRect.left < imageRect.right &&
          homeRect.right > imageRect.left &&
          homeRect.top < imageRect.bottom &&
          homeRect.bottom > imageRect.top
        ) {
          homeOverlapsImage = true;
        }

        // Check if about overlaps with this image
        if (
          aboutRect.left < imageRect.right &&
          aboutRect.right > imageRect.left &&
          aboutRect.top < imageRect.bottom &&
          aboutRect.bottom > imageRect.top
        ) {
          aboutOverlapsImage = true;
        }

        // Check if theme picker overlaps with this image
        if (
          themePickerRect.left < imageRect.right &&
          themePickerRect.right > imageRect.left &&
          themePickerRect.top < imageRect.bottom &&
          themePickerRect.bottom > imageRect.top
        ) {
          themePickerOverlapsImage = true;
        }
      });

      setHomeOverlap(homeOverlapsImage);
      setAboutOverlap(aboutOverlapsImage);
      setThemePickerOverlap(themePickerOverlapsImage);
    };

    // Check on scroll, resize, and periodically
    const scrollContainer = document.querySelector('.snap-y');
    const horizontalScrollContainers = document.querySelectorAll('.overflow-x-auto');
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkOverlap);
    }
    
    horizontalScrollContainers.forEach(container => {
      container.addEventListener('scroll', checkOverlap);
    });
    
    window.addEventListener('resize', checkOverlap);

    // Initial check and periodic updates for images loading
    const interval = setInterval(checkOverlap, 100);
    checkOverlap();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkOverlap);
      }
      horizontalScrollContainers.forEach(container => {
        container.removeEventListener('scroll', checkOverlap);
      });
      window.removeEventListener('resize', checkOverlap);
      clearInterval(interval);
    };
  }, []);

  // Each project includes original photo filenames preserved in the 'filenames' array
  const projects = [
    {
      id: "womens-shirt-shawl-collar",
      title: "Women's Shirt with Shawl Collar",
      description:
        "Shawl-collar shirt with bound plackets and refined internal finishes, including flat-felled and French seam construction for a clean interior.",
      images: [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product15,
        product16,
        product17,
        product7,
        product8,
        product9,
        product10,
        product11,
        product12,
        product13,
        product14,
      ],
      filenames: [
        "IMG_0085.jpg",
        "IMG_0087.jpg",
        "IMG_0086.jpg",
        "IMG_8149_2.jpg",
        "IMG_8150_2.jpg",
        "IMG_8153.jpg",
        "Screenshot_2026-06-01_at_19.58.24.png",
        "Screenshot_2026-06-01_at_19.56.13.png",
        "Screenshot_2026-06-01_at_19.56.02.png",
        "Screenshot_2026-06-01_at_19.07.42.png",
        "Screenshot_2026-06-01_at_19.08.21.png",
        "Screenshot_2026-06-01_at_19.08.29.png",
        "Screenshot_2026-06-01_at_19.31.27.png",
        "Screenshot_2026-06-01_at_19.10.43.png",
        "Screenshot_2026-06-01_at_19.24.40.png",
        "Screenshot_2026-06-01_at_19.24.50.png",
        "Screenshot_2026-06-01_at_19.30.10.png",
      ],
    },
    {
      id: "18th-century-stays",
      title: "18th-Century Inspired Stays",
      description:
        "Half-boned stays inspired by 18th-century construction, primarily hand-made with machine-sewn bone casings, exploring historical techniques in a contemporary context.",
      images: [
        landscape1,
        landscape3,
        landscape2,
        landscape4,
        landscape8,
        landscape5,
        landscape6,
        landscape7,
        landscape9,
        landscape10,
      ],
      filenames: [
        "tempImageopJUlG.png",
        "IMG_8899-1.jpg",
        "Screenshot_2026-05-17_at_09.07.48.png",
        "IMG_8883_3-2.jpg",
        "IMG_8652_3-1.jpg",
        "IMG_8874_2-2.jpg",
        "IMG_8655_2-1.jpg",
        "IMG_8654_2-2.jpg",
        "IMG_6498_2-1.jpg",
        "IMG_6497_2-1.jpg",
      ],
    },
    {
      id: "digital-patternmaking-clo3d",
      title: "Digital Patternmaking - CLO3D",
      description:
        "Digital garment development in CLO3D, Blender, and Substance Painter, including a bomber jacket and skirt also produced as a physical prototype for fitting.",
      images: [
        clo3,
        clo2,
        clo1,
        clo4,
        clo5,
        clo6,
        urban16,
        urban17,
        urban20,
        urban18,
        urban19,
        urban1,
        urban2,
        urban3,
        urban4,
        urban5,
        urban6,
        urban7,
        urban8,
        urban9,
        urban10,
        urban11,
        urban12,
        urban13,
        urban14,
        urban15,
      ],
      filenames: [
        "IMG_9656_2.jpg",
        "IMG_9660_2.jpg",
        "IMG_9663_2.jpg",
        "Screenshot_2026-05-24_at_23.45.38.png",
        "DSC05791.JPG",
        "Screenshot_2026-05-24_at_23.46.18.png",
        "Screenshot_2026-05-13_at_16.32.55.png",
        "Screenshot_2026-05-13_at_16.33.06.png",
        "Screenshot_2026-05-13_at_16.33.21.png",
        "Screenshot_2026-05-13_at_16.34.20.png",
        "Screenshot_2026-05-13_at_16.34.06.png",
        "Screenshot_2026-05-13_at_16.37.30.png",
        "Screenshot_2026-05-13_at_16.37.41.png",
        "Screenshot_2026-05-13_at_16.36.20.png",
        "Screenshot_2026-05-13_at_16.38.22.png",
        "Screenshot_2026-05-13_at_16.38.34.png",
        "Screenshot_2026-05-13_at_16.36.42.png",
        "Screenshot_2026-05-13_at_16.39.11.png",
        "Screenshot_2026-05-13_at_16.38.57.png",
        "Screenshot_2026-05-13_at_16.35.48.png",
        "Screenshot_2026-05-13_at_16.39.34.png",
        "Screenshot_2026-05-13_at_16.39.52.png",
        "Screenshot_2026-05-13_at_16.35.32.png",
        "Screenshot_2026-05-13_at_16.41.00.png",
        "Screenshot_2026-05-13_at_16.40.40.png",
        "Screenshot_2026-05-13_at_16.36.08.png",
      ],
    },
    {
      id: "mens-jeans-closed-redesign",
      title: "Men's Jeans (Closed Redesign)",
      description:
        "Redesigned jeans developed from a standard block through multiple toile iterations, exploring updated pocket placement and seam construction.",
      images: [
        interior1,
        interior4,
        interior2,
        interior3,
        jeans5,
        jeans6,
        jeans3,
        jeans4,
        jeans7,
      ],
      filenames: [
        "Leo_vd_Oost-2.jpg",
        "Leo_vd_Oost_1-2.jpg",
        "Leo_vd_Oost_3-2.jpg",
        "Leo_vd_Oost_2-2.jpg",
        "IMG_0088.jpg",
        "IMG_0091.jpg",
        "Untitled_design-11.jpg",
        "Untitled_design-12.jpg",
        "jhb.png",
      ],
    },
    {
      id: "sleeve-experiment",
      title: "Sleeve Experiment (Ronald van der Kemp Inspired)",
      description:
        "Experimental sleeve development exploring volume and silhouette through pattern manipulation and sampling.",
      images: [
        sleeve1,
        sleeve2,
        sleeve3,
        sleeve4,
        sleeve5,
        sleeve6,
        sleeve7,
        sleeve8,
        sleeve9,
        sleeve10,
        sleeve11,
      ],
      filenames: [
        "Untitled_design-1.jpg",
        "Untitled_design-3-1.jpg",
        "Untitled_design-2-1.jpg",
        "Untitled_design-4.jpg",
        "Untitled_design-6.jpg",
        "Untitled_design-5.jpg",
        "Untitled_design-7.jpg",
        "Untitled_design-8.jpg",
        "Screenshot_2026-06-01_at_22.49.23.png",
        "Screenshot_2026-06-01_at_22.48.56.png",
        "Screenshot_2026-06-01_at_22.49.08.png",
      ],
    },
    {
      id: "womens-trousers",
      title: "Women's Trousers",
      description:
        "Tailored trousers featuring welt back pockets and in-seam pockets, focused on fit accuracy and functional detailing.",
      images: [
        fashion1,
        fashion2,
        fashion3,
        fashion4,
        fashion5,
        fashion6,
        fashion7,
        fashion8,
        fashion9,
      ],
      filenames: [
        "IMG_8214_2.jpg",
        "IMG_8212_2.jpg",
        "IMG_8211_2.jpg",
        "IMG_8198_3.jpg",
        "IMG_8202_3.jpg",
        "IMG_8201_4.jpg",
        "IMG_8200_4.jpg",
        "Screenshot_2026-06-01_at_19.44.26.png",
        "Screenshot_2026-06-01_at_19.44.48.png",
      ],
    },
    {
      id: "womens-striped-skirt",
      title: "Women's Striped Skirt",
      description:
        "For this project I developed the pattern and constructed the garment in size 36. The skirt features a concealed zipper and an open slit, with a focus on accurate construction and clean finishing.",
      images: [
        skirt1,
        skirt2,
        skirt3,
        skirt4,
        skirt5,
        skirt6,
        skirt7,
        skirt8,
        skirt9,
        skirt10,
        skirt11,
        skirt12,
        skirt13,
      ],
      filenames: [
        "IMG_8111_2.jpg",
        "tempImagegYuQXh.png",
        "IMG_8112_2.jpg",
        "IMG_8123_2.jpg",
        "IMG_8120.jpg",
        "IMG_8122_2.jpg",
        "IMG_8121_2.jpg",
        "IMG_8117_2.jpg",
        "IMG_8119_2.jpg",
        "IMG_8118_2.jpg",
        "Screenshot_2026-06-01_at_19.56.38.png",
        "Screenshot_2026-06-01_at_19.56.52.png",
        "Screenshot_2026-06-01_at_19.48.10.png",
      ],
    },
    {
      id: "pattern-adjustments",
      title: "Pattern Adjustments & Fit Development",
      description:
        "Made-to-measure pattern training focused on fit correction, asymmetry adjustment, and balance refinement under couture-level instruction.",
      images: [
        pattern1,
        pattern2,
        pattern3,
        pattern4,
        pattern5,
        pattern6,
        pattern7,
        pattern8,
        pattern9,
        pattern10,
        pattern11,
        pattern12,
        pattern13,
        pattern14,
        pattern15,
        pattern16,
        pattern17,
        pattern18,
        pattern19,
        pattern20,
        pattern21,
        pattern22,
        pattern23,
        pattern24,
        pattern25,
        pattern26,
      ],
      filenames: [
        "Screenshot_2026-06-01_at_20.40.03.png",
        "Screenshot_2026-06-01_at_20.40.17.png",
        "Screenshot_2026-06-01_at_20.40.27.png",
        "Screenshot_2026-06-01_at_20.40.40.png",
        "Screenshot_2026-06-01_at_20.34.13-1.png",
        "Screenshot_2026-06-01_at_20.34.30-1.png",
        "Screenshot_2026-06-01_at_20.34.45-1.png",
        "Screenshot_2026-06-01_at_20.41.00.png",
        "Screenshot_2026-06-01_at_20.41.14.png",
        "Screenshot_2026-06-01_at_20.41.27.png",
        "Screenshot_2026-06-01_at_20.41.39.png",
        "Screenshot_2026-06-01_at_20.46.45.png",
        "Screenshot_2026-06-01_at_20.47.00.png",
        "IMG_0113.PNG",
        "IMG_0114.PNG",
        "IMG_0115.PNG",
        "IMG_0116.PNG",
        "IMG_0117.PNG",
        "IMG_0119.PNG",
        "IMG_0122.PNG",
        "IMG_0123.PNG",
        "IMG_0124.PNG",
        "IMG_0129.PNG",
        "IMG_0126-1.PNG",
        "IMG_0127.PNG",
        "IMG_0128.PNG",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ overscrollBehaviorX: 'none', touchAction: 'pan-y' }}>
      <div className="fixed top-6 md:top-8 right-4 md:right-8 z-50 flex items-center gap-3 md:gap-4" style={{ fontFamily: 'serif', transform: 'scaleY(1.15)', transformOrigin: 'top' }}>
        <Link
          ref={aboutRef}
          to="/about"
          className="text-sm hover:opacity-60 transition-all"
          style={{
            color: aboutOverlap ? theme.bg : theme.text,
            mixBlendMode: 'normal',
            transitionDuration: '0.1s',
          }}
        >
          about
        </Link>
        <Link
          ref={homeRef}
          to="/"
          className="text-sm hover:opacity-60 transition-all"
          style={{
            color: homeOverlap ? theme.bg : theme.text,
            mixBlendMode: 'normal',
            transitionDuration: '0.1s',
          }}
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
        }}
      >
        <div
          ref={themePickerRef}
          className="flex items-center rounded-full transition-all"
          style={{
            border: `1px solid ${themePickerOverlap ? theme.bg : theme.text}`,
            padding: "3px 6px",
            gap: "5px",
            WebkitFontSmoothing: "antialiased",
            transform: "translateZ(0)",
            transitionDuration: '0.1s',
            mixBlendMode: 'normal',
            backgroundColor: themePickerOverlap ? 'transparent' : 'transparent',
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
                  outline: isActive ? `1px solid ${themePickerOverlap ? theme.bg : theme.text}` : "none",
                  outlineOffset: "1px",
                  boxShadow: "none",
                  WebkitFontSmoothing: "antialiased",
                  transform: "translateZ(0)",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  display: "block",
                  flexShrink: 0,
                  overflow: "hidden",
                  fontSize: 0,
                  lineHeight: 0,
                  transition: 'outline-color 0.1s',
                  mixBlendMode: 'normal',
                }}
                aria-label={`Switch to ${t.id} theme`}
              />
            );
          })}
        </div>
      </nav>

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ overscrollBehaviorX: 'none' }}>
        {projects.map((project, index) => (
          <div key={index} id={project.id} className="snap-start">
            <ProjectRow
              title={project.title}
              description={project.description}
              images={project.images}
              filenames={project.filenames}
              scrollOffset={0}
              landscapeMode={project.title === "18th-century inspired stays"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}