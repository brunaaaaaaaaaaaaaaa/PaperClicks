function saveTimeAndContinue() {
    var selectedTime = document.getElementById("time-select").value;
    if (selectedTime) {
        localStorage.setItem("selectedTime", selectedTime);
        window.location.href = "index2.html";
    } else {
        alert("Please select a time before continuing.");
    }
}

function savePersonalDetailsAndContinue() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (firstName && lastName && email && phone) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        window.location.href = "index3.html";
    } else {
        alert("Please fill in all fields before continuing.");
    }
}

function loadReviewPage() {
    document.getElementById("selectedTime").innerText = localStorage.getItem("selectedTime") || "Not provided";
    document.getElementById("firstName").innerText = localStorage.getItem("firstName") || "Not provided";
    document.getElementById("lastName").innerText = localStorage.getItem("lastName") || "Not provided";
    document.getElementById("email").innerText = localStorage.getItem("email") || "Not provided";
    document.getElementById("phone").innerText = localStorage.getItem("phone") || "Not provided";
}

function submitForm() {
    alert("Your details have been submitted!");
    localStorage.clear();
    window.location.href = "index.html";
}