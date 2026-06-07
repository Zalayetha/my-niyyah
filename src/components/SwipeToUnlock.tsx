import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SwipeToUnlockProps {
  onUnlock: () => void;
  text?: string;
  className?: string;
}

export function SwipeToUnlock({
  onUnlock,
  text = "Geser untuk tandai selesai",
  className,
}: SwipeToUnlockProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const trackWidth = 300;
  const thumbSize = 56;
  const maxX = trackWidth - thumbSize - 8;

  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, maxX * 0.5, maxX], [1, 0.8, 0.3]);
  const bgOpacity = useTransform(x, [0, maxX], [0.2, 1]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > maxX * 0.8 || info.velocity.x > 500) {
      x.set(maxX);
      setIsUnlocked(true);
      if ("vibrate" in navigator) navigator.vibrate(10);
      onUnlock();
    } else {
      console.log("reset");
      x.set(0);
    }
  };

  if (isUnlocked) {
    return (
      <div
        className={twMerge(
          "flex items-center justify-center rounded-full bg-secondary h-16 px-4",
          className,
        )}
      >
        <Icon icon="ph:check" className="text-primary" fontSize={28} />
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "relative flex items-center rounded-full bg-slate-800 h-16 px-2",
        className,
      )}
    >
      <motion.div
        className="absolute left-1 right-1 top-1 bottom-1 rounded-full bg-secondary/20"
        style={{ opacity: bgOpacity }}
      />

      <motion.div
        className="absolute left-1 flex items-center justify-center rounded-full bg-secondary cursor-grab active:cursor-grabbing z-10 shadow-lg"
        style={{
          width: thumbSize,
          height: thumbSize,
          x,
        }}
        drag="x"
        dragMomentum={false}
        dragConstraints={{ left: 0, right: maxX }}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
      >
        <Icon icon="ph:arrow-right" className="text-primary" fontSize={24} />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity }}
      >
        <span className="text-slate-400 font-sans text-sm">{text}</span>
      </motion.div>
    </div>
  );
}
