import { donation } from "../data/donation.js";

export function Donation() {

    return `
        <section class="donation fade-left" id="donasi">

            <div class="container donation-content">

                <div class="donation-text">

                    <span class="section-tag">
                        Donasi
                    </span>

                    <h2>
                        ${donation.title}
                    </h2>

                    <p>
                        ${donation.description}
                    </p>

                </div>

                <div class="donation-card">

                    <h3>Rekening Donasi</h3>

                    <div class="donation-item">

                        <small>Bank</small>

                        <strong>${donation.bank}</strong>

                    </div>

                    <div class="donation-item">

                        <small>No. Rekening</small>

                        <strong id="rekening">
                            ${donation.accountNumber}
                        </strong>

                        <button
                            class="copy-btn"
                            data-copy="${donation.accountNumber}"
                        >
                            Salin
                        </button>

                    </div>

                    <div class="donation-item">

                        <small>Atas Nama</small>

                        <strong>${donation.accountName}</strong>

                    </div>

                    <a
                        href="https://wa.me/${donation.whatsapp}"
                        target="_blank"
                        class="btn-primary"
                    >
                        Konfirmasi Donasi
                    </a>

                </div>

            </div>

        </section>
    `;

}