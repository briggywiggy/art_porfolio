<template>
	<div class="template-wrapper">
		<preloader></preloader>
		<router-view class="router-view"></router-view>
	</div>
</template>

<style type="text/css">
html,
body {
	height: 100%;
}
@font-face {
	font-family: goodDogPlain;
	src: url(../../fonts/good_dog/GOODDP__.ttf);
}
@font-face {
	font-family: varelaRound;
	src: url(../../fonts/varela_round/VarelaRound-Regular.ttf);
}
@font-face {
	font-family: josefinSans;
	src: url(../../fonts/josefin_sans/JosefinSans-Regular.ttf);
}
</style>

<style type="text/css" scoped>
</style>

<script type="text/javascript" scoped>
	export default {
		watch: {
			$route(to, from) {
			}
		},
		mounted() {
		}
	}
</script>