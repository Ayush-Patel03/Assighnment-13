const showTeams = async () => {
    console.log("teams!");
    
    const teamJSON = await getJSON();
    if (teamJSON == " ") {
        return;
    }
    

    let teamDiv = document.getElementById("team-list");

    teamJSON.forEach((team) => {
        let section = document.createElement("section");
        teamDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = team.name;

        let img = document.createElement("img");
        section.append(img);
        img.scr = "http://localhost300/" + team.img;


    });
};

const getJSON = async () => {
  try {
        let response = await fetch("http://localhost:3000/api/teams");
        return await response.json();
    } catch(error) {
        console.log("error json");
        return "";
    }

    return teamJSON;
}

window.onload = () => {
    showTeams();
}