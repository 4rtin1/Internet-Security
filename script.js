const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	}); 
});

 const hiddenElements = document.querySelectorAll('.hidden')
 hiddenElements.forEach((el) => observer.observe(el));
 
 const myNav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};