import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface ProjectRowProps {
  title: string;
  description: string;
  images: string[];
  scrollOffset?: number;
  textAlign?: 'left' | 'right';
  landscapeMode?: boolean;
}

export function ProjectRow({ title, description, images, scrollOffset = 0, textAlign = 'left', landscapeMode = false }: ProjectRowProps) {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [imageRect, setImageRect] = useState<DOMRect | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedCount = useRef(0);
  const [imageOverlays, setImageOverlays] = useState<{ width: number; height: number; top: number; left: number }[]>([]);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const initialPositionSet = useRef(false);

  // Remove the early initialization effect
  // useEffect(() => {
  //   if (scrollRef.current && !initialPositionSet.current) {
  //     scrollRef.current.scrollLeft = 180;
  //     requestAnimationFrame(() => {
  //       setScrollOpacity(1);
  //     });
  //     initialPositionSet.current = true;
  //   }
  // }, []);

  const handleImageClick = (image: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomedImage) {
      setIsAnimating(false);
      setTimeout(() => setZoomedImage(null), 300);
    } else {
      const rect = e.currentTarget.parentElement!.getBoundingClientRect();
      setImageRect(rect);
      setZoomedImage(image);
      setTimeout(() => setIsAnimating(true), 10);
    }
  };

  const handleImageLoad = () => {
    loadedCount.current += 1;
    if (loadedCount.current >= 1) {
      setImagesLoaded(true);
    }
  };

  const updateOverlays = () => {
    if (!isVisible) return;

    const overlays = images.map((_, index) => {
      const container = document.querySelector(`[data-image-index="${index}"][data-project-title="${title}"]`) as HTMLDivElement;
      if (!container) {
        return { width: 0, height: 0, top: 0, left: 0 };
      }

      const imgElement = container.querySelector('img');
      if (!imgElement || !imgElement.complete || imgElement.naturalWidth === 0) {
        return { width: 0, height: 0, top: 0, left: 0 };
      }

      const containerRect = container.getBoundingClientRect();
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

      return {
        width: renderedWidth,
        height: renderedHeight,
        left: offsetX,
        top: offsetY
      };
    });
    setImageOverlays(overlays);
  };



  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
      const scrollContainers = document.querySelectorAll('.snap-y');
      scrollContainers.forEach((container) => {
        (container as HTMLElement).style.overflow = 'hidden';
      });
    } else {
      document.body.style.overflow = '';
      const scrollContainers = document.querySelectorAll('.snap-y');
      scrollContainers.forEach((container) => {
        (container as HTMLElement).style.overflow = '';
      });
    }
    return () => {
      document.body.style.overflow = '';
      const scrollContainers = document.querySelectorAll('.snap-y');
      scrollContainers.forEach((container) => {
        (container as HTMLElement).style.overflow = '';
      });
    };
  }, [zoomedImage]);

  useEffect(() => {
    if (isAnimating && zoomContainerRef.current) {
      const container = zoomContainerRef.current;
      setTimeout(() => {
        container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
      }, 50);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollOffset;
    }
  }, [scrollOffset]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX === 0) return;
      const atLeft = el.scrollLeft <= 0;
      const atRight = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
      if ((e.deltaX < 0 && atLeft) || (e.deltaX > 0 && atRight)) {
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(updateOverlays, 800);
    let resizeTimeout: number;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(updateOverlays, 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.001 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && imagesLoaded && !hasAnimated && scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setScrollOpacity(1);
      setHasAnimated(true);
    }
  }, [isVisible, imagesLoaded, hasAnimated]);

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen flex items-start relative pt-24"
      >
        <div className="absolute left-4 md:left-8 bottom-6 md:bottom-8 z-10 text-left">
          <h2 className="text-xs md:text-sm mb-2 md:mb-3" style={{ fontFamily: 'serif', transform: 'scaleY(1.15)', transformOrigin: 'bottom', color: theme.text, transition: 'color 0.7s ease' }}>{title}</h2>
          <p className="text-[10px] md:text-xs opacity-60 max-w-[220px] md:max-w-[280px] italic leading-relaxed" style={{ fontFamily: 'serif', color: theme.text, transition: 'color 0.7s ease' }}>{description}</p>
        </div>

        <div className="absolute right-8 z-10 hidden md:flex items-center gap-4" style={{ bottom: 'calc(22vh - 1cm)' }}>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
                const start = scrollRef.current.scrollLeft;
                const scrollAmount = window.innerWidth * 0.7;
                const target = Math.max(0, start - scrollAmount);
                const distance = target - start;
                const duration = 800;
                let startTime: number | null = null;

                const easeInOutCubic = (t: number) => {
                  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animateScroll = (currentTime: number) => {
                  if (startTime === null) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const progress = Math.min(timeElapsed / duration, 1);
                  const easedProgress = easeInOutCubic(progress);

                  scrollRef.current!.scrollLeft = start + distance * easedProgress;

                  if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                  }
                };

                requestAnimationFrame(animateScroll);
              }
            }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="10" x2="5" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
              <line x1="12" y1="3" x2="5" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
              <line x1="12" y1="17" x2="5" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
            </svg>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
                const start = scrollRef.current.scrollLeft;
                const scrollAmount = window.innerWidth * 0.7;
                const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                const target = Math.min(maxScroll, start + scrollAmount);
                const distance = target - start;
                const duration = 800;
                let startTime: number | null = null;

                const easeInOutCubic = (t: number) => {
                  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animateScroll = (currentTime: number) => {
                  if (startTime === null) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const progress = Math.min(timeElapsed / duration, 1);
                  const easedProgress = easeInOutCubic(progress);

                  scrollRef.current!.scrollLeft = start + distance * easedProgress;

                  if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                  }
                };

                requestAnimationFrame(animateScroll);
              }
            }}
          >
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="35" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
              <line x1="28" y1="3" x2="35" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
              <line x1="28" y1="17" x2="35" y2="10" stroke={theme.text} strokeWidth="1.5" style={{ transition: 'stroke 0.7s ease' }} />
            </svg>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="w-full overflow-x-auto overflow-y-hidden hide-scrollbar"
          style={{
            overscrollBehaviorX: 'contain',
            opacity: scrollOpacity,
            transition: 'opacity 0.5s ease',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex items-center gap-6 md:gap-8 pl-4 md:pl-8">
            {images.map((image, index) => (
              <div
                key={index}
                data-image-index={index}
                data-project-title={title}
                data-image-container
                className="flex-shrink-0 h-[55vh] md:h-[60vh] w-auto relative rounded-lg overflow-hidden"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="h-full w-auto object-contain"
                  loading={index < 3 ? "eager" : "lazy"}
                  onLoad={handleImageLoad}
                />
                {imageOverlays[index] && imageOverlays[index].width > 0 && (
                  <div
                    className="absolute cursor-pointer"
                    style={{
                      width: `${imageOverlays[index].width}px`,
                      height: `${imageOverlays[index].height}px`,
                      top: `${imageOverlays[index].top}px`,
                      left: `${imageOverlays[index].left}px`,
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                    onClick={(e) => handleImageClick(image, e)}
                  />
                )}
              </div>
            ))}
            <div className="flex-shrink-0" style={{ width: '0.0001rem', height: '1px' }}>&nbsp;</div>
          </div>
        </div>
      </div>

      {zoomedImage && imageRect && (
        <div
          ref={zoomContainerRef}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto overflow-x-auto image-zoomed"
          style={{
            backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
            transition: 'background-color 0.3s ease-out',
            touchAction: 'pan-x pan-y',
          }}
          onClick={() => {
            setIsAnimating(false);
            setTimeout(() => setZoomedImage(null), 300);
          }}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            className="flex items-center justify-center min-h-full"
            style={{
              minHeight: isAnimating ? '180vh' : '100vh',
              transition: 'min-height 0.3s ease-out',
            }}
          >
            <div
              className="zoom-image-container"
              style={{
                position: isAnimating ? 'relative' : 'absolute',
                left: isAnimating ? 'auto' : `${imageRect.left + imageRect.width / 2}px`,
                top: isAnimating ? 'auto' : `${imageRect.top + imageRect.height / 2}px`,
                transform: isAnimating ? 'none' : 'translate(-50%, -50%)',
                width: isAnimating ? '180vw' : `${imageRect.width}px`,
                height: isAnimating ? '180vh' : `${imageRect.height}px`,
                transition: 'all 0.3s ease-out',
              }}
            >
              <ImageWithFallback
                src={zoomedImage}
                alt="Zoomed image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}