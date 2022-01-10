import React, {useState} from 'react';
import classes from './RightPanel.module.css'
import ListDiary from "../UI/listPanel/ListDiary";
import ListLabel from "../UI/listPanel/ListLabel";

const RightPanel = ({openMenu, diaries, labels, setLabels, setDiaries, records, setRecords}) => {

    const visible = [classes.container]
    const [flag, setFlag] = useState(false)
    const btnOne = [classes.btn]
    const btnTwo = [classes.btn]

    if (openMenu) {
        visible.push(classes.active)
    }

    if (!flag) {
        btnOne.push(classes.active_btn)
    } else {
        btnTwo.push(classes.active_btn)
    }


    return (

        <div style={{position: "relative"}}>
            <div className={visible.join(' ')}>


                <input type="button"
                       value="Дневники"
                       onClick={() => {
                           setFlag(false)
                       }}
                       className={btnOne.join(' ')}
                       style={{borderRadius: '15px 0 0 0'}}/>
                <input type="button"
                       value="Ярлыки"
                       onClick={() => {
                           setFlag(true)
                       }}
                       className={btnTwo.join(' ')}/>

                {
                    !flag
                        ? <ListDiary diaries={diaries} setDiaries={setDiaries} records={records} setRecords={setRecords}/>
                        : <ListLabel labels={labels} setLabels={setLabels}/>
                }

            </div>
        </div>


    )

}

export default RightPanel;