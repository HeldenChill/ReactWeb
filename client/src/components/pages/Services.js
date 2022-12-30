import React from "react"
import { useDispatch } from "react-redux"
import useAuthAccount from "../../hooks/useAuthAccount"
import { updateAccountData, PostServerData, FetchServerData,DeleteServerData } from "../../features/AuthProvider"
import Cards from "../Cards"
import { useState } from "react"
import DialogAlert from "../DialogAlert"


const Services = () =>{
    const dispatch = useDispatch();
    const accountData = useAuthAccount()
    const data = accountData.notifications
    const desFeilds = accountData.allPositionFeild

    const [alertOpen, setAlertOpen] = useState(false) 
    const [alertContent, setAlertContent] = useState("")
    const [alertSeverity, setAlertSeverity] = useState("info")

    const deleteServerData = (id) =>{
        setAlertSeverity("success")
        setAlertContent(`Success Delete Notification`)
        setAlertOpen(true)
        DeleteServerData(id, "notification").then(() => FetchServerData("notification").then(() => dispatch(updateAccountData())))
    }

    const addServerData = (notification) =>{
        setAlertSeverity("success")
        setAlertContent(`Success Send Notification`)
        setAlertOpen(true)
        PostServerData(notification,"notification").then(() => FetchServerData("notification").then(() => dispatch(updateAccountData())))
    }

    const onCreateNotification = (notification) => {
        var newNoti = {
            type: notification.type,
            title: notification.title,
            content: notification.content,
            src_position: accountData.accountPosition,
            des_position: notification.des_position
        }
        addServerData(newNoti)
        console.log(newNoti)
    }
    return (
        <>
            <Cards 
            title="Notification" data={data} 
            onDelete={deleteServerData} 
            onCreate={onCreateNotification} 
            desFeilds = {desFeilds}>

            </Cards>
            <DialogAlert open={alertOpen} setOpen={setAlertOpen} content={alertContent} severity={alertSeverity}></DialogAlert>
        </>
      )
}

export default Services;