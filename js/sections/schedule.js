import { schedules } from "../data/schedules.js";

export function Schedule() {

    return `
        <section class="schedule fade-up" id="jadwal">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Jadwal Kajian
                    </span>

                    <h2>
                        Jadwal Kajian Rutin
                    </h2>

                    <p>
                        Ikuti kajian rutin bersama para asatidz
                        untuk memperdalam ilmu agama.
                    </p>

                </div>

                <div class="schedule-list">

                    ${schedules.map(item => `

                        <div class="schedule-card">

                            <div class="schedule-day">

                                <h3>${item.day}</h3>

                                <span>${item.time}</span>

                            </div>

                            <div class="schedule-info">

                                <h4>${item.title}</h4>

                                <p>${item.teacher}</p>

                            </div>

                            <div class="schedule-action">

                                <a href="#">
                                    Detail
                                </a>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}