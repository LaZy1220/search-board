import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { queryPositions } from "./position-slice"

export const useFetchPositions = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(queryPositions())
    },[dispatch])
}