import {Link} from "react-router-dom"

export default function ShopListItem({item}) {
    return (
        <>
        {/* <Link to = {{pathname: {item.link.toString}} target = "_blank"} ></Link> */}
        <a href="">
        {/* <img src="{item.image}" alt="" /> */}
        <div>{item.name}</div>
        </a>
        <div>${item.price}</div>
        <div>{item.description}</div>
       
        </>
    );
}