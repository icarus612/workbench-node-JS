
        let locate = document.querySelectorAll(".throbber-inner"),
            startX = () => (document.querySelector("#dot-outer").offsetWidth - document.querySelector("#dot-start").offsetWidth)/2 +85,
            stage = document.querySelector("#stage"),
            fullHeight = () => stage.offsetHeight,
            fullWidth = () => stage.offsetWidth,
            startY = () => fullHeight()/2-5,
            endY = (e) => steps[e].offsetHeight/2+8,
            endX = (e) => steps[e].offsetWidth+85,
            steps = [];
        for (let i = 0; i < stage.childNodes.length; i++){
            let check = new RegExp("step");
            let x = `${stage.childNodes[i].className}`
            if (check.test(x)) steps.push(stage.childNodes[i])
        }

        let animate = () =>{
            let animation = anime.timeline({
                easing: "easeInOutCubic",
                complete: function(anim) {
                    animate()
                }
            }).add({
                targets: ".animated-dot",
                translateY: [0, startY()],
                translateX: [startX(), startX()],
                duration: 1000,
                easing: "easeOutCubic",
            }).add({
                targets: ".mv-1",
                translateX: [startX(), (startX() + fullWidth() - endX(0))],
                translateY: [startY(), endY(0)],
                duration: 600,
                easing: "easeOutCubic"
            }).add({
                targets: ".mv-3",
                translateY: [
                    {value: [startY(), (startY() * 2 - endY(2))]},
                    {value: [(startY() * 2 - endY(2)), endY(0)]},
                    {value: [endY(0), startY()]}
                ],
                translateX: { value: [startX(), (startX() + fullWidth() - endX(1))], easing: "linear",},
                duration: 1300,
                delay: 100
            }).add({
                targets: ".mv-2",
                translateX: [
                    {
                        value: [startX(), (startX() + (fullWidth() - endX(2))/3)],
                        duration: 500,
                        easing: "linear"
                    },
                    {
                        value: [(startX() + (fullWidth() - endX(2))/3), (startX() + fullWidth() - endX(2))],
                        duration: 910,
                        easing: "linear"
                    },
                ],
                translateY: [
                    {
                        value: [startY(), (startY()*2 - endY(2))],
                        duration: 500,
                        easing: "easeInQuad"
                    },
                    {
                        value: [(startY()*2 - endY(2)), startY()],
                        duration: 450,
                        easing: "easeOutCirc"
                    },
                    {
                        value: [startY(), (startY()*2 - endY(2))],
                        duration: 450,
                        easing: "easeInCirc"
                    },
                ],
                borderRadius: {
                    value: ["50%", "0px"],
                    delay: 450,
                    duration: 100
                },
                rotateZ: {
                    value: [0, 700],
                    delay: 500,
                    duration: 800,
                    easing: "easeInOutCirc"
                },

            })
            return animation
        }
        animate()
