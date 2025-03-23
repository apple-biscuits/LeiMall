import axios from '@/api/base'
import type {ISearchShopListData} from '@/types/search'


export function getSearchShopListData(keyword:string,page?:number,limit?:number){
   return axios.get<ISearchShopListData,ISearchShopListData>('/search',{
        params:{
            keyword,
            page,
            limit
        }
    })
}