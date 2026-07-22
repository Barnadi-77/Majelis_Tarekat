export function Clipboard() {

    const buttons = document.querySelectorAll(".copy-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            navigator.clipboard.writeText(
                button.dataset.copy
            );

            button.textContent = "Tersalin ✓";

            setTimeout(() => {

                button.textContent = "Salin";

            },2000);

        });

    });

}