export function initFAQ() {

    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            items.forEach(other => {

                if(other !== item){

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}