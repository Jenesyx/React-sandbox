import Button from 'react-bootstrap'
import {FaStore} from 'react-icons/md'
import {BsCurrencyDollar} from 'react-icons/md'
import './cart.css'

const Cart = (props) => {
    return(
        <div className='w-100 bg-light p-3'>
            <div className='w-100 cart--image'>
                <img className='w-100 h-100' src={props.productImage} alt="" />
            </div>
            <h3>{props.productName}</h3>
            <p>
                <FaStore/>
                <span>{props.categorie}</span>
            </p>
            <p>
                <AiFillStar/>
                <h3>{props.productRate}</h3>
                <span>
                    (<span>{props.productCount}</span>)
                </span>
            </p>
            <div>
                <div>
                    <Button>+</Button>    
                </div>
                <div>
                    <h3>
                        <span>{props.productPreis}</span>
                        <BsCurrencyDollar/>
                    </h3>
                </div> 
            </div>
        </div>
    )
}

export default Cart