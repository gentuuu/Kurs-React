import React from 'react';
import styles from './Button.module.scss';


const Button=({children, href, secondary, ...props}) => {

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <>

        {/* sprawdzanie czy button ma href jesli tak to wyswietl jako link jesli nie to jako button */}
        { href ? 
            (
                <a href={href} className={buttonClass}>
                    {children}
                </a>
            ) : (
                <button className={buttonClass} {...props}>
                    {children}
                </button>
            )
    
        }
        </>
    )


};

export default Button;



//desstruktalizacjs wszystkicch propsow ...props
