import content from '../lib/db/admission-test'
import Image from 'next/image'
import { BsFillPeopleFill } from 'react-icons/bs'
console.log(content)
const AdmissionTest = () => {
  return (
    <>
      {' '}
      <div>
        <p className="heading -translate-y-16">Road to ur Dream University</p>
      </div>
      <div className="mx-4 grid grid-cols-1 gap-y-3 gap-x-6 px-3 md:grid-cols-2">
        {content.map((e) => (
          <>
            <Card
              title={e.title}
              key={e.title}
              image={e.image}
              enrolled={e.enrolled}
            />
          </>
        ))}
      </div>
    </>
  )
}

const Card = ({ title, image, enrolled }) => {
  return (
    <div className="grid h-32 grid-cols-3 items-center rounded-md bg-gray-100 duration-700  ease-out  hover:scale-110 hover:shadow-lg   ">
      {/* <div className=""> */}
      <Image
        className=" aspect-auto rounded-tl-md rounded-bl-md"
        src={image}
        alt="title"
        height={128}
        width={'100%'}
        objectFit="fill"
      />
      {/* </div> */}
      <div className="col-span-2 pl-3">
        <p className="text-lg font-bold text-gray-900">{title}</p>
        <p className="flex place-items-center gap-2 font-semibold text-gray-500">
          <BsFillPeopleFill />
          Total {enrolled} students enrolled.
        </p>
      </div>
    </div>
  )
}

export default AdmissionTest
