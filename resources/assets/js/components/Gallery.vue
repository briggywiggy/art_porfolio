<template>
	<div class="template-wrapper gallery-template">
		<div class="room-container">
			<div class="scroller images-loaded">
				<div class="room room-current">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/charcoal/compressed/' + b + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal/compressed/' + b + '.jpg'" v-for="b in range(1,3)" v-if="a == 1">
						<img :src="'/img/gallery/charcoal/compressed/' + c + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal/compressed/' + c + '.jpg'" v-for="c in range(4,6)" v-if="a == 2">
						<img :src="'/img/gallery/charcoal/compressed/' + d + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal/compressed/' + d + '.jpg'" v-for="d in range(7,9)" v-if="a == 3">
					</div>
				</div>
				<!-- <div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/charcoal-1/compressed/' + b + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal-1/compressed/' + b + '.jpg'" v-for="b in range(1,3)" v-if="a == 1">
						<img :src="'/img/gallery/charcoal-1/compressed/' + c + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal-1/compressed/' + c + '.jpg'" v-for="c in range(4,5)" v-if="a == 2">
						<img :src="'/img/gallery/charcoal-1/compressed/' + d + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/charcoal-1/compressed/' + d + '.jpg'" v-for="d in range(6,8)" v-if="a == 3">
					</div>
				</div> -->
				<div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/digital/compressed/' + b + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/digital/compressed/' + b + '.jpg'" v-for="b in range(1,2)" v-if="a == 1">
						<img :src="'/img/gallery/digital/compressed/' + c + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/digital/compressed/' + c + '.jpg'" v-for="c in range(3,4)" v-if="a == 2">
						<img :src="'/img/gallery/digital/compressed/' + d + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/digital/compressed/' + d + '.jpg'" v-for="d in range(5,6)" v-if="a == 3">
					</div>
				</div>
				<div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/storyboard/compressed/' + b + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/storyboard/compressed/' + b + '.jpg'" v-for="b in range(1,2)" v-if="a == 1">
						<img :src="'/img/gallery/storyboard/compressed/' + c + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/storyboard/compressed/' + c + '.jpg'" v-for="c in range(3,3)" v-if="a == 2">
						<img :src="'/img/gallery/storyboard/compressed/' + d + '.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/storyboard/compressed/' + d + '.jpg'" v-for="d in range(4,5)" v-if="a == 3">
					</div>
				</div>
				<div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/cliparts/compressed/' + b + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts/compressed/' + b + '.png'" v-for="b in range(1,3)" v-if="a == 1">
						<img :src="'/img/gallery/cliparts/compressed/' + c + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts/compressed/' + c + '.png'" v-for="c in range(4,6)" v-if="a == 2">
						<img :src="'/img/gallery/cliparts/compressed/' + d + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts/compressed/' + d + '.png'" v-for="d in range(7,9)" v-if="a == 3">
						<!-- <img :src="'/img/gallery/cliparts/compressed/10.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts/10.png'" v-if="a == 4"> -->
					</div>
				</div>
				<div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/cliparts-1/compressed/' + b + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-1/compressed/' + b + '.png'" v-for="b in range(1,3)" v-if="a == 1">
						<img :src="'/img/gallery/cliparts-1/compressed/' + c + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-1/compressed/' + c + '.png'" v-for="c in range(4,6)" v-if="a == 2">
						<img :src="'/img/gallery/cliparts-1/compressed/' + d + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-1/compressed/' + d + '.png'" v-for="d in range(7,9)" v-if="a == 3">
					</div>
				</div>
				<div class="room">
					<div v-for="a in 4" class="room-side" :class="getRoomSide(a)">
						<img :src="'/img/gallery/cliparts-2/compressed/' + b + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-2/compressed/' + b + '.png'" v-for="b in range(1,3)" v-if="a == 1">
						<img :src="'/img/gallery/cliparts-2/compressed/' + c + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-2/compressed/' + c + '.png'" v-for="c in range(4,6)" v-if="a == 2">
						<img :src="'/img/gallery/cliparts-2/compressed/' + d + '.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-2/compressed/' + d + '.png'" v-for="d in range(7,9)" v-if="a == 3">
						<img :src="'/img/gallery/cliparts-2/compressed/10.png'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/gallery/cliparts-2/compressed/10.png'" v-if="a == 4">
					</div>
				</div>
			</div>
		</div>

		<div class="menu-btn" @click="toggleMenu()" :class="{'btn-active' : showMenu}">
			<i class="fa fa-bars fa-2x" aria-hidden="true" v-if="!showMenu"></i>
			<i class="fa fa-times-circle fa-2x" aria-hidden="true" v-else></i>
		</div>
		<div class="info-btn" @click="toggleInfo()" :class="{'btn-active' : showInfo}">
			<i class="fa fa-info-circle fa-2x" aria-hidden="true" v-if="!showInfo"></i>
			<i class="fa fa-times-circle fa-2x" aria-hidden="true" v-else></i>
		</div>

		<div class="content">
			<div class="overlay overlay-menu">
				<ul class="menu">
					<li class="menu-item menu-item-current"><a class="menu-link" href="#">Gallery</a></li>
					<li class="menu-item"><a href="mailto:mariapatrice.s@gmail.com?Subject=Website" target="_top" class="menu-link">Contact</a></li>
				</ul>
			</div>
			<div class="overlay overlay-info">
				<p class="info">This is the personal online portfolio of Ma. Patrice Salvador. Most of the work showcased here were commissioned work for clients, who solely own the rights to these materials.</p>
			</div>
			<h4 class="location"> &copy; 2018 Ma. Patrice Salvador, All Rights Reserved</h4>
			<div class="slides">
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Charcoal</strong>&nbsp;Room</div>
					</h3>
					<p class="slide-date">Charcoal on paper</p>
				</div>
				<!-- <div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Oil</strong>&nbsp;Room</div>
					</h3>
					<p class="slide-date">Oil on canvas</p>
				</div> -->
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Digital</strong>&nbsp;Room</div>
					</h3>
					<p class="slide-date">Adobe Illustrator/Photoshop</p>
				</div>
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Storyboard</strong>&nbsp;Room</div>
					</h3>
					<p class="slide-date">Adobe Illustrator/Photoshop</p>
				</div>
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Cliparts</strong>&nbsp;Room 1</div>
					</h3>
					<p class="slide-date">Adobe Illustrator/Photoshop</p>
				</div>
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Cliparts</strong>&nbsp;Room 2</div>
					</h3>
					<p class="slide-date">Adobe Illustrator/Photoshop</p>
				</div>
				<div class="slide">
					<h2 class="slide-name">Lorem Ipsum</h2>
					<h3 class="slide-title">
						<span>Lorem Ipsum</span>
						<div class="slide-number"><strong>Cliparts</strong>&nbsp;Room 3</div>
					</h3>
					<p class="slide-date">Adobe Illustrator/Photoshop</p>
				</div>
			</div>
			<nav class="nav">
				<button class="btn-nav btn-nav-left" @click="navigate(0)">
					<svg class="nav-icon nav-icon-left" width="42px" height="12px" viewBox="0 0 70 20">
						<path class="nav-triangle" d="M52.5,10L70,0v20L52.5,10z"/>
						<path class="nav-line" d="M55.1,11.4H0V8.6h55.1V11.4z"/>
					</svg>
				</button>
				<button class="btn-nav btn-nav-right" @click="navigate(1)">
					<svg class="nav-icon nav-icon-right" width="42px" height="12px" viewBox="0 0 70 20">
						<path class="nav-triangle" d="M52.5,10L70,0v20L52.5,10z"/>
						<path class="nav-line" d="M55.1,11.4H0V8.6h55.1V11.4z"/>
					</svg>
				</button>
			</nav>
		</div>
		
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<img :src="modalImg" class="modal-img">
			</div>
		</div>
	</div>
</template>

<style type="text/css" src="./css/gallery.css" scoped></style>

<script type="text/javascript" scoped>
	import GalleryMixin from '../mixins/GalleryMixin.js'

	export default {
		mixins: [GalleryMixin],
		data() {
			return {
				modalImg: null,
			}
		},
		methods: {
			getRoomSide($n) {
				switch($n) {
					case 1:
					return 'room-side-left';
					break;

					case 2:
					return 'room-side-back';
					break;

					case 3:
					return 'room-side-right';
					break;

					default:
					return 'room-side-bottom';
					break;
				}
			},
			range : function (start, end) {
				return Array(end - start + 1).fill().map((_, idx) => start + idx)
			}
		}
	}
</script>