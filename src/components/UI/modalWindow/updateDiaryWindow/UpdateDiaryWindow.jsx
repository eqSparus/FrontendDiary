import React, {useState} from 'react';
import ModalWindow from "../ModalWindow";
import classes from "../PushWindow.module.css";

const UpdateDiaryWindow = ({active, setActive, diary, updateDiary}) => {

    const [title, setTitle] = useState(diary.title)

    return (
        <ModalWindow active={active} setActive={setActive}>

            <div className={classes.container_modal}>
                <div className={classes.title}>Редактирование дневника</div>
                <hr className={classes.hr}/>
                <label htmlFor="newTitle">Название</label>
                <input type="text"
                       placeholder="Новое название"
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}/>
                <hr className={classes.hr} style={{marginTop: "10px"}}/>
                <input className={[classes.btn, classes.push].join(' ')}
                       type="button"
                       value="Обновить"
                       disabled={!title}
                       onClick={event => {
                           updateDiary(event, title, diary.id)
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

export default UpdateDiaryWindow;