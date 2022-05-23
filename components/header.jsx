import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [mobile, setMobile] = useState()
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    innerWidth <= 900 ? setMobile(true) : setMobile(false)
  }, [])
  const handleBurger = (e) => {
    setShowMenu((p) => !p)
    e.preventDefault()
  }
  const pcView = (mobile) => (
    <ul className={mobile ? `menu_class ${showMenu && 'shadow-md'}` : null}>
      {!showMenu && (
        <li>
          <Link href="">
            <a>Home</a>
          </Link>
        </li>
      )}
      <li>
        <Link href="">
          <a>Courses</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Admission</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Job Prep</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Book Store</a>
        </Link>
      </li>

      <style jsx>
        {`
          .menu_class {
            @apply flex  flex-col items-center gap-y-4 
                p-3 font-semibold;
          }
        `}
      </style>
    </ul>
  )
  const mobileView = (
    <>
      <ul
        className={`${
          !showMenu && 'shadow-lg '
        }  mx-5 flex items-center justify-between`}
      >
        <li className="mobileView__li">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={(e) => handleBurger(e)}
          />
        </li>
        <li className="mobileView__li ">
          <h1 className="w-min bg-gradient-to-r from-green-400 to-pink-600 bg-clip-text text-xl  text-transparent">
            600SecondSchool
          </h1>
        </li>
        <li className="mobileView__li">
          <CgProfile />
        </li>
      </ul>

      <style jsx>
        {`
          .mobileView__li {
            @apply p-5 text-lg font-bold;
          }
        `}
      </style>
    </>
  )
  return (
    <>
      <div>{mobile ? mobileView : null}</div>
      <div>{showMenu && pcView(mobile)}</div>
    </>
  )
}

export default Header
