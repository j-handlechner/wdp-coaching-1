const steps = document.querySelectorAll(".step-panel");
const timelineSteps = document.querySelectorAll(".timeline-step");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

let currentStep = 0;

function updateUI() {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === currentStep);
  });

  timelineSteps.forEach((step, i) => {
    step.classList.remove("active", "completed");
    if (i < currentStep) step.classList.add("completed");
    if (i === currentStep) step.classList.add("active");
  });

  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
  nextBtn.style.display =
    currentStep === steps.length - 1 ? "none" : "inline-block";
  submitBtn.style.display =
    currentStep === steps.length - 1 ? "inline-block" : "none";
}

function clearErrors() {
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((el) => (el.textContent = ""));
}

function validateStep(index) {
  let valid = true;
  clearErrors();

  if (index === 0) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const addressError = document.getElementById("addressError");
    const phoneError = document.getElementById("phoneError");

    if (!name.value.trim()) {
      name.classList.add("error");
      nameError.textContent = "Full name is required.";
      valid = false;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      email.classList.add("error");
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (!address.value.trim()) {
      address.classList.add("error");
      addressError.textContent = "Address is required.";
      valid = false;
    }

    if (!phone.value.trim()) {
      phone.classList.add("error");
      phoneError.textContent = "Phone number is required.";
      valid = false;
    }
  }

  if (index === 1) {
    const roomChecked = document.querySelector('input[name="room"]:checked');
    const roomError = document.getElementById("roomError");

    if (!roomChecked) {
      roomError.textContent = "Please select a room.";
      valid = false;
    }
  }

  if (index === 2) {
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const dateError = document.getElementById("dateError");
    const timeError = document.getElementById("timeError");

    if (!date.value) {
      date.classList.add("error");
      dateError.textContent = "Please select a date.";
      valid = false;
    }

    if (!time.value) {
      time.classList.add("error");
      timeError.textContent = "Please select a time.";
      valid = false;
    }
  }

  return valid;
}

function updateReview() {
  const reviewBox = document.getElementById("reviewBox");

  const name = document.getElementById("name").value || "—";
  const email = document.getElementById("email").value || "—";
  const address = document.getElementById("address").value || "—";
  const phone = document.getElementById("phone").value || "—";

  const room =
    document.querySelector('input[name="room"]:checked')?.nextElementSibling
      ?.textContent || "—";
  const date = document.getElementById("date").value || "—";
  const time = document.getElementById("time").value || "—";
  const notes = document.getElementById("notes").value || "—";

  reviewBox.innerHTML = `
    <div class="review-item">
      <span class="review-label">Name</span>
      <span class="review-value">${name}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Email</span>
      <span class="review-value">${email}</span>
    </div>
     <div class="review-item">
      <span class="review-label">Address</span>
      <span class="review-value">${address}</span>
    </div>
     <div class="review-item">
      <span class="review-label">Phone</span>
      <span class="review-value">${phone}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Room</span>
      <span class="review-value">${room}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Date</span>
      <span class="review-value">${date}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Time</span>
      <span class="review-value">${time}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Notes</span>
      <span class="review-value">${notes}</span>
    </div>
  `;
}

// Next button (only allowed forward path)
nextBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;
  currentStep++;

  if (currentStep === steps.length - 1) {
    updateReview();
  }

  updateUI();
});

// Back button
prevBtn.addEventListener("click", () => {
  currentStep--;
  updateUI();
});

// Step navigation: only allow going backwards
timelineSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const index = Number(step.dataset.step);
    if (index < currentStep) {
      currentStep = index;
      updateUI();
    }
  });
});

// Submit
document.getElementById("multiStepForm").addEventListener("submit", (e) => {
  // e.preventDefault();
  alert("Form submitted successfully!");
});

updateUI();
