// console.log(document.childNodes);
// console.log(document.body.firstElementChild.nextElementSibling);

//!node -> bosh qatorni va teglarni value sifatida oladi
//!element -> faqat teglarni qiymat sifatida oladi


// let h1 = document.getElementById('h1');

// h1.innerHTML = 'jasurbek'

// console.log(h1.outerHTML);

// let none = document.getElementById('none')
// none.setAttribute('class' , 'red')

// none.style.cssText = `
//     background:blue;
//     color:green;
// `

// let box = document.getElementsByClassName('box')

// console.log(box[0].offsetHeight);
// console.log(box[0].clientHeight);

// console.log(box[0].offsetWidth);
// console.log(box[0].clientWidth);

// console.log(box[0].offsetTop);
// console.log(box[0].offsetLeft);

// let a = box[0].scrollHeight

// console.log(a);

// const more = () => {
//     box[0].style.height = `${a}px`
// }

// const less = () => {
//     box[0].style.height = '400px'
// }

// const btn = () => {
//     box[0].scroll({top:200 , behavior:'smooth'})
//     box[0].scrollBy({top:200 , behavior:'smooth'})
//     box[0].scrollTo({top:200 , behavior:'smooth'})
//     console.log(box[0].getBoundingClientRect());
// }

//!mouse events

// let btn = document.getElementById("button")

// btn.addEventListener('contextmenu' , () => {
//     console.log('contextmenu');
// })

// btn.addEventListener('dblclick' , () => {
//     console.log('dblclick');
// })

// btn.addEventListener('mousedown' , () => {
//     console.log('mousedown');
// })

// btn.addEventListener('mouseenter' , () => {
//     console.log('mouseenter');
// })

// btn.addEventListener('mouseleave' , () => {
//     console.log('mouseleave');
// })

// btn.addEventListener('mousemove' , () => {
//     console.log('mousemove');
// })

// btn.addEventListener('mouseout' , () => {
//     console.log('mouseout');
// })

// btn.addEventListener('mouseover' , () => {
//     console.log('mouseover');
// })

// btn.addEventListener('mouseup' , () => {
//     console.log('mouseup');
// })

// btn.addEventListener('click' , () => {
//     console.log('click');
// })

//!Bubling

// let parent = document.querySelector('.parent')
// let child = document.querySelector('.child')

// parent.addEventListener('click' , (e) => {
//     console.log('this is parent');
//     // e.stopImmediatePropagation()
// })

// child.addEventListener('click' , (e) => {
//     console.log('this is child');
//     // e.stopImmediatePropagation()
// })

//!Form


// function myFunction(val) {
//     alert("The input value has changed. The new value is: " + val);
//   }

// document.getElementById('none').addEventListener('keydown' , (e) => {
//     console.log(e.type);
// })

// let f = document.forms.jasur.none

// console.log(f);

//!select

// let select = document.getElementById('select')

// console.log(select.options[1].value);
// console.log(select.selectedIndex = 1);

// let login = document.getElementById("login")

// login.onblur = ({target:{value}}) => {
//     if(!value.includes("@")){
//         document.getElementById('error').innerHTML = 'qwertyuiop'
//     }
//      else {
//         document.getElementById('error').innerHTML = ''
//     }
// }

//     login.onfocus = () => { 
//         document.getElementById('error').innerHTML = null
//     }

// document.getElementById('jasurbek').addEventListener("submit" , (e) => {
//     e.preventDefault()
//     fetch(`https://jsonplaceholder.typicode.com/${document.getElementById('select').value}`).then(res => res.json()).then(res => console.log(res))
// })

