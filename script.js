// Load Profile Picture
function loadProfilePicture(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-picture').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Change Background
function changeBackground() {
    const backgroundSelect = document.getElementById('background');
    const backgroundImage = document.getElementById('background-image');
    backgroundImage.src = backgroundSelect.value;
}

// Generate Card
function generateCard() {
    const name = document.getElementById('name-input').value.toUpperCase();
    const regDate = document.getElementById('reg-date-input').value;
    const pronouns = document.getElementById('pronouns-input').value.toUpperCase();
    const houseName = document.getElementById('house-name-input').value.toUpperCase();
    const role = document.getElementById('role-input').value.toUpperCase();

    document.getElementById('name').innerText = `NAME: ${name}`;
    document.getElementById('reg-date').innerText = `REG. DATE: ${regDate}`;
    document.getElementById('pronouns').innerText = `PRONOUNS: ${pronouns}`;
    document.getElementById('house-name').innerText = `HOUSE NAME: ${houseName}`;
    document.getElementById('role').innerText = `ROLE: ${role}`;
}

// Download Card
function downloadCard() {
    html2canvas(document.getElementById('idCardWrapper'), {
        useCORS: true,foreignObjectRendering: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'id-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
