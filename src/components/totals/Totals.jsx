import React from "react";

const Totals = (props) => {
    const {
        totalPrice,
        pricePerPlayer,
        playersCount,
    } = props;
    const playerEmojii = '👮‍♂️';
    if (!totalPrice) {
        return (
            <div className={'totals'}>🤷‍♂</div>
        )
    }

    return (
        <div className={'totals'}>
            {playersCount > 1 && <div className={'totals-totalPrice'}>{totalPrice}₽ {Array(playersCount).fill().map(()=> playerEmojii )}</div>}
            <div className={'totals-pricePerplayer'}>{pricePerPlayer}₽ {playerEmojii}</div>
        </div>
    )
};

export default Totals;
