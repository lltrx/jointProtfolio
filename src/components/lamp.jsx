"use client";
import React from "react";
import { motion } from "framer-motion";
import { dn } from "../utils/cn.jsx";

export const LampContainer = ({
children,
className,
}) => {
return (
    <div
    className={dn(
        "relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-blue-50 dark:bg-zinc-900 w-full rounded-md z-0",
        className
    )}
    >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
        initial={{ opacity: 0.5, width: "0rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#2779e3] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
        <div className="absolute  w-[100%] left-0 bg-blue-50 dark:bg-zinc-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute  w-40 h-[100%] left-0 bg-blue-50 dark:bg-zinc-900  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0.5, width: "0rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#2779e3] text-white [--conic-position:from_290deg_at_center_top]"
        >
        <div className="absolute  w-40 h-[100%] right-0 bg-blue-50 dark:bg-zinc-900  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute  w-[100%] right-0 bg-blue-50 dark:bg-zinc-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-blue-50 dark:bg-zinc-900 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <motion.div
        initial={{ width: "0rem" }}
        whileInView={{ width: "30rem" }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#2779e3] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-900 "></div>
    </div>

    <div className="absolute z-50 flex flex-col items-center px-5 bottom-20">
        {children}
    </div>
    </div>
);
};
