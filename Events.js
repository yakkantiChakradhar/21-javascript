/* <button onclick="clickHandler()">Click me</button>


function clickHandler(){
    alert('button was clicked!');
} */



/* 2)
function clickHandler(){
    alert('button was clicked!');}
 
    const button = document.querySelector('button');

button.addEventListener('click',clickHandler);
 */

//const button = document.querySelector('button');

/* function hoverHandler(){
    alert('mouse hovered !');
}

button.addEventListener('mouseover',hoverHandler);
 */
/* Timers

1) Set timeout: -
 
syntax:- 

    setTimeOut(()=>{},time in mmilliseconds) 
    // 1 sec = 1000 miliseconds

2)setInterval

syntax: -
  
    setInterval(()=>{},Time in milliseconds)
    // 1 sec = 1000 milliseconds



*/

/* const timer = setTimeout(()=>{
    console.log('hello world');
},5000);

const time = document.getElementById('timer');

time.addEventListener('click',()=>{clearTimeout(timer)}); */

/* let i=0;
const intt = setInterval(()=>{
    i++;

    console.log(i)
    if(i>5){
        clearInterval(intt)
    }
},1000); */

// Remove an event from an element

/* setTimeOut(()=>{
    button.removeEventListener('click',clickHandler)
},3000) */

///////////////////////////////////////////

/*
**** Event Object

const button = document.querySelector('button');

button.addEventListener('click',(event)=>{
    console.log(event);

});

///////////////////////////////////////

// Others types

Global Events: -

* click
* dbclick

Keyboard events: -

* keyup
* keydown
* keyPress- this event was depricated


Mouse Events: -

* Mousehover
* mouseenter
* mouseleave

page events

* load
* scroll
* resize

form events

* submit
* blur
* onchange
* focus


//////////////////////////
event object funtion.

 contains meta information but we need a variable to store this event

 this object is provided by the javascript


below mention event object will stop the submiting the form without any information 

const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
})


//////////////////////////////////////////////////
Event Propogation

capturing,bubbling

const button = document.querySelector('button');

button.addEventListenerr('click',()=>{
    console.log('button was clicked!');
});

const div = document.queryselector('div');
div.addEventListener('click',()=>{
    console.log('div was clicked');
})






*/

  
/* const listItems = document.querySelectorAll('li');
console.log(listItems);

for(let i=0;i < listItems.length; i++)
{
    listItems[i].addEventListener('click', (event)=>{
        event.target.classList.toggle('highlight');
    })
} */
/* const ul = document.querySelector('ul');
  ul.addEventListener('click',(event)=>{event.target.closest('li').classList.classList})
   */
    
  
 


/* 
Event Deligation: -

instead of using complex code we can reduce and develop a new code for all in simple manner
const ul = document.querySelector('ul');
ul.addEventListener('click',(event)=>{
    event.target.closest('li').classList.
})


*/



