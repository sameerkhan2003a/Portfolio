const fetchQuote = async () => {
    const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) throw new Error("API Failed");
    return res.json();
};

let isFetching = false;

const showQuote = async () => {
    if (isFetching) return;

    try {
        isFetching = true;

        console.log("Loading quote...");

        const quote = await fetchQuote();

        console.log(`"${quote.quote}" - ${quote.author}`);
        console.log("---------");

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        isFetching = false;
    }
};

setInterval(showQuote, 5000);
showQuote();