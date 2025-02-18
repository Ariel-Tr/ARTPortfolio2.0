// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const hobbies = document.getElementById("hobbies");
const hobbiesBtn = document.getElementById("hobbies-btn");


portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  hobbies.style.display="none";
  skillsBtn.classList.remove("active-btn");
  hobbiesBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
  
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  hobbies.style.display ="none";
  portfolio.style.display = "none";

  portfolioBtn.classList.remove("active-btn");
  hobbiesBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
  
});
hobbiesBtn.addEventListener("click", (event) => {
  hobbies.style.display ="flex";
  skills.style.display = "none";
  portfolio.style.display = "none";

  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");
  hobbiesBtn.classList.add("active-btn");
  
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",

  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;

  }
  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});