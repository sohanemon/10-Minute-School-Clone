import { GiTeacher } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { FaPhotoVideo } from 'react-icons/fa'
import { ImDownload } from 'react-icons/im'
const size = 30
export default [
  {
    title: 'Students',
    number: '11.5k',
    icon: <IoIosPeople size={size} color="#36C4A8" />,
  },
  {
    title: 'Teachers',
    number: 55,
    icon: <GiTeacher size={size} color="#3498DB" />,
  },
  {
    title: 'Videos',
    number: '1k',
    icon: <FaPhotoVideo size={size} color="#2ECC71" />,
  },
  {
    title: 'Downloads',
    number: '240k',
    icon: <ImDownload size={size} color="#9B59B6" />,
  },
]
