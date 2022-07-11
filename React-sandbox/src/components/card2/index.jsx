import {MdStoreMallDirectory, MdStar, MdAttachMoney} from 'react-icons/md'
import './cart.css'

const Cart = (props) => {
    return(
        <div className='w-100 bg-light p-4'>
            <div className='w-100 cart--image position-relative'>
                <img className='w-100 h-100' src={props.productImage} alt="" />
                <div className='cart-tag position-absolute top-0 py-1 px-3 fs-9 cart-textnowrap'>
                    <span>{props.productTag}</span>
                </div>
            </div>
            <h5 className='fs-10 mt-2 cart-textnowrap'>{props.productName}</h5>
            <p className='d-flex align-items-center text-black-50'>
                <MdStoreMallDirectory/>
                <span>{props.categorie}</span>
            </p>
            <p className='d-flex align-items-center gap-1 cart-textnowrap'>
                <MdStar className='text-black-50'/>
                <h5 className='m-0'>{props.productRate}</h5>
                <span>
                    (<span className='text-black-50'>{props.productCount}</span>)
                </span>
            </p>
            <div className='d-flex justify-content-between'>
                <div>
                    <button className='cart-addBtn rounded d-flex align-items-center justify-content-center p-0 fs-3'>+</button>    
                </div>
                <div>
                    <h3 className='align-items-center cart-textnowrap'>
                        <span>{props.productPreis}</span>
                        <MdAttachMoney/>
                    </h3>
                </div> 
            </div>
        </div>
    )
}

export default Cart