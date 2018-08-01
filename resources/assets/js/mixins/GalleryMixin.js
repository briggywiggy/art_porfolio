export default {
	data() {
		return {
			showInfo: false,
			showMenu: false,
		}
	},
	methods: {
		move(opts) {
			var self = this;

			return new Promise(function(resolve, reject) {
				if(self.$store.state.isMoving && !opts.stopTransition) {
					return false;
				}

				self.$store.state.isMoving = true;

				if(opts.transition) {
					self.applyRoomTransition(opts.transition);
				}

				if(opts.transform) {
					self.applyRoomTransform(opts.transform);
					var onEndFn = function() {
						self.$store.state.isMoving = false;
						resolve();	
					};
					var onEndTransition = function(el, callback) {
						var onEndCallbackFn = function(ev) {
							this.removeEventListener('transitioned', onEndCallbackFn);
							if(callback && typeof callback === 'function') {
								callback.call();
							}
						};
						el.addEventListener('transitionend', onEndCallbackFn);
					};
					onEndTransition(document.querySelector('.scroller'), onEndFn);
				} else {
					resolve();
				}
			});
		},
		initTilt() {
			var self = this;

			self.applyRoomTransition(self.$store.state.tiltTransition);
			self.$store.state.tilt = true;
		},
		applyRoomTransition(transition) {
			document.querySelector('.scroller').style.transition = transition === 'none' ? transition : 'transform ' + transition.speed + ' ' + transition.easing;
		},
		applyRoomTransform(transform) {
			document.querySelector('.scroller').style.transform = 'translate3d(' + transform.translateX + ', ' + transform.translateY + ', ' + transform.translateZ + ') ' +
			'rotate3d(1,0,0,' + transform.rotateX + ') rotate3d(0,1,0,' + transform.rotateY + ') rotate3d(0,0,1,' + transform.rotateZ + ')';
		},
		initEvents() {
			var self = this;

			$('.gallery-template').mousemove(function(event) {
				requestAnimationFrame(function() {
					if(!self.$store.state.tilt || self.$store.state.offCanvas) {
						return false;
					}
					var currentMousePos = { x: -1, y: -1 };
					currentMousePos.x = event.pageX;
					currentMousePos.y = event.pageY;

					var rotX = self.$store.state.tiltRotation.rotateX ? self.$store.state.initTransform.rotateX -  (2 * self.$store.state.tiltRotation.rotateX / self.$store.state.win.height * currentMousePos.y - self.$store.state.tiltRotation.rotateX) : 0,
					rotY = self.$store.state.tiltRotation.rotateY ? self.$store.state.initTransform.rotateY -  (2 * self.$store.state.tiltRotation.rotateY / self.$store.state.win.width * currentMousePos.x - self.$store.state.tiltRotation.rotateY) : 0;
					self.applyRoomTransform({
						'translateX' : self.$store.state.initTransform.translateX, 
						'translateY' : self.$store.state.initTransform.translateY, 
						'translateZ' : self.$store.state.initTransform.translateZ, 
						'rotateX' : rotX + 'deg', 
						'rotateY' : rotY + 'deg',
						'rotateZ' : self.$store.state.initTransform.rotateZ
					});
				});
			})
		},

		navigate(nav) {
			var self = this;

			if(self.$store.state.isMoving || self.$store.state.isNavigating) {
				return false;
			}

			self.$store.state.isNavigating = true;

			var room = self.$store.state.DOM.rooms[self.$store.state.currentRoom];
			self.$store.state.tilt = false;
			self.toggleSlide('out');

			if(nav) {
				self.$store.state.currentRoom = self.$store.state.currentRoom < self.$store.state.totalRooms - 1 ? self.$store.state.currentRoom + 1 : 0;
			} else {
				self.$store.state.currentRoom = self.$store.state.currentRoom > 0 ? self.$store.state.currentRoom - 1 : self.$store.state.totalRooms - 1;
			}

			var nextRoom = self.$store.state.DOM.rooms[self.$store.state.currentRoom];
			nextRoom.style.transform = 'translate3d(' + (nav ? 100 : -100) + '%,0,0) translate3d(' + (nav ? 1 : -1) + 'px,0,0)' ;
			nextRoom.style.opacity = 1;

			self.move({transition: self.$store.state.roomTransition, transform: self.$store.state.resetTransform})
			.then(function() {
				return self.move({transform: { translateX : (nav ? -100 : 100) + '%', translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 }});
			})
			.then(function() {
				nextRoom.classList.add('room-current');
				room.classList.remove('room-current');
				room.style.opacity = 0;

				self.toggleSlide('in');

				return self.move({transform: { translateX : (nav ? -100 : 100) + '%', translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 }});
			})
			.then(function() {
				self.applyRoomTransition('none');
				nextRoom.style.transform = 'translate3d(0,0,0)';
				self.applyRoomTransform(self.$store.state.initTransform);

				setTimeout(function() {
					self.initTilt();
					self.$store.state.isNavigating = false;
				}, 60);
			});
		},

		init() {
			var self = this;
			self.move({ transition: self.$store.state.initTransition, transform: self.$store.state.initTransform }).then(function() {
				self.initTilt();
			})
			self.toggleSlide('in', 100);
			self.initEvents();
		},

		toggleSlide(dir, delay) {
			var self = this,
			slide = self.$store.state.DOM.slides[self.$store.state.currentRoom],
			name = slide.querySelector('.slide-name'),
			title = slide.querySelector('.slide-title'),
			date = slide.querySelector('.slide-date');

			delay = delay !== undefined ? delay : 0;

			anime.remove([name, title, date]);
			var animeOpts = {
				targets: [name, title, date],
				duration: dir === 'in' ? 400 : 400,
				delay: function(t, i, c) {
					return delay + 75 + i*75;
				},
				easing: [0.25, 0.1,0.25,1],
				opacity: {
					value: dir === 'in' ? [0,1] : [1,0],
					duration: dir === 'in' ? 550 : 250
				},
				translateY: function(t, i) {
					// return dir === 'in' ? [150,0] : [0,-150];
				}
			};

			if(dir === 'in') {
				animeOpts.begin = function() {
					slide.classList.add('slide-current');
				};
			} else {
				animeOpts.complete = function() {
					slide.classList.remove('slide-current');
				};
			}
			anime(animeOpts);
		},
		toggleInfo() {
			var self = this,
			photos = self.$store.state.DOM.rooms[self.$store.state.currentRoom].querySelectorAll('.room-img');
			if(self.$store.state.isNavigating) {
				return false;
			}
			if(!self.showInfo) {
				self.$store.state.tilt = false;
				self.toggleSlide('out');
				self.applyRoomTransition(self.$store.state.infoTransition)
				self.move({transform: self.$store.state.infoTransform, stopTransition: true});
				anime.remove(photos);
				anime({
					targets: photos,
					duration: function() {
						return anime.random(15000, 30000);
					},
					easing: [0.3,1,0.3,1],
					translateY: function() {
						return anime.random(-50,50);
					},
					rotateX: function() {
						return anime.random(-2,2);
					},
					rotateZ: function() {
						return anime.random(-5,5);
					},
					translateZ: function() {
						return [10,anime.random(50,self.$store.state.win.width/3)];
					}
				});
				anime.remove([self.$store.state.DOM.infoOverlay, self.$store.state.DOM.infoText]);
				var animeInfoOpts = {
					targets: [self.$store.state.DOM.infoOverlay, self.$store.state.DOM.infoText],
					duration: 1500,
					delay: function(t,i) {
						return !i ? 0 : 150;
					},
					easing: [0.25,0.1,0.25,1],
					opacity: [0,1],
					translateY: function(t,i) {
						return !i ? 0 : [30,0];
					},
					begin: function() {
						self.$store.state.DOM.infoOverlay.classList.add('overlay-active');
					}
				};
				anime(animeInfoOpts);
			} else {
				self.applyRoomTransition(self.$store.state.roomTransition);
				self.toggleSlide('in', 100);
				self.move({transform: self.$store.state.initTransform, stopTransition: true}).then(function() {
					self.initTilt();
				});
				anime.remove(photos);
				anime({
					targets: photos,
					duration: 400,
					easing: [0.3,1,0.3,1],
					translateY: 0,
					rotateX: 0,
					rotateZ: 0,
					translateZ: 10
				});
				anime.remove([self.$store.state.DOM.infoOverlay, self.$store.state.DOM.infoText]);
				var animeInfoOpts = {
					targets: [self.$store.state.DOM.infoOverlay, self.$store.state.DOM.infoText],
					duration: 400,
					easing: [0.25,0.1,0.25,1],
					opacity: [1,0],
					translateY: function(t,i) {
						return !i ? 0 : [0,30];
					},
					complete: function() {
						self.$store.state.DOM.infoOverlay.classList.remove('overlay-active');
					}
				};
				anime(animeInfoOpts);
			}
			self.showInfo = !self.showInfo;
		},
		toggleMenu() {
			var self = this;
			if(!self.showMenu) {
				self.$store.state.tilt = false;

				//Add adjacent rooms
				var room = self.$store.state.DOM.rooms[self.$store.state.currentRoom],
				nextRoom = self.$store.state.DOM.rooms[self.$store.state.currentRoom < self.$store.state.totalRooms - 1 ? self.$store.state.currentRoom + 1 : 0],
				prevRoom = self.$store.state.DOM.rooms[self.$store.state.currentRoom > 0 ? self.$store.state.currentRoom - 1 : self.$store.state.totalRooms - 1];

				nextRoom.style.transform = 'translate3d(100%,0,0) translate3d(3px,0,0)';
				nextRoom.style.opacity = 1;
				prevRoom.style.transform = 'translate3d(-100%,0,0) translate3d(-3px,0,0)';
				prevRoom.style.opacity = 1;
				//End

				self.toggleSlide('out');
				self.applyRoomTransition(self.$store.state.menuTransition);
				self.move({transform: self.$store.state.menuTransform, stopTransition: true});
				anime.remove(self.$store.state.DOM.menuItems);
				anime({
					targets: self.$store.state.DOM.menuItems,
					delay: function(t,i) {
						return 250+50*i;
					},
					translateY: [150, 0],
					opacity: {
						value: [0,1],
						duration: 200,
						easing: 'linear'
					},
					begin: function() {
						self.$store.state.DOM.menuOverlay.classList.add('overlay-active');
					}
				});
				anime.remove(self.$store.state.DOM.menuOverlay);
				anime({
					targets: self.$store.state.DOM.menuOverlay,
					duration: 1000,
					easing: [0.25,0.1,0.25,1],
					opacity: [0,1],
				});
			} else {
				self.applyRoomTransition(self.$store.state.roomTransition);
				self.toggleSlide('in', 150);
				self.move({transform: self.$store.state.initTransform, stopTransition: true}).then(function() {
					self.initTilt();
				});
				anime.remove(self.$store.state.DOM.menuItems);
				anime({
					targets: self.$store.state.DOM.menuItems,
					duration: 250,
					easing: [0.25,0.1,0.25,1],
					delay: function(t,i,c) {
						return 40*(c-i-1);
					},
					translateY: [0, 150],
					opacity: {
						value: [1,0],
						duration: 250
					},
					complete: function() {
						self.$store.state.DOM.menuOverlay.classList.remove('overlay-active');
					}
				});
				anime.remove(self.$store.state.DOM.menuOverlay);
				anime({
					targets: self.$store.state.DOM.menuOverlay,
					duration: 400,
					easing: [0.25,0.1,0.25,1],
					opacity: [1,0],
				});
			}
			self.showMenu = !self.showMenu;
		}
	}
}