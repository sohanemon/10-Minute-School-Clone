import { FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import content from '../lib/db/reviews'
const pencil = require('../assets/img/beauty/Hands Pencil 1.png')
const Reviews = () => {
  return (
    <div className=" bg-[#FCD300] bg-opacity-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        draggable={true}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {content.map((e) => (
          <SwiperSlide>
            <Card
              review={e.review}
              name={e.name}
              occupation={e.occupation}
              image={e.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
const Card = ({ review, name, occupation, image }) => {
  return (
    <div
      className="mx-auto  h-full w-11/12 bg-gradient-to-bl from-pink-200 to-yellow-200"
      style={{
        borderRadius: '67% 33% 73% 27% / 49% 26% 74% 51%  ',
      }}
    >
      <div className="relative m-16 flex flex-col rounded-2xl bg-white shadow-2xl">
        <div className="flex justify-between px-6 pb-6 pt-10">
          <Image
            className=" basis-1/4 rounded-full"
            src={image}
            width="60px"
            height="60px"
            alt=""
          />
          <div className="basis-3/4">
            <p className="text-xl font-semibold">{name}</p>
            <p className="clip font-semibold text-gray-400">{occupation}</p>
          </div>
        </div>
        <div className="mx-5 mb-32">
          <p className="tracking-wider text-gray-700">{review}</p>
        </div>

        <FaQuoteLeft className="absolute -translate-y-1/2 translate-x-1/2 text-5xl  text-[#FCD300]   drop-shadow-2xl " />
        <div className="absolute right-0 bottom-0 translate-x-1/4 -rotate-45  -scale-100 drop-shadow-2xl ">
          <Image src={pencil} height="200" width={'200'} alt="pencil" />
        </div>
      </div>
    </div>
  )
}

export default Reviews
