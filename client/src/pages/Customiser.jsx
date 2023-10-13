import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../../state';
import { fadeAnimation, slideAnimation } from '../../config/motion';
import CustomButton from '../../components/CustomButton';
import ColorPicker from '../../components/colorPicker';
import { useProducts } from '../provider';


const Customizer = () => {
    const snap = useSnapshot(state);
    
    const {  addProduct } = useProducts();

    const handleAddProduct = (newProduct) => {
        if (newProduct) {
          addProduct(newProduct);
        }
      };


    return (
        <AnimatePresence>
            {(!snap.intro && !snap.data)  && (
                <div>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-3 z-10"
                        {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">
                            
                            <div className="picker">
                                <p className='max-w-md font-bold text-gray-600 text-base'>#{snap.current?snap.current:"click to customize"}</p>
                                <ColorPicker />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Back"
                            handleClick={() => {state.intro = true;state.items = {...snap.default};state.current=null;}}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>

                    <motion.div
                        className='filtertabs-container'
                        {...slideAnimation("up")}
                    >
                        <CustomButton
                            type="filled"
                            title="Reset"
                            handleClick={() =>{ state.items = {...snap.default};state.current=null;} }
                            customStyles="w-fit px-2 py-2.5 font-bold text-sm"
                        />
                        <CustomButton
                            type="filled"
                            title="Save Customization"
                            handleClick={() => {handleAddProduct(state.items);state.items = {...snap.default};state.current=null;state.data = true;}}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                        <CustomButton
                            type="filled"
                            title="Saved"
                            handleClick={() => {state.items = {...snap.default};state.current=null;state.data = true;}}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Customizer