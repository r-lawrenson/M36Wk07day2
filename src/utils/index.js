// fs - file sync is required to write to json file
const fs = require("fs");
// function to add movies
const addMovie = (movieObj) => {

    try {
        // convert data to a string
        const stringObj = JSON.stringify(movieObj);
        // create a new file if it dosent exist and write the data to the file
        // if file exists append data to the file
        fs.writeFileSync("./storage.json", stringObj)

    } catch (error) {
        // if error write the error to the console
        console.log(error)
    }
}
// function to read movie list
const listMovies = () => {
    try {
        const jsonList = fs.readFileSync("./storage.json");
        const listParser = JSON.parse(jsonList);
        console.log(listParser);
        
    } catch (error) {
        console.log()
    }
}

module.exports = { addMovie, listMovies }