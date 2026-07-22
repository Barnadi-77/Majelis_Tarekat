export function Navbar() {
    return `
        <header class="navbar">

            <div class="container navbar-container">

                <a href="#" class="logo">
                    Majelis Tarekat Syattariyah
                </a>

                <nav class="nav-menu">

                    <a href="#">Beranda</a>

                    <a href="#tentang">Tentang</a>

                    <a href="#program">Program</a>

                    <a href="#jadwal">Jadwal</a>

                    <a href="#gallery">Galeri</a>

                    <a href="#kontak">Kontak</a>

                </nav>

                <a href="#donasi" class="btn-donasi">
                    Donasi
                </a>


                <button
            class="hamburger"
            aria-label="Toggle Menu">

        <span></span>

            <span></span>

            <span></span>

        </button>

                
            </div>

        </header>
    `;
}

export function NavbarMenu() {

    const hamburger = document.querySelector(".hamburger");

    const menu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a")

        .forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");

                menu.classList.remove("active");

            });

        });

}