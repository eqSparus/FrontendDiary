import React from 'react';
import classes from "./Header.module.css";
import avatar from '../../../assets/image/avatar.png'
import menu from '../../../assets/svg/menu.svg'

const Header = ({setOpenMenu, openMenu, status, user}) => {

    return (
        <div className="not_copy">
            <div className={classes.container_header}>
                <div className={classes.menu_user}>
                    <div className={classes.avatar_box}>
                        <img className={classes.avatar} src={avatar} alt="avatar"/>
                    </div>
                    <div className={classes.text_box}>
                        <p>
                            {user.username}
                        </p>
                    </div>
                </div>

                <div className={classes.date_vis}>{status}</div>

                <button className={classes.visible_list}
                        onClick={() => setOpenMenu(!openMenu)}>
                    <svg height="20" width="20">
                        <use xlinkHref={menu + '#menu'}/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;