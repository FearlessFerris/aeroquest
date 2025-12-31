'use client';
// MotionBox Component Implementation 


// Dependencies 
import { motion } from 'framer-motion';


// Components & Necessary Files 


// MotionBox
export default function MotionBox({children}){ 

    return( 
        <motion.div 
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.9,
      }}
      style={{ willChange: 'transform, opacity' }}
      
        >
            {children}
        </motion.div>
    )
}