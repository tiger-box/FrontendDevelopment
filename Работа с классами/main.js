// Лямзин Н. С.
// Работа с бразером
// 10 вариант - Релизуйте класс с использованием JavaScript Спорт с двумя свойствами (на ваш выбор) и двумя методами и двух его наследников у которых будет как минимум один дополнительный метод и свойство

// Classes
class Sport {
    constructor(players, data) {
        this.players = players;
        this.data = data;
    }

    Play() {
        console.log("Play in " + this.data);
    }

    ShowPlayers() {
        console.log("Players: " + this.players);
    }
}

class Football extends Sport {
    CreateTeam() {
        var players = this.players;
        var teamA = [];
        var teamB = [];

        for (let i = 0; i < players.length; i++) {
            const element = players[i];
            if (i % 2 === 0) {
                teamA.push(players[i]);
            }
            else {
                teamB.push(players[i]);
            }
        }

        this.teamA = teamA;
        this.teamB = teamB;

        this.score = [0, 0];
        console.log("Team created");
    }

    ShowTeams() {
        console.log("Team A - " + this.teamA + "\n" + "Team B - " + this.teamB);
    }

    Goal(teamNumber) {
        this.score[teamNumber] += 1;
        console.log("Goal! Score: " + this.score);
    }
}

class Snowboard extends Sport {
    constructor(players, data) {
        super(players, data);
        this.playerScore = new Array(this.players.length);

        for (let i = 0; i < this.playerScore.length; i++) {
            this.playerScore[i] = 0;
        }
    }

    AddScoreToPlayer(playerNumber, score) {
        this.playerScore[playerNumber] += score;
    }

    ShowLeaderBoard()
    {
        console.log("Leader board");
        for (let i = 0; i < this.players.length; i++) {
            console.log (this.players[i] + " : " + this.playerScore[i]);            
        }
    }
}

// MAIN
var players = ["Игрок 1", "Игрок 2", "Игрок 3", "Игрок 4", "Игрок 5", "Игрок 6"];
var data = new Date();

var sport = new Sport(players, data);
sport.ShowPlayers();
sport.Play();

console.log("");

var football = new Football(players, data);
football.ShowPlayers();
football.CreateTeam();
football.ShowTeams();
football.Goal(0);

console.log("");

var snowboard = new Snowboard(players, data);
snowboard.AddScoreToPlayer(0, 150);
snowboard.AddScoreToPlayer(1, 100);
snowboard.AddScoreToPlayer(2, 50);
snowboard.ShowLeaderBoard();