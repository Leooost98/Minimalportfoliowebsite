import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import { useTheme, ABOUT_TEXT_COLOR } from "../context/ThemeContext";

export function CustomCursor() {
  const { theme } = useTheme();
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const cursorColor = isAboutPage ? ABOUT_TEXT_COLOR : theme.text;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const prevVelocity = useRef({ x: 0, y: 0 });
  const springVel = useRef(0);
  const springPos = useRef(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer") !== null ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsHovering(isClickable);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!relatedTarget) {
        setIsHovering(false);
        return;
      }
      const isClickable =
        relatedTarget.tagName === "A" ||
        relatedTarget.tagName === "BUTTON" ||
        relatedTarget.onclick !== null ||
        relatedTarget.classList.contains("cursor-pointer") ||
        relatedTarget.closest(".cursor-pointer") !== null ||
        window.getComputedStyle(relatedTarget).cursor === "pointer";
      setIsHovering(isClickable);
    };

    const checkZoomedState = () => {
      const zoomedElement = document.querySelector('.image-zoomed');
      setIsImageZoomed(!!zoomedElement);
    };

    const observer = new MutationObserver(checkZoomedState);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      const damping = 0.15;
      currentPos.current.x += dx * damping;
      currentPos.current.y += dy * damping;

      prevVelocity.current = { ...velocity.current };
      velocity.current.x = dx * 0.1;
      velocity.current.y = dy * 0.1;

      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      const prevSpeed = Math.sqrt(prevVelocity.current.x ** 2 + prevVelocity.current.y ** 2);

      if (prevSpeed > 3 && speed < 1) {
        springVel.current = -0.3;
      }

      const springStrength = 0.25;
      const springDamping = 0.75;
      const springForce = -springPos.current * springStrength;
      springVel.current += springForce;
      springVel.current *= springDamping;
      springPos.current += springVel.current;

      const squash = springPos.current;
      setScale({ x: 1 + squash, y: 1 - squash * 0.6 });
      setPosition({ x: currentPos.current.x, y: currentPos.current.y });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      observer.disconnect();
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Determine cursor size based on state
  const shouldBeEnlarged = isHovering || isImageZoomed;

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="rounded-full"
        style={{
          backgroundColor: shouldBeEnlarged ? (isAboutPage ? cursorColor : theme.bg) : cursorColor,
          width: shouldBeEnlarged ? "40px" : "12px",
          height: shouldBeEnlarged ? "40px" : "12px",
          transform: `scaleX(${scale.x}) scaleY(${scale.y})`,
          transition: "width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out",
        }}
      />
    </div>
  );
}