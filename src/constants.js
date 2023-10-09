export const videorUrls = [
    "https://storied-ganache-44b358.netlify.app/",
    "https://strong-muffin-0a2965.netlify.app/",
    "https://sprightly-sorbet-b887b0.netlify.app/",
];

export const stories = {
    deforestation: {
        audios: ["/4.1.wav", "/4.2.wav", "/4.3.wav", "/4.4.wav", "/4.5.wav"],
        splash_intro: [
            {
                text: "Hello explorer! It's me again, Splash, the guardian of water. Let's learn about our forests. Forests are the Earth's natural lungs and protectors of biodiversity.",
                audio: "/4.1.wav",
            },
            {
                text: "Unfortunately, deforestation threatens their survival. But we can be heroes by planting trees and restoring what has been lost.",
                audio: "/4.2.wav",
            },
        ],
        splash_quiz: {
            question:
                "Here are three options to become a true forest and water defender, choose one",
            options: [
                {
                    text: "Cut down all the trees to make furniture.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Dump trash in the forest and in the river.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Print on recycled paper.",
                    isCorrect: true,
                    score: 1,
                },
            ],
        },
        final_dialogue: {
            correct: [
                "Fantastic! By printing on recycled paper, you're helping reduce tree logging and conserve nature. Trees are very important for keeping our rivers clean and our forests healthy.",
                "Oh, noooooo",
            ],
            incorrect: [
                "Excellent choice. Ha, ha, ha! I'm the king of pollution, and I love to see how you waste paper endlessly!",
                "Oh no! That's not the correct choice. Dumping trash in the forest and in the river is very harmful to our natural environment.",
            ],
        },
    },
    agriculture: {
        audios: ["/5.1.wav", "/5.2.wav", "/5.3.wav", "/5.4.wav", "/5.5.wav"],
        splash_intro: [
            {
                text: "Hello, explorer! Today we're going to talk about agriculture and how we can take care of our planet while growing food.",
                audio: "/4.1.wav",
            },
            {
                text: "Agriculture is essential for feeding the world, but sometimes it can be harmful to water and the environment. We can be heroes by practicing sustainable agriculture and taking care of our natural resources!",
                audio: "/4.2.wav",
            },
        ],
        splash_quiz: {
            question:
                "Here are some options to become a true advocate for water and nature in agriculture, choose one!",
            options: [
                {
                    text: "Use a lot of chemicals on crops.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Use smart irrigation to water crops.",
                    isCorrect: true,
                    score: 1,
                },
                {
                    text: "Use a lot of water for carefree irrigation.",
                    isCorrect: false,
                    score: 0,
                },
            ],
        },
        final_dialogue: {
            correct: [
                " Great! That's fantastic! By using smart irrigation, you're taking care of water and ensuring it isn't wasted. That's how it's done! Thank you for being a water and nature advocate!",
                "Oh, noooooo",
            ],
            incorrect: [
                "Haha! You've made the right choice! I like that! The more chemicals you use y the more water you use, the more pollution there will be, and the less water there will be.",
                "Oh no! That's not the right choice. Using many chemicals on crops is very harmful to our environment, and if we waste water without measure, it will run out.",
            ],
        },
    },
    forest_fires: {
        audios: ["/6.1.wav", "/6.2.wav", "/6.3.wav", "/6.4.wav", "/6.5.wav"],
        splash_intro: [
            {
                text: "Hello, explorer! Now, we're going to talk about a problem that threatens our forests: wildfires. Forests are vital to maintain the balance of our planet and the availability of water.",
                audio: "/4.1.wav",
            },
            {
                text: "Unfortunately, wildfires are one of the main threats to our forests. But together, we can learn how to prevent them and protect our valuable natural resources.                ",
                audio: "/4.2.wav",
            },
        ],
        splash_quiz: {
            question:
                "Here are three options to become a true defender of forests and water, choose the correct one:",
            options: [
                {
                    text: "Burn waste in the forests.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Leave trash in the forest, creating fire risks.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Learn about wildfire prevention.",
                    isCorrect: true,
                    score: 1,
                },
            ],
        },
        final_dialogue: {
            correct: [
                "Fantastic! By choosing option 3 and learning about wildfire prevention, you are taking steps to protect our forests and the water that flows through them. Wildfires can devastate our ecosystems and negatively affect water quality.                ",
                "Oh, noooooo",
            ],
            incorrect: [
                "Ha, ha, ha! You've chosen the right option! I like that! The more trash and fires there are, the less water there will be. ",
                "Oh no! That's not the correct option. Leaving trash in the forest can increase the risk of wildfires and seriously damage our ecosystems. It's important to keep our forests clean and prevent fires.                ",
            ],
        },
    },
    household_consumption: {
        audios: ["/7.1.wav", "/7.2.wav", "/7.3.wav", "/7.4.wav", "/7.5.wav"],
        splash_intro: [
            {
                text: "Hello little explorer!. We will learn about the importance of responsible water consumption in our homes.",
                audio: "/4.1.wav",
            },
            {
                text: "Imagine that every drop of water you save helps our planet. You can be a water-saving hero by turning off the tap when you're not using it and telling your family to fix any leaks. Also, use just enough water when you shower or brush your teeth.                ",
                audio: "/4.2.wav",
            },
        ],
        splash_quiz: {
            question:
                "Here are three options to become a true water defender in our house, choose the correct one:",
            options: [
                {
                    text: "Leave the faucet running all the time.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Take long showers and fill the bathtub for baths.",
                    isCorrect: false,
                    score: 0,
                },
                {
                    text: "Turn off the faucet while I brush my teeth.",
                    isCorrect: true,
                    score: 1,
                },
            ],
        },
        final_dialogue: {
            correct: [
                "Fantastic! By turning off the faucet while I brush my teeth, you are harnessing a natural resource and reducing your consumption of drinking water. This helps conserve freshwater for future generations.",
                "Oh, noooooo",
            ],
            incorrect: [
                "Hahaha! Leaving the faucet running all the time or taking long showers and filling the bathtub for baths are exactly what I want you to do. ",
                "Stop! This choice isn't good for our planet. Instead, you can be a water-saving hero by turning off the faucet while you brush your teeth or taking shorter showers. That way, you're taking care of water and the environment.",
            ],
        },
    },
};

export const finalText =  `Great job exploring the fascinating world of water and climate change! Ready for an extra challenge? Answer questions based on what you've learned and earn a special bonus to further help the future of water. Show your knowledge and be a true water keepers!`;

export const finalQuiz = [
    {
        question:
            "How many times a day do you wash your hands?",
        options: [
            {
                text: "Less than 5 times",
                score: 1,
            },
            {
                text: "5-10 times",
                isCorrect: false,
                score: 0.5,
            },
            {
                text: "More than 10 times",
                isCorrect: true,
                score: 0,
            },
        ],
    },
    {
        question:
            "Do you use a glass of water or turn off the spout when brushing your teeth?",
        options: [
            {
                text: "Yes",
                score: 1,
            },
            {
                text: "Sometimes",
                isCorrect: false,
                score: 0.5,
            },
            {
                text: "No",
                isCorrect: true,
                score: 0,
            },
        ],
    },
    {
        question:
            "Do you participate in events to clean beaches, rivers or other bodies of water to preserve water quality?",
        options: [
            {
                text: "Yes",
                score: 1,
            },
            {
                text: "Sometimes",
                isCorrect: false,
                score: 0.5,
            },
            {
                text: "No",
                isCorrect: true,
                score: 0,
            },
        ],
    },
    {
        question:
            "Do you encourage water saving practices among your friends and family?",
        options: [
            {
                text: "Cut down all the trees to make furniture.",
                score: 1,
            },
            {
                text: "Dump trash in the forest and in the river.",
                isCorrect: false,
                score: 0.5,
            },
            {
                text: "Print on recycled paper.",
                isCorrect: true,
                score: 0,
            },
        ],
    },
];
