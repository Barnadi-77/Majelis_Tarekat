// ==================================================
// PHBI - PERINGATAN HARI BESAR ISLAM
// ==================================================

export function PHBI() {

    const events = [
        {
            date: "12",
            month: "RABIUL AWWAL",
            title: "Maulid Nabi Muhammad SAW",
            description:
                "Peringatan kelahiran Nabi Muhammad SAW sebagai momentum untuk meneladani akhlak dan perjuangan beliau.",
            icon: "🌙"
        },

        {
            date: "27",
            month: "RAJAB",
            title: "Isra Mi'raj Nabi Muhammad SAW",
            description:
                "Memperingati perjalanan Isra Mi'raj Nabi Muhammad SAW sekaligus meningkatkan kecintaan terhadap ibadah.",
            icon: "✨"
        },

        {
            date: "10",
            month: "MUHARRAM",
            title: "Peringatan 10 Muharram",
            description:
                "Momentum berbagi dan mempererat kepedulian melalui kegiatan sosial serta santunan bagi yang membutuhkan.",
            icon: "🤲"
        }
    ];


    return `
        <section class="phbi" id="phbi">

            <div class="container">

                <!-- ==================== HEADER ==================== -->
                <div class="phbi-header">

                    <span class="section-label">
                        Kegiatan PHBI
                    </span>

                    <h2>
                        Peringatan Hari Besar Islam
                    </h2>

                    <p>
                        Menghidupkan semangat kebersamaan dan memperkuat
                        nilai-nilai keislaman melalui berbagai kegiatan
                        Peringatan Hari Besar Islam.
                    </p>

                </div>


                <!-- ==================== EVENTS ==================== -->
                <div class="phbi-grid">

                    ${events.map(event => `
                        
                        <article class="phbi-card">

                            <!-- Icon -->
                            <div class="phbi-card-icon">
                                ${event.icon}
                            </div>


                            <!-- Date -->
                            <div class="phbi-date">

                                <strong>
                                    ${event.date}
                                </strong>

                                <span>
                                    ${event.month}
                                </span>

                            </div>


                            <!-- Content -->
                            <div class="phbi-card-content">

                                <h3>
                                    ${event.title}
                                </h3>

                                <p>
                                    ${event.description}
                                </p>

                            </div>


                            <!-- Button -->
                            <button
                                type="button"
                                class="phbi-button"
                            >
                                Selengkapnya
                                <span>→</span>
                            </button>

                        </article>

                    `).join("")}

                </div>


                <!-- ==================== FOOTER ==================== -->
                <div class="phbi-footer">

                    <p>
                        Jadwal kegiatan PHBI dapat berubah sesuai
                        dengan agenda dan ketetapan Majelis.
                    </p>

                </div>

            </div>

        </section>
    `;
}