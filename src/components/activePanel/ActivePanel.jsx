import React from 'react';
import classes from "./ActivePanel.module.css";
import NavPanel from "../UI/nav/NavPanel";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RightPanel from "../rightPanel/RightPanel";
import RecordPanel from "../recordPanel/RecordPanel";
import RecordPanelId from "../readPanel/RecordPanelId/RecordPanelId";
import {CrudAPI} from "../../API/CrudAPI";
import MenuSetting from "../menuSetting/MenuSetting";

const ActivePanel = ({
                         user,
                         setUser,
                         setIsLogin,
                         diaries,
                         labels,
                         records,
                         setDiaries,
                         setLabels,
                         setRecords,
                         openMenu,
                         setStatus
                     }) => {

    const deleteRecord = (event, id) => {
        event.preventDefault()
        const crud = new CrudAPI('record')
        crud.delete(id).then(() => {
            setRecords(records.filter(record => record.id !== id))
        })
    }

    const updateBookmarkRecord = (event, isBookmark, id) => {
        event.preventDefault()
        const crud = new CrudAPI('record')
        crud.update({
            'bookmark': isBookmark
        }, id).then(value => {
            setRecords([...records.filter(record => record.id !== id), value.data])
        })
    }

    const pushRecord = (event, data) => {
        event.preventDefault()

        const crud = new CrudAPI('record')
        crud.create(data).then(value => {
            setRecords([...records, value.data])
        })
    }

    const getTodayRecord = () => {
        return records.filter(record => new Date(record.dateCreate).toDateString() === new Date().toDateString())
    }

    const getRecordByBookmark = () => {
        return records.filter(record => record.isBookmark === true)
    }

    const getLabelRecord = (id) => {

        const label = labels.find(l => l.id === id)
        if (label !== undefined) {
            setStatus(`Дневник ${label.title}`)
        }
        return records.filter(record => record.labelId === id)
    }

    const getDiaryRecord = (id) => {
        const diary = diaries.find(d => d.id === id)
        if (diary !== undefined) {
            setStatus(`Дневник ${diary.title}`)
        }
        return records.filter(record => record.diaryId === id)
    }


    return (

        <BrowserRouter>

            <div className={classes.panel_container}>

                <NavPanel setIsLogin={setIsLogin} setStatus={setStatus}/>

                <Switch>
                    <Route exact path="/main/today">
                        <RecordPanel records={getTodayRecord()}
                                     labels={labels}
                                     diaries={diaries}
                                     setRecords={setRecords}
                                     recordUpdate={updateBookmarkRecord}
                                     recordDelete={deleteRecord}
                                     pushRecord={pushRecord}/>
                    </Route>
                    <Route path="/main/all">
                        <RecordPanel records={records}
                                     labels={labels}
                                     diaries={diaries}
                                     setRecords={setRecords}
                                     recordUpdate={updateBookmarkRecord}
                                     recordDelete={deleteRecord}
                                     pushRecord={pushRecord}/>
                    </Route>
                    <Route path="/main/bookmarks">
                        <RecordPanel records={getRecordByBookmark()}
                                     labels={labels}
                                     diaries={diaries}
                                     setRecords={setLabels}
                                     recordUpdate={updateBookmarkRecord}
                                     recordDelete={deleteRecord}
                                     pushRecord={pushRecord}/>
                    </Route>
                    <Route path="/main/diary/:id">
                        <RecordPanelId
                            diaries={diaries}
                            labels={labels}
                            setRecords={setRecords}
                            method={getDiaryRecord}
                            recordUpdate={updateBookmarkRecord}
                            recordDelete={deleteRecord}
                            pushRecord={pushRecord}/>
                    </Route>
                    <Route path="/main/label/:id">
                        <RecordPanelId
                            diaries={diaries}
                            labels={labels}
                            setRecords={setRecords}
                            method={getLabelRecord}
                            recordUpdate={updateBookmarkRecord}
                            recordDelete={deleteRecord}
                            pushRecord={pushRecord}/>
                    </Route>

                    <Route path="/main/setting">
                        <MenuSetting user={user} setUser={setUser}/>
                    </Route>
                </Switch>


                <RightPanel openMenu={openMenu}
                            diaries={diaries}
                            setDiaries={setDiaries}
                            labels={labels}
                            setLabels={setLabels}
                            records={records}
                            setRecords={setRecords}/>

            </div>
        </BrowserRouter>
    );
};

export default ActivePanel;