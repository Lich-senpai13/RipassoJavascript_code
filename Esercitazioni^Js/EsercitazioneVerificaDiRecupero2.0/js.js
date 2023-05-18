btn2.onclick = function () {
    kmArray.sort((a, b) => {
    let nameA = a.meteo.toUpperCase();
    let nameB = b.meteo.toUpperCase();
    if (nameA < nameB) {
    return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
    });
    console.log(kmArray)
};