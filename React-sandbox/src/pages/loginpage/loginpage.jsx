import { useState } from 'react'
import Button from '../../components/Buttons/Buttons'
import './loginpage.css'

const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const LoginPage = () => {

    const [inputVal , setInputVal] = useState('')
    const [regexError , setRegexError] = useState(true)

    function handleClick() {
        const inputTest =  email.test(inputVal)

        if(inputTest) {
            console.log('True')
            setRegexError(true)
        } else {
            console.log('false')
            setRegexError(false)
        }
    }

    return(
        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className='w-25 h-50 border rounded d-flex flex-column justify-content-start align-items-center p-4'>
                <div className='w-25 h-auto'>
                    <img className='w-100 h-100' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&f=1&nofb=1" alt="Google Logo" />
                </div>
                <h4 className='w-100 text-start mt-4'>Login | Register</h4>
                <p className='w-100 mb-0 mt-4'>Hello! </p>
                <p className='w-100 mt-0 pt-0'>Pleate enter your number</p>
                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" className='w-100 border rounded input-login p-3'/>
                <small className={`w-100 ${regexError ? 'd-none' : 'd-block'}`}>regex eror</small>
                <Button onClick={handleClick} className='mt-4'>Login</Button>
                <p>When you enter Digikala</p>
            </div>
        </div>
    )
}

export default LoginPage