<template>
	<div class="template-wrapper landing-wrapper">
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
</template>

<style type="text/css" scoped>
.landing-wrapper {
	background: url('../../../../public/img/landing-bg.jpg') center center no-repeat;
	background-color: #E0E0E0;
	background-size: contain;
	height: 100vh;
	width: 100%;
	opacity: 0;
	position: absolute;
	z-index: 2;

	-webkit-transition: opacity 1s ease-in-out, background 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-moz-transition: opacity 1s ease-in-out, background 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-o-transition: opacity 1s ease-in-out, background 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	-ms-transition: opacity 1s ease-in-out, background 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
	transition: opacity 1s ease-in-out, background 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out, top 1s linear, right 1s linear, bottom 1s linear, left 1s linear;
}
.landing-wrapper-loaded {
	opacity: 1;
}
.landing {
	height: 100%;
	width: 100%;
	position: relative;
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
.landing-animated {
	background: url('../../../../public/img/gallery/charcoal/5.jpg') center center no-repeat;
	background-size: cover;
	display: block;
	height: 138.8px;
	width: 107.61px;
	margin: auto;
	pointer-events: none;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>

<script type="text/javascript" scoped>
	export default {
		methods: {
			browseGallery() {
				$('.landing-title-wrapper').addClass('animated fadeOutUp');
				$('.landing-wrapper').addClass('landing-animated');
				setTimeout((function() {
					$('.landing-wrapper').addClass('animated fadeOut');
					$('.gallery-template').addClass('gallery-template-loaded');
				}), 1000);
			}
		}
	}
</script>