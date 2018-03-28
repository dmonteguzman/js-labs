var cadNom = "Diego Monterrubio";
console.log ("Name: " + cadNom.toUpperCase());

function displayPosition (cName, jTitle, description){
    console.log("Career: " + cName + " / " + jTitle);
    console.log("Description: " + description);
}

displayPosition("IT Manager", "Gameloft", "I love to play videogames");

console.log("");
console.log("My Interests: ");
console.log("* Stay with my wife and my future son");
console.log("* Play football");
console.log("* Videogames like PUBG");
console.log("* Have fun with friends");

console.log("");
console.log("My Previous Experience: ");
console.log("* IT Manager in Gameloft for 3 years");
console.log("* Helpdesk in Grupo SCA");
console.log("* Junior Content Management in MARCA-Patrocinalos");
console.log("* Writer in VAVEL");
console.log("* IT Manager in Colegio Virgen de Europa");

console.log("");

function displaySkill(skillName, boolValor){
    if(boolValor==='true'){
        console.log("* BAM: " + skillName);
    }

    else{
        console.log("* " + skillName);
    }
}

displaySkill("English", 'true');
displaySkill("Windows Administration", 'false');
displaySkill("Linux Administration", 'false');
displaySkill("JavaScript", 'true');
displaySkill("Good Communication Skills", 'false');
displaySkill("Node.JS", 'true');
displaySkill("MongoDB", 'true');
displaySkill("SCRUM", 'false');
displaySkill("Heroku", 'false');