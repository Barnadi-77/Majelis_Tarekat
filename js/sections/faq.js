import { faqs } from "../data/faq.js";

export function FAQ() {

    return `
        <section class="faq fade-up" id="faq">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        FAQ
                    </span>

                    <h2>
                        Pertanyaan yang Sering Diajukan
                    </h2>

                    <p>
                        Berikut beberapa pertanyaan yang paling sering
                        ditanyakan oleh jamaah.
                    </p>

                </div>

                <div class="faq-list">

                    ${faqs.map((faq, index) => `

                        <div class="faq-item">

                            <button
                                class="faq-question"
                                data-index="${index}"
                            >

                                <span>${faq.question}</span>

                                <span class="faq-icon">+</span>

                            </button>

                            <div class="faq-answer">

                                <p>

                                    ${faq.answer}

                                </p>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}