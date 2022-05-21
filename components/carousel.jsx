import { Swiper, SwiperSlide } from 'swiper/react'
import Images from '../assets/img/carousel/images'
import Image from 'next/image'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const Carousel = () => {
  return (
    <div className="bg-black pb-20">
      <div className="space-y-4 py-3 text-gray-100">
        <p className={' text-center text-lg font-bold antialiased'}>
          Offer Going on...
        </p>
        <p className={' text-center font-semibold'}>Never miss it out.</p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Object.values(Images).map((e, i) => (
          <SwiperSlide key={e - i} className="flex place-content-center ">
            <Image className="rounded " key={e + i} src={e} alt={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
