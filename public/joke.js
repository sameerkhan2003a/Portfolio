const fetchJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return data;
}

const fetchTwoJokes = async () => {
    try{

        console.log("Fetching two jokes");
        const [joke1, joke2] = await Promise.all([
            fetchJoke(),
            fetchJoke()
        ]);
        console.log("Joke 1: ");
        console.log("setup: " + joke1.setup);
        console.log("punchline: " + joke1.punchline);
        console.log("Joke 2: ");
        console.log("setup: " + joke2.setup);
        console.log("punchline: " + joke2.punchline);
    }
    catch(err) {
        console.log("Error fetching jokes");
    }
}

fetchTwoJokes();