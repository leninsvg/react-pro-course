import {useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap-trial";

export const useCounter = ({maxCount = 1}: { maxCount: number }) => {
  const [counter, setCounter] = useState(0)
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  }

  /**
   *  Effect que nos asegura que el html ya se construyo
   */
  useLayoutEffect(() => {
    tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
              .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
              .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0)
  }, [counter])

  return {
    counter,
    handleClick,
    counterElement: elementToAnimate
  }
}