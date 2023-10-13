import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import ProductCard from '../../components/Card';
import state from '../../state';
import { fadeAnimation, slideAnimation } from '../../config/motion';
import CustomButton from '../../components/CustomButton';
import { useProducts } from '../provider';


const Data = () => {
    const snap = useSnapshot(state);
    const { products } = useProducts();

    return (
        <AnimatePresence>
            {snap.data && (
                <div className='cursor-default'>
                    <motion.div
                        key="custom"
                        className=" top-0 left-3 z-10"
                        {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">

                            <div className="p-8">
                                <strong className="text-3xl font-semibold mb-4">Saved customizations</strong>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
                                    {products.map((product, index) => (
                                        <ProductCard key={index} product={product} ind={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Home"
                            handleClick={() => { state.items = { ...snap.default }; state.current = null; state.data = false; state.intro = true; }}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                    <motion.div
                        className="absolute z-10 top-20 right-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go back"
                            handleClick={() => { state.current = null; state.data = false; state.intro = false; }}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    )
}

export default Data