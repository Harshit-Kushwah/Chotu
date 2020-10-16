import {Buy_book} from './Booktype'

export const sell=(num=1)=>{
    return{
        type:Buy_book,
        info:num
    }
}