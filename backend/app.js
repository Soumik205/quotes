const express = require("express");
const cors = require("cors");

const app = express();
const port = 4788;

// letting all origins to acces the backend server's resources
app.use(cors({ origin: "*" })); 

const motivationalQuotes = [
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
    "Do one thing every day that scares you. -Eleanor Roosevelt",
    "Well done is better than well said. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
    "Be yourself; everyone else is already taken. -Oscar Wilde",
];

const programmingQuotes = [
    "Technology is anything invented after you were born. - Alay Kay",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Ruby is rubbish! PHP is phpantastic! - Nikita Popov",
    "Code is like humor. When you have to explain it, it’s bad.” - Cory House",
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
];

app.get("/motivation", (req, res) => {
    res.json({
        quote: motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)],
    });
});


app.get("/programming", (req, res) => {
    res.json({
        quote: programmingQuotes[Math.floor(Math.random() * programmingQuotes.length)],
    });
});

app.listen(port, () => {
    console.log(`Running app on port ${port}`);
});

