
const myLibrary = [];


function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        return (this.title + " by " + this.author + ", " + this.pages + ", " + this.readStatus)
    };
}

function addBookToLibrary() {


}





const theHobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

console.log(theHobbit.title);

theHobbit.info();

console.log(theHobbit.info());


