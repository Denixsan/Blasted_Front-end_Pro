let userAge = prompt(`Type your age.`);
let userCity = prompt(`Type your city.`);
let userSport = prompt(`Type your favorite sport activity.`);
userAge == parseInt(userAge);
switch (userAge) {
    case null:
    case ``:
        if (confirm(`Shame you didn't want to type your age. Try again?`)) {
            window.location.reload();
        }
        else {
            alert(`OK. Bye.`);
            window.close();
        }
break;
default:
    switch (userSport) {
        case `football`:
        case `Football`:
            switch (userCity) {
                case `london`:
                case `London`:
                    alert(`You're ` + userAge + ` years old. \nLondon is the capital of Great Britain. \nGreat! Another person wants to be like Lionel Messi or Cristiano Ronaldo.`);
                break;
                case `washington`:
                case `Washington`:
                case `washington dc`:
                case `Washington DC`:
                    alert(`You're ` + userAge + ` years old. \nI like Burger King! Make America great again! \nGreat! Another person wants to be like Lionel Messi or Cristiano Ronaldo.`);
                break;
                case `Kiev`:
                case `kiev`:
                case `Kyiv`:
                case `kyiv`:
                    alert(`You're ` + userAge + ` years old. \nSlava Ukraini and other crap. \nGreat! Another person wants to be like Lionel Messi or Cristiano Ronaldo.`);
                break;
                case null:
                case ``:
                    if (confirm(`Shame you didn't want to type your city. Try again?`)) {
                        window.location.reload();
                    }
                    else {
                        alert(`OK. Bye.`);
                        window.close();
                    } 
                break; 
            }
        break;
        case `volleyball`:
        case `Volleyball`:
            switch (userCity) {
                case `london`:
                case `London`:
                    alert(`You're ` + userAge + ` years old. \nLondon is the capital of Great Britain. \nYou really think you'll be like Lorenzo Bernardi?`);
                break;
                case `washington`:
                case `Washington`:
                case `washington dc`:
                case `Washington DC`:
                    alert(`You're ` + userAge + ` years old. \nI like Burger King! Make America great again! \nYou really think you'll be like Lorenzo Bernardi?`);
                break;
                case `Kiev`:
                case `kiev`:
                case `Kyiv`:
                case `kyiv`:
                    alert(`You're ` + userAge + ` years old. \nSlava Ukraini and other crap. \nYou really think you'll be like Lorenzo Bernardi?`);  
                break;
                case null:
                case ``:
                    if (confirm(`Shame you didn't want to type your city. Try again?`)) {
                        window.location.reload();
                    }
                    else {
                        alert(`OK. Bye.`);
                        window.close();
                    }
                break; 
            }
        break;
        case `basketball`:
        case `Basketball`:
            switch (userCity) {
                case `london`:
                case `London`:
                    alert(`You're ` + userAge + ` years old. \nLondon is the capital of Great Britain. \nWho's your president? UUUGH... MICHAEL JORDAN.`);
                break;
                case `washington`:
                case `Washington`:
                case `washington dc`:
                case `Washington DC`:
                    alert(`You're ` + userAge + ` years old. \nI like Burger King! Make America great again! \nWho's your president? UUUGH... MICHAEL JORDAN.`);
                break;
                case `Kiev`:
                case `kiev`:
                case `Kyiv`:
                case `kyiv`:
                    alert(`You're ` + userAge + ` years old. \nSlava Ukraini and other crap. \nWho's your president? UUUGH... MICHAEL JORDAN.`);
                case null:
                case ``:
                    if (confirm(`Shame you didn't want to type your city. Try again?`)) {
                        window.location.reload();
                    }
                    else {
                        alert(`OK. Bye.`);
                        window.close();
                    }
                break; 
            }
        break;
        case null:
        case ``:
            if (confirm(`Shame you didn't want to type your sport activity. Try again?`)) {
                window.location.reload();
            }
            else {
                alert(`OK. Bye.`);
                window.close();
            }
        default:
            switch (userCity) {
                case `london`:
                case `London`:
                    alert(`You're ` + userAge + ` years old. \nLondon is the capital of Great Britain. \nYour favorite sport activity is ` + userSport + `.`);
                break;
                case `washington`:
                case `Washington`:
                case `washington dc`:
                case `Washington DC`:
                    alert(`You're ` + userAge + ` years old. \nI like Burger King! Make America great again! \nYour favorite sport activity is ` + userSport + `.`);
                break;
                case `Kiev`:
                case `kiev`:
                case `Kyiv`:
                case `kyiv`:
                    alert(`You're ` + userAge + ` years old. \nSlava Ukraini and other crap. \nYour favorite sport activity is ` + userSport + `.`);
                break;
                case null:
                case ``:
                    if (confirm(`Shame you didn't want to type your city. Try again?`)) {
                        window.location.reload();
                    }
                    else {
                        alert(`OK. Bye.`);
                        window.close();
                    }
                break;   
            }
    }
}