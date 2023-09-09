import React from 'react'
import { useReducer,useState } from 'react';
import { useEffect } from 'react';
import reducer from './reducer';


const initialState={
    isLoading:true,
    query:"",
    data:[],
}
const AppContext=React.createContext();


const AppProvider=({children})=>{
    const [page,setPage]=useState(1)
    const [state,dispatch]=useReducer(reducer,initialState);
    const [search,setSearch]=useState(false)

    let Api=`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`;
    const fetchApiData=async(url)=>{
        try{
          const res=await fetch(url);
          const d=await res.json();
          dispatch({
            type:"GET_DATA",
            payload:{
                data:[...state.data,...d]
            }
           })

        }
        catch(error){
            console.log(error);

        }
    }
    const fetchSearchData=async(url)=>{
        try{
          const res=await fetch(url);
          const d=await res.json();
          dispatch({
            type:"GET_DATA",
            payload:{
                data:d
            }
           })

        }
        catch(error){
            console.log(error);

        }
    }
    const searchPost=(req)=>{
        dispatch({
            type:"SEARCH_POST",
            payload:req,
        })
    }
    const onsubmit=()=>{
        setSearch(true)
        state.query?
        fetchSearchData(`https://api.punkapi.com/v2/beers/?beer_name=${state.query}`):
        "no result"
    }
    const handleInfiniteScroll=async ()=>{
        try {
            if(window.innerHeight + document.documentElement.scrollTop +1 >= 
                document.documentElement.scrollHeight){
                        setPage((prev)=>prev+1)
                }
            
        } catch (error) {
            console.log(error)
            
        }
    }
    console.log(search)
useEffect(()=>{
    if(search===false){
        fetchApiData(Api)
    }
   
},[page])

useEffect(()=>{
    window.addEventListener("scroll",handleInfiniteScroll)
    return ()=>window.removeEventListener("scroll",handleInfiniteScroll)
},[])



   

    return <AppContext.Provider value={{...state,searchPost,onsubmit}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider};