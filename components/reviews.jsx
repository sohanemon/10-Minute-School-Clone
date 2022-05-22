import { FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Image from 'next/image'
import content from '../lib/db/reviews'
const Reviews = () => {
  return (
    <div className="h-[80vh] bg-pink-100">
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
    <div className="relative m-16 flex flex-col rounded-2xl bg-white">
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
          <p className="font-semibold text-gray-400">{occupation}</p>
        </div>
      </div>
      <div className="mx-5 mb-32">
        <p className="tracking-wider text-gray-700">{review}</p>
      </div>
      <FaQuoteLeft
        size={50}
        // color={'#F35E4B'}
        className="gran absolute
          -translate-y-1/2 translate-x-1/2 bg-gradient-to-tr from-green-800 to-pink-300"
      />
    </div>
  )
}

export default Reviews
