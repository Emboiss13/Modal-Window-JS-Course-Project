# 👩🏽‍💻 Modal Window Project

This project demonstrates how to create a modal window in HTML, CSS, and JavaScript. The modal window is a common UI element used to display content in a layer above the main content of a web page, often for alerts, dialogues, or additional information.

It is important to note that even though I coded the logic for this game myself using JavaScript, the template HTML and CSS starter was provided to me as part of my [Udemy Course](https://www.udemy.com/course/the-complete-javascript-course/) by [Jonas Sschmedtmann](https://www.udemy.com/user/jonasschmedtmann/).

## Table of Contents
- [Installation](#⬇️Installation)
- [Code Explanation](#🗒️Code-explanation)
- [Usage](#⚒️Usage)



## ⬇️Installation

To use this project, simply clone the repository and open the `index.html` file in your browser.

```bash
git clone https://github.com/Emboiss13/Modal-Window-JS-Course-Project.git
```
## 🗒️Code Explanation

### HTML

The HTML file includes:
- Three buttons with the class `show-modal` to trigger the modal window.
- A modal window element with the `modal` class and a nested close button with the `close-modal` class.
- An overlay element with the `overlay` class that darkens the background when the modal is displayed.
- The modal contains a heading and a paragraph to illustrate its use.

### CSS

The CSS file styles the modal window, overlay, and buttons. Key points include:
- Global styles for margin, padding, and box-sizing.
- Body styles that set the font, color, and background.
- Specific styles for the modal, including positioning, background color, padding, border-radius, and box-shadow.
- Styles for the overlay to cover the entire viewport with a semi-transparent background.
- Styles for the buttons, including font size, padding, margin, background color, and cursor changes on hover.

### JavaScript

The JavaScript file contains:
- Event listeners for opening and closing the modal window.
- Functions `openModal` and `closeModal` to handle the visibility of the modal and overlay.
- Logic to open the modal when any of the `show-modal` buttons are clicked.
- Logic to close the modal when the close button, the overlay, or the Escape key is pressed.



## ⚒️Usage

- Open the `index.html` file in your preferred web browser.
- Click on any of the "Show modal" u_buttons to open the modal window.
- You can close the modal window by clicking the close button (`&times;`), clicking outside the modal (on the overlay), or pressing the Escape key.

