import React, { useEffect, useState } from 'react';
import './Home.css'
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'


const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    // console.log(Players);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))
    }, [search]);
    const handleDelete = (id) => {
        const leftPlayer = cart.filter(player => player.idPlayer !== id);
        setCart(leftPlayer);
        toast("Wow deleted is very  easy!");
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e) => setSearch(e.target.value)}
                        type="text" className='search-input' />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>

                </div>
                <div className='right-side'>
                    <div className="cart">
                        <p>This {cart?.length}</p>

                        {
                            cart.map(player =>
                                <div className="cart-info-container">
                                    <li>{player.idPlayer}</li>
                                    <button onClick={() => handleDelete(player.idPlayer)} className='delete-btn'>x</button><ToastContainer />
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;