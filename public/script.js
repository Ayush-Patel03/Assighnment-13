const showTeams = async () => {
    console.log("teams!");

    const teamJSON = await getJSON();
    if (!teamJSON || teamJSON.length === 0) {
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
        img.src = `http://localhost:3000/${team.img}`; // Corrected 'src' attribute

        let pCity = document.createElement("p");
        section.append(pCity);
        pCity.innerHTML = `City: ${team.city}`;

        let pChampionships = document.createElement("p");
        section.append(pChampionships);
        pChampionships.innerHTML = `Championships: ${team.championships}`;

        let pMascot = document.createElement("p");
        section.append(pMascot);
        pMascot.innerHTML = `Mascot: ${team.mascot}`;

        let pColors = document.createElement("p");
        section.append(pColors);
        pColors.innerHTML = `Colors: ${team.colors.join(", ")}`;
    });
};

const getJSON = async () => {
    try {
        let response = await fetch("http://localhost:3000/api/teams");
        return await response.json();
    } catch (error) {
        console.log("Error fetching JSON:", error);
        return [];
    }
};

window.onload = () => {
    showTeams();
};
