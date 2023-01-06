import { useCallback } from "react";

const useShowContacts = (callback, deps) =>
    useCallback(() => {
        const invisInf = document.getElementById("invisible-inf");
        const btnTitle = document.getElementById("btnTitle");

        if (invisInf.className === "invisible-inf__hidden") {
            invisInf.style.display = "block";

            invisInf.classList.remove("invisible-inf__hidden");
            invisInf.classList.add("invisible-inf__active");

            btnTitle.innerHTML = "Hide Contacts";
        } else {
            invisInf.classList.remove("invisible-inf__active");
            invisInf.classList.add("invisible-inf__hidden");

            btnTitle.innerHTML = "Show Contacts";
        }
    }, deps)

export default useShowContacts;