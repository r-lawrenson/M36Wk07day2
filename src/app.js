// add yargs
const yargs = require("yargs");

const { addMovie, listMovies } = require("./utils");

const app = (yargsObj) => {
    // if add from the user
    if(yargsObj.add) {
        // wrap in curly brackets for json data
        // create key value pairs for data
        addMovie({ title: yargsObj.title, actor: yargsObj.actor});
    // if list run list movies function
    } else if (yargsObj.list) {
        listMovies();
    // anything else 
    } else {
        console.log("Incorrect Command")
    }
};

app(yargs.argv)