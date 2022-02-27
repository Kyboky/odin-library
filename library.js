let myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.info = function(){
        return title + " by " + author + ", " + pages + ", " + (isRead ? "is read": "not read yet");
    }
}

function addBookToLibrary(){

}

function updatePage(){

}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);



console.log(hobbit.info());