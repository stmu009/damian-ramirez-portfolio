var projects = 
    [{
            "name": "2020 Summer Olympics Hangman",
            "link": "https://stmu009.github.io/Hangman-Game/",
            "image": "assets/images/olympics.gif",
            "technologies": ""

        },
        {
            "name": "Star Wars RPG",
            "link": "https://stmu009.github.io/week-4-game/",
            "image": "assets/images/cake.png",
            "technologies": ""

        },
        {
            "name": "Easy Video Game Trivia Game",
            "link": "https://stmu009.github.io/triviagame/",
            "image": "assets/images/games.jpg",
            "technologies": ""

        },
        {
            "name": "Anime Giphy Library",
            "link": "https://stmu009.github.io/giftastic/",
            "image": "assets/images/anime.png",
            "technologies": ""

        },
        {
            "name": "Rock Paper Scissors PokeBattles",
            "link": "https://stmu009.github.io/RPS-Multiplayer/",
            "image": "assets/images/poke.png",
            "technologies": ""

        },
        {
            "name": "High Score Multiplayer Trivia Game",
            "link": "https://stmu009.github.io/project-1/",
            "image": "assets/images/trivia.png",
            "technologies": ""

        }
    ]


for (const key in projects) {
    if (projects.hasOwnProperty(key)) {
        const element = projects[key];
        console.log('element:',element);
        project = $('<div>');
        projectLink = "";
        projectImage = "";
        $(project).html(`${element.name}`);
        $(project).appendTo('#portfolio');
        // $('#portfolio').append(project);
    }
}