import React,{useState,useEffect} from 'react';
import { messageService } from '../services/MessageService';

export default function GetMessage() {
    const [res,setRes]=useState({});
    useEffect(()=>
    {
        messageService.getMessage().subscribe(x=>
            {
                setRes(x);
            });
    },[res]
    )
    console.log(res);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Message using Observable....</h1>
            <h1  style={{textAlign:'center'}}>{JSON.stringify(res)}</h1>

        </div>
    )
}
