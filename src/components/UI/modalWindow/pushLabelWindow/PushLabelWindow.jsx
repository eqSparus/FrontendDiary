import React, {useState} from 'react';
import ModalWindow from "../ModalWindow";
import classes from '../PushWindow.module.css'
import {CrudAPI} from "../../../../API/CrudAPI";

const PushLabelWindow = ({active, setActive, setLabels, labels}) => {

    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#00CC00')

    const pushDiary = (event) => {
        event.preventDefault()

        const crud = new CrudAPI('label')
        crud.create({
            'title': title,
            "color": color
        }).then(value => {
            setLabels([...labels, value.data])
            setActive(false)
        })
        setTitle('')
        setColor('#00CC00')
    }


    return (
        <ModalWindow active={active} setActive={setActive}>

            <div className={classes.container_modal}>
                <div className={classes.title}>Добавление ярлыка</div>
                <hr className={classes.hr}/>
                <label htmlFor="newTitle">Название</label>
                <input type="text"
                       placeholder="Название нового ярлыка"
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <label htmlFor="newColor">Цвет</label>
                <input type="color"
                       value={color}
                       onChange={event => setColor(event.target.value)}/>
                <hr className={classes.hr}/>
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

export default PushLabelWindow;