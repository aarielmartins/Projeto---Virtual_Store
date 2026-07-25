import { IconType } from 'react-icons'
import { FiPlus } from 'react-icons/fi'
import { CircleButton } from './styles'

type Props = {
  icon?: IconType
}

const ColorButton = ({ icon: Icon = FiPlus }: Props) => (
  <CircleButton>
    <Icon />
  </CircleButton>
)

export default ColorButton
