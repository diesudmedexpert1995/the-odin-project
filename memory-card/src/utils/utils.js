export const name_prettify = (name) => {
    let nameWords = name.split('_')
    for (var i = 0; i < nameWords.length; i++) {
        nameWords[i] = nameWords[i].charAt(0).toUpperCase() + nameWords[i].substring(1);     
    }
    return nameWords.join(' '); 
}

export const shuffleArray = (array) =>{
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
        const j = Math.floor(Math.random() * shuffledArray.length);
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}