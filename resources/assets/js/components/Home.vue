<template>
	<div class="template-wrapper home-template">
		<!-- <landing></landing> -->
		<!-- <div class="flexslider images-loaded">
			<ul class="slides">
				<li>
					<div>
						<img :src="'/img/gallery/charcoal/compressed/1.jpg'">
					</div>
				</li>
				<li>
					<div>
						<img :src="'/img/gallery/digital/compressed/6.jpg'">
					</div>
				</li>
				<li>
					<div>
						<img :src="'/img/gallery/digital/compressed/5.jpg'">
					</div>
				</li>
			</ul>
		</div> -->
		<gallery></gallery>
	</div>
</template>

<style type="text/css" scoped>
.flexslider {
	border: none;
	height: 100vh;
	width: 100%;
	margin-bottom: 0;
}
.flexslider .slides li div {
	height: 100vh;
	position: relative;
}

.flexslider .slides li div img {
	display: block;
	height: 100%;
	width: auto;
	margin: auto;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

/deep/ .flex-control-nav {
	height: 48px;
	width: 28px;
	margin-top: -24px;
	position: absolute;
	top: 50%;
	right: 0;
}
/deep/ .flex-control-nav li {
	clear: right;
	float: right;
	padding-bottom: 5px;
}
</style>

<script type="text/javascript" scoped>
	import Gallery from './Gallery.vue';

	export default {
		components: {
			'gallery': Gallery,
		},
		data() {
			return {
				currentSlide: null,
			}
		},
		methods: {
			imagesLoadedCallback() {
				var self = this;

				$('.flexslider').flexslider({
					animation: 'slide',
					direction: 'vertical',
					directionNav: false,
					pauseOnHover: true,
					after: function(slider){
						self.currentSlide = slider.currentSlide;
					},
				});
			}
		},
		mounted() {
			var self = this;
		}
	}
</script>