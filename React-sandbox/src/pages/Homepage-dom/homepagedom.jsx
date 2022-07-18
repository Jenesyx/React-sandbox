import { Link } from "react-router-dom"

const HomePageDom = () => {
    return(
        <>
            <h1 className="w-100 align-text-center justify-center">Home Page</h1>
            <Link to="product">
                <button style={{backgroundColor : 'blue'}}>ProductPage</button>
            </Link>
        </>
    )
}

export default HomePageDom