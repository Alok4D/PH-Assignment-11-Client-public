import { useLoaderData } from "react-router-dom";


const PurchaseProduct = () => {
    const purchaseData = useLoaderData();
    console.log(purchaseData);


    return (
        <div>
            <h2>This is purchase Page!!!!!!!!! </h2>
        </div>
    );
};

export default PurchaseProduct;