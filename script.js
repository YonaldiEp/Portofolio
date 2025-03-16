const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
      
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const mailtoLink = `mailto:yonaldiernandaputro@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        form.reset();
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("contact-form");

//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); 
      
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const message = document.getElementById("message").value;

//         const subject = encodeURIComponent(`Message from ${name}`);
//         const body = encodeURIComponent(
//             `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//         );

//         const mailtoLink = `mailto:yonaldiernandaputro@gmail.com?subject=${subject}&body=${body}`;

//         window.location.href = mailtoLink;

//         form.reset();
//     });
// });
