import Cart from "../../components/card2"
import './style.css'
import {fakeData} from '../../fakeData/fakeData.js'
import { useState } from "react"
import { useEffect } from "react"
const HomePage = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        setProductList(fakeData.filter(item => item.rating.rate >= 2))
    },[])

    return(
        <div className="d-flex gap-2 flex-wrap justify-content-center">

            {productList.map(item => {
                return(
                    <div key={`productList-${item.id}`} className="home-cartContainer">
                        <Cart 
                            productImage={item.image}
                            productName={item.title}
                            categorie={item.category}
                            productRate={item.rating.rate}
                            productCount={item.rating.count}
                            productPreis={item.price}
                            productTag='This is limited'
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage