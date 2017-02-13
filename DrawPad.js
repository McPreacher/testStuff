
//DrawPad.js//


//declare gridColor and eraseToBackground//
var gridColor = 'red';
var eraseToBackground = 'dimgray';


//creates the original grid on the page//
var createGrid = function() {
	for(var x = 0; x < 16; x++) {  
		for(var y = 0; y < 16; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
		}
		
	}

};

//gives user option to customize the drawing grid//

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
		$(this).css('background-color', eraseToBackground);
	});
	
	$(document).on('dblclick', '.grid', function() {
		$(this).css('background-color', eraseToBackground);
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

	//control buttons activity//	
	
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
	
	var btnColorControl = function(button, color) {
		$(button).click(function() {
			$('.grid').on('click', function() {
				$(this).css('background-color', color);
			});
		
			$(document).on('click', '.grid', function() {
				$(this).css('background-color', color);
			});
	
		});
		
	};
	
	btnColorControl('#blue', 'blue');
	btnColorControl('#purple', 'purple');
	btnColorControl('#red', 'red');
	btnColorControl('#orange', 'orange');
	btnColorControl('#black', 'black');
	btnColorControl('#brown', 'saddlebrown');
	btnColorControl('#yellow', 'yellow');
	btnColorControl('#green', 'green');
	btnColorControl('#pink', 'pink');
	btnColorControl('#cyan', 'cyan');
	btnColorControl('#white', '#ffffff');
	btnColorControl('#lavender', 'lavender');
	btnColorControl('#lime', 'Lime');
	btnColorControl('#tan', 'BurlyWood');
	btnColorControl('#indigo', 'Indigo');
	
	//changes grid background//
	var gridBackGround = function() {
		
		
		$('#gridoriginal').on('click', function() {
			$('#container').empty();
			createGrid();
			$('.grid').css('background-color', 'dimgray');
			eraseToBackground = 'dimgray';
		});
		
		$('#gridwhite').on('click', function() {
			$('#container').empty();
			createGrid();
			$('.grid').css('background-color', '#ffffff');
			eraseToBackground = '#ffffff';
		});
		
		$('#gridblack').on('click', function() {
			$('#container').empty();
			createGrid();
			$('.grid').css('background-color', 'black');
			eraseToBackground = 'black';
		});
		
		$('#gridpostit').on('click', function() {
			$('#container').empty();
			createGrid();
			$('.grid').css('background-color', '#fcee92');
			eraseToBackground = '#fcee92';
		});
		
		$('#gridsky').on('click', function() {
			$('#container').empty();
			createGrid();
			$('.grid').css('background-color', '#92ccfc');
			eraseToBackground = '#92ccfc';
		});
		
		return eraseToBackground;
	};
		
	gridBackGround();

	
	//actual erase button for bigger corrections//
	$('#erase').click(function() {
		$('.grid').on('click', function() {
			$(this).css('background-color', eraseToBackground);
		});
		
		$(document).on('click', '.grid', function() {
			$(this).css('background-color', eraseToBackground);
		});
	});
});

