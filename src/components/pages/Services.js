import React from "react"
import { useDispatch } from "react-redux"
import useAuthAccount from "../../hooks/useAuthAccount"
import { deleteNotification } from "../../features/AuthProvider"
import Cards from "../Cards"

const Services = () =>{
    const dispatch = useDispatch();
    const data = useAuthAccount().notifications

    const deleteServerData = (id) =>{
        dispatch(deleteNotification(id))
    }
    return (
        <>
            <Cards title="Notification" data={data} onDelete={deleteServerData}></Cards>
        </>
      )
}

export default Services;