window.onload = function() {
    const portal = document.getElementById('portal');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const student = document.getElementById('student');
    const prof = document.getElementById('prof');
    const a4 = document.querySelector('.a4');
    const b5 = document.querySelector('.b5');
    const backButtons = document.getElementsByClassName('back');

    // Variables to keep track of which portal is active
    let activePortal = '';

    student.onclick = function() {
        activePortal = 'student';
        toggleVisibility('portal', 'box2');
    };

    prof.onclick = function() {
        activePortal = 'professor';
        toggleVisibility('portal', 'box2');
    };

    a4.onclick = function() {
        toggleVisibility('box2', 'box3');
    };

    b5.onclick = function() {
        toggleVisibility('box3', 'box2');
    };

    Array.from(backButtons).forEach(function(backButton) {
        backButton.onclick = function() {
            // If box2 is visible, go back to portal
            if (document.getElementById('box2').style.display === 'flex') {
                toggleVisibility('box2', 'portal');
            }
            // If box3 is visible, go back to portal
            else if (document.getElementById('box3').style.display === 'flex') {
                toggleVisibility('box3', 'portal');
            }
        };
    });

    function toggleVisibility(hidden, visible) {
        document.getElementById(hidden).style.display = 'none';
        document.getElementById(visible).style.display = 'flex';
    }

    // Updated home function to redirect based on active portal
    window.home = function() {
        if (activePortal === 'student') {
            window.location.href = 'student.html';
        } else if (activePortal === 'professor') {
            window.location.href = 'prof.html';
        } else {
            window.location.href = 'index.html'; // Default fallback
        }
    };
};
