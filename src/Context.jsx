import React from 'react'
import { useReducer } from 'react';
import { useEffect ,useState} from 'react';
import reducer from './reducer';

let Api="https://api.punkapi.com/v2/beers";
const initialState={
    isLoading:true,
    query:"",
    data:[],
}
const AppContext=React.createContext();


const AppProvider=({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initialState);
    const fetchApiData=async(url)=>{
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
        state.query?
        fetchApiData(`${Api}/?beer_name=${state.query}`):
        "no result"
    }
useEffect(()=>{
    fetchApiData(Api)
},[])



   

    return <AppContext.Provider value={{...state,searchPost,onsubmit}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider};