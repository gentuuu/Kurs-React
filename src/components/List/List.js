import React from 'react';
import ListItem from './ListItem';
import styles from "./List.module.scss";


//zawartość listy
const List = ({items}) => (
    // <ul className="listWrapper__wrapper">
       
    //    {/* funkcja wyciaga dane z tablicy
    //    {twitterAccounts.map(item => (
    //        <ListItem
    //             name={item.name}
    //             description={item.description}
    //             image={item.image}
    //             twitterLink={item.twitterLink}
    //         />
    //    ))}
    //     END */}

    //     {/* wysiwttlanie listy */}
    //     {props.items.map(item => (
    //         <ListItem key={item.name} {...item}/>
    //     ))}
       
    // </ul>
    <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h1>asdasd</h1>
    )}
    
  </>

      

);

export default List;

