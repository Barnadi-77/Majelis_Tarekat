// ==================================================
// SCROLL REVEAL ANIMATION
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

    let lastScrollY = window.scrollY;

    let ticking = false;


    // ==================================================
    // CEK SEMUA ELEMENT
    // ==================================================

    function checkAnimations() {

        const currentScrollY = window.scrollY;

        let direction = "down";


        // Tentukan arah scroll
        if (currentScrollY < lastScrollY) {
            direction = "up";
        }

        if (currentScrollY > lastScrollY) {
            direction = "down";
        }


        lastScrollY = currentScrollY;


        // Ambil semua element animasi
        const elements = document.querySelectorAll(
            ".fade-up, .fade-left, .fade-right, .zoom"
        );


        const windowHeight = window.innerHeight;


        elements.forEach((element) => {

            const rect = element.getBoundingClientRect();


            // ==================================================
            // ELEMENT MASUK VIEWPORT
            // ==================================================

            const isVisible =
                rect.top < windowHeight * 0.85 &&
                rect.bottom > windowHeight * 0.15;


            if (isVisible) {


                // Jangan animasikan ulang
                // selama element masih berada di viewport

                if (element.dataset.visible === "true") {
                    return;
                }


                element.dataset.visible = "true";


                // Bersihkan posisi sebelumnya

                element.classList.remove("show");
                element.classList.remove("from-top");


                // ==================================================
                // SCROLL KE ATAS
                // ==================================================

                if (direction === "up") {
                    element.classList.add("from-top");
                }


                // ==================================================
                // TRIGGER ANIMATION
                // ==================================================

                requestAnimationFrame(() => {

                    requestAnimationFrame(() => {

                        element.classList.add("show");

                    });

                });

            }


            // ==================================================
            // ELEMENT KELUAR VIEWPORT
            // ==================================================

            else {

                element.dataset.visible = "false";

                element.classList.remove("show");

                element.classList.remove("from-top");

            }

        });


        ticking = false;

    }


    // ==================================================
    // SCROLL EVENT
    // ==================================================

    function handleScroll() {

        if (!ticking) {

            window.requestAnimationFrame(
                checkAnimations
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    // ==================================================
    // RESIZE
    // ==================================================

    window.addEventListener(
        "resize",
        checkAnimations
    );


    // ==================================================
    // INITIAL CHECK
    // ==================================================

    setTimeout(() => {

        checkAnimations();

    }, 300);

});