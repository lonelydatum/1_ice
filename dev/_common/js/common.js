
import {origin} from "./helpers/helpers.js"

const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const {w, h} = bannerSize





function init({total, w, h}){

	w = w/2
	h = h/2

	

	


	const obj = {duration:1, rotationX:-180, ease:"back.out"}
	
	const tl = new TimelineMax({})


	tl.add("all", "+=2.2")


	for(let i=0;i<total;i++){
		const wrap = `#wrap${i+1}`  	  	
		
		TweenLite.set(".card", {transformOrigin:`0 ${h/2}px`});	   
		TweenLite.set([wrap, `.cardFace`], { width:w, height:h});	   


		const time = i*.15
		tl.to(`#wrap${i+1} .card`,{...obj}, `all+=${time}`)
	}




}


export { init,  bannerSize}