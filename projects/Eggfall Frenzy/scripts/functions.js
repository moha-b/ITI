const getRandomPosition = () => {
    const margin = 200;
    const maxWidth = window.innerWidth - margin;
    return Math.floor(Math.random() * maxWidth);
};
let getRandomInterval = () => {
    return Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;
}