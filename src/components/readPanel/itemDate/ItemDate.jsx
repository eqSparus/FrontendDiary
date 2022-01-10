import React from 'react';
import classes from "./ItemDate.module.css";
import ItemMessage from "../itemMessage/ItemMessage";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ItemDate = ({date, records, labels, recordDelete, recordUpdate}) => {

    const nameDay = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    const getNameDay = (numberDay) => {
        return nameDay[numberDay]
    }

    const getDate = () => {
        return new Date(date)
    }

    const getLabel = (labelId) => {

        const labelItem = labels.filter(label => label.id === labelId)

        if (labelItem[0] !== undefined) {
            return labelItem[0];
        }
        return {
            'title': '',
            'color': 'transparent'
        }
    }

    return (
        <div>
            <div className={classes.box_date}>
                {`${getDate().toLocaleDateString()} ${getNameDay(getDate().getDay())}`}
            </div>

            <div>
                <TransitionGroup>
                    {
                        records.filter(record => new Date(record.dateCreate).toDateString() === getDate().toDateString())
                            .sort((r1, r2) => new Date(r1.dateCreate) - new Date(r2.dateCreate))
                            .map(record => (
                                <CSSTransition
                                    key={record.id}
                                    timeout={500}
                                    classNames="item">
                                    <ItemMessage
                                        record={record}
                                        label={getLabel(record.labelId)}
                                        deleteRecord={recordDelete}
                                        updateRecord={recordUpdate}/>
                                </CSSTransition>
                            ))
                    }
                </TransitionGroup>
            </div>
        </div>
    );
};

export default ItemDate;