const body = document.getElementsByTagName("body");
const welcome = document.getElementById("welcome");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");


const h2 = document.createElement("h2");
h2.textContent = "Michelle Mounde.";

welcome.append(h2);


const h3 = document.createElement("h3");
h3.textContent = "I build websites.";

welcome.append(h3);


const pBio = document.createElement("p");
pBio.id = "bio";

welcome.append(pBio);

pBio.textContent = "I'm a software engineer specializing in back-end development. I can make your website with great functionality and design. Currently upskilling at ";


const strong = document.createElement("strong");
strong.textContent = "Moringa School.";
strong.id = "current-work";


pBio.appendChild(strong);


const footer = document.createElement("footer");
footer.id = "footer";
document.body.appendChild(footer);


const pDisclaimer = document.createElement("p");
pDisclaimer.id = "disclaimer";

footer.append(pDisclaimer);

pDisclaimer.textContent = "**This is the first version of my portfolio website. Projects are image placeholders and will be updated with real projects.";






