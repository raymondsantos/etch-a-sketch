// const containerDiv = document.querySelector("#container");
// let gridCount = 0;

// while (gridCount < 32) {
//     const gridDivs = document.createElement("div");
//     gridDivs.classList.add("content");
//     gridDivs.textContent = "HELLO!";
//     containerDiv.appendChild(gridDivs);
//     gridCount++;
//     console.log(gridCount);
// }

// function fillSquares() {
//     let squareFilled = document.querySelectorAll(".grid-item");
//     squareFilled.addEventListener("mouseover", () => {
//         squareFilled.style.backgroundColor = "black";
//         console.log(squareFilled);
//     })
// }

const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    // check for existing button to remove if played already
    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }

    // create the grid
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        
        // add event listener to check for background color presence
        square.addEventListener("mouseover", () => {
            // square.style.backgroundColor = "black";
        if (square.style.backgroundColor == "") {
            let color = getRandomColor();
            square.style.backgroundColor = color;
            square.style.opacity = ".10";
            return square.style.backgroundColor;
        }
        // apply additional opacity at 10% intervals, hard stop at 1.0 (100%) IF background color is ProgressEvent
        if ((square.style.backgroundColor !== "") && (square.style.opacity <= "0.90")) {
            square.style.opacity = parseFloat(square.style.opacity) + .10;
            return square.style.backgroundColor;
        }
        })
    }
    createButton();
    // fillSquares();
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    // buttonDiv.style.textAlign = "center";
    buttonDiv.appendChild(resetButton);

    //add event listener to button and prompt user/reser grid/throw error > 100
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side (Max: 100): ");
        if (userGridInput > 100) {
            alert("ERROR! You specified a grid size larger than the max of 100. ");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })

}


function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}


makeGrid(16 , 16);

// function makeRows(rows, columns) {
//     containerDiv.style.setProperty("--grid-rows", rows);
//     containerDiv.style.setProperty("--grid-columns", columns);
//     // console.log(containerDiv);
//     // console.log(rows);
//     // console.log(columns);
//     for (i=0; i < (rows * columns); i++) {
//         let square  = document.createElement("div");
//         // square.innerText = (i + 1);  // lablels squares, remove when not needed
//         containerDiv.appendChild(square).className = "grid-item";
//         square.addEventListener("mouseover", () => {
//             square.style.backgroundColor = "black";
//             console.log(square);
//         })
//     }
//     // fillSquares();
// }


// make initial call on page load as per project requirements


