AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Davis Partnership Internship",
    cardImage: "https://media-exp1.licdn.com/dms/image/C4E0BAQFoTBgj7YMYtQ/company-logo_200_200/0/1625602533015?e=2159024400&v=beta&t=7WQMgdBhnAMqVnFzHwVYroSohiTMM7FP7nNRHX8BlWQ",
    place: "Denver, Colorado",
    time: "(May 2022 - August, 2022)",
    desp: "<li>Experienced a few tasks in multiple projects from the Schematic Design Phase to the Construction Administration phase.</li><li>Engaged in site surveying of multiple projects in Downtown Denver.</li><li>Recreated One River North (Denver Multi-family Residential Project) digitally and created a 3D model using STL files and printbed machine</li>",
  },
  {
    title: "Internship",
    cardImage: "https://i.pinimg.com/280x280_RS/05/f6/3a/05f63acee01315f5c37011cc9ab1ed8b.jpg",
    place: "Baton Rouge, Louisiana",
    time: "(June 2021 - August 2021)",
    desp: "<li>Primarily focused on helping with documents throughout all stages of design.</li><li>Acquired skills for Revit and Autocad to increase efficiency and productivity.</li><li>Engaged in communication with clients and experienced collabarative effort through teamwork</li>",
  },
  {
    title: "Williams Architects Internship",
    cardImage: "data:image/png;base64,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",
    place: "New Orleans, Louisiana",
    time: "(December 2020 - January 2021)",
    desp: "<li> I was part of the renovation of Tulane's new hospital in Downtown New Orleans.</li><li>I engaged in site surveying along with the surveying of historical floors and walls for preservation throughout the 24 floors of the hospital.</li><li>Plans were then created of each floor highlighting preservations and demolitions. </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
