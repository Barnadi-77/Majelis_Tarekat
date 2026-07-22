export function ScrollAnimation(){

    const elements = document.querySelectorAll(

        ".fade-up, .fade-left, .fade-right, .zoom"

    );

    const observer = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:.15

        }

    );

    elements.forEach(element=>{

        observer.observe(element);

    });

}