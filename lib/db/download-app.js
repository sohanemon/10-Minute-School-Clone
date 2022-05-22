import { FiDownload, FiCompass, FiKey } from 'react-icons/fi'
import { BiMessageDetail } from 'react-icons/bi'
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from 'react-icons/io'
const size = 30
export const cate = [
  {
    icon: <FiDownload size={size} />,
    title: 'Download Resources',
  },
  {
    icon: <FiCompass size={size} />,
    title: 'Progress Tracker',
  },
  {
    icon: <FiKey size={size} />,
    title: 'Secured Access',
  },
  {
    icon: <BiMessageDetail size={size} />,
    title: 'Instant Notification',
  },
]

export const store = [
  {
    title: 'Google Play',
    icon: <IoLogoGooglePlaystore />,
    text: 'Get it on',
  },
  {
    title: 'App Store',
    icon: <IoLogoAppleAppstore />,
    text: 'Download on the',
  },
]
