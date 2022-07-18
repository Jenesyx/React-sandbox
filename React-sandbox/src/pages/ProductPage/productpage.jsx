import { Link, useParams } from "react-router-dom"

const ProductPage = () => {

    const urlParams = useParams()

    return(
        <>

            <h1 className="w-100 align-text-center justify-center">Product Page</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
            <p>{urlParams.id}</p>
        </>
    )
}

export default ProductPage