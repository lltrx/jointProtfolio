import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { motion } from "framer-motion";

export default function References() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-2">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          References
        </h2>
        <div className="relative">
          {/* Left fade effect */}
          <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-[#eff6ff] dark:from-[#18181b] to-transparent z-10" />
          {/* Right fade effect */}
          <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#eff6ff] dark:from-[#18181b] to-transparent z-10" />
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <InfiniteMovingCards
              items={testimonials}
              speed="slow"
              direction="left"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
