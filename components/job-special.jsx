import Image from 'next/image'
import content from '../lib/db/job'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

const JobSpecial = () => {
  return (
    <div div className="bg-white py-10">
      <p className="heading translate-y-4">Get prepared for ur job...</p>

      <div className="my-10 overflow-visible  py-4">
        {' '}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          draggable={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {content.map((e) => (
            <SwiperSlide>
              <Link href="">
                <a>
                  <Card key={e.title} image={e.image} title={e.title} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
const Card = ({ image, title }) => {
  return (
    <>
      <div className="z-20 my-10  shadow-xl transition-all duration-700 hover:-translate-y-10">
        <Image
          src={image}
          alt={title}
          className="rounded-tl-lg rounded-tr-lg"
          height={1000}
          width={1800}
        />
        <div className="flex  flex-col items-center  rounded-bl-xl rounded-br-xl bg-white">
          <p className="  p-2 font-semibold">{title}</p>
          <button className="bg-green-50 pb-1 text-green-800">More</button>
        </div>
      </div>
    </>
  )
}

export default JobSpecial
