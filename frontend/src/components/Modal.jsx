
import {useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({open,children}){
    const modal = useRef()
    useEffect(()=>{
        if(open){
            modal.current.showModal()
        }
        return ()=>{
            if(modal.current){
                modal.current.close()
            }
        }
            
    },[open])
    return createPortal(
    <dialog ref={modal} className="modal w-[40%]  p-4 bg-white border border-gray-300 shadow-lg"
    style={{marginLeft:'57%',marginTop:50}}>{children}</dialog>,document.getElementById('modal'))
}