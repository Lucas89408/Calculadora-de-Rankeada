function calculateLevels(wins, losses){
    const balance = wins - losses;
    let level;

    switch(true){
        case(wins <10):
            level = "Iron";
            break;
        case(wins >=11 && wins <=20):
            level = "Bronze";
            break;
        case(wins >=21 && wins <=50):
            level = "Silver";
            break;
        case(wins >=51 && wins <=80):
            level = "Gold";
            break;
        case(wins >=81 && wins <=90):
            level = "Diamond";
            break;
        case(iwins >=91 && wins <=100):
            level = "Legendary";
            break;
        default:
            level = "Immortal";
    }

    return{balance, level};
}

const win = parseInt(prompt("Report hte numbers of wins:"));
const loss = parseInt(prompt("Report hte numbers of defeats:"));

const{balance, level} = calculateLevels(win, loss);
console.log(`The hero has a balance of ${balance} and is at a level ${level}`);





