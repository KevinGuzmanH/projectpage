
const cardsData = [
  {
    src: "Resources/Images/ingproject1.png",
    desc: "Página hecha en Springboot con Thymeleaf y Materialize CSS."
     +" Conectada a base de datos utilizando JPA y PostgreSQL, y en la que tú mismo puedes postear",
    tittle: "Tecnologías",
    href: "#modal1",
  },
  {
    src: "Resources/Images/ingproject2.png",
    desc: "Proyecto CRUD en el que se pueden llevar las cuentas y el numero de productos en una tienda. La " +
        "coneccion a la base de datos puede tardar de 10 a 40 sg",
    tittle: "Tienda",
    href: "#modal2",
  },
  {
    src: "https://cdn4.buysellads.net/uu/1/87063/1617222593-KLAV-335-260x200-lifestyle-4.jpg",
    desc: "I am a very simple card. I am good at containing small bits of information",
    tittle: "Cajero",
    href: "#modal3",
  },
];

cardsData.forEach(({ src, desc, tittle, href }) =>
  putCard(src, desc, tittle, href)
);

function putCard(src, desc, tittle, href) {
  let row = document.getElementById("cardsRow");
  let divCol = document.createElement("div");
  let divcard = document.createElement("div");
  let divcardIMG = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");
  let divContent = document.createElement("div");
  let paragraph = document.createElement("p");
  let crdAction = document.createElement("div");
  let action = document.createElement("a");

  divCol.className = "col l4";
  divcard.className = "card hoverable small";
  divcardIMG.className = "card-image";
  span.className = "card-title";
  divContent.className = "card-content";
  crdAction.className = "card-action";
  span.textContent = tittle;
  action.textContent = "Ver";

  action.className = "waves-effect waves-light btn modal-trigger";
  action.href = href;

  img.className = 'class="responsive-img"';
  img.src = src;
  img.alt = "Project image";
  paragraph.textContent = desc;

  divCol.appendChild(divcard);
  divcard.appendChild(divcardIMG);
  divcard.appendChild(divContent);
  divcard.appendChild(crdAction);
  crdAction.appendChild(action);
  divcardIMG.appendChild(img);
  divcardIMG.appendChild(span);
  divContent.appendChild(paragraph);
  row.appendChild(divCol);
}

const skillData = [
  {
    src: "Resources/Images/iconCSS.png",
    tittle: "CSS",
  },

  {
    src: "Resources/Images/iconJavaScrip.png",
    tittle: "JavaScript",
  },
  {
    src: "Resources/Images/iconHTML.png",
    tittle: "HTML",
  },
  {
    src: "Resources/Images/iconJava.png",
    tittle: "Java",
  },
  {
    src: "Resources/Images/iconMySQL.png",
    tittle: "MySQL",
  },
  {
    src: "https://picodotdev.github.io/blog-bitix/assets/images/logotypes/spring.svg",
    tittle: "Android Studio",
  },
  {
    src: "https://nefelijm.github.io/Nefeli/assets/images/img5.png",
    tittle: "Bootstrap",
  },
  {
    src: "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png",
    tittle: "Angular",
  },
  {
    src: "https://colinstodd.com/images/posts/matcss-min.png",
    tittle: "Materializecss",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    tittle: "Gsap",
  },
  {
    src: "https://jartigag.xyz/assets/images/posts/git.png",
    tittle: "git",
  },

];
skillData.forEach(({ src, tittle }) => putSkillIcons(src, tittle));

function putSkillIcons(src, tittle) {
  let row = document.getElementById("iconsRow");
  let divCol = document.createElement("div");
  let imageCont = document.createElement("div");
  let img = document.createElement("img");
  divCol.className = "col l4 s6 ";
  img.alt = "language image";
  img.className = "skillimg";
  img.src = src;
  img.setAttribute("title", tittle);
  imageCont.className = "contimg";
  divCol.appendChild(imageCont);
  imageCont.appendChild(img);
  row.appendChild(divCol);
}

const words = [
  { word: "Sql" },
  { word: "funtion" },
  { word: "Java" },
  { word: "input" },
  { word: "Android" },
  { word: "<div>" },
  { word: "Skill" },
  { word: "Style" },
  { word: "Index" },
  { word: "CSS" },
  { word: "Flash" },
  { word: "<h>" },
  { word: "double" },
  { word: "Let" },
  { word: "<body>" },
];

words.forEach(({ word }) => putWords(word));

function putWords(word) {
  let divWords = document.getElementById("wodsCont");
  let columns = document.createElement("div");
  let h3 = document.createElement("h3");
  columns.className = "col l3";
  columns.appendChild(h3);
  h3.textContent = word;
  h3.className = "floatWord";
  divWords.appendChild(columns);
}

gsap.to("#leftIcon", {
  duration: 2,
  delay: 0.4,
  x: 50,
  ease: "slow",
  rotation: 360,
});

gsap.from("#presentation", {
  duration: 2,
  x: -200,
  scale: 1,
  opacity: 0,
  delay: 0.4,
  ease: "slow",
});

gsap.from(".floatWord", {
  duration: 3,
  scale: 0,
  y: 40,
  delay: 2,
  repeat: -1,
  ease: "power1.inOut",
  opacity: 0,
  stagger: {
    grid: [7, 15],
    from: "random",
    amount: 35,
    yoyo: true,
    repeat: -1,
  },
});

const elements = document.querySelectorAll("#cardsRow");

const observeElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to(".card", {
        duration: 1.5,
        scale: 1,
        y: 40,
        ease: "power1.inOut",
        opacity: 1,
        stagger: 0.4,
      });
    }
  });
};

const observer = new IntersectionObserver(observeElement, {
  root: null,
  threshold: 0.5,
});

elements.forEach((element) => {
  observer.observe(element);
});

const elementsS = document.querySelectorAll("#skillSet");

let cont = 0; //to avoid an error with the animation

const observeElementSkill = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && cont < 1) {
      gsap.from(".skillimg", {
        duration: 1.5,
        scale: 1,
        y: -200,
        ease: "power1",
        stagger: 0.4,
      });
      gsap.to("#skillSet", {
        duration: 1.5,
        scale: 1,
        marginLeft: 100,
        x: 0,
        ease: "power1.inOut",
        opacity: 1,
        stagger: 0.4,
      });
      cont++;
    }
  });
};

const observerS = new IntersectionObserver(observeElementSkill, {
  root: null,
  threshold: 0.2,
});

elementsS.forEach((element) => {
  observerS.observe(element);
});
