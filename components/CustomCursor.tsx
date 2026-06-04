"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const ringX = useSpring(pointerX, { stiffness: 420, damping: 32, mass: 0.45 });
  const ringY = useSpring(pointerY, { stiffness: 420, damping: 32, mass: 0.45 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: MouseEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
    };
    const updateHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [role='button'], input, textarea, select")));
    };
    const hide = () => setVisible(false);
    const show = () => setVisible(true);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", updateHover);
    document.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", updateHover);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [pointerX, pointerY]);

  return (
    <div className={`custom-cursor ${visible ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: pressed ? 0.72 : hovering ? 1.65 : 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: pointerX, y: pointerY }}
        animate={{ scale: pressed ? 0.65 : hovering ? 0.45 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
}
