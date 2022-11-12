import './style.css'

const Mainproduct = (props) => {
    return(
        <div className='section'>
            {props.productPage.map(item => {
                return(
                    <>
                        <div className="main w-50 h-100">
                            <img className='w-100 h-100' src={item.productImage} alt="Image" />
                        </div>
                        <div className="detail h-100">
                            <h2>{item.productName}</h2>
                            <p className='m-3'>{item.categorie}</p>
                            <h4>{item.productPreis}<span className='text-success m-2'>Dollar</span></h4>
                            <button onClick={() => props.setBasketList([...props.basketList, {
                                productName : props.productName, productPreis : props.productPreis,
                                productId : props.productId
                                }])}>Add to basket
                            </button>
                            <button>Buy right now!</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Mainproduct