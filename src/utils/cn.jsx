import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn({ inputs }) {
  return clsx(twMerge(inputs));
}
export function dn(...inputs) {
  return twMerge(clsx(inputs));
}