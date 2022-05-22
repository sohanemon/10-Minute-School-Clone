import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import content from '../lib/db/job'

const JobSpecial = () => {
  return (
    <div div className="bg-white pt-10">
      <p className="heading  translate-y-4">Get prepared for ur job...</p>

      <div className="mt-10 overflow-visible  ">
        <Carousel1 content={content} />
      </div>
      <button className=" btn-em">Go to details</button>
    </div>
  )
}

export const Carousel1 = ({ content }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        draggable={true}
        centeredSlides={false}
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
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {content?.map((e) => (
          <SwiperSlide>
            <Link href="">
              <a>
                <Card key={e.title} image={e.image} title={e.title} />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

const Card = ({ image, title }) => {
  return (
    <>
      <div className="z-20 mt-10  shadow-xl transition-all duration-700 hover:-translate-y-10">
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
