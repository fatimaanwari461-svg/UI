
import { img1,img2,img3,img4 } from "../../assets/image"

export default function UI() {
  return (
    <div>
      <div className="h-200 bg-[url('/src/assets/omid.jpeg')] bg-cover bg-center blur-xs relative object-cover "></div>
<div className="  ">
<img src={img1} alt="" className="rounded-2xl w-270 h-150 absolute left-22 top-25 border border-white text-white border-2 blur-none object-cover " />
<div className="flex justify-between gap-50 absolute top-30">
   
<div className="">
<img src={img2} alt=""  className=" w-15 h-15 absolute left-25"/>
</div>
<div className="  flex gap-5 text-amber-50 text-center mt-3 ml-60">
<a href="">Home</a>
<a href="">About Us</a>
<a href="">Event</a>
<a href="">Course</a>
<a href="">Blog</a>
</div>
<div className=" flex gap-2 h-12 text-center items-center ">
<a href="" className=" w-25  bg-lime-300 rounded-3xl ml-15 p-1.5">Contact Us</a>
<a href="" className=" border text-black bg-lime-300 rounded-full w-8 [font-size:25px] border-none ">↗</a>
</div>
</div>
</div>
<div className="items-center  ">
<p className=" absolute top-65 text-amber-50 ml-27 border-none backdrop-blur-xl border-emerald-200 rounded-2xl w-55 backdrop-brightness-120 p-1 text-center ">Best Golf Network on Earth</p>
<h1 className="absolute top-75 left-28 [font-size:40px] text-amber-50">ELEVATE YOUR <br />
 GOLF GAME TO <br /></h1>
 <div className="flex gap-4 absolute top-40 left-30 mt-63">
 <img src={img3} alt="" className=" w-20 h-15 brightness-110  border-b-3 border-amber-50" /> <div><p className="[font-size:40px] text-amber-50">MASTERY</p></div>
</div>
</div>
<p className="text-amber-50 absolute top-130 left-30">
Elevate your game with expert <br />
coaching, world-class facilities, and <br />
a course that inspires precision.
</p>
<div className=" flex gap-2 h-12 text-center items-center absolute top-150 left-15 ">
<a href="" className=" w-25  bg-lime-300 rounded-3xl ml-15 p-1.5 ">Get started</a>
<a href="" className=" border text-black bg-lime-300 rounded-full w-8 [font-size:25px] border-none ">↗</a>
<div className="  absolute top-0 left-225 text-amber-500 border-none backdrop-blur-xl border-emerald-200 rounded-2xl w-70 h-45 backdrop-brightness-110 p-1 text-center ">
<img src={img4} alt="" className="ml-20 mt-5"  />
<p className="mt-5 text-amber-50">Trusted by 200K+ Sports Lover
Worldwide.</p>
</div>
</div>
    </div>

  )
}



