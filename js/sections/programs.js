import { programs } from "../data/programs.js";

export function Programs() {

    return `
        <section class="programs fade-up" id="program">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Program Kami
                    </span>

                    <h2>
                        Program Kajian Majelis
                    </h2>

                    <p>
                        Berbagai program pembelajaran Islam yang
                        dirancang untuk seluruh kalangan.
                    </p>

                </div>

                <div class="program-grid">

                    ${programs.map(program => `

                        <div class="program-card">

                            <div class="program-icon">

                                ${program.icon}

                            </div>

                            <h3>

                                ${program.title}

                            </h3>

                            <p>

                                ${program.description}

                            </p>

                            <a href="../html/detail-program.html?program=${program.slug}"> Selengkapnya <span>→</span> </a>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}