var colorInput1 = document.getElementById("color1");
var colorInput2 = document.getElementById("color2");
var colorInput3 = document.getElementById("color3");
var hexInput1 = document.getElementById("hex1");
var hexInput2 = document.getElementById("hex2");
var hexInput3 = document.getElementById("hex3");

colorInput1.addEventListener("input", function () {
    hexInput1.value = colorInput1.value;                      //propojení mezi vyběrem barvy a výpis kódu barvy
});

hexInput1.addEventListener("input", function () {
    let val = hexInput1.value.trim();

    if (!val.startsWith("#")) {
        val = "#" + val;                                      //pokud nezačíná "#" doplní ho
    }

    if (val.length === 7) {
        colorInput1.value = val                             //kontroluje správný formát HEX kódu
    }
});

colorInput2.addEventListener("input", function () {
    hexInput2.value = colorInput2.value;
});

hexInput2.addEventListener("input", function () {
    let val = hexInput2.value.trim();

    if (!val.startsWith("#")) {
        val = "#" + val;
    }

    if (val.length === 7) {
        colorInput2.value = val
    }
});

colorInput3.addEventListener("input", function () {
    hexInput3.value = colorInput3.value;
});

hexInput3.addEventListener("input", function () {
    let val = hexInput3.value.trim();

    if (!val.startsWith("#")) {
        val = "#" + val;
    }

    if (val.length === 7) {
        colorInput3.value = val
    }
});

function pattern() {

    let color1 = colorInput1.value;
    let color2 = colorInput2.value;
    let color3 = colorInput3.value;

    const hex1 = document.getElementById("hex1").value.trim();
    const hex2 = document.getElementById("hex2").value.trim();
    const hex3 = document.getElementById("hex3").value.trim();


    const textSymbol = document.getElementById("text1").value;


    const patternContainer = document.getElementById("patternContainer");
    patternContainer.innerHTML = "";


    document.getElementsByTagName("body")[0].style.background = color3;     //barva pozadí 


    const rows = 50;                                                        //tvoří tabulku/grid podle které se budou opakovat symboly
    const columns = 550;
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let j = 0; j < columns; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.innerText = textSymbol;
            cellDiv.style.color = ((i+j) % 2 === 0) ? color1 : color2;    //variace barev
            rowDiv.appendChild(cellDiv);
        }
        patternContainer.appendChild(rowDiv);
    }

    var size = document.getElementById("size");
    var fontSize = size.value + "px"
    var cells = document.querySelectorAll(".pattern .cell")
    cells.forEach(function (cell) {
        cell.style.fontSize = fontSize;
    });


    var horizontal = document.getElementById("horizontal")
    var horizontal = horizontal.value + "px"
    var cells = document.querySelectorAll(".pattern .cell")
    cells.forEach(function (cell) {
        cell.style.marginRight = horizontal;
    });

    var vertical = document.getElementById("vertical")
    var vertical = vertical.value + "px"
    var cells = document.querySelectorAll(".pattern .cell")
    cells.forEach(function (cell) {
        cell.style.marginBottom = vertical;
    });


    var degree = document.getElementById("degree")
    var degree = degree.value + "deg"
    var cells = document.querySelectorAll(".pattern .cell")
    cells.forEach(function (cell) {
        cell.style.transform = "rotate(" + degree + ")";
    });

}

 

  function hide() {
            const menu = document.getElementById("menuContainer");
            const icon = document.getElementById("icon");

            menu.classList.toggle("hidden");

            if (menu.classList.contains("hidden")) {
                icon.textContent = "visibility_off"; 
            } else {
                icon.textContent = "visibility";       
            }
        }
