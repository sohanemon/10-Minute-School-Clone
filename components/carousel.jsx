import { Swiper, SwiperSlide } from 'swiper/react'
import Images from '../assets/img/images'
import Image from 'next/image'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const Carousel = () => {
  return (
    <div className="bg-grey-900">
      <div className="my-3 space-y-4">
        <p
          className={'text-grey-300 text-center text-lg font-bold antialiased'}
        >
          Offer Going on...
        </p>
        <p className={'text-grey-300 text-center font-semibold'}>
          Never miss it out.
        </p>
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
