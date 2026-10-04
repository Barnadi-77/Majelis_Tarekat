// ==================================================
// LAPORAN KEUANGAN
// ==================================================

export function Financial() {

    // ==================================================
    // DATA PEMASUKAN
    // ==================================================

    const incomeData = [
        {
            date: "01 Okt 2026",
            description: "Donasi Jamaah",
            category: "Donasi",
            amount: 5000000
        },
        {
            date: "03 Okt 2026",
            description: "Infak Jumat",
            category: "Infak",
            amount: 3000000
        },
        {
            date: "05 Okt 2026",
            description: "Sumbangan Masyarakat",
            category: "Sumbangan",
            amount: 7000000
        }
    ];


    // ==================================================
    // DATA PENGELUARAN
    // ==================================================

    const expenseData = [
        {
            date: "02 Okt 2026",
            description: "Pembelian Al-Qur'an",
            detail: "20 buah Al-Qur'an",
            category: "Pendidikan",
            amount: 2000000
        },
        {
            date: "04 Okt 2026",
            description: "Air & Listrik",
            detail: "Pembayaran kebutuhan operasional",
            category: "Operasional",
            amount: 1500000
        },
        {
            date: "06 Okt 2026",
            description: "Perlengkapan Majelis",
            detail: "Alat tulis dan perlengkapan kegiatan",
            category: "Operasional",
            amount: 4000000
        }
    ];


    // ==================================================
    // TOTAL
    // ==================================================

    const totalIncome = incomeData.reduce(
        (total, item) => total + item.amount,
        0
    );

    const totalExpense = expenseData.reduce(
        (total, item) => total + item.amount,
        0
    );

    const balance = totalIncome - totalExpense;


    // ==================================================
    // FORMAT RUPIAH
    // ==================================================

    const formatRupiah = (number) => {

        return new Intl.NumberFormat(
            "id-ID",
            {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }
        ).format(number);

    };


    return `

        <section
            class="financial zoom"
            id="financial"
        >

            <div class="container">


                <!-- ==================== HEADER ==================== -->

                <div class="financial-header">

                    <span class="section-label">
                        Transparansi Keuangan
                    </span>

                    <h2>
                        Laporan Pemasukan & Pengeluaran
                    </h2>

                    <p>
                        Sebagai bentuk keterbukaan dan tanggung jawab,
                        kami menyajikan laporan pemasukan dan pengeluaran
                        dana kegiatan Majelis secara transparan.
                    </p>

                </div>


                <!-- ==================== SUMMARY ==================== -->

                <div class="financial-summary fade-right">


                    <!-- PEMASUKAN -->

                    <div class="financial-summary-card income">

                        <span class="financial-summary-icon">
                            ↑
                        </span>

                        <div>

                            <span class="financial-summary-label">
                                Total Pemasukan
                            </span>

                            <strong>
                                ${formatRupiah(totalIncome)}
                            </strong>

                        </div>

                    </div>


                    <!-- PENGELUARAN -->

                    <div class="financial-summary-card expense">

                        <span class="financial-summary-icon">
                            ↓
                        </span>

                        <div>

                            <span class="financial-summary-label">
                                Total Pengeluaran
                            </span>

                            <strong>
                                ${formatRupiah(totalExpense)}
                            </strong>

                        </div>

                    </div>


                    <!-- SALDO -->

                    <div class="financial-summary-card balance">

                        <span class="financial-summary-icon">
                            =
                        </span>

                        <div>

                            <span class="financial-summary-label">
                                Saldo
                            </span>

                            <strong>
                                ${formatRupiah(balance)}
                            </strong>

                        </div>

                    </div>

                </div>


                <!-- ==================== PEMASUKAN ==================== -->

                <div class="financial-section fade-left">

                    <div class="financial-section-header">

                        <div>

                            <span class="financial-section-label">
                                Pemasukan
                            </span>

                            <h3>
                                Rincian Pemasukan
                            </h3>

                        </div>

                        <strong>
                            ${formatRupiah(totalIncome)}
                        </strong>

                    </div>


                    <div class="financial-table-wrapper">

                        <table class="financial-table">

                            <thead>

                                <tr>

                                    <th>
                                        Tanggal
                                    </th>

                                    <th>
                                        Keterangan
                                    </th>

                                    <th>
                                        Kategori
                                    </th>

                                    <th>
                                        Nominal
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                ${incomeData.map(item => `

                                    <tr>

                                        <td>
                                            ${item.date}
                                        </td>

                                        <td>
                                            ${item.description}
                                        </td>

                                        <td>
                                            <span class="financial-category income-category">
                                                ${item.category}
                                            </span>
                                        </td>

                                        <td class="amount">
                                            ${formatRupiah(item.amount)}
                                        </td>

                                    </tr>

                                `).join("")}

                            </tbody>

                        </table>

                    </div>

                </div>


                <!-- ==================== PENGELUARAN ==================== -->

                <div class="financial-section fade-right">

                    <div class="financial-section-header">

                        <div>

                            <span class="financial-section-label">
                                Pengeluaran
                            </span>

                            <h3>
                                Rincian Pengeluaran
                            </h3>

                        </div>

                        <strong>
                            ${formatRupiah(totalExpense)}
                        </strong>

                    </div>


                    <div class="financial-table-wrapper">

                        <table class="financial-table">

                            <thead>

                                <tr>

                                    <th>
                                        Tanggal
                                    </th>

                                    <th>
                                        Keterangan
                                    </th>

                                    <th>
                                        Detail
                                    </th>

                                    <th>
                                        Kategori
                                    </th>

                                    <th>
                                        Nominal
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                ${expenseData.map(item => `

                                    <tr>

                                        <td>
                                            ${item.date}
                                        </td>

                                        <td>
                                            ${item.description}
                                        </td>

                                        <td>
                                            ${item.detail}
                                        </td>

                                        <td>
                                            <span class="financial-category expense-category">
                                                ${item.category}
                                            </span>
                                        </td>

                                        <td class="amount">
                                            ${formatRupiah(item.amount)}
                                        </td>

                                    </tr>

                                `).join("")}

                            </tbody>

                        </table>

                    </div>

                </div>


                <!-- ==================== NOTE ==================== -->

                <div class="financial-note">

                    <span>
                        ℹ️
                    </span>

                    <p>
                        Laporan keuangan diperbarui secara berkala
                        sebagai bentuk transparansi pengelolaan dana
                        Majelis.
                    </p>

                </div>


            </div>

        </section>

    `;
}