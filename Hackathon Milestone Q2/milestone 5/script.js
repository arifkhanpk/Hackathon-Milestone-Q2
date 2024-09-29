//hiding hobbies section
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _this = this;
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
        var createResume = "\n    <div class=\"resume-created\">\n        <h1> Your Resume </h2>\n        ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"profile picture\" class=\"profile-picture\">") : "", "\n      <h2><span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></h2>\n      <p> <strong>DOB:</strong><span id=\"edit-dob\" class=\"editable\"> ").concat(dob, "</span></p>\n      <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n      <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n      <p><strong>Address:</strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span></p>\n      \n      <fieldset>\n        <legend>Education</legend>\n        <p><span id=\"edit-education\" class=\"editable\"> ").concat(education, "</span></p>\n      </fieldset>\n    \n      <fieldset>\n        <legend>Experience</legend>\n        <p><span id=\"edit-experience\" class=\"editable\"> ").concat(experience, "</span></p>\n      </fieldset>\n    \n      <fieldset>\n        <legend>Expertise</legend>\n        <p><span id=\"edit-expertise\" class=\"editable\"> ").concat(expertise, "</span></p>\n      </fieldset>\n    \n      ").concat(hobbies
            ? "<fieldset>\n        <legend>Hobbies</legend>\n        <p><span id=\"edit-hobbies\" class=\"editable\"> ".concat(hobbies, "</span></p>\n      </fieldset>")
            : "", "\n    \n    ");
        // Insert the generated resume into the DOM
        var resumeElement = document.querySelector(".resume-created");
        if (resumeElement) {
            resumeElement.innerHTML = createResume;
            resumeElement.classList.remove('hidden');
            //creating buttons for download resume and get shareable link
            var buttonContainer = document.createElement('div');
            buttonContainer.id = "button-container";
            resumeElement.appendChild(buttonContainer);
            var downloadButton = document.createElement('button');
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            var shareButton = document.createElement('button');
            shareButton.textContent = "Copy Link";
            shareButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareAbleLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareAbleLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, '_'), "_cv.html");
                            // use Clipboard api to generate link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareAbleLink)];
                        case 1:
                            // use Clipboard api to generate link
                            _a.sent();
                            alert("Link copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link", err_1);
                            alert("Failed to copy link to clipboard, please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareButton);
        }
        else {
            console.error("the elements are missing");
        }
    }
    else {
        console.error("one or more elements are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //editing content of resume
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

