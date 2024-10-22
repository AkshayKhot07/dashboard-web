"use client";

import { useEffect, useState } from "react";
import "./AnimatedCounter.css";
import classNames from "classnames";

interface AnimatedCounterTypes {
  initialValue: number;
  targetValue: number;
  className?: string;
}

const AnimatedCounter = ({
  initialValue,
  targetValue,
  className,
}: AnimatedCounterTypes) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue === 0 ? -1 : initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <p
      className={classNames(
        "container font-bold text-2xl text-background-100",
        className
      )}
    >
      {count}
    </p>
  );
};

export default AnimatedCounter;
