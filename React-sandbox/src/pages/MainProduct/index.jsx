import './style.css'

const Mainproduct = (props) => {
    return(
        <div className='section'>
            {props.productPage.map(item => {
                return(
                    <>
                        <div className="main w-50 h-100">
                            <img src={props.productImage} alt="" />
                        </div>
                        <div className="detail h-100">
                            <h2>{props.productName}</h2>
                            <p className='m-3'>{props.categorie}</p>
                            <h4>{props.productPreis}<span className='text-success m-2'>Dollar</span></h4>
                            <button>Add to basket</button>
                            <button>Buy right now!</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Mainproduct