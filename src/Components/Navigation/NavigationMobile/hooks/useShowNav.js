import { useCallback } from "react";

const useShowNav = (callback, deps) =>
    useCallback(() => {
        const invisNav = document.getElementById("navMobile");
        const invisContainer = document.getElementById("nav-container");
        const btnNav = document.getElementById("btnNav");

        if (invisNav.className === "navMobile") {
            invisNav.classList.remove('navMobile');
            invisNav.classList.add('nav__hidden');

            btnNav.style.transform = "rotate(360deg)";

            invisContainer.style.padding = "0 10px";

        } else {
            invisNav.classList.remove('nav__hidden');
            invisNav.classList.add('navMobile');

            btnNav.style.transform = "rotate(180deg)";
        }
    }, deps)

export default useShowNav;