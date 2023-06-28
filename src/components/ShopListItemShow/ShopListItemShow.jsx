import { useParams } from 'react-router-dom'
export default function ShopListItemShow({shopItem}){
    const { shopItemName } = useParams();
return(
    <div>
        Item details page:
        {shopItem.name}
    </div>
)
}