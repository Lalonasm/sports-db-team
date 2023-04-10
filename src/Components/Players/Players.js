import React from 'react';
import './Players.css';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Players = ({ players, cart, setCart }) => {
    // console.log(players);
    return (
        <div className='cart-container'>
            {
                players.map(player => <SinglePlayer
                    player={player}
                    key={player.idPlayer}
                    cart={cart}
                    setCart={setCart}
                ></SinglePlayer>)
            }
        </div>
    );
};

export default Players;