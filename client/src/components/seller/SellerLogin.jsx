import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext'

const SellerLogin = () => {

    const {isSeller, setIsSeller, navigate} = useAppContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async () =>{
        event.preventDefault();
        setIsSeller(true)
    }

    useEffect(() =>{
        if(isSeller){
            navigate("/seller")
        }
    },[isSeller])

  return !isSeller && (
    <form onSubmit={onSubmitHandler}>

    </form>
  )
}

export default SellerLogin
