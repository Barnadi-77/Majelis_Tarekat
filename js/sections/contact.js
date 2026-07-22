export function Contact() {

    return `
        <section class="contac fade-right" id="kontak">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Kontak
                    </span>

                    <h2>
                        Hubungi Kami
                    </h2>

                    <p>
                        Kami siap membantu apabila Anda memiliki pertanyaan
                        mengenai kajian, program, maupun kegiatan majelis.
                    </p>

                </div>

                <div class="contact-content">

                    <div class="contact-info">

                        <div class="contact-card">

                            <h3>📍 Alamat</h3>

                            <p>
                                Jl. Contoh No. 123,
                                Cirebon, Jawa Barat
                            </p>

                        </div>

                        <div class="contact-card">

                            <h3>📞 Telepon</h3>

                            <p>
                                +62 812-3456-7890
                            </p>

                        </div>

                        <div class="contact-card">

                            <h3>✉ Email</h3>

                            <p>
                                info@majelistarekat.com
                            </p>

                        </div>

                        <div class="contact-card">

                            <h3>🕒 Jam Operasional</h3>

                            <p>
                                Senin - Ahad
                                <br>
                                08.00 - 21.00 WIB
                            </p>

                        </div>

                    </div>

                    <form class="contact-form">

                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            required
                        >

                        <input
                            type="email"
                            placeholder="Email"
                            required
                        >

                        <input
                            type="text"
                            placeholder="Subjek"
                            required
                        >

                        <textarea
                            rows="6"
                            placeholder="Tulis pesan..."
                            required
                        ></textarea>

                        <button
                            type="submit"
                            class="btn-primary"
                        >
                            Kirim Pesan
                        </button>

                    </form>

                </div>

            </div>

        </section>
    `;

}