'use strict';

// Storing element objects in variables for easy access
const modal = document.querySelector('.modal'); 
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); 


// Create function to handle opening the modal
const openModal = function() {
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden');
}


// Create function to handle closing modal actions
const closeModal = function() {
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
}


/*
CREATE OPEN MODAL LOGIC
----------------------------------------------------------

    1- Attatch eventHandler to each button:
        → We do this by using the querySelectAll method
            → This method turns ALL the element in a class into a node list
            →  Therefore we can loop through every node and access an individual element

        → This will allow for the system to know when a user clicks on a button
            * Regardless of each button being on the same individual class
           
    2- Use the openModal function on each element of the button node list

----------------------------------------------------------
*/
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}


/*
CLOSING MODAL LOGIC
----------------------------------------------------------

    1- We click the x button
        → Use the closeModal function on each element of the button node list
    2- We click the overlay
        → Use the closeModal function on each element of the button node list
    3- We use the ESC button

----------------------------------------------------------
*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
    
    if ((event.key === 'Escape') && !(modal.classList.contains('hidden'))) {
        closeModal(); 
    }
    
});
