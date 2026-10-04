import { programs } from "../data/programs.js";

const container = document.getElementById("program-detail-content");


// Ambil parameter ?program= dari URL
const params = new URLSearchParams(window.location.search);

const slug = params.get("program");


// Cari program berdasarkan slug
const program = programs.find(item => item.slug === slug);


// Jika program tidak ditemukan
if (!program) {

    container.innerHTML = `

        <div class="program-not-found">

            <div class="not-found-icon">
                ⚠️
            </div>

            <h2>
                Program Tidak Ditemukan
            </h2>

            <p>
                Maaf, program yang Anda cari tidak tersedia.
            </p>

            <a href="index.html#program">
                Kembali ke Program
            </a>

        </div>

    `;

}


// Jika program ditemukan
else {

    // Ubah title browser
    document.title = `${program.title} | Majelis`;


    container.innerHTML = `

        <div class="program-detail-header">

            <div class="program-detail-icon">
                ${program.icon}
            </div>

            <span class="detail-tag">
                PROGRAM MAJELIS
            </span>

            <h1>
                ${program.title}
            </h1>

            <p class="detail-description">
                ${program.description}
            </p>

        </div>


        <div class="program-detail-grid">


            <!-- =========================
                 DETAIL PROGRAM
            ========================== -->

            <article class="program-detail-main">

                <h2>
                    Tentang Program
                </h2>

                <div class="detail-content">

                    ${program.detail}

                </div>

            </article>



            <!-- =========================
                 INFORMASI PROGRAM
            ========================== -->

            <aside class="program-info">

                <h3>
                    Informasi Program
                </h3>


                <div class="info-item">

                    <span class="info-icon">
                        👥
                    </span>

                    <div>

                        <small>
                            Peserta
                        </small>

                        <strong>
                            ${program.target}
                        </strong>

                    </div>

                </div>



                <div class="info-item">

                    <span class="info-icon">
                        🗓️
                    </span>

                    <div>

                        <small>
                            Jadwal
                        </small>

                        <strong>
                            ${program.schedule}
                        </strong>

                    </div>

                </div>



                <div class="info-item">

                    <span class="info-icon">
                        📍
                    </span>

                    <div>

                        <small>
                            Lokasi
                        </small>

                        <strong>
                            ${program.location}
                        </strong>

                    </div>

                </div>

            </aside>

        </div>

    `;

}
