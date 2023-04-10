import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({ player, cart, setCart }) => {
    // console.log(player);
    const { strCutout, idPlayer, strNationality, strPlayer } = player;
    const handleAddToCart = () => {
        const info = {
            strCutout, idPlayer, strNationality, strPlayer, quantity: 1
        }
        if (cart?.length) {
            setCart([...cart, info])
            return;
        }
        else {
            setCart([info])
            return;
        }
    }
    const handleBookmartk = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            quantity: 1,
            bookmark: "true",

        }
        // info.quantity = info.quantity + 1;
        // console.log(info);

        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
        // console.log(oldBookmark);
        if (oldBookmark) {
            const isExist = oldBookmark.find(player => player.idPlayer === idPlayer)
            // console.log(isExist);
            if (isExist) {
                isExist.quantity = isExist.quantity + 1;
                localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
            }
            // localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));


        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info]))
        }



        // if (oldBookmark) {
        //     const isExist = oldBookmark.find(player => player.idPlayer === idPlayer);
        //     if (isExist) {
        //         const updatePrice = parseFloat(isExist.quantity);
        //         const newUpdatePrice = updatePrice + 1;
        //         isExist.quantity = newUpdatePrice;
        //         localStorage.setItem("bookmark", JSON.stringify([...oldBookmark]));
        //         return;
        //     }
        //     else {
        //         localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]))

        //     }
        // }
        // else {
        //     localStorage.setItem("bookmark", JSON.stringify([info]))
        //     console.log('naiii')
        // }





        // console.log(JSON.parse(prevBookmark));
    }
    // console.log(cart);
    return (
        <div className='card' data-aos="zoom-in">
            <img className='player-img' src={strCutout} alt="" />
            <p>{strNationality}</p>
            <button className='cart-btn'>Details</button>
            <button onClick={handleAddToCart} className='cart-btn'>Add to Cart</button>
            <button onClick={handleBookmartk} className='cart-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;