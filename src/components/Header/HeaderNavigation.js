import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () =>(
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}><NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/">Twitter</NavLink></li>
            <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/articles">Articles</NavLink></li>
            <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/notes">Notes</NavLink></li>
        </ul>
    </nav>
    
);

export default HeaderNavigation;

// Link strona nie jest pobierana z servera tylko z plików js zamiast href to uzywamy to mozemy uzywać przy <a>
// NavLink uzywamy przy menu nawigacji
//exact nie pobiera calej sciezki elementu 