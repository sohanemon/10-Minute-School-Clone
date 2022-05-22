import content from '../lib/db/achievement'
const Achievement = () => {
  return (
    <>
      <p className="heading mt-20 mb-10">Our Achievements</p>
      <div className="mx-6 grid grid-cols-2 items-center ">
        {content.map((e) => (
          <Card title={e.title} number={e.number} icon={e.icon} />
        ))}
      </div>
    </>
  )
}
const Card = ({ title, number, icon }) => {
  return (
    <div className=" grid grid-cols-3   ">
      <div className=" m-1 self-center justify-self-center rounded-full bg-green-100 p-3">
        {icon}
      </div>
      <div className="col-span-2  ">
        <p className="text-lg font-bold text-gray-900">{number} + </p>
        <p className="font-semibold text-gray-500">{title}</p>
      </div>
    </div>
  )
}

export default Achievement
