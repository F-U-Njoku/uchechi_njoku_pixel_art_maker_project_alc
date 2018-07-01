
/*prvent default and call makeGrid function 
when gird size is submitted by a user*/

//Select grid size input, number of rows & colums
$(document).ready(() => {
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var rs = $('#inputHeight').val();
    var cs = $('#inputWeight').val();
      for (let i=1; i <=rs; i++) {
        $('table').append('<tr></tr>');
        for (let j=1;j <= cs; j++) {
          $('tr:last').append('<td></td>');
          $('td').attr("class", "cell");
        }
      }
      // Prevent defaults when size is put in
      grid.preventDefault();

      //Select colour when a user clicks on a colour 
      $('.cell').click((event) => {
        var colour = $('#colorPicker').val();
        $(event.target).css('background-color', colour);
      })


  });
});
