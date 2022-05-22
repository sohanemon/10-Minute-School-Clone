import Head from 'next/head'
import Carousel from '../components/carousel'
import Sections from '../components/sections'
import Categories from '../components/categories'
import SpecialCourses from '../components/special-courses'
import AdmissionTest from '../components/admission-test'
import JobSpecial from '../components/job-special'
import Reviews from '../components/reviews'
import Carousel2 from '../components/skill-dev/carousel'
import TextSwiper from '../components/skill-dev/text-swiper'
import Header from '../components/header'
const Home = () => {
  return (
    <>
      <Head>
        <title>10 Minute School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Carousel />
        <Sections />
        <Categories />
        <SpecialCourses />
        <AdmissionTest />
        <JobSpecial />
        <div>
          <TextSwiper />
          <Carousel2 />
        </div>
        <Reviews />
      </div>
    </>
  )
}

export default Home
