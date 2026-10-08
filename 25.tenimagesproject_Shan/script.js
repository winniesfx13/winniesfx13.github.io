// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
	{ src: 'images/IMG_0732.jpeg', 
	  alt: 'first',
	  caption: 'Your fate is your mind...'
	},
	{ src: 'images/IMG_1909.jpeg', 
	  alt: 'second',
	  caption: 'Where am I supposed to be?'
	},
	{ src: 'images/IMG_0786.jpeg', 
	  alt: 'third',
	  caption: 'Do you dare the possible?'
	},
	 {src: 'images/IMG_0054.jpeg', 
	  alt: 'fourth',
	  caption: 'Reset yourself.'
	},
	{ src: 'images/IMG_8840.jpeg', 
	  alt: 'fifth',
	  caption: 'Who am I supposed to be?'
	},
	{ src: 'images/IMG_2876.jpeg', 
	  alt: 'sixth',
	  caption: 'What is truly yours?'
	},
	{ src: 'images/IMG_0674.JPG', 
	  alt: 'seventh',
	  caption: 'Whatever you make of it and find...'
	},
	{ src: 'images/IMG_0549.jpg', 
	  alt: 'eighth',
	  caption: 'comes reward and prosper.'
	},
	{ src: 'images/IMG_3031.JPG', 
	  alt: 'ninth',
	  caption: 'Whatever you found before is lost...'
	},
	{ src: 'images/IMG_0205.jpg', 
	  alt: 'tenth',
	  caption: 'lost in what you created.'
	}
	];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption;
}

// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);