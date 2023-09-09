const reducer=(state,action)=>{
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                data:[...action.payload.data]
            };
        case "SEARCH_POST":
            return{
                ...state,
                query:action.payload
            }
    }
   
}
export default reducer;