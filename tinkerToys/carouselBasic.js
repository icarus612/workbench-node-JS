
			anime({
				targets: ".bg",
				backgroundColor:
				[
					{
						value: ["#042B68", "#063F9A"],
						easing: "linear",
						duration: 2000,
						delay: 250

					},
					{
						value: ["#063F9A", "#03214F"],
						easing: "linear",
						duration: 2000,
						delay: 250

					},
					{
						value: ["#03214F", "#0749B3"],
						easing: "linear",
						duration: 2000,
						delay: 250

					},
					{
						value: ["#0749B3", "#042B68"],
						easing: "linear",
						duration: 2000,
						delay: 250

					},
				],
				loop: true,
			})

			anime({
				targets: ".carousel",
				backgroundColor: ["#C7E4FA", "#81C2F4"],
				loop: true,
				direction: "alternate",
				easing: "easeInCubic",
				duration: 2000,
				delay: 250
			})

			anime({
				targets: ".solutions",
				backgroundColor:
					{
						value: ["#E6F1FD", "#DEEFFC"],
						duration: 2000,
						delay: 120,
						easing: "linear",
					},
				color:
					{
						value: ["#666", "#999"],
						duration: 2000,
						delay: 120,
						easing: "linear",
					},
				direction: "alternate",
				loop: true,

			})


			let widthFunc = () => {
				return n == 0 ? (document.querySelector(".parent-element").offsetWidth > 992 ? 2 : 1) : n
			}

			let hideMe = (e, n) => {
				for (let i = 0; i < e.length; i++){
					i < n ? $(e[i]).show() : $(e[i]).hide()
				}
			}

			let makeCarousel = (wrapperClass, carouselClass, showNo) => {
				let carousel = [];

				$(`.${wrapperClass} > .${carouselClass}`)
					.each(i => {
						carousel.push($(`.${wrapperClass} > .${carouselClass}`)[i]); //add customers to stories array
						i++;
					});
				hideMe(carousel, showNo)
				return carousel
			}

			let putIn = (e, n) => {
				for (let i = 0; i < e.length; i++) {
					$(e[i]).css('order', i + 1)
				}
				hideMe(e, n)
			}

			let previousSlide = (e, n = 2) => {
				e.unshift(e[e.length-1])
				e.pop()
				putIn(e, n)
			}

			let nextSlide = (e, n = 2) => {
				e.push(e[0])
				e.shift()
				putIn(e, n)
			}

			let carousel1 = makeCarousel("carousel1", "story-box", widthFunc());
			let carousel2 = makeCarousel("carousel2", "story-box", widthFunc());
			let carousel3 = makeCarousel("carousel3", "story-box", widthFunc());
			let carouselsMade = [carousel1, carousel2, carousel3];
			window.onresize = () => {
				for (i = 0; i < carouselsMade.length; i++){
					hideMe(carouselsMade[i], widthFunc());
				}
			}


			let carouselLink = document.querySelectorAll(".carousel-link");
			let platformLink = document.querySelectorAll(".platform-link");

			let findMe = (e) => {
				for (let i = 0; i < e.length; i++) {
					e[i].onclick = () => {

						for (let j = 0; j < platformCarousel.length; j++) {
							let regCheck = new RegExp(`#${platformCarousel[j].id}`);
							if (regCheck.test(e[i].id)){
								let foundMe = document.querySelectorAll(".platform-img");
								for (let u = 0; u < foundMe.length; u++){
									foundMe[u].style.display = "none";
								}
								platformCarousel[j].style.display =  "block";
							}
						}
						marginMe();
					}
				}
			}
			findMe(carouselLink);
			findMe(platformLink);