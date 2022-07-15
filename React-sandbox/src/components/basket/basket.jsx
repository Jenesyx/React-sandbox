import './basket-style.css'
import {Button} from 'react-bootstrap'


const Basket = (props) => {
    return(
        <div className="basket-container w-100 h-100 bg-light">
            <div className='w-100 basket-itemlist'>
                
                {props.basketList.map(item => {
                    return(
                        <div className='w-100 d-flex justify-content-center align-items-center'>
                            <p className='w-75 cart-textnowrap'>{item.productName}</p>
                            <div className='w-50'>
                                <span>{item.productPreis}</span>
                                <Button 
                                    onClick=
                                    {() => props.setBasketList(props.basketList.filter(product => product.productId != item.productId))} 
                                    variant='danger'>-
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-100 h-25 d-flex justify-content-center flex-column align-items-center'>
                <h3 className="text-center">
                    <span>
                        {props.basketList.reduce((sum, current) => sum+current.productPreis, 0)}
                    </span>
                </h3>
                <Button variant='danger' className='c-white mx-auto'>Buy</Button>
            </div>
        </div>
    )
}

export default Basket