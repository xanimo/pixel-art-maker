// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

makeGrid = (height, width) => {
  let table = $('#pixelCanvas');
  let grid = '';
  
  // loop each grid row
  for (let i = 0; i < height; i++) {
    grid += '<tr class="row-' + i + '">';
    // loop each cell
    for (let j = 0; j < width; j++) {
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }
  // set table html
  table.html(grid);
  // add click event to cells
  addClickToCells();
}

// sets height & width
formSubmission = () => {
  event.preventDefault();
  let height = $('#inputHeight').val();
  let width = $('#inputWeight').val();
  makeGrid(height, width);
}

// add click event to all cells
addClickToCells = () => {
  let cells = $('.cell');
  for (let i = 0; i < cells.length; i++) {
  	let cell = cells[i];
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// return color on selected color
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; // sets color to defaul(black);
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

// on form submit 'sizePicker'
$('#sizePicker').on('click', function() {
  formSubmission();
});

// build a default 10x10 grid
makeGrid(10, 10);