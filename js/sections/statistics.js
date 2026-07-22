export function Statistics() {

    const stats = [
        {
            number: "10+",
            title: "Tahun Berdiri"
        },
        {
            number: "1500+",
            title: "Jamaah Aktif"
        },
        {
            number: "120+",
            title: "Kajian Rutin"
        },
        {
            number: "25+",
            title: "Asatidz"
        }
    ];

    return `
    <section class="statistics zoom">

            <div class="container">

                <div class="statistics-grid">

                    ${stats.map(stat => `
                        <div class="stat-card">

                            <h2 class="counter"
                                data-target="${stat.number.replace('+', '')}">
                                ${stat.number}
                            </h2>

                            <p>${stat.title}</p>

                        </div>
                    `).join("")}

                </div>

            </div>

        </section>
    `;

}