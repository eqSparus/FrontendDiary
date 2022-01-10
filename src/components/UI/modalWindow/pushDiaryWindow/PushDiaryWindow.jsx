import React, {useState} from 'react';
import classes from '../PushWindow.module.css'
import ModalWindow from "../ModalWindow";
import {CrudAPI} from "../../../../API/CrudAPI";

const PushDiaryWindow = ({active, setActive, setDiaries, diaries}) => {

    const [title, setTitle] = useState('')

    const pushDiary = (event) => {
        event.preventDefault()

        const crud = new CrudAPI('diary')
        crud.create({
            'title': title
        }).then(value => {
            setDiaries([...diaries, value.data])
            setActive(false)
        })
        setTitle('')
    }

    return (
        <ModalWindow active={active} setActive={setActive}>

            <div className={classes.container_modal}>
                <div className={classes.title}>Добавление дневника</div>
                <hr className={classes.hr}/>
                <label htmlFor="newTitle">Название</label>
                <input type="text"
                       placeholder="Название нового дневника"
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <hr className={classes.hr} style={{marginTop:"10px"}}/>
                <input className={[classes.btn, classes.push].join(' ')}
                       type="button"
                       value="Добавить"
                       disabled={!title}
                       onClick={event => pushDiary(event)}/>
                <input className={[classes.btn, classes.none].join(' ')}
                       type="button"
                       value="Отмена"
                       onClick={() => setActive(false)}/>
            </div>

        </ModalWindow>
    );
};

export default PushDiaryWindow;