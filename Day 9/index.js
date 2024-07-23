const h1 = document.getElementById('head');
const ul = document.getElementById('ullist');
h1.innerText = "namaste world";

const box = document.getElementsByClassName("box");
box[1].style.backgroundColor = "yellow";
box[0].style.backgroundColor = 'red';
box[0].style.width = '300px';
box[0].style.height = '300px';

const div = document.createElement('div');
div.innerText = "hello i am your fan";
document.body.appendChild(div);

const list = document.createElement('li');
list.innerText = "i am list";
ul.appendChild(list);

ul.removeChild(list);
ul.lastElementChild.remove();
ul.firstElementChild.remove();

let img = document.getElementsByTagName('img')[1];
console.log(img.attributes);

img.setAttribute('src', 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
console.log(img);

let btn = document.getElementById('btn');
function updateParagraph() {
    console.log('object');
    document.getElementsByTagName('p')[0].innerText = "nothing..........";
}

btn.addEventListener('click', updateParagraph);

let removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', () => {
    btn.removeEventListener('click', updateParagraph);
    document.getElementsByTagName('p')[0].innerText = "nothing is working";
});

const box3 = document.getElementById("box3");
box3.addEventListener("mouseover", () => {
    box3.style.backgroundColor = "#000";
    box3.style.color = "white";
    box3.innerText = "now color is black";
});

box3.addEventListener("mouseleave", () => {
    box3.style.backgroundColor = "#23a72e";
    box3.style.color = "black";
    box3.innerText = "don't enter your mouse";
});
