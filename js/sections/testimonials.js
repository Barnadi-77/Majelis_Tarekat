import { testimonials } from "../data/testimonials.js";

export function Testimonials() {

    return `
        <section class="testimonials fade-up" id="testimoni">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Testimoni
                    </span>

                    <h2>
                        Apa Kata Jamaah?
                    </h2>

                    <p>
                        Pengalaman para jamaah yang telah mengikuti
                        berbagai kegiatan dan kajian di majelis.
                    </p>

                </div>

                <div class="testimonial-grid">

                    ${testimonials.map(item => `

                        <div class="testimonial-card">

                            <div class="quote">
                                ❝
                            </div>

                            <p class="testimonial-text">
                                ${item.message}
                            </p>

                            <div class="testimonial-user">

                                <img
                                    src="${item.image}"
                                    alt="${item.name}"
                                >

                                <div>

                                    <h4>${item.name}</h4>

                                    <span>${item.role}</span>

                                </div>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}