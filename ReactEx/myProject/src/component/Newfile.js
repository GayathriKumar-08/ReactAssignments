import React, { Component,useState } from 'react';
  


export default function Myregister(){

    const [user,setUser]=useState(
        {
                  fname:'gayathri',
                  lname:'kumar'
        }
    );
        return (
            <div>
                 <>
            <form>
                <>
                <label>Firstname</label>
                <input type="text"  value={user.fname} id='fname'/>
                </>
                <>
                <label>Lastname</label>
                <input type="text" value={user.lname} id='lname'/>
                </>
                <>
                <button>Click me</button>
                </>
                </form>
        </>
            </div>
        )
    }
