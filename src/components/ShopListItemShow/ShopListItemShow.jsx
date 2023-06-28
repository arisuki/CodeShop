import {useParams} from "react-router-dom"

export default function ShopListItemShow({shopItems}){
const {itemId} = useParams()
console.log("itemId in url", {itemId})

const item = shopItems.find((item) => item._id === itemId);
console.log("item const", item);

return(
    <div>
        Item details page:
        
    </div>
)
}