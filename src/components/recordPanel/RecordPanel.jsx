import React from 'react';
import classes from "./RecordPanel.module.css";
import ReadPanel from "../readPanel/ReadPanel";
import WritePanel from "../writePanel/WritePanel";

const RecordPanel = ({records, diaries, labels, recordDelete, recordUpdate, pushRecord}) => {

    return (
        <div className={classes.record_container}>
            <div className={classes.pos}>
                <ReadPanel labels={labels}
                           records={records}
                           recordUpdate={recordUpdate}
                           recordDelete={recordDelete}/>
            </div>
            <WritePanel
                pushRecord={pushRecord}
                diaries={diaries}
                labels={labels}/>
        </div>
    );
};

export default RecordPanel;