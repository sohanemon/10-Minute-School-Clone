import content from '../lib/db/categories/db'
const Categories = () => {
  const Card = ({ icon, text }) => {
    return (
      <div className="grid grid-rows-3 place-items-center p-4">
        <div
          className="row-span-2 rounded-full bg-gray-100 
            p-2 drop-shadow-xl
        "
        >
          {icon}
        </div>
        <p className="text-sm font-semibold  drop-shadow-xl">{text}</p>
      </div>
    )
  }
  return (
    <>
      <div className="grid grid-cols-2 ">
        {content.map((i) => (
          <Card icon={i.icon} text={i.type} />
        ))}
      </div>
    </>
  )
}

export default Categories
