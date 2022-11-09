import Cart from "../../components/card2"
import './style.css'
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import Basket from "../../components/basket/basket"
import Mainproduct from "../MainProduct"
const HomePage = () => {

    const [productList, setProductList] = useState([])
    const [basketList, setBasketList] = useState([])
    const [productPage, setProductPage] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((data) =>{
            setProductList(data.data)
        })
        .catch((err) => console.log(err))
    },[])

    return( 
        <div className="d-flex gap-1">
            <div className="w-25 h-100 this__basket">
                <Basket 
                    basketList = {basketList}
                    setBasketList = {setBasketList}
                />
            </div>
            <div>
                <Mainproduct
                    productPage = {productPage}
                    setProductList = {setProductPage}
                />
            </div>
            <div className="w-75 h-100 d-flex gap-2 flex-wrap justify-content-center align-items-center">
                {productList.map(item => {
                    return(
                        <div key={`productList-${item.id}`} className="home-cartContainer">
                            <Cart className="card"
                                productId = {item.id}
                                productImage={item.image}
                                productName={item.title}
                                categorie={item.category}
                                productRate={item.rating.rate}
                                productCount={item.rating.count}
                                productPreis={item.price}
                                productTag='This is limited'
                                basketList = {basketList}
                                setBasketList = {setBasketList}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage