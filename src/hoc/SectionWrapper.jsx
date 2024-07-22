import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ delay:1, amount: 0.10 }}  
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} 
        // The above line is responsible fot centering all the content. In the about section is needed but in the experience section it is not needed as we applied center-text to the heading and the rest of the elements are centered by the VerticalTimeline
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span> 
        {/* This is used for the smooth scrool at a desired page after clicking the link at the*/}

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;