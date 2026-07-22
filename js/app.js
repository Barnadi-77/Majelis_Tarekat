import { Navbar , NavbarMenu} from "./sections/navbar.js";
import { Hero } from "./sections/hero.js";
import { Statistics } from "./sections/statistics.js";
import { About } from "./sections/about.js";
import { Programs } from "./sections/programs.js";
import { Schedule } from "./sections/schedule.js";
import { Teachers } from "./sections/teachers.js";
import { Gallery } from "./sections/gallery.js";
import { Testimonials } from "./sections/testimonials.js";
import { FAQ } from "./sections/faq.js";
import { Donation } from "./sections/donation.js";
import { Contact } from "./sections/contact.js";
import { Footer } from "./sections/footer.js";
import { ScrollAnimation } from "./utils/scroll.js";

import { Counter } from "./utils/counter.js";
import { initFAQ } from "./utils/helper.js";
import { Clipboard } from "./utils/clipboard.js";

const app = document.getElementById("app");

app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Statistics()}
    ${About()}    
    ${Programs()}
    ${Schedule()}
    ${Teachers()}
    ${Gallery()}
    ${Testimonials()}
    ${FAQ()}
    ${Donation()}
    ${Contact()}
    ${Footer()}
`;

Counter();
initFAQ();
Clipboard();
ScrollAnimation();
NavbarMenu();