
//hiding hobbies section

const toggleButton = document.getElementById(
    "toggle-hobbies"
  ) as HTMLButtonElement;
  const hobbiesSection = document.getElementById(
    "hobbies-section"
  ) as HTMLElement;
  
  toggleButton.addEventListener("click", () => {
    if (hobbiesSection.style.display === "none") {
      hobbiesSection.style.display = "block";
      toggleButton.textContent = "Hide Hobbies";
    } else {
      hobbiesSection.style.display = "none";
      toggleButton.textContent = "Show Hobbies";
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
    const hobbiesElement = document.querySelector("#hobbies") as HTMLInputElement;
  
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
      hobbiesElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const dob = dobElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const expertise = expertiseElement.value;
      const hobbies = hobbiesElement.value;
  
  
      // picture element
  
      const profilePicFile = profilePic.files?.[0]
      const profilePicUrl = profilePicFile? URL.createObjectURL(profilePicFile): "";
  
      //Generating output
  
      const createResume = `
    <div class="resume-created">
        <h1> Your Resume </h2>
        ${profilePicUrl ? `<img src="${profilePicUrl}" alt="profile picture" class="profile-picture">`: ""}
      <h2><span id="edit-name" class="editable">${name}</span></h2>
      <p> <strong>DOB:</strong><span id="edit-dob" class="editable"> ${dob}</span></p>
      <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span></p>
      <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span></p>
      <p><strong>Address:</strong><span id="edit-address" class="editable"> ${address}</span></p>
      
      <fieldset>
        <legend>Education</legend>
        <p><span id="edit-education" class="editable"> ${education}</span></p>
      </fieldset>
    
      <fieldset>
        <legend>Experience</legend>
        <p><span id="edit-experience" class="editable"> ${experience}</span></p>
      </fieldset>
    
      <fieldset>
        <legend>Expertise</legend>
        <p><span id="edit-expertise" class="editable"> ${expertise}</span></p>
      </fieldset>
    
      ${
        hobbies
          ? `<fieldset>
        <legend>Hobbies</legend>
        <p><span id="edit-hobbies" class="editable"> ${hobbies}</span></p>
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
  

  function makeEditable() {
    const editableElement = document.querySelectorAll(".editable");
    editableElement.forEach((element) => {
      element.addEventListener("click", () => {
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "";
  
        //editing content of resume
        if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
          const input = document.createElement('input')
          input.type = 'text'
          input.value = currentValue
          input.classList.add('editing-input')
  
          input.addEventListener('blur', () => {
            currentElement.textContent = input.value
            currentElement.style.display = 'inline'
            input.remove()
          })
  
          currentElement.style.display = 'none'
          currentElement.parentNode?.insertBefore(input, currentElement)
          input.focus()
        }
      });
    });
  }
