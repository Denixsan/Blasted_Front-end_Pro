if (confirm(`Welcome! Here we convert time to seconds. Do you wish to continue?`)) {
    let intro = prompt(`What do you wish to do? \n1. Convert time to seconds. \n2. Convert current date & time to seconds.`);
    if (intro == 1) {
        let h = prompt(`Type hours.`);
        let min = prompt(`Type minutes.`);
        let sec = prompt(`Type seconds.`);
        h = parseInt(h);
        min = parseInt(min);
        sec = parseInt(sec);
        if (isNaN(h) || isNaN(min) || isNaN(sec)) {
            if (confirm(`One of your inputs is not correct. Please try again.`)) {
                window.location.reload();
            }
            else {
                alert(`OK. See ya.`)
                window.close();
            }
        }
        else {
            alert((h * 3600) + (min * 60) + sec + ` seconds.`);
            window.location.reload();
        }
    }
    else if (intro == 2) {
        alert(Date.now() + ` seconds.`)
        window.location.reload();
    }
    else if (intro == null) {
        if (confirm(`Do you wish to quit?`)) {
            alert(`OK. See ya.`);
            window.close();
        }
        else {
            window.location.reload();
        }
    }
    else {
        if (confirm(`Type '1' or '2' or just cancel if you wish to quit. Try again?`)) {
            window.location.reload();
        }
        else {
            alert (`OK. See ya.`);
            window.close();
        }
    }
}
else {
    alert(`OK. See ya.`);
    window.close();
}