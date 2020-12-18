window.addEventListener('load', function(){
	
	new Glider(document.querySelector('.carousel__lista__novedades'), {
		slidesToShow: 1,
		dots: '.carousel__indicadores__novedades',
		arrows: {
			prev: '.carousel__anterior__nov',
			next: '.carousel__siguiente__nov'
		},
		
	});
	
	new Glider(document.querySelector('.carousel__lista__bordados'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores__bordados',
		arrows: {
			prev: '.carousel__anterior__bordados',
			next: '.carousel__siguiente__bordados'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
	new Glider(document.querySelector('.carousel__lista__ojotas'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores__ojotas',
		arrows: {
			prev: '.carousel__anterior__ojotas',
			next: '.carousel__siguiente__ojotas'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
	new Glider(document.querySelector('.carousel__lista__viejo'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores__viejo',
		arrows: {
			prev: '.carousel__anterior__viejo',
			next: '.carousel__siguiente__viejo'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

