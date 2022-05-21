import { ImBooks } from 'react-icons/im'
import { BsFillBagFill } from 'react-icons/bs'
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'
const size = '25px'
export default [
  { class: 'Class 1 to 12', icon: <ImBooks color="#5BADC9" size={size} /> },
  { class: 'Admission', icon: <FaUserGraduate color="#17B992" size={size} /> },
  { class: 'Job Prep', icon: <BsFillBagFill color="#0E86CA" size={size} /> },
  {
    class: 'Class 1 to 12',
    icon: <FaChalkboardTeacher color="#8E42E9" size={size} />,
  },
]
