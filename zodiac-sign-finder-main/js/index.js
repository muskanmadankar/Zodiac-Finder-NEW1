let dateOfBirth = document.querySelector("input[type='date']");

const findZodiac = (event) => {
    event.preventDefault();
    dateOfBirth = new Date(dateOfBirth.value);
    const month = dateOfBirth.getMonth();
    const day = dateOfBirth.getDate();
    let zodiacSign = "";
    let zodiacDate = "";

    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
        zodiacSign = "Aquarius";
        zodiacDate = "January 20th — February 18th";
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
        zodiacSign = "Pisces";
        zodiacDate = "February 19th — March 20th";
    } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
        zodiacSign = "Aries";
        zodiacDate = "March 21 — April 19th";
    } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
        zodiacSign = "Taurus";
        zodiacDate = "April 20th — May 20th";
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        zodiacSign = "Gemini";
        zodiacDate = "May 21 — June 20th";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
        zodiacSign = "Cancer";
        zodiacDate = "June 21 — July 22";
    } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
        zodiacSign = "Leo";
        zodiacDate = "July 23rd — August 22";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = "Virgo";
        zodiacDate = "August 23 — September 22nd";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = "Libra";
        zodiacDate = "September 23 — October 22";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
        zodiacSign = "Scorpio";
        zodiacDate = "October 23rd — November 21";
    } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
        zodiacSign = "Sagittarius";
        zodiacDate = "November 22 — December 21";
    } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
        zodiacSign = "Capricorn";
        zodiacDate = "December 22nd — January 19th";
    }
    sessionStorage.setItem("zodiacSign", zodiacSign);
    sessionStorage.setItem("zodiacDate", zodiacDate);
    location.href = "./result.html";
};

// Get references to the button and form overlay
const starButton = document.querySelector('.star-btn');
const formOverlay = document.getElementById('formOverlay');

// Add click event listener to the star button
starButton.addEventListener('click', function() {
    // Display the form overlay
    formOverlay.style.display = 'flex';
    formOverlay.style.animation = 'fadeIn 0.5s forwards';
});


// Get references to the sign-up button and form overlay
const openSignUpForm = document.getElementById('openSignUpForm');
const signupFormOverlay = document.getElementById('signupFormOverlay');

// Add click event listener to the sign-up button
openSignUpForm.addEventListener('click', function () {
    // Display the form overlay
    signupFormOverlay.style.display = 'flex';
    signupFormOverlay.style.animation = 'signupFadeIn 0.5s forwards';
});

// signout
// Add click event listener to the sign-out button
openSignOutForm.addEventListener('click', function () {
    signoutFormOverlay.style.display = 'flex';
    signoutFormOverlay.style.animation = 'formSlideIn 0.8s forwards';
});

// Add click event listener to the close button on the sign-out form
closeSignOutForm.addEventListener('click', function () {
    signoutFormOverlay.style.display = 'none';
});

// learn more



// Zodiac signs array
// const zodiacSigns = [
//     "Aries ♈", "Taurus ♉", "Gemini ♊", "Cancer ♋", "Leo ♌",
//     "Virgo ♍", "Libra ♎", "Scorpio ♏", "Sagittarius ♐", "Capricorn ♑",
//     "Aquarius ♒", "Pisces ♓"
// ];

// Show the overlay when 'Learn More' is clicked
// document.getElementById('learnMoreBtn').addEventListener('click', function() {
//     document.getElementById('moreInfoOverlay').style.display = 'flex';
//     startChangingZodiacSigns();
// });

// Hide the overlay when 'Close' is clicked
// document.getElementById('closeOverlayBtn').addEventListener('click', function() {
//     document.getElementById('moreInfoOverlay').style.display = 'none';
//     stopChangingZodiacSigns();
// });

// let zodiacInterval;
// const cartoonAnimation = document.querySelector('.cartoon-animation');

// function startChangingZodiacSigns() {
//     let index = 0;
//     cartoonAnimation.textContent = zodiacSigns[index];
//     zodiacInterval = setInterval(() => {
//         index = (index + 1) % zodiacSigns.length;
//         cartoonAnimation.textContent = zodiacSigns[index];
    // }, 2000); // Change sign every 2 seconds
// }

// function stopChangingZodiacSigns() {
//     clearInterval(zodiacInterval);
// }

// Zodiac signs and descriptions array
const zodiacDetails = [
    { sign: "Aries ♈", info: "Aries are known for their courage and determination." },
    { sign: "Taurus ♉", info: "Taurus are reliable and patient." },
    { sign: "Gemini ♊", info: "Gemini are adaptable and outgoing." },
    { sign: "Cancer ♋", info: "Cancer are intuitive and caring." },
    { sign: "Leo ♌", info: "Leo are creative and passionate." },
    { sign: "Virgo ♍", info: "Virgo are analytical and kind." },
    { sign: "Libra ♎", info: "Libra are diplomatic and fair-minded." },
    { sign: "Scorpio ♏", info: "Scorpio are resourceful and brave." },
    { sign: "Sagittarius ♐", info: "Sagittarius are generous and idealistic." },
    { sign: "Capricorn ♑", info: "Capricorn are disciplined and responsible." },
    { sign: "Aquarius ♒", info: "Aquarius are independent and innovative." },
    { sign: "Pisces ♓", info: "Pisces are empathetic and artistic." }
];

// Show the overlay when 'Learn More' is clicked
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('moreInfoOverlay').style.display = 'flex';
    startChangingZodiacDetails();
});

// Hide the overlay when 'Close' is clicked
document.getElementById('closeOverlayBtn').addEventListener('click', function() {
    document.getElementById('moreInfoOverlay').style.display = 'none';
    stopChangingZodiacDetails();
});

let zodiacInterval;
const cartoonAnimation = document.querySelector('.cartoon-animation');
const zodiacInfo = document.querySelector('.zodiac-info');

function startChangingZodiacDetails() {
    let index = 0;
    updateZodiacContent(index);
    zodiacInterval = setInterval(() => {
        index = (index + 1) % zodiacDetails.length;
        updateZodiacContent(index);
    }, 2000); // Change sign and info every 2 seconds
}

function stopChangingZodiacDetails() {
    clearInterval(zodiacInterval);
}

function updateZodiacContent(index) {
    cartoonAnimation.textContent = zodiacDetails[index].sign;
    zodiacInfo.textContent = zodiacDetails[index].info;
}


// cheers
// Function to generate confetti pieces
function createConfettiPiece(x, y) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = `${x}px`;
    confettiPiece.style.top = `${y}px`;
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    document.getElementById('confettiContainer').appendChild(confettiPiece);

    setTimeout(() => confettiPiece.remove(), 4000); // Remove after animation
}

// Function to start confetti animation
function startConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    confettiContainer.classList.add('confetti-show');

    const numberOfConfettiPieces = 100; // Number of confetti pieces
    for (let i = 0; i < numberOfConfettiPieces; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createConfettiPiece(x, y);
    }

    setTimeout(() => {
        confettiContainer.classList.remove('confetti-show');
    }, 5000); // Hide after 5 seconds
}

// Trigger confetti on sign-up button click
document.querySelector('.signup-submit-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    startConfetti();
});
