document.addEventListener('DOMContentLoaded', () => {
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const cancelButtons = document.querySelectorAll('.cancel-btn');

    // Handle acceptance of meeting requests
    acceptButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const requestDiv = e.target.closest('.meeting-request');
            const studentName = requestDiv.querySelector('b').innerText;
            const meetingTime = requestDiv.querySelector('.meeting-time').innerText;
            const meetingDate = requestDiv.querySelector('.meeting-date').innerText;

            // Add the accepted meeting to the scheduled list
            addScheduledMeeting(studentName, meetingTime, meetingDate);

            alert(`Meeting request accepted for ${studentName}`);
            requestDiv.remove(); // Remove the request from the view
            updateRequestsVisibility();
        });
    });

    // Handle cancellation of meeting requests
    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const requestDiv = e.target.closest('.meeting-request');
            const studentName = requestDiv.querySelector('b').innerText;
            alert(`Meeting request canceled for ${studentName}`);
            requestDiv.remove(); // Remove the request from the view
            updateRequestsVisibility();
        });
    });

    // Function to add scheduled meeting
    function addScheduledMeeting(studentName, meetingTime, meetingDate) {
        const scheduledList = document.getElementById('scheduled-list');

        const meetingDiv = document.createElement('div');
        meetingDiv.className = 'scheduled-meeting';

        meetingDiv.innerHTML = `
        <div class="meetlist">
            <p><b>${studentName}</b></p>
            <p><span class="meeting-time"><b>${meetingTime}</b></span></p>
            <p><span class="meeting-date"><b>${meetingDate}</b></span></p>
        </div>
        <button class="cancelmeet">Cancel</button>
        `;

        scheduledList.appendChild(meetingDiv);
        updateScheduledVisibility();

        // Add event listener to the cancel button of the scheduled meeting
        const cancelMeetButton = meetingDiv.querySelector('.cancelmeet');
        cancelMeetButton.addEventListener('click', () => {
            alert(`Scheduled meeting canceled for ${studentName}`);
            meetingDiv.remove(); // Remove the meeting from the scheduled list
            updateScheduledVisibility();
        });
    }

    function updateRequestsVisibility() {
        const requestsList = document.getElementById('requests-list');
        const noRequestsMessage = document.getElementById('no-requests');

        if (requestsList.children.length === 0) {
            requestsList.style.display = "none";
            noRequestsMessage.style.display = 'block';
        } else {
            requestsList.style.display = "flex";
            noRequestsMessage.style.display = 'none';
        }
    }

    function updateScheduledVisibility() {
        const scheduledList = document.getElementById('scheduled-list');
        const noScheduledMessage = document.getElementById('no-scheduled');

        if (scheduledList.children.length === 0) {
            scheduledList.style.display = "none";
            noScheduledMessage.style.display = 'block';
        } else {
            scheduledList.style.display='flex';
            noScheduledMessage.style.display = 'none';
        }
    }
});
