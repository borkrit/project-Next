'use client'
import { debounce } from "next/dist/server/utils";
import {useState} from "react";

export default function ShopPage() {

   const [postCreated, setPostCreated] = useState([])


    async function sendData(inputData) {

        if(inputData){
            const response = await fetch('http://localhost:3000/api/posts',{
                method: 'POST',
                body: JSON.stringify({
                    title: inputData}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const r = await response.json();

            setPostCreated((prevState)=>{
                return [...prevState,r]
            });
        }


    }

    const debouncedSendData = debounce(sendData, 1000);
    const handleChange = (event) => {
        debouncedSendData(event.target.value);
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
            {
                postCreated && postCreated.map((item,key)=><p key={key}>{item.text}</p>)
            }
        </>
    );
}
