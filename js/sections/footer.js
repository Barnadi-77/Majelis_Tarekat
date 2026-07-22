export function Footer() {

    const year = new Date().getFullYear();

    return `
        <footer class="footer fade-up">

            <div class="container">

                <div class="footer-grid">

                    <div class="footer-about">

                        <h2 class="footer-logo">
                            Majelis
                        </h2>

                        <p>
                            Menjadi wadah pembelajaran Islam,
                            dakwah, dan pembinaan umat berdasarkan
                            Al-Qur'an dan As-Sunnah.
                        </p>

                    </div>

                    <div class="footer-links">

                        <h3>Navigasi</h3>

                        <a href="#tentang">Tentang</a>

                        <a href="#program">Program</a>

                        <a href="#jadwal">Jadwal</a>

                        <a href="#gallery">Galeri</a>

                        <a href="#kontak">Kontak</a>

                    </div>

                    <div class="footer-contact">

                        <h3>Kontak</h3>

                        <p>
                            📍 Cirebon, Jawa Barat
                        </p>

                        <p>
                            📞 +62 812-3456-7890
                        </p>

                        <p>
                            ✉ info@majelistarekat.com
                        </p>

                    </div>

                    <div class="footer-social">

                        <h3>Ikuti Kami</h3>

                        <div class="social-list">

                            <a href="#">Facebook</a>

                            <a href="#">Instagram</a>

                            <a href="#">YouTube</a>

                            <a href="#">TikTok</a>

                        </div>

                    </div>

                </div>

                <div class="footer-bottom">

                    <p>

                        © ${year} Majelis Tarekat.
                        Seluruh Hak Cipta Dilindungi.

                    </p>

                </div>

            </div>

        </footer>
    `;

}