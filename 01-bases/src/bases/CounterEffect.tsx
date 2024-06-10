import gsap from "gsap-trial";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

const MAX_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(0)
  const counterElement = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
  }

  /**
   *  Effect que nos asegura que el html ya se construyo
   */
  useLayoutEffect(() => {
    console.log("useLayoutEffect")
    if (counter < MAX_COUNT) return;
    const tl = gsap.timeline();
    tl.to(counterElement.current, {y: -10, duration: 0.3, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 0.3, ease: 'bounce.out'});
    console.log("%cSe llego al valor maximo", "color: red, background-color: black");
  }, [counter]);
  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}