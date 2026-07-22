export function Counter() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const update = () => {

            current += increment;

            if(current < target){

                counter.textContent = Math.ceil(current) + "+";

                requestAnimationFrame(update);

            }else{

                counter.textContent = target + "+";

            }

        };

        update();

    });

}