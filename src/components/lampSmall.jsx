"use client";
import React from "react";
import { motion } from "framer-motion";
import { dn } from "../utils/cn.jsx";

export const LampContainerSmall = ({
children,
className,
}) => {
return (
    <div
    className={dn(
        "relative flex mt-20 h-[400px] flex-col items-center justify-center bg-blue-50 dark:bg-zinc-900 w-full rounded-md z-0",
        className
    )}
    >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
        initial={{ opacity: 0.25, width: "0rem" }}
        whileInView={{ opacity: 1, width: "190px" }}
        transition={{
            delay: 0.17,
            duration: 0.80,
            ease: "easeInOut",
        }}
        style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[190px] bg-gradient-conic from-orange-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
        <div className="absolute  w-[100%] left-0 bg-blue-50 dark:bg-zinc-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute  w-40 h-[100%] left-0 bg-blue-50 dark:bg-zinc-900  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0.25, width: "0rem" }}
        whileInView={{ opacity: 1, width: "190px" }}
        transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
        }}
        style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[190px] bg-gradient-conic from-transparent via-transparent to-orange-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
        <div className="absolute  w-40 h-[100%] right-0 bg-blue-50 dark:bg-zinc-900  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute  w-[100%] right-0 bg-blue-50 dark:bg-zinc-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

    </div>

    <div className="absolute z-50 flex flex-col items-center px-5 bottom-40">
        {children}
    </div>
    </div>
);
};
