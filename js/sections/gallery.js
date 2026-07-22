import { gallery } from "../data/gallery.js";

export function Gallery() {

    return `
        <section class="gallery zoom" id="gallery">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Galeri
                    </span>

                    <h2>
                        Dokumentasi Kegiatan Majelis
                    </h2>

                    <p>
                        Beberapa momen kegiatan kajian, pembelajaran,
                        dan aktivitas sosial bersama jamaah.
                    </p>

                </div>

                <div class="gallery-grid">

                    ${gallery.map(item => `

                        <div class="gallery-item">

                            <img
                                src="${item.image}"
                                alt="${item.title}"
                            >

                            <div class="gallery-overlay">

                                <h3>${item.title}</h3>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}