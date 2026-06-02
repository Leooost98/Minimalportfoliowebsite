import { ProjectRow } from "../components/ProjectRow";
import { Link, useParams } from "react-router";
import { useTheme, themes, ThemeId } from "../context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import { createPlaceholder } from "../components/NumberedPlaceholder";

// Numbered placeholders showing which image goes where
// Uncomment the import statements below after uploading real images to src/imports/

// Interior/Jeans (Images 8-11)
const interior1 = createPlaceholder("Leo_vd_Oost-2.jpg", 8);
const interior2 = createPlaceholder("Leo_vd_Oost_3-2.jpg", 9);
const interior3 = createPlaceholder("Leo_vd_Oost_2-2.jpg", 10);
const interior4 = createPlaceholder("Leo_vd_Oost_1-2.jpg", 11);

// Skirt Project (Images 12-24)
const skirt1 = createPlaceholder("IMG_8111_2.jpg", 12);
const skirt2 = createPlaceholder("tempImagegYuQXh.png", 13);
const skirt3 = createPlaceholder("IMG_8112_2.jpg", 14);
const skirt4 = createPlaceholder("IMG_8123_2.jpg", 15);
const skirt5 = createPlaceholder("IMG_8120.jpg", 16);
const skirt6 = createPlaceholder("IMG_8122_2.jpg", 17);
const skirt7 = createPlaceholder("IMG_8121_2.jpg", 18);
const skirt8 = createPlaceholder("IMG_8117_2.jpg", 19);
const skirt9 = createPlaceholder("IMG_8119_2.jpg", 20);
const skirt10 = createPlaceholder("IMG_8118_2.jpg", 21);
const skirt11 = createPlaceholder("Screenshot_2026-06-01_at_19.56.38.png", 22);
const skirt12 = createPlaceholder("Screenshot_2026-06-01_at_19.56.52.png", 23);
const skirt13 = createPlaceholder("Screenshot_2026-06-01_at_19.48.10.png", 24);

// Pattern Adjustments (Images 25-50)
const pattern1 = createPlaceholder("Screenshot_2026-06-01_at_20.40.03.png", 25);
const pattern2 = createPlaceholder("Screenshot_2026-06-01_at_20.40.17.png", 26);
const pattern3 = createPlaceholder("Screenshot_2026-06-01_at_20.40.27.png", 27);
const pattern4 = createPlaceholder("Screenshot_2026-06-01_at_20.40.40.png", 28);
const pattern5 = createPlaceholder("Screenshot_2026-06-01_at_20.34.13-1.png", 29);
const pattern6 = createPlaceholder("Screenshot_2026-06-01_at_20.34.30-1.png", 30);
const pattern7 = createPlaceholder("Screenshot_2026-06-01_at_20.34.45-1.png", 31);
const pattern8 = createPlaceholder("Screenshot_2026-06-01_at_20.41.00.png", 32);
const pattern9 = createPlaceholder("Screenshot_2026-06-01_at_20.41.14.png", 33);
const pattern10 = createPlaceholder("Screenshot_2026-06-01_at_20.41.27.png", 34);
const pattern11 = createPlaceholder("Screenshot_2026-06-01_at_20.41.39.png", 35);
const pattern12 = createPlaceholder("Screenshot_2026-06-01_at_20.46.45.png", 36);
const pattern13 = createPlaceholder("Screenshot_2026-06-01_at_20.47.00.png", 37);
const pattern14 = createPlaceholder("IMG_0113.PNG", 38);
const pattern15 = createPlaceholder("IMG_0114.PNG", 39);
const pattern16 = createPlaceholder("IMG_0115.PNG", 40);
const pattern17 = createPlaceholder("IMG_0116.PNG", 41);
const pattern18 = createPlaceholder("IMG_0117.PNG", 42);
const pattern19 = createPlaceholder("IMG_0119.PNG", 43);
const pattern20 = createPlaceholder("IMG_0122.PNG", 44);
const pattern21 = createPlaceholder("IMG_0123.PNG", 45);
const pattern22 = createPlaceholder("IMG_0124.PNG", 46);
const pattern23 = createPlaceholder("IMG_0129.PNG", 47);
const pattern24 = createPlaceholder("IMG_0126-1.PNG", 48);
const pattern25 = createPlaceholder("IMG_0127.PNG", 49);
const pattern26 = createPlaceholder("IMG_0128.PNG", 50);

// Product/Shirt (Images 51-67)
const product1 = createPlaceholder("IMG_0085.jpg", 51);
const product2 = createPlaceholder("IMG_0087.jpg", 52);
const product3 = createPlaceholder("IMG_0086.jpg", 53);
const product4 = createPlaceholder("IMG_8149_2.jpg", 54);
const product5 = createPlaceholder("IMG_8150_2.jpg", 55);
const product6 = createPlaceholder("IMG_8153.jpg", 56);
const product7 = createPlaceholder("Screenshot_2026-06-01_at_19.07.42.png", 57);
const product8 = createPlaceholder("Screenshot_2026-06-01_at_19.08.21.png", 58);
const product9 = createPlaceholder("Screenshot_2026-06-01_at_19.08.29.png", 59);
const product10 = createPlaceholder("Screenshot_2026-06-01_at_19.31.27.png", 60);
const product11 = createPlaceholder("Screenshot_2026-06-01_at_19.10.43.png", 61);
const product12 = createPlaceholder("Screenshot_2026-06-01_at_19.24.40.png", 62);
const product13 = createPlaceholder("Screenshot_2026-06-01_at_19.24.50.png", 63);
const product14 = createPlaceholder("Screenshot_2026-06-01_at_19.30.10.png", 64);
const product15 = createPlaceholder("Screenshot_2026-06-01_at_19.58.24.png", 65);
const product16 = createPlaceholder("Screenshot_2026-06-01_at_19.56.13.png", 66);
const product17 = createPlaceholder("Screenshot_2026-06-01_at_19.56.02.png", 67);

// Fashion/Trousers (Images 68-76)
const fashion1 = createPlaceholder("IMG_8214_2.jpg", 68);
const fashion2 = createPlaceholder("IMG_8212_2.jpg", 69);
const fashion3 = createPlaceholder("IMG_8211_2.jpg", 70);
const fashion4 = createPlaceholder("IMG_8198_3.jpg", 71);
const fashion5 = createPlaceholder("IMG_8202_3.jpg", 72);
const fashion6 = createPlaceholder("IMG_8201_4.jpg", 73);
const fashion7 = createPlaceholder("IMG_8200_4.jpg", 74);
const fashion8 = createPlaceholder("Screenshot_2026-06-01_at_19.44.26.png", 75);
const fashion9 = createPlaceholder("Screenshot_2026-06-01_at_19.44.48.png", 76);

// Landscape/Stays (Images 77-86)
const landscape1 = createPlaceholder("tempImageopJUlG.png", 77);
const landscape2 = createPlaceholder("Screenshot_2026-05-17_at_09.07.48.png", 78);
const landscape3 = createPlaceholder("IMG_8899-1.jpg", 79);
const landscape4 = createPlaceholder("IMG_8883_3-2.jpg", 80);
const landscape5 = createPlaceholder("IMG_8874_2-2.jpg", 81);
const landscape6 = createPlaceholder("IMG_8655_2-1.jpg", 82);
const landscape7 = createPlaceholder("IMG_8654_2-2.jpg", 83);
const landscape8 = createPlaceholder("IMG_8652_3-1.jpg", 84);
const landscape9 = createPlaceholder("IMG_6498_2-1.jpg", 85);
const landscape10 = createPlaceholder("IMG_6497_2-1.jpg", 86);

// Urban/CLO3D (Images 87-106)
const urban1 = createPlaceholder("Screenshot_2026-05-13_at_16.37.30.png", 87);
const urban2 = createPlaceholder("Screenshot_2026-05-13_at_16.37.41.png", 88);
const urban3 = createPlaceholder("Screenshot_2026-05-13_at_16.36.20.png", 89);
const urban4 = createPlaceholder("Screenshot_2026-05-13_at_16.38.22.png", 90);
const urban5 = createPlaceholder("Screenshot_2026-05-13_at_16.38.34.png", 91);
const urban6 = createPlaceholder("Screenshot_2026-05-13_at_16.36.42.png", 92);
const urban7 = createPlaceholder("Screenshot_2026-05-13_at_16.39.11.png", 93);
const urban8 = createPlaceholder("Screenshot_2026-05-13_at_16.38.57.png", 94);
const urban9 = createPlaceholder("Screenshot_2026-05-13_at_16.35.48.png", 95);
const urban10 = createPlaceholder("Screenshot_2026-05-13_at_16.39.34.png", 96);
const urban11 = createPlaceholder("Screenshot_2026-05-13_at_16.39.52.png", 97);
const urban12 = createPlaceholder("Screenshot_2026-05-13_at_16.35.32.png", 98);
const urban13 = createPlaceholder("Screenshot_2026-05-13_at_16.41.00.png", 99);
const urban14 = createPlaceholder("Screenshot_2026-05-13_at_16.40.40.png", 100);
const urban15 = createPlaceholder("Screenshot_2026-05-13_at_16.36.08.png", 101);
const urban16 = createPlaceholder("Screenshot_2026-05-13_at_16.32.55.png", 102);
const urban17 = createPlaceholder("Screenshot_2026-05-13_at_16.33.06.png", 103);
const urban18 = createPlaceholder("Screenshot_2026-05-13_at_16.34.20.png", 104);
const urban19 = createPlaceholder("Screenshot_2026-05-13_at_16.34.06.png", 105);
const urban20 = createPlaceholder("Screenshot_2026-05-13_at_16.33.21.png", 106);

// CLO3D Project (Images 107-114)
const clo1 = createPlaceholder("IMG_9663_2.jpg", 107);
const clo2 = createPlaceholder("IMG_9660_2.jpg", 108);
const clo3 = createPlaceholder("IMG_9656_2.jpg", 109);
const clo4 = createPlaceholder("Screenshot_2026-05-24_at_23.45.38.png", 110);
const clo5 = createPlaceholder("DSC05791.JPG", 111);
const clo6 = createPlaceholder("Screenshot_2026-05-24_at_23.46.18.png", 112);
const clo7 = createPlaceholder("IMG_9635.jpg", 113);
const clo8 = createPlaceholder("IMG_9638.jpg", 114);

// Sleeve Experiment (Images 115-125)
const sleeve1 = createPlaceholder("Untitled_design-1.jpg", 115);
const sleeve2 = createPlaceholder("Untitled_design-3-1.jpg", 116);
const sleeve3 = createPlaceholder("Untitled_design-2-1.jpg", 117);
const sleeve4 = createPlaceholder("Untitled_design-4.jpg", 118);
const sleeve5 = createPlaceholder("Untitled_design-6.jpg", 119);
const sleeve6 = createPlaceholder("Untitled_design-5.jpg", 120);
const sleeve7 = createPlaceholder("Untitled_design-7.jpg", 121);
const sleeve8 = createPlaceholder("Untitled_design-8.jpg", 122);
const sleeve9 = createPlaceholder("Screenshot_2026-06-01_at_22.49.23.png", 123);
const sleeve10 = createPlaceholder("Screenshot_2026-06-01_at_22.48.56.png", 124);
const sleeve11 = createPlaceholder("Screenshot_2026-06-01_at_22.49.08.png", 125);

// Jeans (Images 126-132)
const jeans1 = createPlaceholder("Untitled_design-9.jpg", 126);
const jeans2 = createPlaceholder("Untitled_design-10.jpg", 127);
const jeans3 = createPlaceholder("Untitled_design-11.jpg", 128);
const jeans4 = createPlaceholder("Untitled_design-12.jpg", 129);
const jeans5 = createPlaceholder("IMG_0088.jpg", 130);
const jeans6 = createPlaceholder("IMG_0091.jpg", 131);
const jeans7 = createPlaceholder("jhb.png", 132);

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