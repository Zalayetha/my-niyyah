import { Icon } from "@iconify/react";
import {
	motion,
	type PanInfo,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface SwipeToPrayProps {
	onUnlock: () => void;
	text?: string;
	className?: string;
}

export function SwipeToPray({
	onUnlock,
	text = "Geser untuk tandai selesai",
	className,
}: SwipeToPrayProps) {
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
					"flex items-center justify-center rounded-full bg-primary h-16 px-4",
					className,
				)}
			>
				<Icon
					icon="ph:check"
					className="text-primary-foreground"
					fontSize={28}
				/>
			</div>
		);
	}

	return (
		<div
			className={twMerge(
				"relative flex items-center rounded-full bg-card h-16 px-2",
				className,
			)}
		>
			<motion.div
				className="absolute left-1 right-1 top-1 bottom-1 rounded-full bg-primary/20"
				style={{ opacity: bgOpacity }}
			/>

			<motion.div
				className="absolute left-1 flex items-center justify-center rounded-full bg-primary cursor-grab active:cursor-grabbing z-10 shadow-lg"
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
				<Icon
					icon="ph:arrow-right"
					className="text-primary-foreground"
					fontSize={24}
				/>
			</motion.div>

			<motion.div
				className="absolute inset-0 flex items-center justify-center pointer-events-none"
				style={{ opacity }}
			>
				<span className="text-muted-foreground text-sm">{text}</span>
			</motion.div>
		</div>
	);
}
