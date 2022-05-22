import { Swiper, SwiperSlide } from 'swiper/react'
import { otherSkills } from '../../lib/db/skill-dev'
import Link from 'next/link'
import 'swiper/css'
import { Autoplay } from 'swiper'
const TextSwiper = () => {
  return (
    <>
      <p className="heading">Skill Development Courses</p>
      <p className="mb-6 text-center font-semibold text-gray-600">
        Enlighten yourself
      </p>
      <Swiper
        slidesPerView={2}
        loop={true}
        draggable={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
      >
        {otherSkills.map((e) => (
          <SwiperSlide className="m-2 mx-10 max-w-max rounded-full p-1 px-6 font-semibold text-gray-800 ring-2 ring-gray-400  drop-shadow-lg hover:text-green-900 hover:ring-green-700">
            <Link href="">
              <a>{e}</a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TextSwiper
