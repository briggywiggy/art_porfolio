<template>
	<div class="template-wrapper preloader-wrapper">
		<!-- Preloader -->
		<div class="preloader-overlay preloader-overlay-loader" v-if="showPreloader">
			<video autoplay muted id="preloaderVideo">
				<source :src="'/img/preloader/preloader.mp4'" type="video/mp4" />
			</video>
			<div class="progress-bar">
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br>
				{{progressBarWidth}}
			</div>
			<div class="landing">
				<div class="landing-title-wrapper">
					<h1 class="landing-title">
						MARIA&nbsp;<span>PATRICE</span>
					</h1>
					<p class="landing-subtitle"><span>Multimedia Artist</span><br>A personal online portfolio by <em>Maria Patrice Salvador</em></p>
					<div class="view-portfolio-btn" @click="browseGallery()">Browse Gallery</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript" scoped>
	import GalleryMixin from '../mixins/GalleryMixin.js';

	export default {
		mixins: [GalleryMixin],
		data() {
			return {
				showPreloader: false,
				progressBarWidth: 0,
			}
		},
		methods: {
			checkIfPageNotFound() {
				var self = this,
				link = (self.$router.resolve({
					name: self.$route.name,
				}));
				if(link.location.name == 'pagenotfound') {
					self.showPreloader = false;
				} else {
					self.showPreloader = true;
					self.initData();
					self.imagesLoaded($('.home-template'));
				}
			},
			imagesLoaded($element) {
				var self = this;

				var imgLoad = imagesloaded($element, function() {
					anime({
						targets: document.querySelector('.preloader-overlay-loader'),
						duration: 2000,
						delay: 2000,
						begin: function() {

							// $('.flexslider').flexslider({
							// 	animation: 'slide',
							// 	direction: 'vertical',
							// 	directionNav: false,
							// 	pauseOnHover: true,
							// 	after: function(slider){
							// 		self.currentSlide = slider.currentSlide;
							// 	},
							// });
							self.displayLandingTitle();

						},
						complete: function() {
							// $('.preloader-overlay-loader').removeClass('preloader-overlay-active');
						}
					});
				});

				imgLoad.on('progress', self.onProgress);
				imgLoad.on('always', self.onAlways);
			},
			onProgress(instance, image) {
				// var result = image.isLoaded ? 'loaded' : 'broken';
				// console.log('image is ' + result + ' for ' + image.img.src);
				var self = this;

				if(image.isLoaded) {
					$(image.img).addClass('loaded');
					var imgCount = $('.images-loaded img').length,
					loadedImgCount = $('.images-loaded img.loaded').length;
					self.progressBarWidth = Math.round(100 * (loadedImgCount/imgCount)) + '%';
					if(self.progressBarWidth == '100%') {
						$('.progress-bar').addClass('animated fadeOut');
					}
				}
			},
			onAlways(instance) {
			},
			displayLandingTitle() {
				$('.landing').addClass('landing-active');
				$('.landing-title').addClass('animated fadeInDown');
				$('.landing-subtitle').addClass('animated fadeInUp');
				$('.view-portfolio-btn').addClass('animated zoomIn');
			},
			initData() {
				var self = this;
				
				self.$store.state.DOM.rooms = [].slice.call(document.querySelector('.scroller').querySelectorAll('.room'));
				self.$store.state.DOM.content = document.querySelector('.content');
				self.$store.state.DOM.slides = [].slice.call(self.$store.state.DOM.content.querySelectorAll('.slides > .slide'));
				self.$store.state.currentRoom = 0;
				self.$store.state.totalRooms = (self.$store.state.DOM.rooms).length;
				self.$store.state.initTransform = { translateX : 0, translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 };
				self.$store.state.resetTransform = { translateX : 0, translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 };
				self.$store.state.menuTransform = { translateX : 0, translateY : '150%', translateZ : 0, rotateX : '15deg', rotateY : 0, rotateZ : 0 };
				self.$store.state.menuTransform = { translateX : 0, translateY : '50%', translateZ : 0, rotateX : '-10deg', rotateY : 0, rotateZ : 0 };
				self.$store.state.infoTransform = { translateX : 0, translateY : 0, translateZ : '200px', rotateX : '2deg', rotateY : 0, rotateZ : '4deg' };
				self.$store.state.initTransition = { speed: '0.9s', easing: 'ease' };
				self.$store.state.roomTransition = { speed: '0.4s', easing: 'ease' };
				self.$store.state.menuTransition = { speed: '1.5s', easing: 'cubic-bezier(0.2,1,0.3,1)' };
				self.$store.state.infoTransition = { speed: '15s', easing: 'cubic-bezier(0.3,1,0.3,1)' };
				self.$store.state.tiltTransition = { speed: '0.2s', easing: 'ease-out' };
				self.$store.state.tilt = false;
				self.$store.state.tiltRotation = { rotateX: 1, rotateY: -3 };
				self.$store.state.win = { width: window.innerWidth, height: window.innerHeight };

				self.$store.state.DOM.infoOverlay = document.querySelector('.overlay-info');
				self.$store.state.DOM.infoText = self.$store.state.DOM.infoOverlay.querySelector('.info');
				self.$store.state.DOM.menuOverlay = document.querySelector('.overlay-menu');
				self.$store.state.DOM.menuItems = self.$store.state.DOM.menuOverlay.querySelectorAll('.menu > .menu-item');
			},
			browseGallery() {
				var self = this;
				$('.landing-title-wrapper').addClass('animated fadeOutUp');
				$('#preloaderVideo').addClass('animated fadeOut');
				$('.preloader-overlay').addClass('preloader-overlay-active');
				setTimeout((function() {
					$('.preloader-overlay').addClass('animated fadeOut');
					$('.gallery-template').addClass('gallery-template-active');
					self.init();
				}), 1000);
			}
		},
		watch: {
			$route(to, from) {
				var self = this;
				self.checkIfPageNotFound();
			}
		},
		mounted() {
			var self = this;
			self.checkIfPageNotFound();
		},
	}
</script>

<style type="text/css" scoped>
#preloaderVideo {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%; 
	height: 100%;
}

.preloader-overlay {
	opacity: 1;
	pointer-events: auto;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 10;
	-webkit-transition: opacity 1s ease-in-out, background 0.1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-moz-transition: opacity 1s ease-in-out, background 0.1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-o-transition: opacity 1s ease-in-out, background 0.1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-ms-transition: opacity 1s ease-in-out, background 0.1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	transition: opacity 1s ease-in-out, background 0.1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
}
.preloader-overlay-loader {
	background: #e0e0e0;
}
.preloader-overlay-active {
	background: url('../../../../public/img/gallery/charcoal/compressed/5.jpg') center center no-repeat;
	background-size: contain;
	display: block;
	height: 138.8px;
	width: 107.61px;
	margin: auto;
	pointer-events: none;
}

/* Progress */
.progress-bar {
	background: transparent;
	color: darkslategray;
	display: block;
	font-family: varelaRound;
	font-weight: bold;
	margin: auto;
	position: absolute;
	text-align: center;
}

/* Landing */
.landing {
	height: 100%;
	width: 100%;
	opacity: 0;
	position: relative;
	transition: opacity 1s ease-in-out;
}
.landing-active {
	opacity: 1;
}
.landing-title-wrapper {
	margin: 0 auto;
	position: absolute;
	top: 10%;
	right: 0;
	left: 0;
	text-align: center;
}
.landing-title {
	color: #353535;
	font-family: varelaRound;
}
.landing-title span {
	color: #a1a9b0;
}
.landing-subtitle {
	color: #8c9398;
	font-family: varelaRound;
	letter-spacing: 1px;
}
.landing-subtitle span {
	text-transform: uppercase;
}
.view-portfolio-btn {
	background: rgba(61, 201, 179, 1);
	padding: 10px 20px;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-o-border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: inline-block;
	-webkit-box-shadow: 0px 3px 0px 0px #309383;
	-moz-box-shadow: 0px 3px 0px 0px #309383;
	box-shadow: 0px 3px 0px 0px #309383;
	font-weight: bold;
	cursor: pointer;
}
.view-portfolio-btn:hover {
	background: rgba(61, 201, 179, 0.6);
	color: #fff;
	outline: 0;
}
</style>