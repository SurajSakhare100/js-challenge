const btn = document.getElementById('btn');
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const p = document.getElementsByTagName('p')[0];
const img = document.getElementsByTagName('img')[0];
const inp = document.getElementById('inp');
const para = document.getElementById('para');
const form = document.getElementById('myForm');
const select = document.getElementById('select');
const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItem');

btn.addEventListener("click", () => {
    p.innerText = "btn clicked ...";
});

box.addEventListener('dblclick', () => {
    img.style.visibility = img.style.visibility === "hidden" ? "visible" : "hidden";
    console.log(img.style.visibility === "hidden" ? "Image hidden" : "Image shown");
});

box2.addEventListener("mouseover", () => {
    box2.style.backgroundColor = "#000";
    box2.style.color = "white";
    box2.innerText = "now color is black";
});

box2.addEventListener("mouseleave", () => {
    box2.style.backgroundColor = "#d0d245";
    box2.style.color = "black";
    box2.innerText = "dont enter your mouse";
});

inp.addEventListener("keydown", (e) => {
    console.log(e.key);
});

inp.addEventListener("keyup", (e) => {
    para.innerText = e.key;
});

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    console.log(dataObject);
}

form.addEventListener('submit', handleSubmit);

select.addEventListener("change", (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    console.log(selectedOption.textContent);
});

function handleItemClick(e) {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(`Clicked item: ${e.target.textContent}`);
    }
}

itemList.addEventListener('click', handleItemClick);

function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}

addItemButton.addEventListener('click', addItem);
