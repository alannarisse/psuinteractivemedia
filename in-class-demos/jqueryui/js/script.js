$( document ).ready(function() {
	$( ".readtoggle" ).toggle( "blind" );
});

$( "#draggable" ).draggable();
$( "#droppable" ).droppable({
  drop: function() {
    alert( "dropped" );
  }
});

$('.readmore').click(function() {
  $( ".readtoggle" ).toggle( "blind" );
});

$( "#navmenu" ).selectable();

$("#sortable").sortable();

$('.bounceit').click(function() {
  $( "#toggle" ).toggle( "bounce", { times: 3 }, "slow" );
});
