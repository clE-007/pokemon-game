import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import Bg1 from '../../assets/bg1.jpg'
import Bg2 from '../../assets/bg2.jpg'
import {dataPokemons} from '../../constants/dataPokemons';

import './../../App.css';
import MenuHeader from '../../components/MenuHeader';

function HomePage({ onChangePage }) {
    const handleClickButton = (page) => {
        console.log('home page');
        onChangePage && onChangePage(page);
    }

    return (
        <>
        <MenuHeader />
        <Header
            title='This is title'
            descr='This is Description!'
            onClickButton={handleClickButton}
        />
        <Layout
            id='first'
            title='SomeTitle'
            urlBg={Bg1}
        >
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
            <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        </Layout>
        <Layout
            id='second'
            title='SomeTitle'
            colorBg='#f5f5f5'
        >
            <div className="flex">
                {
                    dataPokemons.map(({ name, id, img, type, values }) => (
                        <PokemonCard
                            key={id}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                        />
                    ))
                }
            </div>
        </Layout>
        <Layout
            id='third'
            title='SomeTitle'
            urlBg={Bg2}
        >
            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
        </Layout>
        <Footer />
    </>
  );
}

export default HomePage;
