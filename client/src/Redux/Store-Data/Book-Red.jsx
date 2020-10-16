export const Buy_book="Buy_book"
const intsta={
    book:15
}
 const reducer=(state=intsta,action)=>{
    switch(action.type){
case Buy_book:return{
    ...state,
    book:state.book-action.info
}
default:
    return state
    }
}
export default reducer