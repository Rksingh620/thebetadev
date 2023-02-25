import React, { useEffect, useState } from "react";

type Props = {};

const BottomNav = (props: Props) => {
  const [isNavbarOpen, setIsNavBarOpen] = useState<boolean>(true);
  //   useEffect(() => {
  //     if (window !== undefined) {
  //       window.addEventListener("mousemove", (e) => {
  //         setIsNavBarOpen(true);
  //       });
  //     }
  //     return () =>
  //       window.removeEventListener("mousemove", () => {
  //         setIsNavBarOpen(false);
  //       });
  //   }, []);
  //   useEffect(() => {
  //     let timer: any;
  //     if (isNavbarOpen) {
  //       console.log("in timer if nav open");

  //       timer = setTimeout(() => {
  //         console.log("in timer");
  //         setIsNavBarOpen(false);
  //       }, 3000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [isNavbarOpen]);
  return (
    <nav
      // ${isNavbarOpen ? "w-[50vw] h-16 shadow-nav" : "w-0"}
      className={`
    w-[50vw] h-16 shadow-nav
       hover:w-[50vw] hover:h-16 transition-all  bg-tertiary rounded-t-lg overflow-hidden fixed bottom-0 text-white text-center`}
    >
      <ul className="flex gap-6 bg-inherit justify-between p-4 items-center [&>li]:cursor-pointer select-none">
        <li>Home</li>
        <li>Blog</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default BottomNav;
