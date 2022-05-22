import { cate, store } from '../lib/db/download-app'
const DownloadSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        {cate.map((e, i) => {
          return <Above uid={i} key={i ** 2} icon={e.icon} title={e.title} />
        })}
      </div>
    </div>
  )
}

const Above = ({ icon, title, uid }) => {
  let color = null
  switch (uid) {
    case 0:
      color = 'green'
      break
    case 1:
      color = 'pink'
      break
    case 2:
      color = 'yellow'
      break

    default:
      color = 'indigo'
      break
  }
  console.log(color)
  return (
    <div className="mx-4 flex  items-center">
      <div className={`m-2 rounded-full p-3 bg-${color}-400 text-white`}>
        {icon}
      </div>
      <p className="basis-2/3 text-sm font-bold ">{title}</p>
    </div>
  )
}
const Below = () => {
  return <></>
}

export default DownloadSection
