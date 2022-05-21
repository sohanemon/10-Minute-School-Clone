import Head from 'next/head'
import Carousel from '../components/carousel'
import Sections from '../components/sections'
import Categories from '../components/categories'
import SpecialCourses from '../components/special-courses'
import AdmissionTest from '../components/admission-test'
import JobSpecial from '../components/job-special'
const Home = () => {
  return (
    <>
      <Head>
        <title>10 Minute School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Carousel />
        <Sections />
        <Categories />
        <SpecialCourses />
        <AdmissionTest />
        <JobSpecial />
      </div>
    </>
  )
}

export default Home
