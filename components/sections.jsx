import content from '../lib/db/section/db'
import Link from 'next/link'
const Sections = () => {
  console.log(content)
  const Card = ({ icon, text }) => {
    return (
      <Link href="path">
        <a>
          <div className=" grid grid-cols-4 place-content-center place-items-center  rounded-md bg-white py-6 px-5 shadow-md">
            {icon}
            <p className="col-span-3 text-[clamp(16px,2vw,20px)] font-semibold">
              {text}
            </p>
          </div>
        </a>
      </Link>
    )
  }
  return (
    <>
      <div className="mt-24 text-center font-semibold">
        <p className="text-1xl">None can teach you...</p>
        <p className="text-2xl">Unless you teach yourself</p>
      </div>
      <div className="m-2 grid grid-cols-2 gap-x-3 gap-y-2 rounded-md bg-gray-50 p-2">
        {content.map((i) => (
          <Card icon={i.icon} text={i.class} />
        ))}
      </div>
    </>
  )
}

export default Sections
