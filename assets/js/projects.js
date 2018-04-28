var projects = [{
        "name": "2020 Summer Olympics Hangman",
        "link": "https://stmu009.github.io/Hangman-Game/",
        "image": "assets/images/olympics.gif",
        "technologies": "",
        "id": 1,
        "description":"Hangman with 2020 Summer Olympic Theme"

    },
    {
        "name": "Star Wars RPG",
        "link": "https://stmu009.github.io/week-4-game/",
        "image": "assets/images/trooper.jpg",
        "technologies": "",
        "id": 2,
        "description":"A Star Wars theme where you can battle with an against some of the most popular Star Wars characters"

    },
    {
        "name": "Easy Video Game Trivia Game",
        "link": "https://stmu009.github.io/triviagame/",
        "image": "assets/images/games.jpg",
        "technologies": "",
        "id": 3,
        "description":"A video game trivia game that pulls questions with an easy tag from the open trivia API"


    },
    {
        "name": "Anime Giphy Library",
        "link": "https://stmu009.github.io/giftastic/",
        "image": "assets/images/anime.png",
        "technologies": "",
        "id": 4,
        "description":"Search for your favorite anime gifs from the giphy API"


    },
    {
        "name": "Rock Paper Scissors PokeBattles",
        "link": "https://stmu009.github.io/RPS-Multiplayer/",
        "image": "assets/images/poke.png",
        "technologies": "",
        "id": 5,
        "description":"An under construction rock paper scissors game with a Pokemon theme"


    },
    {
        "name": "High Score Multiplayer Trivia Game",
        "link": "https://stmu009.github.io/project-1/",
        "image": "assets/images/trivia.png",
        "technologies": "",
        "id": 6,
        "description":"A trivia game with many features such as chat, high scores, random background, random gifs, and a soundcloud player"

    }
]

for (const key in projects) {
    if (projects.hasOwnProperty(key)) {
        const element = projects[key];
        div1 = $('<div>')
        $(div1).addClass('carousel-item');
        if (element.id === 1) {
            $(div1).addClass('active');
        }
        $(div1).html(`<a href="${element.link}"><img class="carousel-image" src="${element.image}" alt="slide-${element.id}">
                </a><div class="carousel-caption d-none d-md-block">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                </div>`)
        console.log('div1:', div1);
        $(div1).appendTo('.carousel-inner');
    }
}