import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = ({
  direction = 'left',
  speed = 50,
  children,
  className = '',
  pauseOnHover = false
}) => {
  return (
    <div className={`relative flex w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 w-fit"
        animate={{
          x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear"
          }
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {children}
        {/* Duplicate content for seamless loop */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { key: `duplicate-${Math.random()}` })
        )}
      </motion.div>
    </div>
  );
};

const MarqueeExample = () => {
  return (
    <InfiniteMarquee
      direction="left"
      speed={120}
      className="bg-[#021E0E] text-[#DCDAD9] py-4"
      pauseOnHover={true}
    >
      <div className="flex space-x-8 mx-4 uppercase">
        {[
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today", 
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today", 
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today", 
          "Save up to 20% off Especially today",
          "Save up to 20% off Especially today",
        ].map((text, index) => (
          <span key={index} className="text-lg font-medium whitespace-nowrap flex items-center gap-2">
            <span className="bg-gray-300 h-6 w-6 flex items-center justify-center text-sm text-black rounded-full">
              %
            </span>
            {text}
          </span>
        ))}
      </div>
    </InfiniteMarquee>
  );
};

export default MarqueeExample;