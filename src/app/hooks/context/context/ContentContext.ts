"use client"
import { createContext } from "react";
interface content{
  contentId: string,
  setContentId: (contentId:string)=>void
  toggleTheme:()=>void
}
const contentContext = createContext <content>({
  contentId:'',
  setContentId:()=>{},
  toggleTheme:()=>{}
})

export default contentContext