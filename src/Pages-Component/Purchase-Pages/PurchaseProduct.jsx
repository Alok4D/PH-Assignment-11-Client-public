import { useLoaderData } from "react-router-dom";


const PurchaseProduct = () => {
    const purchaseData = useLoaderData();
    console.log("This is purchaseData", purchaseData);

    const {name, photo, foodOrigin, foodName, price,  description, subcategory, _id} = purchaseData;
    return (
        <div>
            <h2>This is purchase Page!!!!!!!!! {purchaseData.length}</h2>
        </div>
    );
};

export default PurchaseProduct;