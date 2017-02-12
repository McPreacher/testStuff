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
	
	//tell the browser what to do when the mouse clicks the blocks on the grid//
	
	$('.grid').on('click', function() {
		$(this).css('background-color', gridColor);
	});
	$(document).on('click', '.grid', function() {
		$(this).css('background-color', gridColor);
	});
	
	//tell the browser to erase color when the mouse double clicks the blocks on the grid//
	
	$('grid').on('dblclick', function() {
		$(this).css('background-color', 'dimgray');
	});
	
	$(document).on('dblclick', '.grid', function() {
		$(this).css('background-color', 'dimgray');
	});
	
	//add some style to the buttons//
	
	//first create function buttonColor so that each individual button//
	//will go back to it's original color after being hovered over//
	
	var buttonColor = function(button, color) {
		$(button).hover(
			function() {
				$(this).css("background-color", "darkslategray");
			},
		
			function() {
				$(this).css("background-color", color);
			});
		}
	//call function buttonColor on each button//
		
	buttonColor('#blue', 'blue');
	buttonColor('#purple', 'purple');
	buttonColor('#red', 'red');
	buttonColor('#orange', 'orange');
	buttonColor('#black', 'black');
	buttonColor('#brown', 'saddlebrown');
	buttonColor('#yellow', 'yellow');
	buttonColor('#green', 'green');
	buttonColor('#pink', 'pink');
	buttonColor('#cyan', 'cyan');
	buttonColor('#white', '#ffffff');
	buttonColor('#lavender', 'lavender');
	buttonColor('#lime', 'lime');
	buttonColor('#tan', 'BurlyWood');
	buttonColor('#indigo', 'Indigo');

		
	
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
			$(this).css('background-color', 'saddlebrown');
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
	
	//lime//
	
	$('#lime').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'Lime');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'Lime');
		});
	});
	
	
	//tan//
	
	$('#tan').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'BurlyWood');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'BurlyWood');
		});
	});
	
	//indigo//
	
	$('#indigo').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', 'Indigo');
		});
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', 'Indigo');
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
