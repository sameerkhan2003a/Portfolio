const fetchShows = async (query) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    return data;
}
const formatShows = (data) => {
    return data.map(({ show }) => ({
        id: show.id,
        title: show.name,
        image: show.image?.medium,
        summary: show.summary?.trim() || '',
    })).filter(({ summary }) => summary !== '');
};

const searchShows = async (query) => {
    try {
        const shows = await fetchShows(query);
        cleanShows = formatShows(shows);
        console.log(cleanShows);
    } catch (error) {
        console.log(error);
    }
};

searchShows('true detective');