let myLibrary=[];
const lib = document.querySelector('#library');
var libraryIndex = 0;

function Book(title, author, pages, read){
  this.title=title,
  this.author=author,
  this.pages=pages,
  this.read=read;
};

myLibrary[0]=new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary[1]=new Book("Lamb", "Christopher Moore", 222, true);

function showBook(Book) {
  var book = document.createElement('div');
  book.classList.add('book');
  book.setAttribute("data-bookno", libraryIndex)
  var btitle = document.createElement('p');
  btitle.textContent = Book.title;
  var bauthor = document.createElement('p');
  bauthor.textContent = Book.author;
  var bpages = document.createElement('p');
  bpages.textContent = `${Book.pages} pages`;
  var readb = document.createElement('p');
  if (Book.read == true) {
    readb.textContent = "read"
  }
  else {
    readb.textContent = "haven't read"
  }
  book.appendChild(btitle);
  book.appendChild(bauthor);
  book.appendChild(bpages);
  book.appendChild(readb);
  if (Book.read == false) {
    var rdbtn = document.createElement('button');
    rdbtn.textContent = "Read";
    rdbtn.classList.add('reader');
    rdbtn.addEventListener('click', (e) => {
      e.target.parentNode.childNodes[3].textContent = "read";
      e.target.parentNode.removeChild(rdbtn);
    });
  book.appendChild(rdbtn);
  }
  var rmvbtn = document.createElement('button');
  rmvbtn.textContent = "Remove Book";
  rmvbtn.addEventListener('click', (e) => {
    lib.removeChild(e.target.parentNode)
  });
  book.appendChild(rmvbtn);
  lib.appendChild(book);
  libraryIndex++;
  }

for (var counter = 0; counter < myLibrary.length; counter++) {
  showBook(myLibrary[counter])
}

var add = document.querySelector('.add');
add.onclick = () => {
  var newb = document.querySelector('.newBook');
  newb.style.visibility = 'visible';
};

var sub = document.querySelector('#submit')
sub.onclick = () => {
  var t = document.querySelector('.title');
  var a = document.querySelector('.author');
  var l = document.querySelector('.length');
  var r = document.querySelector('.readtrue');
  var tb = t.value;
  var ab = a.value;
  var lb = l.value;
  var rb
  if (r.checked === true) {
    rb = true;
  }
  else {
    rb = false;
  }
  var newboook= new Book(tb,ab,lb,rb);
  showBook(newboook)
  var newb = document.querySelector('.newBook');
  newb.style.visibility = 'hidden';
  tb = '';
  ab = '';
  lb = '';
  return false;
}
