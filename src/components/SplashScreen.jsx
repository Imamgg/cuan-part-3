/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = (props) => {
    const { onFinish } = props;
    const [done, setDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(true);
        }, 2200)

        const timer2 = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, [])

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-[9999]"
                >
                    <div className="w-40 h-40 bg-amber-950 rounded-full flex justify-center items-center text-white text-2xl">Logo</div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SplashScreen;