import {useParams} from "react-router-dom"

export default function ShopListItemShow({shopItems}){

const {id} = useParams()
console.log("this is id", id)
const item = shopItems.find((item) => item._id === id);

return(

    <div className="shop-list-item-show">
        {item ? (
           <>
           <h2>{item.name}</h2>
         <img src={item.image} alt="" />
         <div>{item.description}</div>
         </>
        ) : (
            <div>loading...</div>
            
        )}
        
    </div>
)
}