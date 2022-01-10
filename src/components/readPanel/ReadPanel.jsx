import React from 'react';
import classes from './ReadPanel.module.css'
import ItemDate from "./itemDate/ItemDate";

const ReadPanel = ({labels, records, recordDelete, recordUpdate}) => {

    const getSetDate = () => {
        return Array.from(new Set(records
            .sort((r1, r2) => new Date(r1.dateCreate) - new Date(r2.dateCreate))
            .map(record => new Date(record.dateCreate).toDateString())))

    }

    return (
        <div className={classes.scroll_con}>
            {
                (getSetDate().length === 0)
                        ? <div className={classes.empty_record}>Записей нет</div>
                        : <div/>
            }
            {
                getSetDate().map((date, index) => (
                    <ItemDate key={index}
                              date={date}
                              records={records}
                              labels={labels}
                              recordUpdate={recordUpdate}
                              recordDelete={recordDelete}/>
                ))
            }
        </div>
    )
}

export default ReadPanel;