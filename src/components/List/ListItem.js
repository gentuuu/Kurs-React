import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ListItem.module.scss";
import Button from '../Button/Button';
import Title from '../Title/Title';

// przed skroceniem props
// const ListItem = (props) => (
//     <li className="listItem__wrapper">
//         <img src={props.image} className="listItem__img" alt={props.name}/>
//         <div>
//             <h2 className="listItem__name">{props.name}</h2>
//             <p className="listItem__description">{props.description}</p>
//             <a href={props.twitterLink} className="listItem__button">Zobacz</a>
//         </div>
//     </li>
// );
// END

//wyswietlanie zawartości listy
const ListItem = ({title, description, image, link}) => {
  
  //sprawdzenie czy w formularzu dodany jest img jesli tak to img jesli nie to div wyswietl
  const ImageTag = image ? 'img' : 'div';

    return(
      <li className={styles.wrapper}>
      {image && <ImageTag src={image} className={image ? styles.image: styles.imageNone} alt={title} /> }
      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link} >
          visit twitter page
        </Button> }
      </div>
    </li>
    );
};

//wymagane dane w tablicy
ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
};

//jak nie ma danych to wyśeietla tekst
ListItem.defaultProps = {
    // description: 'Dominika S',
    image: null,
    link: null,
}

export default ListItem;