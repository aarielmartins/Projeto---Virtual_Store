import { HashLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Space } from './styles'

const Loader = () => (
  <Space>
    <HashLoader color={cores.detalhe} />
  </Space>
)

export default Loader
