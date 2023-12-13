import React from 'react';
import {  useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
const HorizontalWrapper = ({children,direction,height}) => {
     const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset:["start end","end start"]
  });
    const xTransform = useTransform(
      scrollYProgress,
      [1, 0.5, 0.1,0],
      [-1000,0, 0, 0]
    );
    return (
      <div
        ref={scrollRef}
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        <motion.div>{children}</motion.div>
      </div>
    );
};

export default HorizontalWrapper;


