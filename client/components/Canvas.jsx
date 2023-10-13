/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Shadow } from '@react-three/drei'
import { Model } from "../resources/gltf/Shoe"
import './App.css'
import state from "../state";
import { useSnapshot } from "valtio";

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.



export default function GCanvas() {
    const snap = useSnapshot(state)
    return (
        <div>
            {!snap.data  &&
                (
                    <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 1.8] }} style={{ background: " WHITE" }} className="canvas">
                        <ambientLight intensity={0.3} />
                        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment files="royal_esplanade_1k.hdr" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
                        </Suspense>
                        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
                        <Shadow />
                    </Canvas>

                ) 
            }
        </div>
    )
}
