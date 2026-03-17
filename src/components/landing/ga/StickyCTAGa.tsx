import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTAGa = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-navy/95 backdrop-blur-md border-t border-white/5 md:hidden"
        >
          <button onClick={scrollToForm} className="btn-cta w-full text-center py-3 text-base">
            Register Now — It's Free
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTAGa;
