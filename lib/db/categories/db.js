import { GiVideoConference, GiRank3, GiNotebook } from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'
import { VscLiveShare } from 'react-icons/vsc'
import { RiQuestionnaireFill } from 'react-icons/ri'
const size = '40px'
const color = ['#25AB6F', '#1CADF1', '#F54135', '#8F51F1', '#F4B840', '#27895D']
export default [
  {
    type: 'Video Lecture',
    icon: <GiVideoConference color={color[0]} size={size} />,
  },
  {
    type: 'Exercise',
    icon: <BiDumbbell color={color[1]} size={size} />,
  },
  {
    type: 'Live Class',
    icon: <VscLiveShare color={color[2]} size={size} />,
  },
  {
    type: 'Lecture Sheet',
    icon: <GiNotebook color={color[3]} size={size} />,
  },
  {
    type: 'Ranking',
    icon: <GiRank3 color={color[4]} size={size} />,
  },
  {
    type: 'Ask your Question',
    icon: <RiQuestionnaireFill color={color[5]} size={size} />,
  },
]
