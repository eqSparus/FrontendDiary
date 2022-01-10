import React, {useState} from 'react';
import {CrudAPI} from "../../../API/CrudAPI";
import classes from "./List.module.css";
import PlusButton from "./plusButton/PlusButton";
import ListItem from "./listItem/ListItem";
import svgLabel from '../../../assets/svg/label.svg'
import PushLabelWindow from "../modalWindow/pushLabelWindow/PushLabelWindow";
import UpdateLabelWindow from "../modalWindow/UpdateLabelWindow/UpdateLabelWindow";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ListLabel = ({labels, setLabels}) => {

    const [updateData, setUpdateData] = useState();
    const [activeUpdate, setActiveUpdate] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    const clickActive = (event) => {
        event.preventDefault()
        setActiveModal(!activeModal)
    }


    const updateLabel = (event, title, color, id) => {
        event.preventDefault()

        const crud = new CrudAPI('label')

        crud.update({
            'title': title,
            'color': color
        }, id).then(value => {
            setLabels([...labels.filter(label => label.id !== id), value.data])
        })

    }


    const deleteLabel = (event, id) => {
        event.preventDefault()

        const crud = new CrudAPI('label')

        crud.delete(id).then(() => {
            setLabels(labels.filter(label => label.id !== id))
        })
    }

    return (
        <div className={classes.container}>

            <PlusButton active={clickActive}/>

            <div className={classes.pos}>
                <div className={classes.scroll_box}>
                    <TransitionGroup>
                        {
                            labels.map((label) => (
                                <CSSTransition
                                    key={label.id}
                                    timeout={500}
                                    classNames="item">
                                    <ListItem
                                        data={label}
                                        deleteData={deleteLabel}
                                        setActive={setActiveUpdate}
                                        setUpdateData={setUpdateData}
                                        svgSprite={svgLabel + '#label'}
                                        href={'label'}/>
                                </CSSTransition>

                            ))
                        }
                    </TransitionGroup>

                </div>
            </div>


            <PushLabelWindow setActive={setActiveModal}
                             active={activeModal}
                             setLabels={setLabels}
                             labels={labels}/>

            {activeUpdate
                ? <UpdateLabelWindow setActive={setActiveUpdate}
                                     updateLabel={updateLabel}
                                     label={updateData}
                                     active={activeUpdate}/>
                : <div/>
            }
        </div>
    );
};

export default ListLabel;