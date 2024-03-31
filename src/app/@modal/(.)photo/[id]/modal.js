'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
import { useState} from "react";

export default function Modal({idElem}) {
    const routes = useRouter();
    const [open,setOpen] = useState(true);

    const handelClose =()=>{
        routes.back()
        setOpen(false)
    }

    return (
        <dialog open={open} onClick={handelClose}>
            <div className="modal-backdrop" >
                <Image src={`/${idElem}.jpeg`} width={100} height={100}/>
                <div className="overlay"></div>
            </div>

        </dialog>
)
    ;
}