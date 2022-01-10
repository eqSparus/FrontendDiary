import React from 'react';
import {useParams} from "react-router-dom";
import RecordPanel from "../../recordPanel/RecordPanel";

const RecordPanelId = ({diaries, labels, setRecords, method, recordUpdate, recordDelete, pushRecord}) => {

    const {id} = useParams()
    return (
        <RecordPanel
            diaries={diaries}
            setRecords={setRecords}
            labels={labels}
            records={method(parseInt(id))}
            recordUpdate={recordUpdate}
            recordDelete={recordDelete}
            pushRecord={pushRecord}/>
    );
};

export default RecordPanelId;