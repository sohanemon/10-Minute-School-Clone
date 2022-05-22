import { Carousel1 } from '../job-special'
import content from '../../lib/db/skill-dev'
const Carousel = () => {
  return (
    <>
      <Carousel1 content={content} />
      <button className="btn-em mt-10">Start Now</button>
    </>
  )
}

export default Carousel
