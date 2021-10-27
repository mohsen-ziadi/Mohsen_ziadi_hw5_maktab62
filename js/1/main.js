function getMap() {
    let gameMap = "";
    for (let i = 0; i < 300; ++i) {
        gameMap += "*";
    }
    return gameMap;
}
let cars = [];

function Car(name, position) {
    this.name = name;
    this.position = position;
}
let numberOfcars = prompt("please enter the number of cars in the game");

for (let i = 0; i < numberOfcars; ++i) {
    cars.push(new Car(prompt("please enter the name of car"), 0));
}

function replaceAt(string, index, replacement) {
    let strArr = string.split("");
    strArr[index] = replacement;
    let resualt = strArr.join('');
    return resualt;
}

let gameMap = getMap();



function match() {
    let endPoint = true;

    function CurrentPosition(name, position) {
        this.name = name;
        this.position = position;
    }

    while (endPoint) {
        let positions = [];
        for (let i = 0; i < cars.length; ++i) {

            let step = Math.floor(Math.random() * 11);
            cars[i].position += step;
            positions.push(new CurrentPosition(cars[i].name, cars[i].position));

        }
        for (let i = positions.length - 1; i >= 0; --i) {
            for (let j = i - 1; j >= 0; --j) {
                if (positions[i].position === positions[j].position) {
                    for (let n = 0; n < cars.length; ++n) {
                        if (cars[n].name === positions[j].name) {
                            cars[n].position = 0;
                        }
                    }
                }
            }
        }

        cars = cars.sort((a, b) => {
            return a.position - b.position;
        })


        for (let i = 0; i < cars.length; ++i) {
            gameMap = replaceAt(gameMap, cars[i].position, cars[i].name);
            if (cars[i].position >= 300) {
                endPoint = false;
            }
        }
        console.log(positions);
        console.log(gameMap);
        gameMap = getMap();
        if (!endPoint) {
            console.log(cars[cars.length - 1].name + " win");
        }


    }


}
match();