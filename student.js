const professors = [
    {
        name: "Dr. Birmohan Singh",
        qualification: "Ph.D., M.E.",
        phone: "+91-1672-253208",
        email: "birmohansingh@sliet.ac.in",
        altEmail: "birmohans@gmail.com",
        photo: "images//65783e7db0473-bpfull.jpg" // Placeholder image URL
    },
    {
        name: "Dr. Damanpreet Singh",
        qualification: "Ph.D., M.Tech, B.Tech.",
        phone: "+91-1672-253210",
        email: "damanpreets@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        qualification: "Ph.D., M.Tech., B.Tech.",
        phone: "01672-253212",
        email: "mjrsingh@yahoo.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        qualification: "B.Tech, M.E, Ph.D",
        phone: "+91-1672-253214",
        email: "manojsachan@sliet.ac.in",
        altEmail: "manojsachan@gmail.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        qualification: "B.E., M.S., Ph.D",
        phone: "+91-1672-253326",
        email: "gurjinder13@yahoo.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Amar Nath",
        qualification: "Ph.D., M.Tech, B.Tech",
        phone: "01672-253610",
        email: "amarnath@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        qualification: "Ph.D., M.Tech, B.Tech",
        phone: "01672-253320",
        email: "jagdeep@sliet.ac.in",
        altEmail: "jagdeepknit@gmail.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        qualification: "B.Tech, M.Tech, Ph.D",
        phone: "+91-01672-253328",
        email: "manminderldh@gmail.com",
        altEmail: "manmindersingh@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        qualification: "PhD",
        phone: "01672-253614",
        email: "preetpal@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        qualification: "Ph.D",
        phone: "91-6283963279",
        email: "tajindersingh@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    }
];

// Function to create and insert professor cards
function displayProfessors() {
    const container = document.querySelector('.b1');

    professors.forEach(prof => {
        const card = document.createElement('div');
        card.classList.add('profcard');

        card.innerHTML = `
            <div class="profimg"><img src="${prof.photo}" alt="Profile Photo of ${prof.name}"></div>
            <div class="profdetails">
            <h3>${prof.name}</h3>
            <p>${prof.qualification}</p>
            <div class="contact-info">
                <p>Phone: ${prof.phone}</p>
                <p class="email">Email: <a href="mailto:${prof.email}">${prof.email}</a></p>
                ${prof.altEmail ? `<p class="email">Alt Email: <a href="mailto:${prof.altEmail}">${prof.altEmail}</a></p>` : ''}
            </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Call function to display the professors on page load
displayProfessors();
