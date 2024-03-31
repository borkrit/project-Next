import {redirect} from "next/navigation";

export default  function ListSlot (){

    async function sendMail(formData){
        'use server'
        const dataObject = {
            title:formData.get('title'),
            email:formData.get('email'),
            message:formData.get('message')
        }

        const response = await fetch('https://project-next-l1g5.vercel.app/api/comments',{
            method: 'POST',
            body: JSON.stringify(dataObject),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((data)=>data);


        if(response.status === 200){
           redirect('/')
        }

    }


    return(
        <>
            <p>Contact form</p>
            <form action={sendMail}  >
                <input type="text" name={'title'} placeholder={'title message'} />
                <input type="email" name={'email'} placeholder={'Email'}/>
                <textarea type="text" name={'message'} placeholder={'Message'}/>
                <button type={'submit'}> Send</button>
            </form>
        </>
    )
}