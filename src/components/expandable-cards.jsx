import React, { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click.js";

export function ExpandableCard({ active, setActive, cards }) {
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.classList.add("expandable-card-open");
    } else {
      document.body.classList.remove("expandable-card-open");
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("expandable-card-open");
    };
  }, [active, setActive]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-[99] flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <motion.div
            layoutId={`card-${active.id}`}
            ref={ref}
            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              layoutId={`image-${active.id}`}
              src={active.thumbnail}
              alt={active.title}
              className="w-full h-60 object-cover object-top"
            />
            <div className="p-4">
              <motion.h3
                layoutId={`title-${active.id}`}
                className="text-2xl font-bold text-neutral-700 dark:text-neutral-200"
              >
                {active.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${active.id}`}
                className="mt-2 text-neutral-600 dark:text-neutral-400"
              >
                {active.shortDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-neutral-600 dark:text-neutral-400"
              >
                {active.longDescription}
              </motion.div>
              <div className="mt-4 flex justify-between items-center">
                <motion.button
                  onClick={() => setActive(null)}
                  className="px-4 py-2 rounded-xl bg-[#1a5cb0] text-white text-xs font-bold"
                  >
                  Close
                </motion.button>
                <motion.a
                  layoutId={`button-${active.id}`}
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                  {active.live ? "Try Now" : "Watch Demo"}
                </motion.a>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
