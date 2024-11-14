
import {origin} from "./helpers/helpers.js"

const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const {w, h} = bannerSize



function init(end=1.3){	
	const tl = new TimelineMax({onComplete:()=>{}})
	tl.set(".frame1", {opacity:1})
	const SCALE = 20/250
	const Y = Math.max(SCALE * h, 8)
	
	const obj = {duration:.35, opacity:0, y:`+=${Y}`}

	tl.from(".t1a", {...obj}, "+=.3")
	tl.from(".t1b", {...obj})
	tl.from(".t1c", {...obj})

	tl.from(".t2", {duration:.5, opacity:0}, end)

	return tl
}



export { init,  bannerSize}