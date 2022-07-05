import './card.css'

const Card = (props) => {
    return(
        <div className='cardContainer'>
            <div className='imageContainer'>
                <img src={props.cardImage} alt="" />
            </div>
            <div className='detailContainer'>
                <div style={{display: 'flex'}}>
                    <p>{props.currectPreis}</p>
                    <p>Daller</p>
                </div>
                <div style={{textAlign:'center' ,width:'2.6rem' ,backgroundColor:'red', borderRadius:'20px', color: 'white'}}>
                    <p>{props.discount}%</p>
                </div>
            </div>
            <del >{props.mainPreis}</del>
        </div>
    )
}

export default Card