document.addEventListener("DOMContentLoaded", () => {
    const emailPart1 = "mazurzgainerdylan";
    const emailPart2 = "gmail.com";
    const email = `${emailPart1}@${emailPart2}`;
    document.getElementById("email-text").textContent = email;

    const mailtoLink = document.getElementById("email-link");
    mailtoLink.href = `mailto:${email}`;
});

