//hiding hobbies section
var _a;
var toggleButton = document.getElementById("toggle-hobbies");
var hobbiesSection = document.getElementById("hobbies-section");
toggleButton.addEventListener("click", function () {
    if (hobbiesSection.style.display === "none") {
        hobbiesSection.style.display = "block";
        toggleButton.textContent = "Hide Hobbies";
    }
    else {
        hobbiesSection.style.display = "none";
        toggleButton.textContent = "Show Hobbies";
    }
});
//____________________________________________________________________________
//listing elements for generating resume
(_a = document.querySelector("#resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion to elements
    var profilePic = document.querySelector('#profile-picture');
    var nameElement = document.querySelector("#name");
    var emailElement = document.querySelector("#email");
    var phoneElement = document.querySelector("#phone");
    var addressElement = document.querySelector("#address");
    var dobElement = document.querySelector("#dob");
    var educationElement = document.querySelector("#education");
    var experienceElement = document.querySelector("#experience");
    var expertiseElement = document.querySelector("#expertise");
    var hobbiesElement = document.querySelector("#hobbies");
    if (profilePic &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        dobElement &&
        educationElement &&
        experienceElement &&
        expertiseElement &&
        hobbiesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var dob = dobElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var expertise = expertiseElement.value;
        var hobbies = hobbiesElement.value;
        // picture element
        var profilePicFile = (_a = profilePic.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicUrl = profilePicFile ? URL.createObjectURL(profilePicFile) : "";
        //Generating output
        var createResume = "\n  <div class=\"resume-created\">\n      <h1> Your Resume </h2>\n      ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"profile picture\" class=\"profile-picture\">") : "", "\n    <h2>").concat(name_1, "</h2>\n    <p> <strong>DOB:</strong> ").concat(dob, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    \n    <fieldset>\n      <legend>Education</legend>\n      <p>").concat(education, "</p>\n    </fieldset>\n  \n    <fieldset>\n      <legend>Experience</legend>\n      <p>").concat(experience, "</p>\n    </fieldset>\n  \n    <fieldset>\n      <legend>Expertise</legend>\n      <p>").concat(expertise, "</p>\n    </fieldset>\n  \n    ").concat(hobbies
            ? "<fieldset>\n      <legend>Hobbies</legend>\n      <p>".concat(hobbies, "</p>\n    </fieldset>")
            : "", "\n  \n  </div>\n  ");
        // Insert the generated resume into the DOM
        var resumeElement = document.querySelector(".resume-created");
        if (resumeElement) {
            resumeElement.innerHTML = createResume;
        }
        else {
            console.error("the elements are missing");
        }
    }
    else {
        console.error("one or more elements are missing");
    }
});
