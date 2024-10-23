import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const ProgressBar = ({ value = 0 }: { value: number }) => {
  const barRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const val = valueRef.current;

    let p = 0;
    const duration = 3000; // 3 seconds
    const stepTime = Math.abs(Math.floor(duration / value));

    const interval = setInterval(() => {
      if (p >= value) {
        clearInterval(interval);
        return;
      }
      p++;
      (bar as any).style.transform = `rotate(${45 + p * 1.8}deg)`;
      (val as any).textContent = p | 0;
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="rt-container">
      <section>
        <div className="Scriptcontent">
          <div className="flex justify-center items-center">
            <div className="relative text-center float-left m-1">
              {/* Reduced the size here */}
              <div className="relative overflow-hidden w-[80px] h-[40px] -mb-[14px]">
                <div
                  className="absolute top-0 left-0 w-[80px] h-[80px] rounded-full box-border border-[6px] border-gray-300 border-b-[#0bf] border-r-[#0bf] transform rotate-[45deg] transition-transform duration-[50ms] ease-linear"
                  ref={barRef}
                ></div>
              </div>
              <div className="text-background-100 font-semibold text-base">
                <span ref={valueRef}>{Math.ceil(value)}</span>%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressBar;
