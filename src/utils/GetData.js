import { useState, useEffect } from "react";


export const GetData = (name)  => {

   const API = 'https://swapi.dev/api/people/?search='+ name ;
   const [dataApi, setApiData]= useState([])
  
   useEffect(() => {
       fetch(API).then(res => res.json()).then (data => {
            console.log(data.results);


            data.results.map(result => <h3 key={result.url}>{result.name}</h3>) 
            setApiData(data);
       })
       
   }, []) 
   return dataApi;
}


