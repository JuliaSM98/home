// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Júlia",
  middleName: "",
  lastName: "Sánchez Martínez",
  message: " Physical Engineer ⚛ Data Scientist ⚛ Team Worker ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JuliaSM98",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/julia-sanchez-martinez/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/FotoPerfil.jpeg"),
  imageSize: 375,
  message:
    "I have a bachelor degree in Engineering Physics and then I did a master's degree in Data Science. I am passionate about learning new skills, improving my old ones and facing new challenges using technologies such as programming and data analysis.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JuliaSM98", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "R", value: 90 },
    { name: "LaTeX", value: 85 },
    { name: "Python", value: 80 },
    { name: "Matlab", value: 80 },
    { name: "C++", value: 50 },
    { name: "HTML/CSS", value: 50 },
    { name: "Scala", value: 40 },
    { name: "NoSQL", value: 30 },
    { name: "JavaScript", value: 30 },
    { name: "Java", value: 30 },
    { name: "Arduino", value: 20 },
    { name: "Labview", value: 20 },
  ],
  softSkills: [
    { name: "Team worker", value: 90 },
    { name: "Result-Oriented", value: 80 },
    { name: "Hard Worker", value: 80 },
    { name: "Resourceful", value: 70 },
    { name: "Problem Solving", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please, feel free to contact me anytime at",
  email: "juliasanchezmartinez98@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
