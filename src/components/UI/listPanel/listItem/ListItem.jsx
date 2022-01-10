import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from './ListItem.module.css'
import dots from '../../../../assets/svg/dots.svg'

const ListItem = ({data, deleteData, svgSprite, setActive,setUpdateData,href}) => {

    const [visible, setVisible] = useState(false)
    const cl = [classes.menu_item]

    const visibleMenu = (event) => {
        event.preventDefault()
        setVisible(!visible)
    }

    if (visible) {
        cl.push(classes.menu_item_active)
    }

    return (
        <div className={classes.item}>
            <div className={classes.item_container}>
                <NavLink to={`/main/${href}/${data.id}`} className={classes.diary_container}>
                    <svg height="30" width="30" style={{fill: data.color}}>
                        <use xlinkHref={svgSprite}/>
                    </svg>
                    <div className={classes.title}>{data.title}</div>
                </NavLink>
                <button onClick={(event => visibleMenu(event))}>
                    <svg height="20" width="20">
                        <use xlinkHref={dots + '#dots'}/>
                    </svg>
                </button>
            </div>

            <div style={{position:"relative"}}>
                <div className={cl.join(' ')} onMouseOut={event => visibleMenu(event)}>
                    <div className={classes.menu_container}>
                        <input type="button"
                               value="Редактировать"
                               onClick={() => {
                                   setActive(true)
                                   setUpdateData(data)
                               }}/>
                        <input type="button"
                               value="Удалить"
                               onClick={event => deleteData(event, data.id)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;