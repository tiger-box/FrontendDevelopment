// Лямзин Н. С.
// Работа с бразером
// 10 вариант - Релизуйте класс с использованием JavaScript Спорт с двумя свойствами (на ваш выбор) и двумя методами и двух его наследников у которых будет как минимум один дополнительный метод и свойство

class Sport {
    protected players: string[];
    protected data: Date;

    constructor(players: string[], data: Date) {
        this.players = players;
        this.data = data;
    }

    public play() {
        console.log("Play in " + this.data);
    }

    public showPlayers() {
        console.log("Players: " + this.players);
    }
}


class Football extends Sport {
    private teamA : string[];
    private teamB : string[];
    private score : number[];

    createTeam() {
        let players = this.players;
        let teamA = [];
        let teamB = [];

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

    showTeams() {
        console.log("Team A - " + this.teamA + "\n" + "Team B - " + this.teamB);
    }

    goal(teamNumber : number) {
        this.score[teamNumber] += 1;
        console.log("Goal! Score: " + this.score);
    }
}

class Snowboard extends Sport {
    private playerScore : number[];

    constructor(players : string[], data : Date) {
        super(players, data);
        this.playerScore = new Array<number>(this.players.length);

        for (let i = 0; i < this.playerScore.length; i++) {
            this.playerScore[i] = 0;
        }
    }

    addScoreToPlayer(playerNumber : number, score : number) {
        this.playerScore[playerNumber] += score;
    }

    showLeaderBoard()
    {
        console.log("Leader board");
        for (let i = 0; i < this.players.length; i++) {
            console.log (this.players[i] + " : " + this.playerScore[i]);            
        }
    }
}

// MAIN
let players : string[] = ["Игрок 1", "Игрок 2", "Игрок 3", "Игрок 4", "Игрок 5", "Игрок 6"];
let data = new Date();

let sport : Sport = new Sport(players, data);
sport.showPlayers();
sport.play();

console.log("");

let football : Football = new Football(players, data);
football.showPlayers();
football.createTeam();
football.showTeams();
football.goal(0);

console.log("");

let snowboard : Snowboard = new Snowboard(players, data);
snowboard.addScoreToPlayer(0, 150);
snowboard.addScoreToPlayer(1, 100);
snowboard.addScoreToPlayer(2, 50);
snowboard.showLeaderBoard();