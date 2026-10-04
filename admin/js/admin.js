// ==================================================
// ADMIN DASHBOARD
// ==================================================

const navItems =
    document.querySelectorAll(".nav-item");

const adminPages =
    document.querySelectorAll(".admin-page");

const pageTitle =
    document.getElementById("pageTitle");

const sidebarToggle =
    document.getElementById("sidebarToggle");

const adminSidebar =
    document.getElementById("adminSidebar");

const logoutButton =
    document.getElementById("logoutButton");


// ==================================================
// PAGE NAVIGATION
// ==================================================

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        const page =
            item.dataset.page;


        // Remove active

        navItems.forEach((nav) => {
            nav.classList.remove("active");
        });


        item.classList.add("active");


        // Hide all pages

        adminPages.forEach((adminPage) => {

            adminPage.classList.remove("active");

        });


        // Show selected page

        const selectedPage =
            document.getElementById(
                `page-${page}`
            );

        if (selectedPage) {

            selectedPage.classList.add(
                "active"
            );

        }


        // Update title

        const titles = {

            dashboard: "Dashboard",

            pemasukan: "Pemasukan",

            pengeluaran: "Pengeluaran",

            laporan: "Laporan Keuangan"

        };


        pageTitle.textContent =
            titles[page] || "Dashboard";


        // Close sidebar mobile

        adminSidebar.classList.remove(
            "show"
        );

    });

});


// ==================================================
// SIDEBAR TOGGLE
// ==================================================

sidebarToggle.addEventListener(
    "click",
    () => {

        adminSidebar.classList.toggle(
            "show"
        );

    }
);


// ==================================================
// LOGOUT
// ==================================================

logoutButton.addEventListener(
    "click",
    () => {

        sessionStorage.removeItem(
            "adminLoggedIn"
        );

        window.location.reload();

    }
);