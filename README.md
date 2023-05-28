# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![]()

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox

### What I learned

- How to set up Tailwind in a vanilla JS project
- How to set up a Tailwind config
- More practice at actually using Tailwind
- Why it's easier to start mobile-first with Tailwind

### Useful resources

<details>
<summary>ChatGPT's clarification around `em` and `rem`</summary>
The em and rem units in CSS are relative units, while px is an absolute unit.

1em is equal to the current font size of the element or the browser default. In most web browsers, the default font size is 16px. So by default, 1em is equal to 16px.
1rem is equal to the font-size of the root element (<html>). Again, in most web browsers, the default font size is 16px. So by default, 1rem is also equal to 16px.
To convert px to em or rem, you can divide the px value by the font size of the parent element (for em) or the root element (for rem). If you're using the browser default, that would be 16. For example, to convert 18px to rem, you would do 18 / 16 = 1.125rem.

So, your paragraph font size of 18px would be 1.125rem.

As for whether you should use em or rem, it mostly depends on your needs:

rem is useful when you want to define sizes, margins, paddings, etc., in a consistent way, because they always refer to the root element's font size.
em is useful when you want sizes (like line-height, padding, or margin) to be relative to the current element's font size.

</details>
<br>

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
