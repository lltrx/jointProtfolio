import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from "../components/lampSmall";
import { useState, useEffect } from "react";

export default function About() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDark(isDark);
    };

    // Initial check
    updateTheme();

    // Use MutationObserver to watch for class changes on the <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true, //configure it to listen to attribute changes
    });

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full items-center md:p-20 space-y-4 h-screen">
      <div className="z-10 w-full flex flex-col justify-center items-center">
        {dark ? (
          <div className="w-full">
            <div className="hidden lg:flex flex-col items-center">
              <LampContainer className={"flex w-full justify-center"}>
                <h1 className="mt-8 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent lg:text-7xl">
                  About Me
                </h1>
              </LampContainer>
              <div className="flex w-2/3 items-center mt-4">
                <p className="text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                  Innovative software engineering with a passion for personal
                  growth and a love for tackling diverse projects. I've
                  dedicated countless hours to improving my skills in mobile and
                  web development through hands-on experience. In my recent
                  roles, I worked closely with clients and development teams to
                  create customized website solutions, resolve bugs, implement
                  new features, and enhance user experiences.
                </p>
                <img
                  src="/profile.jpg"
                  className="w-[250px] h-[250px] rounded-full mx-auto object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:hidden">
              <LampContainerSmall>
                <div className="flex flex-col">
                  <h1 className="mt-8 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl translate-y-12">
                    About Me
                  </h1>
                </div>
              </LampContainerSmall>
              <div className="flex flex-col w-5/6 space-y-10 -translate-y-28">
                <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display">
                  Innovative software engineering with a passion for personal
                  growth and a love for tackling diverse projects. I've
                  dedicated countless hours to improving my skills in mobile and
                  web development through hands-on experience. In my recent
                  roles, I worked closely with clients and development teams to
                  create customized website solutions, resolve bugs, implement
                  new features, and enhance user experiences.
                </p>
                <img
                  src="/profile.jpg"
                  className="w-[250px] h-[250px] rounded-full mx-auto object-cover object-center"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-50 flex flex-col items-center pt-48 md:pt-40 lg:pt-48">
            <div className="hidden lg:flex flex-col w-2/3">
              <h1 className="mt-6 font-bold mb-24 bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent lg:text-7xl">
                About Me
              </h1>
              <div
                className="flex items-center"
                initial={{ opacity: 0.5, y: 50 }}
                whileInView={{ opacity: 1, y: -250 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <p className="text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                  Innovative software engineering with a passion for personal
                  growth and a love for tackling diverse projects. I've
                  dedicated countless hours to improving my skills in mobile and
                  web development through hands-on experience. In my recent
                  roles, I worked closely with clients and development teams to
                  create customized website solutions, resolve bugs, implement
                  new features, and enhance user experiences.
                </p>
                <img
                  src="/profile.jpg"
                  className="w-[250px] h-[250px] rounded-full mx-auto object-cover object-center"
                />
              </div>
            </div>
            <div className="flex lg:hidden justify-center mt-16">
              <div className="flex flex-col w-5/6 mt-2">
                <h1 className="mt-8 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                  About Me
                </h1>
                <div className="flex flex-col space-y-10">
                  <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display">
                    Innovative software engineering with a passion for personal
                    growth and a love for tackling diverse projects. I've
                    dedicated countless hours to improving my skills in mobile
                    and web development through hands-on experience. In my
                    recent roles, I worked closely with clients and development
                    teams to create customized website solutions, resolve bugs,
                    implement new features, and enhance user experiences.
                  </p>
                  <img
                    src="/profile.jpg"
                    className="w-[250px] h-[250px] rounded-full mx-auto object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
