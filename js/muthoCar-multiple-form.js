let currentStep = 1;
const formData = {};

function showStep(step) {
    document.querySelectorAll(".form-step").forEach((stepElement) => {
        stepElement.classList.remove("show");
    });

    document
        .querySelector(`.form-step[data-step="${step}"]`)
        .classList.add("show");
}

function saveFormData() {
    const stepElement = document.querySelector(
        `.form-step[data-step="${currentStep}"]`
    );
    const inputFields = stepElement.querySelectorAll("input");

    inputFields.forEach((input) => {
        formData[input.id] = input.value;
    });
}

function nextStep() {
    saveFormData();
    currentStep++;
    showStep(currentStep);
}

function submitForm() {
    saveFormData();
    console.log("Form Data:", formData);
    alert("Form submitted successfully! Check the console for data.");
}

document.querySelectorAll(".next-btn").forEach((btn) => {
    btn.addEventListener("click", nextStep);
});

// previous step start *manik
function previousStep() {
    saveFormData();
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

document.querySelectorAll(".previous-btn").forEach((btn) => {
    btn.addEventListener("click", previousStep);
});
//  previous step close


const searchInput = document.getElementById('vehicleSearchInput');
const vehicleList = document.querySelector('.popular-vehicles-type');
const vehicles = vehicleList.getElementsByTagName('li');

// Add event listener for input change
searchInput.addEventListener('input', function (event) {
  const searchInputValue = event.target.value.toLowerCase();

  // Loop through all list items and hide/show based on search query
  Array.from(vehicles).forEach(function (vehicle) {
    const text = vehicle.textContent.toLowerCase();
    if (text.includes(searchInputValue)) {
      vehicle.style.display = 'block';
    } else {
      vehicle.style.display = 'none';
    }
  });
});

// Add click event listener to set text in input field on list item click
Array.from(vehicles).forEach(function (vehicle) {
  vehicle.addEventListener('click', function () {
    searchInput.value = this.textContent.trim();
  });
});

document
    .querySelector(".submit-btn")
    .addEventListener("click", submitForm);



