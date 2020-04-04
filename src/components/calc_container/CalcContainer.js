import * as React from "react";
import Calc from "../calc/Calc";

class CalcContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeParam = this.handleChangeParam.bind(this);
        this.state = {
            playersCount: 2,
            instructorPrice: 1000,
            shootingGalleryRent: 1000,
            cartridgePrice: 30,
            cartridgePerPlayer: 50,
            gunPrice: 300,
            totalPrice: null,
            pricePerPlayer: null,
            // TODO: hours count
        };
    }

    calcTotalPrice() {
        const {
            playersCount,
            instructorPrice,
            shootingGalleryRent,
            cartridgePrice,
            cartridgePerPlayer,
            gunPrice,
        } = this.state;
        const totalPrice = (
            instructorPrice + shootingGalleryRent +
            (gunPrice * playersCount) +
            (cartridgePrice * cartridgePerPlayer * playersCount)
        );
        return totalPrice
    }

    updateTotal() {
        const {
            playersCount,
        } = this.state;
        const totalPrice = this.calcTotalPrice();
        const pricePerPlayer = Math.round(totalPrice / playersCount);

        this.setState((state) => {
            return {...state, totalPrice: totalPrice, pricePerPlayer: pricePerPlayer};
        });
    }

    componentDidMount() {
        this.updateTotal()
    }

    handleChangeParam(param, value) {
        this.setState({[param]: value}, this.updateTotal);

    }

    render() {
        return (
            <Calc
                playersCount={this.state.playersCount}
                instructorPrice={this.state.instructorPrice}
                shootingGalleryRent={this.state.shootingGalleryRent}
                cartridgePrice={this.state.cartridgePrice}
                cartridgePerPlayer={this.state.cartridgePerPlayer}
                gunPrice={this.state.gunPrice}
                pricePerPlayer={this.state.pricePerPlayer}
                totalPrice={this.state.totalPrice}
                handleChangeParam={this.handleChangeParam}
            />
        );
    }
}

export default CalcContainer
