
//hiding skills section

const toggleButton1 = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills-section") as HTMLElement;

toggleButton1.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleButton1.textContent = "Hide Skills";
  } else {
    skillsSection.style.display = "none";
    toggleButton1.textContent = "Show Skills";
  }
});

//____________________________________________________________________________

//listing elements for generating resume

document.querySelector("#resume-form")?.addEventListener("submit", (event) => {
  event.preventDefault();



  //type assertion to elements

  const profilePic = document.querySelector('#profile-picture') as HTMLInputElement
  const nameElement = document.querySelector("#name") as HTMLInputElement;
  const emailElement = document.querySelector("#email") as HTMLInputElement;
  const phoneElement = document.querySelector("#phone") as HTMLInputElement;
  const addressElement = document.querySelector("#address") as HTMLInputElement;
  const dobElement = document.querySelector("#dob") as HTMLInputElement;
  const educationElement = document.querySelector(
    "#education"
  ) as HTMLInputElement;
  const experienceElement = document.querySelector(
    "#experience"
  ) as HTMLInputElement;
  const expertiseElement = document.querySelector(
    "#expertise"
  ) as HTMLInputElement;
  const skillsElement = document.querySelector("#skills") as HTMLInputElement;

  if (
    profilePic &&
    nameElement &&
    emailElement &&
    phoneElement &&
    addressElement &&
    dobElement &&
    educationElement &&
    experienceElement &&
    expertiseElement &&
    skillsElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const dob = dobElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const expertise = expertiseElement.value;
    const skills = skillsElement.value;


    // picture element

    const profilePicFile = profilePic.files?.[0]
    const profilePicUrl = profilePicFile? URL.createObjectURL(profilePicFile): "";

    //Generating output

    const createResume = `
  <div class="resume-created">
      <h1> Your Resume </h2>
      ${profilePicUrl ? `<img src="${profilePicUrl}" alt="profile picture" class="profile-picture">`: ""}
    <h2>${name}</h2>
    <p> <strong>DOB:</strong> ${dob}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    
    <fieldset>
      <legend>Education</legend>
      <p>${education}</p>
    </fieldset>
  
    <fieldset>
      <legend>Experience</legend>
      <p>${experience}</p>
    </fieldset>
  
    <fieldset>
      <legend>Expertise</legend>
      <p>${expertise}</p>
    </fieldset>
  
    ${
      skills
        ? `<fieldset>
      <legend>skills</legend>
      <p>${skills}</p>
    </fieldset>`
        : ""
    }
  
  </div>
  `;

    // Insert the generated resume into the DOM
    const resumeElement = document.querySelector(".resume-created");
    if (resumeElement) {
      resumeElement.innerHTML = createResume;
    } else {
      console.error("the elements are missing");
    }
  } else {
    console.error("one or more elements are missing");
  }
});
