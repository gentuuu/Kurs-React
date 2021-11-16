import React from 'react';
import HeaderNavigarion from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button'

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt='logo'/>
        <HeaderNavigarion />
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
);


export default Header;