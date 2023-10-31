import { Canvas } from '@react-three/fiber'
import { Hands, XR } from '@react-three/xr'
import DraggableBox from './components/DraggableBox'

function App() {
  return (
    <Canvas>
      <XR>
        <ambientLight intensity={0.5} />
        <DraggableBox />
        <Hands />
      </XR>
    </Canvas>
  )
}
export default App
