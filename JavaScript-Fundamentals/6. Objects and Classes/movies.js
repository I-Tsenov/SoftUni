function movies(arr) {

    const ADD_MOVIE_COMMAND = "addMovie";
    const DIRECTED_BY_COMMAND = "directedBy"
    const ON_DATE_COMMAND = "onDate"

    let movies = [];

    for (let i = 0; i < arr.length; i++) {
        const currentString = arr[i].split(" ");


        if (currentString.includes(ADD_MOVIE_COMMAND)) {
            let movieName = currentString.slice(1).join(" ");
            let movie = {
                name : movieName
            }
            movies.push(movie);


        } else if (currentString.includes(DIRECTED_BY_COMMAND)) {

            let indexOfCommand = currentString.indexOf(DIRECTED_BY_COMMAND);
            let movieName = currentString.slice(0, indexOfCommand).join(" ");
            let director = currentString.slice(indexOfCommand + 1).join(" ");

            let foundMovie = movies.find(movie => movie.name === movieName);

            if (foundMovie === undefined){
                continue;
            }

            foundMovie.director = director;

            
            
        } else if (currentString.includes(ON_DATE_COMMAND)) {

            let indexOfCommand = currentString.indexOf(ON_DATE_COMMAND);
            let movieName = currentString.slice(0, indexOfCommand).join(" ");
            let date = currentString[currentString.length-1];

            let foundMovie = movies.find(movie => movie.name === movieName);

            if (foundMovie === undefined){
                continue;
            }

            foundMovie.date = date;
        }

    }

    for (let i = 0; i < movies.length; i++) {

        const element = movies[i];
        
        if (element.name && element.director && element.date) {
            
           console.log(JSON.stringify(element))
        }
    }
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])



    /*
    •	"{movie name} directedBy {director}" 
    
    0. създаваме празен масив, който да запълваме
    1. обхождаме масива и взимаме стринговете един по един
    2. проверяваме коя команда е активна в сегашния стринг
    3. според командата пълним празния масив
    4. Да принтираме филмите в JSON формат
    */