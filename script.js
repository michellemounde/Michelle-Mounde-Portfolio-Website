const body = document.getElementsByTagName("body");
const welcome = document.getElementById("section");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");


const h2 = document.createElement("h2");
h2.textContent = "Michelle Mounde.";

document.body.querySelector("section#welcome").appendChild(h2);


const h3 = document.createElement("h3");
h3.textContent = "I build websites.";

document.body.welcome.append(h3);


const p = document.createElement("p");
p.id = "bio";
p.textContent = "I'm a software engineer specializing in back-end development. I can make your website with great functionality and design. Currently upskilling at ";

document.body.welcome.append(p);


const strong = document.createElement("strong");
strong.id = "current-work";
strong.textContent = "Moringa School.";

document.body.welcome.append(strong);



