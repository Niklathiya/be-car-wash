import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  targetValue: string;
  duration?: number;
}

interface NumericValue {
  numeric: number;
  suffix: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
}) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const countRef = useRef<HTMLHeadingElement>(null);

  // Extract numeric value and suffix from targetValue
  const getNumericValue = (value: string): NumericValue => {
    const numericPart = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9]/g, "");
    return { numeric: parseInt(numericPart), suffix };
  };

  const { numeric: targetNumeric, suffix } = getNumericValue(targetValue);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue: number = 0;
    const endValue: number = targetNumeric;

    const animate = (currentTime: number): void => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumeric, duration]);

  return (
    <h3 ref={countRef} className="text-5xl font-bold">
      {count}
      {suffix}
    </h3>
  );
};

export default AnimatedCounter;
