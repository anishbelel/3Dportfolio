import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariantBottom1,textVariantBottom2 } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[11].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[12].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[0].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[1].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[2].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[3].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[4].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[5].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[6].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[7].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[8].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom1()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[9].icon} />
        </div>
      </motion.div>
      <motion.div variants={textVariantBottom2()} >
        <div className='w-28 h-28'>
          <BallCanvas icon={technologies[10].icon} />
        </div>
      </motion.div>
      
    </div>
    </>
  );
};

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//       <motion.div variants={textVariantBottom2()}>
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       </motion.div>
//       ))}
//     </div>
//   );
// }; You can also use this code but it will show all the icons comes from the same direction


export default SectionWrapper(Tech, "");