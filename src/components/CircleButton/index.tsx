import { IconType } from 'react-icons'
import { FiPlus } from 'react-icons/fi'
import { CircleButton } from './styles'

type Props = {
  icon?: IconType
  to: string
}

const ColorButton = ({ icon: Icon = FiPlus, to }: Props) => (
  <CircleButton to={to}>
    <Icon />
  </CircleButton>
)

export default ColorButton
