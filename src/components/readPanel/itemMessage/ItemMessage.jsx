import React, {useState} from 'react';
import classes from './ItemMessage.module.css'
import bookmark from '../../../assets/svg/bookmark.svg'
import basket from '../../../assets/svg/basket.svg'

const ItemMessage = ({record, label, updateRecord, deleteRecord}) => {

    const [active, setActive] = useState(false)
    const [isBookmark, setIsBookmark] = useState(record.isBookmark)
    const [basketCl, setBasketCl] = useState("black")

    const date = new Date(record.dateCreate)
    const cl = [classes.btn_none]

    const getFormatText = (text) => {
        return text.split('\n').map((str, i) => <p key={`p_${i}`}>{str}</p>)
    }

    if (active) {
        cl.push(classes.btn_active)
    }

    return (
        <div className={classes.message_container}
             onMouseOver={() => setActive(true)}
             onMouseOut={() => setActive(false)}>
            <div>
                {
                    `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
                }
            </div>

            <div>
                {getFormatText(record.textBody)}
            </div>

            <div className={classes.option_message}>
                <button className={cl.join(' ')}
                        onClick={event => {
                            updateRecord(event, !isBookmark, record.id)
                            setIsBookmark(!isBookmark)
                        }}>
                    <svg height="25" width="25" style={{fill: (isBookmark) ? 'orange' : 'black'}}>
                        <use xlinkHref={bookmark + '#bookmark'}/>
                    </svg>
                </button>
                <button className={cl.join(' ')}
                        onClick={event => deleteRecord(event, record.id)}>
                    <svg height="25" width="25"
                         style={{fill: basketCl}}
                         onMouseOver={() => setBasketCl("red")}
                         onMouseOut={() => setBasketCl("black")}>
                        <use xlinkHref={basket + '#basket'}/>
                    </svg>
                </button>
            </div>

            <div className={classes.label} style={{color: label.color}}>
                {label.title}
            </div>
        </div>
    );
};

export default ItemMessage;