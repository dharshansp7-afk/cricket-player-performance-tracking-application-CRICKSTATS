function addPlayer() {

    let name = document.getElementById("playerName").value;
    let team = document.getElementById("teamName").value;
    let matches = document.getElementById("matches").value;
    let runs = document.getElementById("runs").value;
    let wickets = document.getElementById("wickets").value;
    let balls = document.getElementById("balls").value;

    if (name == "" || team == "" || matches == "" ||
        runs == "" || wickets == "" || balls == "") {

        alert("Please enter all details");
        return;
    }

    let strikeRate = (runs / balls) * 100;
    strikeRate = strikeRate.toFixed(2);

    let performance;

    if (runs >= 300 && wickets >= 10) {
        performance = "Excellent";
    }
    else if (runs >= 200 || wickets >= 5) {
        performance = "Good";
    }
    else {
        performance = "Average";
    }

    let table = document.getElementById("playerTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = team;
    row.insertCell(2).innerHTML = matches;
    row.insertCell(3).innerHTML = runs;
    row.insertCell(4).innerHTML = wickets;
    row.insertCell(5).innerHTML = strikeRate;
    row.insertCell(6).innerHTML =
        "<span class='performance'>" + performance + "</span>";

    document.getElementById("playerName").value = "";
    document.getElementById("teamName").value = "";
    document.getElementById("matches").value = "";
    document.getElementById("runs").value = "";
    document.getElementById("wickets").value = "";
    document.getElementById("balls").value = "";
}