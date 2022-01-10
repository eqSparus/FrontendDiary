import React, {useState} from 'react';
import ModalWindow from "../ModalWindow";
import classes from "../PushWindow.module.css";

const UpdateLabelWindow = ({active, setActive, label, updateLabel}) => {

    const [title, setTitle] = useState(label.title)
    const [color, setColor] = useState(label.color)

    return (
        <ModalWindow active={active} setActive={setActive}>

            <div className={classes.container_modal}>
                <div className={classes.title}>Редактирование ярлыка</div>
                <hr className={classes.hr}/>
                <label htmlFor="newTitle">Название</label>
                <input type="text"
                       placeholder="Новое название"
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <label htmlFor="newColor">Цвет</label>
                <input type="color"
                       value={color}
                       onChange={event => setColor(event.target.value)}/>
                <hr className={classes.hr}/>
                <input className={[classes.btn, classes.push].join(' ')}
                       type="button"
                       value="Обновить"
                       disabled={!title}
                       onClick={event => {
                           updateLabel(event, title, color, label.id)
                           setActive(false)
                       }}/>
                <input className={[classes.btn, classes.none].join(' ')}
                       type="button"
                       value="Отмена"
                       onClick={() => setActive(false)}/>
            </div>

        </ModalWindow>
    );
};

export default UpdateLabelWindow;