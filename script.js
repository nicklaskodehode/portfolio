try {
  const miniProjectContainer = document.querySelector("#mini-container");
  const modalContainer = document.querySelector("#projectModal");
  const iframe = document.querySelector("#projectIframe");
  const closeButton = document.querySelector("#close-button");

  const username1 = "NicklasN96";
  const apiUrl1 = `https://api.github.com/users/${username1}/repos`;

  fetch(apiUrl1)
    .then((response) => response.json())
    .then((data) => {
      const projects = ["moviemaniac", "tasktrek"]; //Projects I want to show off
      for (let i = 0; i < data.length; i++) {
        if (projects.includes(data[i].name)) {
          const project = document.createElement("div");
          const projectHeader = document.createElement("h2");
          const projectDescription = document.createElement("p");
          const projectLinkContainer = document.createElement("div");
          const projectURL = document.createElement("a");
          const DemoURL = document.createElement("a");
          const ImgAnchor = document.createElement("a");
          const projectImg = document.createElement("img");

          project.classList.add("project");
          projectHeader.textContent = data[i].name;
          projectHeader.textContent =
            projectHeader.textContent.charAt(0).toUpperCase() +
            projectHeader.textContent.slice(1);
          projectDescription.textContent = data[i].description;
          projectLinkContainer.classList.add("projectLinkContainer");
          projectURL.href = data[i].html_url;
          projectURL.target = "_blank";
          projectURL.textContent = "Link til Github Repository";
          DemoURL.href = "https://nicklasn96.github.io/" + data[i].name;
          DemoURL.target = "_blank";
          DemoURL.textContent = "Link til demo";
          projectImg.src = "./pictures/" + data[i].name + ".png";
          projectImg.classList.add("projectImg");

          project.appendChild(projectHeader);

          if (projectDescription.textContent) {
            project.appendChild(projectDescription);
          }

          projectLinkContainer.appendChild(projectURL);
          projectLinkContainer.appendChild(DemoURL);
          ImgAnchor.appendChild(projectImg);
          project.appendChild(projectLinkContainer);
          project.appendChild(ImgAnchor);
          miniProjectContainer.appendChild(project);

          ImgAnchor.addEventListener("click", () => {
            iframe.src = "https://nicklasn96.github.io/" + data[i].name;
            modalContainer.style.display = "block";
          });

          closeButton.addEventListener("click", () => {
            modalContainer.style.display = "none";
            iframe.src = "";
          });

          window.addEventListener("click", (e) => {
            if (e.target === modalContainer) {
              modalContainer.style.display = "none";
              iframe.src = "";
            }
          });
        }
      }
    })
    .catch((error) => console.error("Error:", error));

  const username2 = "nicklaskodehode";
  const apiUrl2 = `https://api.github.com/users/${username2}/repos`;

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      const projects = ["julekalender", "nordlys", "RestaurantMenu"]; //Projects I want to show off
      for (let i = 0; i < data.length; i++) {
        if (projects.includes(data[i].name)) {
          const project = document.createElement("div");
          const projectHeader = document.createElement("h2");
          const projectDescription = document.createElement("p");
          const projectLinkContainer = document.createElement("div");
          const projectURL = document.createElement("a");
          const DemoURL = document.createElement("a");
          const ImgAnchor = document.createElement("a");
          const projectImg = document.createElement("img");

          project.classList.add("project");
          projectHeader.textContent = data[i].name;
          projectHeader.textContent =
            projectHeader.textContent.charAt(0).toUpperCase() +
            projectHeader.textContent.slice(1);
          projectDescription.textContent = data[i].description;
          projectLinkContainer.classList.add("projectLinkContainer");
          projectURL.href = data[i].html_url;
          projectURL.target = "_blank";
          projectURL.textContent = "Link til Github Repository";
          DemoURL.href = "https://nicklaskodehode.github.io/" + data[i].name;
          DemoURL.target = "_blank";
          DemoURL.textContent = "Link til demo";
          projectImg.src = "./pictures/" + data[i].name + ".png";
          projectImg.classList.add("projectImg");

          project.appendChild(projectHeader);

          if (projectDescription.textContent) {
            project.appendChild(projectDescription);
          }

          projectLinkContainer.appendChild(projectURL);
          projectLinkContainer.appendChild(DemoURL);
          ImgAnchor.appendChild(projectImg);
          project.appendChild(projectLinkContainer);
          project.appendChild(ImgAnchor);
          miniProjectContainer.appendChild(project);

          ImgAnchor.addEventListener("click", () => {
            modalContainer.style.display = "block";
            iframe.src = "https://nicklaskodehode.github.io/" + data[i].name;
          });
        }
      }
    })
    .catch((error) => console.error("Error:", error));




    // Contact Submit button
    const contactForm = document.querySelector("#contactForm");
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      console.log(formData)
    });
    console.log(submitBtn)
} catch (error) {
  console.log(error);
}

