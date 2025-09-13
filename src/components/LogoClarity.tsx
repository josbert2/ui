import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  size?: number;          // px del contenedor
  innerRatio?: number;    // tamaño del centro vs contenedor (0..1)
  outerRadius?: number;   // px borde externo
  innerRadius?: number;   // px borde interno
  outerColor?: string;    // color externo
  innerColor?: string;    // color interno
  animated?: boolean;     // activar micro-interacción
  animation?: "wiggle" | "growth" | "smooth"; // tipo de animación
};

export default function LogoClarity({
  size = 38,
  innerRatio = 0.58,
  outerRadius = 17,
  innerRadius = 9,
  outerColor = "#22c55e",
  innerColor = "#111114",
  animated = false,
  animation = "wiggle",
}: Props) {
  const reduce = useReducedMotion();
  const inner = Math.round(size * innerRatio);

  const base = (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: outerColor,
        borderRadius: outerRadius,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          background: innerColor,
          borderRadius: innerRadius,
        }}
      />
    </div>
  );

  if (!animated || reduce) return base;

  // === Animaciones ===
  const amp = Math.max(2, Math.floor((size - inner) / 10)); // amplitud segura

  const wiggleKeyframes = useMemo(
    () => ({
      x: [0, amp, amp, 0, -amp, -amp, 0],
      y: [0, -amp, amp, amp, amp, -amp, 0],
      scale: [1, 1.02, 1, 0.98, 1, 1.02, 1],
      rotate: [0, 3, 0, -3, 0, 3, 0],
    }),
    [amp]
  );

  const growthKeyframes = {
    scale: [1, 1.15, 1],
  };

  const smoothKeyframes = {
    x: [0, 6, 0, -6, 0],
    y: [0, -6, 0, 6, 0],
    scale: [1, 1.05, 1],
  };

  let animateProps: Record<string, any> = {};
  let transition: Record<string, any> = {};

  switch (animation) {
    case "growth":
      animateProps = growthKeyframes;
      transition = {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      };
      break;
    case "smooth":
      animateProps = smoothKeyframes;
      transition = {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      };
      break;
    default: // wiggle
      animateProps = wiggleKeyframes;
      transition = {
        duration: 7.5,
        ease: "easeInOut",
        times: [0, 0.18, 0.36, 0.54, 0.72, 0.9, 1],
        repeat: Infinity,
        repeatType: "mirror",
      };
      break;
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: outerColor,
        borderRadius: outerRadius,
      }}
    >
      <motion.div
        style={{
          width: inner,
          height: inner,
          background: innerColor,
          borderRadius: innerRadius,
        }}
        animate={animateProps}
        transition={transition}
      />
    </div>
  );
}
