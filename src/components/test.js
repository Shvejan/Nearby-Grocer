import React from "react";
import { AnimationWrapper } from "react-hover-animation";

const Test = () => {
  return (
    <AnimationWrapper
      /* 
      normal react attributes like "className" are allowed 
      */
      className="animation-wrapper"
      /* 
      styles will override the hover styles 
      */
      style={{
        textAlign: "center",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "lightblue",
      }}
      /* 
      must provide to each css property two values of the same type (initial and onHover)  
      */
      config={{
        color: {
          initial: "black",
          onHover: "red",
        },
      }}
      /* 
      resets the default behavior  
      */
      reset={true}
      /* 
      animation config using an object 
      */
      animationConfig={{
        duration: 500,
      }}
      /* 
      animation config using a preset
      */
      /* 
      animationConfig='molasses'
      */
    >
      <h1>I animate on hover</h1>
    </AnimationWrapper>
  );
};
export default Test;
