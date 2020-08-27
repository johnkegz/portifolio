
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "John Kalyango",
  title: "Hi all, I'm John Kalyango",
  subTitle: emoji("A passionate Software Developer"),
  resumeLink: "https://docs.google.com/document/d/1BbjmZX3Tf0UVcuNu2nDzSeqRq_8ysX8efyRmbvG9mpI/edit?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/johnkegz",
  linkedin: "https://www.linkedin.com/in/john-kalyango-9792b2141/",
  gmail: "johnkal24@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ API development")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "React Native",
    //   fontAwesomeClassname: "fab fa-react-native"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "ASOM TECH-SMC LTD",
      companylogo: require("./assets/images/talksCardBackAlt.svg"),
      date: "April 2020 – Present",
      desc: "",
      descBullets: [
        "Work closely with the UI designer to come up with world class mockup designs for the treva rugby fantasy league system.",
        " Provide  my expertise to the company  and turn the UI mockups into code"
      ]
    },
    {
      role: "Software Engineer",   
      company: "ILEARN AFRICA",
      companylogo: require("./assets/images/ilearn.png"),
      date: "March 2020 – May 2020",
     descBullets: [
        "I increased the efficiency of the development team by pair programming with my teammates which led to fast delivery of tasks needed for the Ilearn learning management system MVP",
"Fixed bugs in the codebase that improved system reliability.",
"Optimized the performance of the system through refactoring the code."]
    },
    {
      role: "Software Engineer",  
      company: "ANDELA",
      companylogo: require("./assets/images/andela.png"),
      date: "Oct 2018 – Feb 2020",
      descBullets: [
      "Contributed to the development of Travela which is a travel management tool that worked as a single source of truth for all travel related information. ",
      "Contributed to the development of Engagement support automation tool which is a platform for automating  the process by which developers are added to/ removed from engagements as well as relevant slack channels among other integration.",
      "Contributed to Andela’s open source project called Author’s haven which is a platform for developers to share knowledge."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Projects",
      subtitle: "",
      image: require("./assets/images/talksCardBackAlt.svg"),
      footerLink: [
        { name: "Rugby fantasy league staging app", url: "http://35.194.17.85/" }
      ]
    },
    {
      title: "Projects",
      subtitle: "",
      image: require("./assets/images/ilearn.png"),
      footerLink: [{ name: "ilearn Africa", url: "" }]
    },

    {
      title: "Projects",
      subtitle: "",
      image: require("./assets/images/andela.png"),
      // footerLink: [
      //   { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      // ]
      footerLink: [{ name: "Dairynomics", url: "https://dairynomics.netlify.app/onboarding" }, { name: "Travela", url: "" }, { name: "Engagement support automation", url: "" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+256 752067415",
  email_address: "johnkal24@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
