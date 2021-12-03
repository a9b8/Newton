import React, { useState, useEffect } from 'react';
//import axios from 'axios'

function DataFetching() {
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setData(json)
            })
    }
    useEffect(() => {
        apiGet()
    }, [])
    return (
        <div>
            My API<br />
            {/* <button onClick={apiGet}>Fetch API</button> */}
            <br />
            <li>{JSON.stringify(data,null,2)}</li>
            <div>
                <ol>
                    {
                        data.map((item)=>{
                            <li key={item.id}>{item.title}</li>
                        })
                    }
                </ol>
            </div>
              
        </div>
    )
}

export default DataFetching;