import Head from 'next/head'
import Carousel from '../components/carousel'
import Sections from '../components/sections'
import Categories from '../components/categories'
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
      </div>
    </>
  )
}

export default Home
