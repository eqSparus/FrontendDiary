import React from 'react';
import classes from "./NavPanel.module.css";
import calendar from '../../../assets/svg/calendar.svg'
import bookcase from '../../../assets/svg/bookcase.svg'
import bookmarks from '../../../assets/svg/bookmarks.svg'
import setting from '../../../assets/svg/setting.svg'
import exit from '../../../assets/svg/exit.svg'
import ItemNav from "./itemNav/ItemNav";

const NavPanel = ({setStatus,setIsLogin}) => {

    const deleteToken = () => {
        localStorage.removeItem('token')
        setIsLogin(true)
    }


    return (
        <div className={classes.panel_box}>
            <div className={classes.box_container}>


                <ItemNav path="/main/today"
                         tooltip="Сегодня"
                         svgSprite={calendar + '#calendar'}
                         clickStatus={() => setStatus(`Сегодня ${new Date().toLocaleDateString()}`)}/>


                <ItemNav path="/main/all"
                         tooltip="Все записи"
                         svgSprite={bookcase + '#bookcase'}
                         clickStatus={()=>setStatus('Все записи')}/>


                <ItemNav path="/main/bookmarks"
                         tooltip="Закладки"
                         svgSprite={bookmarks + '#bookmarks'}
                         clickStatus={()=>setStatus('Закладки')}/>


                <ItemNav path="/main/setting"
                         tooltip="Настройки"
                         svgSprite={setting + '#setting'}
                         clickStatus={()=>setStatus('Настройки')}/>

                <ItemNav path="/main/exit"
                         tooltip="Выход"
                         svgSprite={exit + '#exit'}
                         clickStatus={()=>deleteToken()}/>
            </div>
        </div>
    );
};

export default NavPanel;