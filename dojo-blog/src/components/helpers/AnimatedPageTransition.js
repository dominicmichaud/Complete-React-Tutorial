import { motion } from "framer-motion";

const pageTransitionVariants = {
    initial: {
        //scale: 1.2,
        y: '100vh',
        opacity: 0,
    },
    enter: {
        //scale: 1,
        y: 0,
        opacity: 1,
    },
    exit: {
        //scale: 0.8,
        y: '100vh',
        opacity: 0,
    }
};

const AnimatedPageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageTransitionVariants}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPageTransition;