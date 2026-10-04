// ==================================================
// ADMIN LOGIN
// ==================================================

const loginPage =
    document.getElementById("loginPage");

const adminDashboard =
    document.getElementById("adminDashboard");

const loginForm =
    document.getElementById("loginForm");

const loginError =
    document.getElementById("loginError");

const passwordToggle =
    document.getElementById("passwordToggle");

const passwordInput =
    document.getElementById("password");


// ==================================================
// CEK LOGIN
// ==================================================

const isLoggedIn =
    sessionStorage.getItem("adminLoggedIn");

if (isLoggedIn === "true") {

    showDashboard();

}


// ==================================================
// LOGIN
// ==================================================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const username =
        document
            .getElementById("username")
            .value
            .trim();

    const password =
        passwordInput.value;


    // LOGIN SEMENTARA

    if (
        username === "admin" &&
        password === "admin123"
    ) {

        sessionStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        showDashboard();

    } else {

        loginError.textContent =
            "Username atau password salah.";

    }

});


// ==================================================
// SHOW DASHBOARD
// ==================================================

function showDashboard() {

    loginPage.hidden = true;

    adminDashboard.hidden = false;

}


// ==================================================
// TOGGLE PASSWORD
// ==================================================

passwordToggle.addEventListener(
    "click",
    () => {

        if (
            passwordInput.type === "password"
        ) {

            passwordInput.type = "text";

            passwordToggle.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            passwordToggle.textContent = "👁";

        }

    }
);