# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Final solution screen-shot](https://github.com/devashishp1999/Sunnyside-agency-landing-page/blob/main/screenshot.png)

### Links

- Live Site URL: [Live Demo link](https://devashishp1999.github.io/Sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanila JavaScript

### What I learnt

```js
// Show-Hide Navbar while scrolling up & down //

let lastScrollTop = 0;
const navBar = document.querySelector(".navBar");

window.addEventListener(`scroll`, function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navBar.style.top = "-15vh"; // Height of the navBar
  } else {
    navBar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
```

### Useful resources

- [Responsive websites](https://dzone.com/articles/using-csshtml-make-responsive#) - This is an amazing article which helped me in implementing this as a responsive websites. I'd recommend it to anyone still learning "how to make websites responsive".

## Author

- Website - [Devashish Pujari](https://devashishp1999.github.io/portfolio/)
- Frontend Mentor - [@devashishp1999](https://www.frontendmentor.io/profile/devashishp1999)
- Twitter - [@DevashishPujari](https://twitter.com/DevashishPujari)
