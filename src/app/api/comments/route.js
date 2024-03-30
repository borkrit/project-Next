import {NextResponse} from "next/server";

export async function POST(request){
    const {title,message,email} = await request.json()

    return NextResponse.json({status:'ok'})

}