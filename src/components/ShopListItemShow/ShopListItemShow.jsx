import {useParams} from "react-router-dom"

export default function ShopListItemShow({shopItems}){
    
const {itemId} = useParams()
const item = shopItems.find((item) => item._id === itemId);

return(

    <div>
        
        Item details page:
        ROUTE WAS HIT
        
    </div>
)
}