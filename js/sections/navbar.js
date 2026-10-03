export function Navbar() {

    return `
        <header class="navbar">

            <div class="container navbar-container">

                <!-- LOGO -->
                <a href="#" class="logo">
                    Majelis Tarekat Syattariyah
                </a>


                <!-- NAVIGATION -->
                <nav class="nav-menu">

                    <a href="#">Beranda</a>
                    <a href="#tentang">Tentang</a>
                    <a href="#program">Program</a>
                    <a href="#jadwal">Jadwal</a>
                    <a href="#gallery">Galeri</a>
                    <a href="#kontak">Kontak</a>

                    <!-- DONASI MOBILE -->
                    <a href="#donasi" class="mobile-donasi">
                        Donasi
                    </a>

                    <a href="admin.html" class="mobile-admin">
                        Admin
                    </a>

                </nav>


                <!-- DESKTOP ACTION -->
                <div class="navbar-actions">

                    <a href="#donasi" class="btn-donasi">
                        Donasi
                    </a>

                    <a href="admin.html" class="btn-admin">
                        Admin
                    </a>

                </div>


                <!-- HAMBURGER -->
                <button
                    class="hamburger"
                    aria-label="Toggle Menu"
                    aria-expanded="false">

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

    if (!hamburger || !menu) return;


    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        menu.classList.toggle("active");

        const isOpen =
            hamburger.classList.contains("active");

        hamburger.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");
                menu.classList.remove("active");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}