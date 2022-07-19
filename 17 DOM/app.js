document.addEventListener('DOMContentLoaded', function(){
// 10 .- Bubbles
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

//11 forms ---- add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');


    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    list.appendChild(li)
})


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})

//search bar 
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function (book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function (e) {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})

})





//Videos from 2 to 9
//2
// const wmf = document.querySelector('#book-list li:nth-child(2) .name')
// // console.log(wmf)

// var book = document.querySelector('#book-list li .name');
// var books = document.querySelectorAll('#book-list li .name');

// // console.log(books)

//3
// Array.from(books).forEach(function(book){
//     console.log(book)
// })
//4
// var books = document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach(function(book){
//     book.textContent += ' (book title)'
// })

//5
// const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);
// // bookList.innerHTML = '<h2> Books and more...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML'

//6
// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node type is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner)

//7
// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.children);

//8
// const bookList = document.querySelector('#book-list');
// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next sibling is:', bookList.nextElementSibling);

// console.log('book-list next sibling is:', bookList.previousSibling);
// console.log('book-list next sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += "<br>Too cool for everyone else";

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)

//     })
// })

// //9
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented')
// })


// //10
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented')
// })