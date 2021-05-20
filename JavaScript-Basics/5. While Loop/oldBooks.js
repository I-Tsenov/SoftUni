function oldBooks(input) {

    let index = 0;
    let booksChecked = 0;
    let favoriteBook = input[index];
    index++;
    let currentBook = input[index]
    index++

    while (currentBook !== "No More Books") {

        if (currentBook === favoriteBook) {
            break;
        }

        booksChecked++;
        currentBook = input[index];
        index++;

    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    } else {
        console.log(`You checked ${booksChecked} books and found it.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
