import { MotionConfig } from "framer-motion";

export default function MotionConfigProvider({ children }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}
