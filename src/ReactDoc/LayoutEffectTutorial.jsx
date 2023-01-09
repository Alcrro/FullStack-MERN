import { useLayoutEffect, useEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef2 = useRef(null);

  // #1 "useLayoutEffect" render before "useEffect"
  useLayoutEffect(() => {
    console.log(inputRef2.current.value);
  }, []);

  useEffect(() => {
    inputRef2.current.value = "From useEffect";
  }, []);

  return (
    <div>
      <input ref={inputRef2} value="Pedro" style={{ width: 400, height: 100 }} />
    </div>
  );
};

export default LayoutEffectTutorial;
