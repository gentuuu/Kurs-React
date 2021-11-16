import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AppContext from '../../context';

// import MyComponent from './components/MyComponents/MyComponents';



// const App = () => (

    // <div className="wrapper">
    //     <h1 className="mainHeader">Hallo World</h1>
    //     <h2 className="secondaryHeader">Hallo Domii</h2>
    // </div>
    // podstawowa wersja 
    // <div>
    //     <MyComponent />
    //     <ListWrapper />
    // </div>
// );


// const initialStateItems =[
//     {
//         image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
//         name: 'Dan Abramov',
//         description: 'Working on @reactjs. The demo guy.',
//         twitterLink: 'https://twitter.com/dan_abramov',
//     },
//     {
//         image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
//         name: 'Ryan Florence',
//         description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
//         twitterLink: 'https://twitter.com/ryanflorence',
//     },
//     {
//         image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
//         name: 'Michael Jackson',
//         description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
//         twitterLink: 'https://twitter.com/mjackson',
//     },
//     {
//         image: 'https://s3.eu-central-1.amazonaws.com/eduweb-image/blacksquare_01+(1).JPG',
//         name: 'Kent C. Dodds',
//         description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
//         twitterLink: 'https://twitter.com/kentcdodds',
//     },
// ];

//klasa
class Root extends React.Component{

    state ={
        // items: [...initialStateItems],
        twitter: [],
        article: [],
        note: [],
        isModalOpen: false,
        
    }

    addItem = (event, newItem)=>{
        //zapobiega odswiezaniu sie strony
        event.preventDefault();

        this.setState(prevState => ({
          [newItem.type]: [...prevState[newItem.type], newItem],
        }));

        this.closeModal();

        // const newItem = {
        //     name:event.target[0].value,
        //     twitterLink:event.target[1].value,
        //     image:event.target[2].value,
        //     description:event.target[3].value,
        // }

        // this.setState(prevState => ({
        //     items: [...prevState.items, newItem],
        // }));

        // //resetuje formularz
        // event.target.reset();

        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        // console.log(event.target[2].value);
        // console.log(event.target[3].value);
    };

    openModal = () => {
        this.setState({
          isModalOpen: true,
        })
      }
      
      closeModal = () => {
        this.setState({
          isModalOpen: false,
        })
      }

    render() {
        const { isModalOpen } = this.state;
        const contextElemets = {
          ...this.state,
          addItem : this.addItem,
        }
        
        return (
          <BrowserRouter>
            <AppContext.Provider value={contextElemets}>
              <Header openModalFn={this.openModal} />
              <Switch>
                <Route exact path="/" component={TwittersView} />
                <Route path="/articles" component={ArticlesView} />
                <Route path="/notes" component={NotesView} />
              </Switch>
              { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
            </AppContext.Provider>
          </BrowserRouter>
        );
      }

}

export default Root;


// exact otwiera podstone w nowej scieżce
// Switch sciezki nie pobierają stron z poprednim linkiem
// Route nowe sciezki
// BrowserRouter maneu sciezki
