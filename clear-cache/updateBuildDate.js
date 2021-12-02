const fs = require("fs");
const path = require("path");
let { buildDate } = require("../src/static/buildDate.json");
const buildJSONPath = path.resolve("./src/static/buildDate.json")

buildDate = new Date().getTime();

fs.writeFileSync(path.resolve(buildJSONPath), JSON.stringify({ buildDate }, null, 2));

const jsonContent = JSON.stringify({ buildDate });

fs.writeFile("./public/meta.json", jsonContent, "utf8", function (error) {
    if (error) {
        console.log("An error occured while saving build date and time to meta.json");
        return console.log(error);
    }
    console.log("Latest build date and time updated in meta.json file");
});