import React, {useState} from 'react';
import classes from './WritePanel.module.css'
import sendSvg from '../../assets/svg/send.svg'
import labelsSvg from '../../assets/svg/labels.svg'

const WritePanel = ({diaries, labels, pushRecord}) => {


    const [text, setText] = useState('')
    const [idLabel, setIdLabel] = useState()
    const [idDiary, setIdDiary] = useState()

    const color = (idLabel === undefined || isNaN(idLabel))
        ? "transparent"
        : labels.filter(lab => lab.id === parseInt(idLabel))[0].color


    const countWords = () => {
        if (text === '') {
            return 0
        } else {
            return text.match(/[\wа-я]+/ig).length;
        }
    }

    return (
        <div className={classes.write_container}>


            <div className={classes.option_container}>
                <div className={classes.words}>Слов:{countWords()}</div>

                <svg height="25" width="25" style={{fill: color}}>
                    <use xlinkHref={labelsSvg + '#labels'}/>
                </svg>

            </div>

            <hr className={classes.hr}/>

            <div className={classes.option_container}>
                <select
                    onChange={event => setIdDiary(event.target.value)}
                    style={{marginRight: "10px"}}>
                    <option selected>Добавить запись в дневник</option>
                    {
                        diaries.map(diary => (<option key={diary.id} value={diary.id}>{diary.title}</option>))
                    }
                </select>

                <select
                    defaultValue={undefined}
                    onChange={event => setIdLabel(event.target.value)}
                    style={{marginLeft: "10px"}}>
                    <option selected>Без ярлыка</option>
                    {
                        labels.map(label => (
                            <option key={label.id} value={label.id}>{label.title}</option>
                        ))
                    }
                </select>
            </div>


            <textarea className={classes.content}
                      value={text}
                      onChange={event => setText(event.target.value)}/>

            <button className={classes.push_record}
                    disabled={!idDiary || !text || idDiary === "Добавить запись в дневник"}
                    onClick={event => {
                        pushRecord(event, {
                            'textBody': text,
                            'dateCreate': new Date().toJSON(),
                            'diaryId': idDiary,
                            'bookmark': false,
                            'labelId': (idLabel === "Без ярлыка") ? undefined : idLabel
                        })
                        setText('')
                    }}>
                <svg height="20" width="20">
                    <use xlinkHref={sendSvg + '#send'}/>
                </svg>
            </button>
        </div>
    );
};

export default WritePanel;