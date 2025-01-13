const miniProjectContainer = document.querySelector("#mini-container");

const username1 = 'NicklasN96';
const apiUrl1 = `https://api.github.com/users/${username1}/repos`;

fetch(apiUrl1)
  .then(response => response.json())
  .then(data => {
    const projects = ["moviemaniac","tasktrek"] //Projects I want to show off
    for (let i = 0; i < data.length; i++) {
        if (projects.includes(data[i].name)) {
            const project = document.createElement("div");
            const projectHeader = document.createElement("h2");
            const projectDescription = document.createElement("p");
            const projectURL = document.createElement("a");
            const DemoURL = document.createElement("a");
            const ProjectImg = document.createElement("img");
          
            project.classList.add("project");
            projectHeader.textContent = data[i].name;
            projectHeader.textContent = projectHeader.textContent.charAt(0).toUpperCase() + projectHeader.textContent.slice(1);
            projectDescription.textContent = data[i].description;
            projectURL.href = data[i].html_url;
            projectURL.target = "_blank";
            projectURL.textContent = "Link til Github Repository";
            DemoURL.href = "https://nicklaskodehode.github.io/"+projectHeader.textContent;
            DemoURL.target = "_blank";
            DemoURL.textContent = "Link til demo";
            ProjectImg.src = "./pictures/" + projectHeader.textContent + ".png";
            ProjectImg.classList.add("projectImg");

            project.appendChild(projectHeader);

            if (projectDescription.textContent) {
                project.appendChild(projectDescription);
            }

            project.appendChild(projectURL);
            project.appendChild(DemoURL);
            project.appendChild(ProjectImg);
            miniProjectContainer.appendChild(project);
        }
    }
  })
  .catch(error => console.error('Error:', error));


  const username2 = 'nicklaskodehode';
  const apiUrl2 = `https://api.github.com/users/${username2}/repos`;

fetch(apiUrl2).then(response => response.json()).then(data => {
    const projects = ["julekalender","nordlys","RestaurantMenu"] //Projects I want to show off
    for (let i = 0; i < data.length; i++) {
        if (projects.includes(data[i].name)) {
            const project = document.createElement("div");
            const projectHeader = document.createElement("h2");
            const projectDescription = document.createElement("p");
            const projectURL = document.createElement("a");
            const DemoURL = document.createElement("a");
            const ProjectImg = document.createElement("img");

            project.classList.add("project");
            projectHeader.textContent = data[i].name;
            projectHeader.textContent = projectHeader.textContent.charAt(0).toUpperCase() + projectHeader.textContent.slice(1);
            projectDescription.textContent = data[i].description;
            projectURL.href = data[i].html_url;
            projectURL.target = "_blank";
            projectURL.textContent = "Link til Github Repository";
            DemoURL.href = "https://nicklaskodehode.github.io/"+projectHeader.textContent;
            DemoURL.target = "_blank";
            DemoURL.textContent = "Link til demo";
            ProjectImg.src = "./pictures/" + projectHeader.textContent + ".png";
            ProjectImg.classList.add("projectImg");
            
         
            project.appendChild(projectHeader);

            if (projectDescription.textContent) {
                project.appendChild(projectDescription);
            }

            project.appendChild(projectURL);
            project.appendChild(DemoURL);
            project.appendChild(ProjectImg);
            miniProjectContainer.appendChild(project);
        }
    }
})
.catch(error => console.error('Error:', error));