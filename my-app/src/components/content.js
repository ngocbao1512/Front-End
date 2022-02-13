import React, {useEffect, useState} from 'react';


//1. useEffect(callback) 
// fucntion được call mỗi lúc mount và re-render 
//2. useEffect(callback, [])
// chỉ gọi call back mỗi khi component được mount ko gọi lại lúc re-render 
//3. useEffect(callback, [depencency])
// goi call back mooix khi component
// callback sẽ được thay đổi mỗi khi deps thay đổi 



function Content() {
 
    
    return (
        <div>
            <h1>
               
            </h1>
        </div>
    )
}

export default Content;