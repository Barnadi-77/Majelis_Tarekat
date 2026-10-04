/* ==================================================
   ADMIN DASHBOARD
================================================== */


/* ==================================================
   ELEMENT
================================================== */

const dashboard = document.getElementById("adminDashboard");

const pageTitle = document.getElementById("pageTitle");

const navItems = document.querySelectorAll(".nav-item");

const adminPages = document.querySelectorAll(".admin-page");

const sidebarToggle = document.getElementById("sidebarToggle");

const adminSidebar = document.getElementById("adminSidebar");

const logoutButton = document.getElementById("logoutButton");


/* ==================================================
   MODAL
================================================== */

const transactionModal =
    document.getElementById("transactionModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const cancelTransaction =
    document.getElementById("cancelTransaction");

const modalTitle =
    document.getElementById("modalTitle");

const transactionForm =
    document.getElementById("transactionForm");

const transactionId =
    document.getElementById("transactionId");

const transactionType =
    document.getElementById("transactionType");

const transactionDate =
    document.getElementById("transactionDate");

const transactionName =
    document.getElementById("transactionName");

const transactionDescription =
    document.getElementById("transactionDescription");

const transactionDetail =
    document.getElementById("transactionDetail");

const transactionCategory =
    document.getElementById("transactionCategory");

const transactionAmount =
    document.getElementById("transactionAmount");

const transactionProof =
    document.getElementById("transactionProof");

const proofPreview =
    document.getElementById("proofPreview");

const proofPreviewImage =
    document.getElementById("proofPreviewImage");

const removeProof =
    document.getElementById("removeProof");


/* ==================================================
   STORAGE
================================================== */

const STORAGE_KEY = "majelisTransactions";

let transactions =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];


/* ==================================================
   FORMAT RUPIAH
================================================== */

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* ==================================================
   FORMAT TANGGAL
================================================== */

function formatDate(date) {

    if (!date) return "-";

    return new Date(date + "T00:00:00")
        .toLocaleDateString(
            "id-ID",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

}


/* ==================================================
   SIMPAN STORAGE
================================================== */

function saveTransactions() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(transactions)
    );

}


/* ==================================================
   NAVIGASI PAGE
================================================== */

function showPage(pageName) {

    adminPages.forEach(page => {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById(
            `page-${pageName}`
        );


    if (targetPage) {

        targetPage.classList.add("active");

    }


    navItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageName
        );

    });


    const titles = {

        dashboard: "Dashboard",

        pemasukan: "Pemasukan",

        pengeluaran: "Pengeluaran",

        laporan: "Laporan"

    };


    if (pageTitle) {

        pageTitle.textContent =
            titles[pageName] || "Dashboard";

    }


    if (
        window.innerWidth <= 900 &&
        adminSidebar
    ) {

        adminSidebar.classList.remove("open");

    }

}


/* ==================================================
   NAV BUTTON
================================================== */

navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            showPage(
                item.dataset.page
            );

        }
    );

});


/* ==================================================
   VIEW ALL
================================================== */

document
    .querySelectorAll(".view-all-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    });


/* ==================================================
   MOBILE SIDEBAR
================================================== */

if (sidebarToggle) {

    sidebarToggle.addEventListener(
        "click",
        () => {

            adminSidebar.classList.toggle(
                "open"
            );

        }
    );

}


/* ==================================================
   LOGOUT
================================================== */

if (logoutButton) {

    logoutButton.addEventListener("click", () => {

        // Hapus status login
        localStorage.removeItem("adminLoggedIn");

        // Sembunyikan dashboard
        if (dashboard) {
            dashboard.hidden = true;
        }

        // Tampilkan halaman login
        const loginPage =
            document.getElementById("loginPage");

        if (loginPage) {
            loginPage.hidden = false;
        }

        // Kembali ke halaman awal
        showPage("dashboard");

    });

}

/* ==================================================
   TOMBOL TAMBAH PEMASUKAN
================================================== */

const addIncomeButton =
    document.querySelector(
        "#page-pemasukan .primary-button"
    );


/* ==================================================
   TOMBOL TAMBAH PENGELUARAN
================================================== */

const addExpenseButton =
    document.querySelector(
        "#page-pengeluaran .primary-button"
    );


/* ==================================================
   BUKA MODAL
================================================== */

function openTransactionModal(type, data = null) {

    if (!transactionModal) return;


    transactionForm.reset();


    transactionId.value = "";

    transactionType.value = type;


    resetProofPreview();


    if (data) {

        modalTitle.textContent =
            type === "income"
                ? "Edit Pemasukan"
                : "Edit Pengeluaran";


        transactionId.value =
            data.id;

        transactionDate.value =
            data.tanggal;

        transactionName.value =
            data.nama;

        transactionDescription.value =
            data.keterangan;

        transactionDetail.value =
            data.detail || "";

        transactionCategory.value =
            data.kategori;

        transactionAmount.value =
            data.nominal;


        if (data.bukti) {

            proofPreviewImage.src =
                data.bukti;

            proofPreview.hidden = false;

        }

    } else {

        modalTitle.textContent =
            type === "income"
                ? "Tambah Pemasukan"
                : "Tambah Pengeluaran";


        transactionDate.value =
            new Date()
                .toISOString()
                .split("T")[0];

    }


    transactionModal.hidden = false;

    document.body.classList.add(
        "modal-open"
    );

}


/* ==================================================
   TAMBAH PEMASUKAN
================================================== */

if (addIncomeButton) {

    addIncomeButton.addEventListener(
        "click",
        () => {

            openTransactionModal(
                "income"
            );

        }
    );

}


/* ==================================================
   TAMBAH PENGELUARAN
================================================== */

if (addExpenseButton) {

    addExpenseButton.addEventListener(
        "click",
        () => {

            openTransactionModal(
                "expense"
            );

        }
    );

}


/* ==================================================
   TUTUP MODAL
================================================== */

function closeTransactionModal() {

    transactionModal.hidden = true;

    transactionForm.reset();

    resetProofPreview();

    document.body.classList.remove(
        "modal-open"
    );

}


/* ==================================================
   BUTTON CLOSE
================================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeTransactionModal
    );

}


if (cancelTransaction) {

    cancelTransaction.addEventListener(
        "click",
        closeTransactionModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeTransactionModal
    );

}


/* ==================================================
   ESC KEY
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !transactionModal.hidden
        ) {

            closeTransactionModal();

        }

    }
);


/* ==================================================
   UPLOAD BUKTI
================================================== */

transactionProof.addEventListener(
    "change",
    event => {

        const file =
            event.target.files[0];


        if (!file) return;


        if (!file.type.startsWith("image/")) {

            alert(
                "File harus berupa gambar."
            );

            transactionProof.value = "";

            return;

        }


        const reader =
            new FileReader();


        reader.onload = function (e) {

            proofPreviewImage.src =
                e.target.result;

            proofPreview.hidden = false;

        };


        reader.readAsDataURL(file);

    }
);


/* ==================================================
   HAPUS BUKTI
================================================== */

function resetProofPreview() {

    transactionProof.value = "";

    proofPreviewImage.src = "";

    proofPreview.hidden = true;

}


if (removeProof) {

    removeProof.addEventListener(
        "click",
        resetProofPreview
    );

}


/* ==================================================
   SUBMIT TRANSAKSI
================================================== */

transactionForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const id =
            transactionId.value;


        const type =
            transactionType.value;


        const data = {

            id: id
                ? Number(id)
                : Date.now(),

            type: type,

            tanggal:
                transactionDate.value,

            nama:
                transactionName.value.trim(),

            keterangan:
                transactionDescription.value.trim(),

            detail:
                transactionDetail.value.trim(),

            kategori:
                transactionCategory.value,

            nominal:
                Number(
                    transactionAmount.value
                ),

            bukti:
                proofPreviewImage.src || ""

        };


        if (id) {

            const index =
                transactions.findIndex(
                    transaction =>
                        transaction.id ===
                        Number(id)
                );


            if (index !== -1) {

                transactions[index] =
                    data;

            }

        } else {

            transactions.push(data);

        }


        saveTransactions();

        renderAll();

        closeTransactionModal();

    }
);


/* ==================================================
   RENDER TABLE
================================================== */

function renderTransactionRow(transaction) {

    const typeClass =
        transaction.type === "income"
            ? "income"
            : "expense";


    const typeLabel =
        transaction.type === "income"
            ? "Pemasukan"
            : "Pengeluaran";


    const proofHTML =
        transaction.bukti

            ? `
                <img
                    src="${transaction.bukti}"
                    alt="Bukti transaksi"
                    class="proof-image"
                    data-proof="${transaction.bukti}"
                >
            `

            : `
                <span class="no-proof">
                    Tidak ada
                </span>
            `;


    return `

        <tr>

            <td>
                ${formatDate(transaction.tanggal)}
            </td>

            <td>
                ${escapeHTML(transaction.nama)}
            </td>

            <td>
                ${escapeHTML(transaction.keterangan)}
            </td>

            <td>
                ${escapeHTML(transaction.detail || "-")}
            </td>

            <td>
                <span class="transaction-badge ${typeClass}">
                    ${escapeHTML(transaction.kategori)}
                </span>
            </td>

            <td class="${typeClass}-amount">
                ${transaction.type === "income" ? "+" : "-"}
                ${formatRupiah(transaction.nominal)}
            </td>

            <td>
                ${proofHTML}
            </td>

            <td>

                <div class="table-actions">

                    <button
                        type="button"
                        class="table-action edit"
                        data-action="edit"
                        data-id="${transaction.id}"
                        title="Edit"
                    >
                        ✎
                    </button>

                    <button
                        type="button"
                        class="table-action delete"
                        data-action="delete"
                        data-id="${transaction.id}"
                        title="Hapus"
                    >
                        🗑
                    </button>

                    <button
                        type="button"
                        class="table-action print"
                        data-action="print"
                        data-id="${transaction.id}"
                        title="Print"
                    >
                        🖨
                    </button>

                </div>

            </td>

        </tr>

    `;

}


/* ==================================================
   RENDER PEMASUKAN
================================================== */

function renderIncome() {

    const table =
        document.getElementById(
            "incomeTable"
        );


    if (!table) return;


    const income =
        transactions.filter(
            item =>
                item.type === "income"
        );


    if (!income.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="empty-data"
                >
                    Belum ada data pemasukan.
                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        income
            .sort(
                (a, b) =>
                    new Date(b.tanggal) -
                    new Date(a.tanggal)
            )
            .map(
                renderTransactionRow
            )
            .join("");

}


/* ==================================================
   RENDER PENGELUARAN
================================================== */

function renderExpense() {

    const table =
        document.getElementById(
            "expenseTable"
        );


    if (!table) return;


    const expense =
        transactions.filter(
            item =>
                item.type === "expense"
        );


    if (!expense.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="empty-data"
                >
                    Belum ada data pengeluaran.
                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        expense
            .sort(
                (a, b) =>
                    new Date(b.tanggal) -
                    new Date(a.tanggal)
            )
            .map(
                renderTransactionRow
            )
            .join("");

}


/* ==================================================
   RENDER TRANSAKSI TERBARU
================================================== */

function renderRecentTransactions() {

    const table =
        document.getElementById(
            "recentTransactions"
        );


    if (!table) return;


    const recent =
        [...transactions]
            .sort(
                (a, b) =>
                    new Date(b.tanggal) -
                    new Date(a.tanggal)
            )
            .slice(0, 10);


    if (!recent.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="empty-data"
                >
                    Belum ada transaksi.
                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        recent
            .map(
                renderTransactionRow
            )
            .join("");

}


/* ==================================================
   UPDATE STATISTIK
================================================== */

function updateStatistics() {

    const totalIncome =
        transactions
            .filter(
                item =>
                    item.type === "income"
            )
            .reduce(
                (total, item) =>
                    total + Number(item.nominal),
                0
            );


    const totalExpense =
        transactions
            .filter(
                item =>
                    item.type === "expense"
            )
            .reduce(
                (total, item) =>
                    total + Number(item.nominal),
                0
            );


    const balance =
        totalIncome -
        totalExpense;


    const totalTransaction =
        transactions.length;


    const totalPemasukan =
        document.getElementById(
            "totalPemasukan"
        );


    const totalPengeluaran =
        document.getElementById(
            "totalPengeluaran"
        );


    const totalSaldo =
        document.getElementById(
            "totalSaldo"
        );


    const totalTransaksi =
        document.getElementById(
            "totalTransaksi"
        );


    if (totalPemasukan) {

        totalPemasukan.textContent =
            formatRupiah(totalIncome);

    }


    if (totalPengeluaran) {

        totalPengeluaran.textContent =
            formatRupiah(totalExpense);

    }


    if (totalSaldo) {

        totalSaldo.textContent =
            formatRupiah(balance);

    }


    if (totalTransaksi) {

        totalTransaksi.textContent =
            totalTransaction;

    }


    /* LAPORAN */

    const reportIncome =
        document.getElementById(
            "reportIncome"
        );

    const reportExpense =
        document.getElementById(
            "reportExpense"
        );

    const reportBalance =
        document.getElementById(
            "reportBalance"
        );


    if (reportIncome) {

        reportIncome.textContent =
            formatRupiah(totalIncome);

    }


    if (reportExpense) {

        reportExpense.textContent =
            formatRupiah(totalExpense);

    }


    if (reportBalance) {

        reportBalance.textContent =
            formatRupiah(balance);

    }

}


/* ==================================================
   ESCAPE HTML
================================================== */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value ?? "";

    return div.innerHTML;

}


/* ==================================================
   EDIT / DELETE / PRINT
================================================== */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".table-action"
            );


        if (!button) return;


        const id =
            Number(button.dataset.id);


        const action =
            button.dataset.action;


        const transaction =
            transactions.find(
                item =>
                    item.id === id
            );


        if (!transaction) return;


        /* EDIT */

        if (action === "edit") {

            openTransactionModal(
                transaction.type,
                transaction
            );

        }


        /* DELETE */

        if (action === "delete") {

            const confirmation =
                confirm(
                    "Apakah Anda yakin ingin menghapus transaksi ini?"
                );


            if (!confirmation) return;


            transactions =
                transactions.filter(
                    item =>
                        item.id !== id
                );


            saveTransactions();

            renderAll();

        }


        /* PRINT */

        if (action === "print") {

            printTransaction(
                transaction
            );

        }

    }
);


/* ==================================================
   PRINT TRANSAKSI
================================================== */

function printTransaction(transaction) {

    const printWindow =
        window.open(
            "",
            "_blank",
            "width=800,height=700"
        );


    if (!printWindow) {

        alert(
            "Popup diblokir browser. Silakan izinkan popup."
        );

        return;

    }


    printWindow.document.write(`

        <!DOCTYPE html>

        <html lang="id">

        <head>

            <meta charset="UTF-8">

            <title>
                Bukti Transaksi
            </title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    padding: 40px;
                    color: #17221b;
                }

                .print-container {
                    max-width: 700px;
                    margin: auto;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 5px;
                }

                .subtitle {
                    text-align: center;
                    color: #666;
                    margin-bottom: 30px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                td {
                    padding: 12px;
                    border-bottom: 1px solid #ddd;
                }

                td:first-child {
                    width: 180px;
                    font-weight: bold;
                }

                .proof {
                    margin-top: 25px;
                    text-align: center;
                }

                .proof img {
                    max-width: 350px;
                    max-height: 400px;
                    object-fit: contain;
                }

                .income {
                    color: #18804b;
                }

                .expense {
                    color: #d64545;
                }

            </style>

        </head>

        <body>

            <div class="print-container">

                <h1>
                    Majelis
                </h1>

                <div class="subtitle">
                    Laporan Transaksi Keuangan
                </div>

                <table>

                    <tr>
                        <td>Jenis Transaksi</td>
                        <td class="${transaction.type}">
                            ${
                                transaction.type === "income"
                                    ? "Pemasukan"
                                    : "Pengeluaran"
                            }
                        </td>
                    </tr>

                    <tr>
                        <td>Tanggal</td>
                        <td>
                            ${formatDate(transaction.tanggal)}
                        </td>
                    </tr>

                    <tr>
                        <td>Nama</td>
                        <td>
                            ${escapeHTML(transaction.nama)}
                        </td>
                    </tr>

                    <tr>
                        <td>Keterangan</td>
                        <td>
                            ${escapeHTML(transaction.keterangan)}
                        </td>
                    </tr>

                    <tr>
                        <td>Detail</td>
                        <td>
                            ${escapeHTML(transaction.detail || "-")}
                        </td>
                    </tr>

                    <tr>
                        <td>Kategori</td>
                        <td>
                            ${escapeHTML(transaction.kategori)}
                        </td>
                    </tr>

                    <tr>
                        <td>Nominal</td>
                        <td>
                            ${formatRupiah(transaction.nominal)}
                        </td>
                    </tr>

                </table>

                ${
                    transaction.bukti
                        ? `
                            <div class="proof">

                                <h3>
                                    Bukti Transaksi
                                </h3>

                                <img
                                    src="${transaction.bukti}"
                                    alt="Bukti transaksi"
                                >

                            </div>
                        `
                        : ""
                }

            </div>

            <script>

                window.onload = function () {

                    window.print();

                };

            <\/script>

        </body>

        </html>

    `);


    printWindow.document.close();

}


/* ==================================================
   RENDER SEMUA
================================================== */

function renderAll() {

    renderIncome();

    renderExpense();

    renderRecentTransactions();

    updateStatistics();

}


/* ==================================================
   INIT
================================================== */

renderAll();