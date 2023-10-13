import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../state';


const ColorPicker = () => {
    const snap = useSnapshot(state);
  
    return (
      <div >
        <SketchPicker 
          color={snap.items[snap.current]}
          disableAlpha
          onChange={(color) => state.items[snap.current] = color.hex}
        />
      </div>
    )
  }

export default ColorPicker
  