import React, {useEffect, useState} from 'react';
import Header from "../UI/nav/Header";
import ActivePanel from "../activePanel/ActivePanel";
import {DataAPI} from "../../API/DataAPI";

const Main = ({setIsLogin}) => {

    const [user, setUser] = useState([])
    const [diaries, setDiaries] = useState([])
    const [labels, setLabels] = useState([])
    const [records, setRecords] = useState([])

    const [openMenu, setOpenMenu] = useState(false)
    const [status, setStatus] = useState(`Сегодня ${new Date().toLocaleDateString()}`)

    useEffect(() => {
        const token = localStorage.getItem("token")
        DataAPI.getDataUser(token)
            .then(value => {
                console.log(value.data)
                setUser(value.data.user)
                setDiaries(value.data.diaries)
                setLabels(value.data.labels)
                setRecords(value.data.records)
            })
    }, [])


    return (
        <div className="container_main">

            <Header
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
                status={status}
                user={user}/>

            <ActivePanel
                user={user}
                setUser={setUser}
                setIsLogin={setIsLogin}
                diaries={diaries}
                labels={labels}
                records={records}
                setDiaries={setDiaries}
                setLabels={setLabels}
                setRecords={setRecords}
                openMenu={openMenu}
                setStatus={setStatus}/>

        </div>
    )
}

export default Main;