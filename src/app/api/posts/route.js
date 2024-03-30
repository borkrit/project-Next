import {NextResponse} from "next/server";

export async function GET(){

    const data = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(data=> data.json())


    return NextResponse.json(data)

}


export async function POST(request){
    const {title} = await request.json()

    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(data=> data)

    return NextResponse.json({status:data.status, text: data.status === 201 ?`created with title ${title}` : 'post doesnt create'})

}