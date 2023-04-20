const basicReducer=(storedata={name:'Dinesh'},action)=>{
    if(action.type==='name'){
        return{
            name:action.username
        }
    }
return storedata;
}
export default basicReducer