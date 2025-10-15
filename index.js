function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if (players[playerName]) {
            console.log(players[playerName].points)
        }
    }
    return ("Player not found.");
}
function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if (players[playerName]) {
            console.log(players[playerName].shoe)
        }
    }
    return ("Player not found.");
}
function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];

        if (team.teamName === teamName) {
            console.log(team.colors)
        }
    }
    return ("Player not found.");
}
function teamNames() {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey]
        console.log(team.teamName)
    }
}
function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];

        if(team.teamName === teamName) {
            const playerNums = [];

            for (let player in team.players) {
                playerNums.push(team.players[player].number);
            }

            console.log(playerNums)
        }

    }
}
function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if(players[playerName]) {
            console.log(players[playerName]);
        }

    }

}
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        for (let player in players) {
            const shoeSize = players[player].shoe;
            if (shoeSize > largestShoe) {
                largestShoe = shoeSize;
                rebounds = players[player].rebounds;
            }
        }
    }
    console.log(rebounds);
}
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        for (let player in players) {
            const points = players[player].points;
            if (points > maxPoints) {
                maxPoints = points;
                topPlayer = player;
            }
        }
    }
    console.log(topPlayer);
}
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    if (homePoints > awayPoints) {
        console.log(`${game.home.teamName} wins with ${homePoints} points!`);
    } else if (awayPoints > homePoints) {
        console.log(`${game.away.teamName} wins with ${awayPoints} points!`);
    } else {
        console.log("It's a tie!");
    }
}
function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let mostSteals = 0;
    let mostStealsPlayer = "";
    for (let teamKey in game) {
        const players = game[teamKey].players;
        for (let player in players) {
            const stats = players[player];
            if (player.length > longestName.length) {
                longestName = player;
            }
            if (stats.steals > mostSteals) {
                mostSteals = stats.steals;
                mostStealsPlayer = player;
            }
        }
    }
    console.log(longestName === mostStealsPlayer);
}

numPointsScored("Brendan Hayword");
shoeSize("Brendan Hayword");
teamColors("Charlotte Hornets");
teamNames();
playerNumbers("Charlotte Hornets");
playerStats("Brendan Hayword");
bigShoeRebounds();
mostPointsScored();
winningTeam();
doesLongNameStealATon();