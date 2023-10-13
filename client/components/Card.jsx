import CustomButton from "./CustomButton";
import state from "../state";


const ProductCard = ({ product,ind }) => {
    return (
        <div className="p-4 bg-[#babcb9] rounded-lg shadow-lg mb-4 gap-2 glassmorphism">
            <h2 className="text-xl font-semibold mb-2">custom{ind+1}</h2>
            <div className="grid grid-cols-2 gap-2">
                {Object.entries(product).map(([property, value]) => (
                    <div key={property}>
                        <p className="text-gray-500 text-sm">{property}</p>
                        <div className="w-8 h-8 border-solid border border-black" style={{ background: value }}></div>

                    </div>
                ))}

                <CustomButton
                    type="filled"
                    title="Edit"
                    handleClick={() => { state.items = product; state.data = false; state.intro = false }}
                    customStyles="w-fit my-2 px-4 py-2 font-bold text-sm rounded-lg"
                />
            </div>
        </div>
    );
};

export default ProductCard;
