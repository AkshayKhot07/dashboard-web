"use client";

import classNames from "classnames";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function CustomCarousel({ children }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<any>(null);

  const slideNext = useCallback(
    (e = undefined) => {
      if (e !== undefined) {
        setSlideDone(false);
        clearTimeout(timeID);
        setTimeID(
          setTimeout(() => {
            slideNext();
            setSlideDone(true);
          }, 5000)
        );
      }

      setActiveIndex((val) => {
        if (val >= children.length - 1) {
          return 0;
        } else {
          return val + 1;
        }
      });
    },
    [timeID, children.length]
  );

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

    return () => window.clearTimeout(timeID);
  }, [slideDone, timeID, slideNext]);

  const slidePrev = (e = undefined) => {
    if (e !== undefined) {
      setSlideDone(false);
      clearTimeout(timeID);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className={classNames(
        "container__slider",
        "h-full w-full overflow-hidden bg-white p-0",
        "flex flex-row flex-nowrap items-center justify-start"
      )}
    >
      {children.map((item: any, index: any) => {
        return (
          <div
            className={classNames(
              activeIndex === 1
                ? "box-border h-auto min-w-full translate-x-0 overflow-hidden object-cover transition-[transform] duration-1000 ease-in-out"
                : activeIndex === 2
                ? "box-border h-auto min-w-full -translate-x-[100%] overflow-hidden object-cover transition-[transform] duration-1000 ease-in-out"
                : activeIndex === 3
                ? "box-border h-auto min-w-full -translate-x-[200%] overflow-hidden object-cover transition-[transform] duration-1000 ease-in-out"
                : "box-border h-auto min-w-full -translate-x-[300%] overflow-hidden object-cover transition-[transform] duration-1000 ease-in-out",
              "relative z-50"
              //   "mb-5"
            )}
            key={index}
            onMouseEnter={AutoPlayStop}
            onMouseLeave={AutoPlayStart}
          >
            {item}
          </div>
        );
      })}

      <div
        className={classNames(
          "container__slider__links invisible",
          "absolute bottom-[5%] left-[50%] -translate-x-1/2"
        )}
      >
        {children.map((item: any, index: any) => {
          return (
            <button
              key={index}
              className={classNames(
                activeIndex === index
                  ? "relative mx-[2px] my-0 h-2 w-2 rounded-[50%] border-[1px] border-solid border-gray-600 bg-black p-0 outline-none transition-[background-color] duration-1000 ease-in-out"
                  : "relative mx-[2px] my-0 h-2 w-2 rounded-[50%] border-[1px] border-solid border-gray-600 bg-white p-0 outline-none transition-[background-color] duration-1000 ease-in-out"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <div className="absolute -bottom-11 z-50 flex w-full justify-center">
        <button
          className="slider__btn-prev z-20 p-3 bg-purple-100 rounded-full"
          onClick={(e: any) => {
            e.preventDefault();
            slidePrev(e);
          }}
        >
          <GrLinkPrevious className="text-background-100" />
        </button>
        <button
          className="slider__btn-next ml-4 z-20 p-3 bg-purple-100 rounded-full"
          onClick={(e: any) => {
            e.preventDefault();
            slideNext(e);
          }}
        >
          <GrLinkNext className="text-background-100" />
        </button>
      </div>
    </div>
  );
}

export default CustomCarousel;
