import React, {useState} from 'react';
import ListItem from "./listItem/ListItem";
import classes from './List.module.css'
import {CrudAPI} from "../../../API/CrudAPI";
import PlusButton from "./plusButton/PlusButton";
import svgDiary from '../../../assets/svg/diary.svg'
import PushDiaryWindow from "../modalWindow/pushDiaryWindow/PushDiaryWindow";
import UpdateDiaryWindow from "../modalWindow/updateDiaryWindow/UpdateDiaryWindow";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ListDiary = ({diaries, setDiaries, records, setRecords}) => {

    const [updateData, setUpdateData] = useState();
    const [activeUpdate, setActiveUpdate] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    const clickActive = (event) => {
        event.preventDefault()
        setActiveModal(true)
    }


    const deleteDiary = (event, id) => {
        event.preventDefault()

        const crud = new CrudAPI('diary')
        crud.delete(id).then(() => {
            setDiaries(diaries.filter(d => d.id !== id))
            setRecords(records.filter(r => r.diaryId !== id))
        })
    }


    const updateDiary = (event, title, id) => {
        event.preventDefault()
        const crud = new CrudAPI('diary')
        crud.update({
            'title': title
        }, id).then(value => {
            setDiaries([...diaries.filter(d => d.id !== id), value.data])
        })

    }

    return (
        <div className={classes.container}>

            <PlusButton active={clickActive}/>

            <div className={classes.pos}>

                <div className={classes.scroll_box}>
                    <TransitionGroup>
                        {
                            diaries.map((diary) => (
                                <CSSTransition
                                    key={diary.id}
                                    timeout={500}
                                    classNames="item">
                                    <ListItem
                                        data={diary}
                                        deleteData={deleteDiary}
                                        setActive={setActiveUpdate}
                                        svgSprite={svgDiary + '#diary'}
                                        setUpdateData={setUpdateData}
                                        href={'diary'}/>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </div>
            </div>


            <PushDiaryWindow active={activeModal}
                             setActive={setActiveModal}
                             setDiaries={setDiaries}
                             diaries={diaries}/>

            {activeUpdate
                ? <UpdateDiaryWindow diary={updateData}
                                     updateDiary={updateDiary}
                                     active={activeUpdate}
                                     setActive={setActiveUpdate}/>
                : <div/>
            }

        </div>
    );
};

export default ListDiary;