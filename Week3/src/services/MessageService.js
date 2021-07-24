<<<<<<< HEAD
import { Subject } from "rxjs";

const sub=new Subject();

export const messageService={
    sendMessage :(message) =>

    sub.next(
        {
            text:message
        }
    ),
   
    getMessage :() =>
    sub.asObservable(),
    
   
    // clearMessage:() => 
    // sub.next({})
=======
import { Subject } from "rxjs";

const sub=new Subject();

export const messageService={
    sendMessage :(message) =>

    sub.next(
        {
            text:message
        }
    ),
   
    getMessage :() =>
    sub.asObservable(),
    
   
    // clearMessage:() => 
    // sub.next({})
>>>>>>> 1e464d84ab51082831912235343b146c5d08629f
}