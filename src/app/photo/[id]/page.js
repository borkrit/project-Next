import Image from "next/image";

export default function Page ({params:{id}}){
    console.log(id)
    return(
        <>

        <p>photo page</p>
            <Image src={`/${id}.jpeg`} alt={'img'} width={300} height={300} />
        </>
    )
}