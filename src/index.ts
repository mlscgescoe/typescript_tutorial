/** This is the file for navigating and manipulating the DOM elements */


/* Targetting DOM and Typecasting */

const anchorTag = document.querySelector('a')!; // the anchor can contain a null value in it's href parameter

//so to avoid it we can use an if statement as below

// if (anchorTag) {
//     console.log(anchorTag.href);
// }

//or we can add an '!' mark at the end of the querySelector statement
// console.log(anchorTag.href);
// console.log(form.children);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// using 'as' keyword is known as typecasting (specifying the type of element present in the DOM) in TS
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});
