//DrawPad.js//


//declare gridColor//
var gridColor = 'crimson';


//creates the original grid on the page//
var createGrid = function() {
	for(var x = 0; x < 16; x++) {  
		for(var y = 0; y < 16; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
		}
		
	}
	
};
var customGrid = function() {
	var num = prompt("How many squares for your grid?");
	for(var x = 0; x < num; x++) {
		for(var y = 0; y < num; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
			var blockSize = (576/num) - 1;
			$grid.css("height", blockSize);
			$grid.css("width", blockSize);
			$grid.css("margin", "0.5px");
		}
	}
};
	
	
	

			
//get the document ready and set up the drawing grid//

$(document).ready(function() {
	createGrid();
	
	//tell the browser what to do when the mouse touches the blocks on the grid//
	
	$('.grid').on('click', function() {
		$(this).css('background-color', gridColor);
	});
	$(document).on('click', '.grid', function() {
		$(this).css('background-color', gridColor);
	});
	
	//add some style to the buttons//
	
	$('.buttons').hover(
		function() {
			$(this).css("background-color", "darkslategray");
		},
		
		function() {
			$(this).css("background-color", "white");
		});
		
	
	$('.control').hover(
		function() {
			$(this).css("background-color", "darkslategray");
		},
		
		function() {
			$(this).css("background-color", "lightslategray");
		});
	
	
	



	
	//Control what happens when the clear sketch button is pressed//
	
	$('#clear').click(function() {
		
		$('#container').empty();
		createGrid();
	});
	
	//Control what happens when the custom sketchpad button is pressed//
	
	$('#custom').click(function() {
		$('#container').empty();
		customGrid();
	});
	
	
	
	//Control what happens when the color buttons are pressed//
	
	//blue//
	
	$('#blue').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'blue');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'blue');
		});
	
	});
	
	//purple//
	
	$('#purple').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'purple');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'purple');
		});
	
	});

	//red//
	
	$('#red').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'red');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'red');
		});
	
	});
	
	//Orange//
	
	$('#orange').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'orange');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'orange');
		});
	});
	
	//black//
	
	$('#black').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'black');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'black');
		});
	});
	
	//brown//
	
	$('#brown').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'brown');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'saddlebrown');
		});
	});
	
	//yellow//
	
	$('#yellow').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'yellow');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'yellow');
		});
	});
	
	//green//
	
	$('#green').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'green');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'green');
		});
	});
	
	//pink//
	
	$('#pink').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'pink');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'pink');
		});
	});
	
	//cyan//
	
	$('#cyan').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'cyan');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'cyan');
		});
	});
	
	//White//
	
	$('#white').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', '#ffffff');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', '#ffffff');
		});
	});
	
	//lavender//
	
	$('#lavender').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'lavender');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'lavender');
		});
	});
	
	
	
	
	
	
	//sets the color of a given block back to default//
	
	$('#erase').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'dimgray');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'dimgray');
		});
	});
});
