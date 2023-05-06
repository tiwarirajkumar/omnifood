console.log("hello world");

///////////////////////////////////////////////////////////

// mobile nav works //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");



btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle("nav-open")
});

menu.addEventListener('click', function() {
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener('click', function() {
  menu.style.display = "block";
  close.style.display = "none";
});

///////////////////////////////
// scroll smooth aniamtion //

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute("href");
   

    // scroll back to top ///
    if (href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if ( href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // close mobile navigation //
    if(link.classList.contains('main-nav-link'))
    headerEl.classList.toggle("nav-open")
  })
})

///////////////////////////////////////
// sticky ///
 const sectionHeroEl = document.querySelector(".section-hero")

  const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);
  
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky")
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky")
  }

  },
   {
  // in the viewport //
  root: null,
  threshold: 0,
  rootMargin: '-80px'
  });
  obs.observe(sectionHeroEl);
