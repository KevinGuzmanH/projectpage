
const cardsData = [

  {
    src: "https://yorney3.s3.amazonaws.com/javaCompare.png",
    desc: "Herramienta de comparación de rendimiento de código Java. Spring-Angular",
    href: "#modal1a",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ingproject1.png",
    desc: "Angular+SpringBoot, " +
        "registro e inicio de sesión mediante Facebook y Google " +
        "compra del producto mediante Payu. Tokenizado y con el almacenamiento de los datos de los usuarios " +
        "por parte de la tienda en base de datos relacional",
    tittle: "EN PROCESO",
    href: "#modal1",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ingproject2.png",
    desc: "Proyecto CRUD en el que se pueden llevar las cuentas y el numero de productos en una tienda, " +
        "base de datos PosgreSQL. La conexión a la base de datos puede tardar 10 sg",
    tittle: "",
    href: "#modal2",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/notes1-min.png",
    desc: "Web con autenticación por cookies, angular guards y primeng, y con Spring Data y tests" +
        "",
    tittle: "",
    href: "#modal3",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/animal.png",
    desc: "Página con enfoque animalista, hecha en angular (con gsap y bootstrap) " +
        "las imagenes fueron sacadas de freepik.es",
    tittle: "",
    href: "#modal4",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/pikachu-min.png",
    desc: "Aplicación web con Angular Univeral, PrimeNG, Bootstrap, Chartjs, Gsap, y SpringBoot",
    tittle: "",
    href: "#modal5",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ming-1-6-min.png",
    desc: "Página de restaurante de comida asiática, implementada en AWS usando EC2, S3 y CloudFront",
    tittle: "",
    href: "#modal6",
    idiom: "spanish"
  },{
    src: "https://yorneybucket-1.s3.amazonaws.com/extension-min.png",
    desc: "Extensión para Google Chrome que permite ver los restaurantes con precio promedio mas barato, Además te muestra el tiempo de preparación de la comida, caracteristicas ocultas en la página de Ifood",
    tittle: "",
    href: "#modal7",
    idiom: "spanish"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/senderos-1-min.png",
    desc: "Aplicación para el grupo de profesores 'Senderos', realizado con Spring MVC y thymeleaf, en donde se encuentrar los articulos escritos por este grupo",
    tittle: "EN PROCESO",
    href: "#modal8",
    idiom: "spanish"
  },
  {
    src: "https://yorney3.s3.amazonaws.com/javaCompare.png",
    desc: "Java Code Performance Comparison Tool Spring-Angular",
    href: "#modal1a",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ingproject1.png",
    desc: "Angular+SpringBoot, " +    
        "sign up and log in with Facebook and Google, shop with payment  " +
        "gateway PayU, tokenized. User info stored in a relational database ",
    tittle: "ON PROCESS",
    href: "#modal1",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ingproject2.png",
    desc: "Project CRUD, type shop inventory, database PosgreSQL. The connection with the database can be slow",
    tittle: "",
    href: "#modal2",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/notes1-min.png",
    desc: "Web with cookie authentication, angular guards and primeng, and with Spring Data and tests",
    tittle: "",
    href: "#modal3",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/animal.png",
    desc: "Page with animalistic approach, made in angular (with gsap and bootstrap)" +
        " the images were taken from freepik.es",
    tittle: "",
    href: "#modal4",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/pikachu-min.png",
    desc: "Web aplication with Angular Universal, PrimeNG, Bootstrap, Chartjs, Gsap, and SpringBoot",
    tittle: "",
    href: "#modal5",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/ming-1-6-min.png",
    desc: "Asian food restaurant page, deployed on AWS using EC2, S3 and CloudFront",
    tittle: "",
    href: "#modal6",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/extension-min.png",
    desc: "Extension for Chrome browser. See the best restaurants in Ifood in your zone rated by average price and showing you the food preparation time, these are hidden properties on Ifood Page",
    tittle: "",
    href: "#modal7",
    idiom: "english"
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/senderos-1-min.png",
    desc: "Application for the group of teachers 'Senderos', made with Spring MVC and thymeleaf, where you can find the articles written by this group",
    tittle: "ON PROCESS",
    href: "#modal8",
    idiom: "english"
  },
];



cardsData.forEach(({ src, desc, tittle, href, idiom }) =>
  putCard(src, desc, tittle, href, idiom)
);

function putCard(src, desc, tittle, href, idiom) {
  
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

  if (href === "#modal1" || href === "#modal7" || href === "#modal8") {
    paragraph.style.fontSize = "smaller";
    span.style.color = "rgb(238, 110, 115)";
    span.style.fontWeight = "initial";
  }

  divCol.className = "col l4";

  if(idiom === "english") {
    divCol.className = "col l4 english";
  }else{
    divCol.className = "col l4 spanish";
  }

  if (idiom == "english") {
    divCol.style.display = "none"
  }else{
    divCol.style.display = "block"
  }

  divcard.className = "card hoverable small";
  divcardIMG.className = "card-image";

  divContent.className = "card-content";
  crdAction.className = "card-action";
  span.textContent = tittle;
  span.className = "card-title";
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
    src: "https://yorneybucket-1.s3.amazonaws.com/iconCSS.png",
    tittle: "CSS",
  },

  {
    src: "https://yorneybucket-1.s3.amazonaws.com/iconJavaScrip.png",
    tittle: "JavaScript",
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/iconHTML.png",
    tittle: "HTML",
  },
  {
    src: "https://yorneybucket-1.s3.amazonaws.com/iconJava.png",
    tittle: "Java",
  },
  {
    src: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
    tittle: "PostgreSQL",
  },
  {
    src: "https://picodotdev.github.io/blog-bitix/assets/images/logotypes/spring.svg",
    tittle: "Spring",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    tittle: "Python",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    tittle: "Gsap",
  },
  {
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png",
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
  { word: "function" },
  { word: "Java" },
  { word: "input" },
  { word: "Python" },
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

function changeidiom(){
   let spanishCards = document.getElementsByClassName("spanish");
   let englishCards = document.getElementsByClassName("english");

   if (spanishCards[0].style.display == "block") {
    for (let index = 0; index < spanishCards.length; index++) {
      spanishCards[index].style.display = "none"
     };
     for (let index = 0; index < englishCards.length; index++) {
      englishCards[index].style.display = "block"
     };
   }else{
    for (let index = 0; index < englishCards.length; index++) {
      englishCards[index].style.display = "none"
     };
     for (let index = 0; index < spanishCards.length; index++) {
      spanishCards[index].style.display = "block"
     };
   }
}

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

