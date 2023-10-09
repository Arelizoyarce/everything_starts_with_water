import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const actionNames = [
  'TorusAction1',
  'TorusAction2',
  'TorusAction3',
]

const ReactLogo = () => {
  // Memoize the reactLogo object to avoid unnecessary recalculations and re-renders
  const reactLogo = useGLTF('./models/reactLogo/scene.gltf')

  // Animation
  const animations = useAnimations(reactLogo.animations, reactLogo.scene)

  useEffect(() => {
    actionNames.forEach((actionName) => {
      const action = animations.actions[actionName]
      action.play()
    })
  }, [animations])

  return (
    <mesh>
      <primitive
        object={reactLogo.scene}
        rotation={[0, -5, 0]}
        scale={0.65}
      />
    </mesh>
  )
}

export default ReactLogo
