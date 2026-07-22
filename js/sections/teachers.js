import { teachers } from "../data/teachers.js";

export function Teachers() {

    return `
        <section class="teachers fade-up" id="teachers">

            <div class="container">

                <div class="section-header">

                    <span class="section-tag">
                        Guru & Ustadz
                    </span>

                    <h2>
                        Para Asatidz Pembimbing Majelis
                    </h2>

                    <p>
                        Dibimbing oleh para ustadz yang berpengalaman dalam
                        dakwah dan pendidikan Islam.
                    </p>

                </div>

                <div class="teachers-grid">

                    ${teachers.map(teacher => `

                        <div class="teacher-card">

                            <img
                                src="${teacher.image}"
                                alt="${teacher.name}"
                            >

                            <h3>${teacher.name}</h3>

                            <span class="teacher-position">

                                ${teacher.position}

                            </span>

                            <div class="teacher-expertise">

                                ${teacher.expertise}

                            </div>

                            <p>

                                ${teacher.description}

                            </p>

                        </div>

                    `).join("")}

                </div>

            </div>

        </section>
    `;

}