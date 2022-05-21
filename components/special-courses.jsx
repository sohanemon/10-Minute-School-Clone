import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { GiAlarmClock } from 'react-icons/gi'
import content from '../assets/img/special/images'
const SpecialCourses = () => {
  return (
    <>
      {' '}
      <div>
        <p className="heading translate-y-16">Special Crash Courses 🚀</p>
      </div>
      <div class=" text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="mx-4 mb-10 grid grid-cols-1 gap-4 text-center md:grid-cols-3">
            {content.map((e, i) => (
              <Card
                key={e.title}
                image={e.image}
                title={e.title}
                duration={e.duration}
                totalClass={e.totalClass}
                desc={e.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
const Card = ({ image, title, duration, totalClass, desc }) => {
  return (
    <>
      {' '}
      <div class="mx-4 w-full rounded-lg bg-gray-50 pb-1  shadow-lg ring-1 ring-gray-300 transition-all delay-200 duration-500 ease-out hover:-translate-y-3 hover:shadow-xl hover:shadow-none">
        <div class="h-64 overflow-hidden rounded-lg">
          <Image
            layout="responsive"
            alt="content"
            class="h-full w-full object-cover object-center"
            src={image}
          />
        </div>
        <div>
          <h2 class="  text-xl font-medium text-gray-600 drop-shadow-xl">
            {title}
          </h2>
          <div className="m-2 ml-2 text-base tracking-wide">
            <p className="details">
              <AiOutlinePlayCircle size={20} color="gray" />
              Total {totalClass} classes.
            </p>
            <p className="details">
              <GiAlarmClock size={20} color="gray" />
              Course duration {duration} hours.
            </p>
          </div>
          <button class="mx-auto mb-5  flex rounded-full border-0 py-1 px-5  font-bold text-green-700 ring-1 ring-gray-300 transition-all hover:bg-green-400  hover:text-green-100 hover:ring-0 focus:outline-none">
            Enroll
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .details {
            @apply flex place-items-center gap-2;
          }
        `}
      </style>
    </>
  )
}

export default SpecialCourses
