// import "./Slider.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import { Navigation } from "swiper/modules";
// import { useEffect } from "react";
// import { useState } from "react";
// const Slider = () => {
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     fetch("products.json")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);
//   return (
//     <div className="container">
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         {user.map((u) => (
//           <SwiperSlide key={u.id}>
//             <img src={u.img} alt="" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;
