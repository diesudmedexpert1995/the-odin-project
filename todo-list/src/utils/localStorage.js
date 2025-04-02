export function writeToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key, value){
    const data = localStorage.getItem(key);
    // If localStorage get value is null, JSON.parse will throw an error.
    if(data){
        const recoveredData = JSON.parse(data);
        recoveredData.forEach(item => {
            value.push(item);
        });
    }
}