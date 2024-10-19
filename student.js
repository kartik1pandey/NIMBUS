const professors = [
    {
        name: "Dr. Birmohan Singh",
        qualification: "Ph.D., M.E.",
        department:"Computer Science and Engineering",
        phone: "+91-1672-253208",
        email: "birmohansingh@sliet.ac.in",
        altEmail: "birmohans@gmail.com",
        photo: "images//6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg"
    },
    {
        name: "Dr. Damanpreet Singh",
        qualification: "Ph.D., M.Tech, B.Tech.",
        department:"Computer Science and Engineering",
        phone: "+91-1672-253210",
        email: "damanpreets@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        qualification: "Ph.D., M.Tech., B.Tech.",
        department:"Computer Science and Engineering",
        phone: "01672-253212",
        email: "mjrsingh@yahoo.com",
        photo: "images//5e69c6be20c7e-bpfull.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        qualification: "B.Tech, M.E, Ph.D",
        department:"Computer Science and Engineering",
        phone: "+91-1672-253214",
        email: "manojsachan@sliet.ac.in",
        altEmail: "manojsachan@gmail.com",
        photo: "images//605c66bd3e3bc-bpfull.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        qualification: "B.E., M.S., Ph.D",
        department:"Computer Science and Engineering",
        phone: "+91-1672-253326",
        email: "gurjinder13@yahoo.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Amar Nath",
        qualification: "Ph.D., M.Tech, B.Tech",
        department:"Computer Science and Engineering",
        phone: "01672-253610",
        email: "amarnath@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        qualification: "Ph.D., M.Tech, B.Tech",
        department:"Computer Science and Engineering",
        phone: "01672-253320",
        email: "jagdeep@sliet.ac.in",
        altEmail: "jagdeepknit@gmail.com",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        qualification: "B.Tech, M.Tech, Ph.D",
        department:"Computer Science and Engineering",
        phone: "+91-01672-253328",
        email: "manminderldh@gmail.com",
        altEmail: "manmindersingh@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        qualification: "PhD",
        department:"Computer Science and Engineering",
        phone: "01672-253614",
        email: "preetpal@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        qualification: "Ph.D",
        department:"Computer Science and Engineering",
        phone: "91-6283963279",
        email: "tajindersingh@sliet.ac.in",
        photo: "images//65783e7db0473-bpfull.jpg"
    }
];

// Function to create and insert professor cards
function displayProfessors() {
    const container = document.querySelector('#b2');

    professors.forEach((prof, index) => {
        const card = document.createElement('div');
        card.classList.add('profcard');

        card.innerHTML = `
            <div class="profimg"><img src="${prof.photo}" alt="Profile Photo of ${prof.name}"></div>
            <div class="profdetails">
            <div>
                <h3>${prof.name}</h3>
                <p>${prof.qualification}</p>
                <div class="department">
                    <p>${prof.department}</p>
                </div>
                </div>
                <button class="book" data-index="${index}">Book Your Meet</button>
                </div>
            `;

        container.appendChild(card);
    });

    // Now add event listeners to the newly created "Book Your Meet" buttons
    document.querySelectorAll('.book').forEach(button => {
        button.addEventListener('click', function() {
            const index = button.getAttribute('data-index');
            const prof = professors[index]; // Get professor details based on index

            // Populate popup with professor details
            popupPhoto.src = prof.photo;
            popupName.textContent = prof.name;
            popupQualification.textContent = prof.qualification;
            popupDepartment.textContent = prof.department;
            popupPhone.textContent = `Phone: ${prof.phone}`;
            popupEmail.innerHTML = `Email: <a href="mailto:${prof.email}">${prof.email}</a>`;

            // Show the popup
            popup.style.display = "flex";

            // Generate time slots immediately when the popup is shown
            generateTimeSlots();
        });
    });
}

// Select the popup, close button, and other elements
const popup = document.getElementById("popup");
const closePopup = document.getElementsByClassName("close-popup")[0];
const popupPhoto = document.getElementById("popup-photo");
const popupName = document.getElementById("popup-name");
const popupQualification = document.getElementById("popup-qualification");
const popupDepartment = document.getElementById("popup-department");
const popupPhone = document.getElementById("popup-phone");
const popupEmail = document.getElementById("popup-email");

// Close the popup when the user clicks on the close button
closePopup.onclick = function() {
    popup.style.display = "none";
}

// Close the popup when the user clicks outside the popup content
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

// Call function to display the professors on page load
displayProfessors();
const bookedSlots = ["09:00", "12:00"]; // Example booked slots
let selectedDate = null; // Variable to store the selected date
let selectedTime = null; // Variable to store the selected time

function generateTimeSlots() {
    const timeslotsContainer = document.querySelector('.timeslots');
    timeslotsContainer.innerHTML = ""; // Clear previous slots
    const startTime = 10; // 10 AM
    const endTime = 18; // 6 PM

    for (let hour = startTime; hour < endTime; hour++) {
        const timeSlot = document.createElement('div');
        const hour12 = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
        const amPm = hour < 12 ? 'am' : 'pm'; // Determine AM or PM
        const timeLabel = `${hour12}:00 ${amPm}`; // Format time in 12-hour format

        timeSlot.className = 'timeslot';
        timeSlot.textContent = timeLabel;

        // Check if the slot is booked
        if (bookedSlots.includes(`${hour < 10 ? '0' : ''}${hour}:00`)) {
            timeSlot.classList.add('booked');
            timeSlot.style.pointerEvents = 'none'; // Disable interaction on booked slots
        } else {
            timeSlot.addEventListener('click', () => {
                if (!selectedDate) {
                    alert("Please select a date first!");
                    return; // Prevent time selection if no date is selected
                }
                const userConfirmed = confirm(`You have selected ${timeLabel}. Do you want to book this slot?`);
                if (userConfirmed) {
                    timeSlot.classList.add('booked');
                    bookedSlots.push(`${hour < 10 ? '0' : ''}${hour}:00`);
                    timeSlot.style.pointerEvents = 'none';
                    selectedTime = `${hour < 10 ? '0' : ''}${hour}:00`; // Save selected time
                }
            });
        }

        timeslotsContainer.appendChild(timeSlot);
    }
}

// Handle date selection
document.querySelector('.a1date input[type="date"]').addEventListener('change', function() {
    selectedDate = this.value; // Store selected date
    generateTimeSlots(); // Regenerate time slots based on selected date
});
// Schedule meet button functionality
document.getElementById("popup-schedule").addEventListener('click', function() {
    if (!selectedDate || !selectedTime) {
        alert("Please select a date and a time slot before scheduling the meet.");
        return; // Prevent scheduling if date or time is not selected
    }

    // Clear existing professor details and other info
    document.querySelector('.prof-details-popup').style.display = "none"; // Clear professor details
    document.querySelector('.contactinfo').style.display = "none"; // Clear contact info
    document.querySelector('.meet-popup').style.display = "none"; // Clear meet popup
    document.querySelector('#popup-schedule').style.display = "none";

    // Show booked meeting details in the popup
    const meetingDetails = `
        <h3>Your Meeting is Scheduled!</h3>
        <p>Professor: ${popupName.textContent}</p>
        <p>Date: ${selectedDate}</p>
        <p>Time: ${selectedTime}</p>
        <button class="cancel-meeting">Cancel Meeting</button>
    `;

    // Display the meeting details in the popup
    document.querySelector('.a3').innerHTML = meetingDetails;
    document.querySelector('.a3').style.display = "flex";

    // Also append the meeting details to the upcoming meetings section
    const upcomingMeetingsContainer = document.getElementById('upcoming-meetings');
    const meetingEntry = `
        <div class="meeting-entry">
            <div>Meeting with ${popupName.textContent}</div>
            <div>Date: ${selectedDate}</div>
            <div>Time: ${selectedTime}</div>
            <button class="cancel-meeting">Cancel Meeting</button>
        </div>
    `;
    upcomingMeetingsContainer.innerHTML += meetingEntry;
    upcomingMeetingsContainer.style.display = "flex";
    document.querySelector('#um').style.display = "flex";

    // Close the popup after a brief delay
    setTimeout(() => {
        popup.style.display = "none"; // Close the popup
        // Reset the form for another appointment
        document.querySelector('.prof-details-popup').style.display = "flex"; // Show professor details
        document.querySelector('.contactinfo').style.display = "flex"; // Show contact info
        document.querySelector('.meet-popup').style.display = "flex"; // Show meet popup
        document.querySelector('#popup-schedule').style.display = "flex"; // Show schedule button
        document.querySelector('.a3').style.display = "none"; // Hide the meeting details in the popup
        document.querySelector('.timeslots').innerHTML = ''; // Clear time slots
        selectedDate = null; // Reset selected date
        selectedTime = null; // Reset selected time
    }, 3000); // Adjust the timeout as needed

    // Add event listeners to all cancel buttons
    addCancelListeners();
});

// Function to add cancel button event listeners
function addCancelListeners() {
    const cancelButtons = document.querySelectorAll('.cancel-meeting');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const meetingEntry = button.parentElement; // Get the meeting entry
            meetingEntry.remove(); // Remove the meeting entry from the upcoming meetings
            // Check if there are no meetings left
            const upcomingMeetingsContainer = document.getElementById('upcoming-meetings');
            const noMeetingsMessage = document.getElementById('no-meetings');
            document.querySelector('#um').style.display = "none";
            // If there are no meetings left, show the message
            if (!upcomingMeetingsContainer.hasChildNodes()) {
                upcomingMeetingsContainer.style.display = "none"; // Hide if there are no meetings
                noMeetingsMessage.innerText = "No scheduled meetings."; // Update no meetings message
                noMeetingsMessage.style.display = "block"; // Show the no meetings message
            }
        });
    });
}

// Initial setup for no meetings message
document.getElementById('no-meetings').style.display = "none"; // Hide no meetings message initially


