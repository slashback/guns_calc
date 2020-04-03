import React from "react";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

import CountInput from "../count_input/CountInput";
import Totals from "../totals/Totals";

const Calc = (props) => {
    const {
        playersCount,
        instructorPrice,
        shootingGalleryRent,
        cartridgePrice,
        cartridgePerPlayer,
        gunPrice,
        totalPrice,
        pricePerPlayer,
        handleChangeParam,
    } = props;

    const handleChange = (event, param) => {
        console.log("Changed");
        handleChangeParam(param, parseInt(event.target.value, 10));
    };

    return (
        <Container maxWidth={'sm'}>
            <div className={'formContainer'} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                height: '500px',
                justifyContent: 'space-around',
            }}>
                <div className={'totalItem'}>
                    <span className={'formItem-title'}>Итого</span>
                    <Totals
                        totalPrice={totalPrice}
                        pricePerPlayer={pricePerPlayer}
                        playersCount={playersCount}
                    />
                </div>
                    <div className={'formItem'}>
                        <span className={'formItem-title'}>Количество стрелков</span>
                        <CountInput
                            emojii={'👮‍♂️'}
                            count={playersCount}
                            handleChangeCount={(count) => handleChangeParam('playersCount', count)}
                            minValue={1}
                            maxValue={4}
                        />
                    </div>

                <div className={'formItem'}>
                    <span className={'formItem-title'}>Кол-во патронов на человека</span>
                    <Input id="component-simple"
                           value={cartridgePerPlayer || ''}
                           error={!cartridgePerPlayer}
                           style={{width: 45}}
                           onChange={(e) => handleChange(e, 'cartridgePerPlayer')} />
                </div>

                <FormControl>
                    <span className={'formItem-title'}>Цена за пистолет</span>
                    <Input id="component-simple"
                           value={gunPrice || ''}

                           error={!gunPrice}
                           style={{width: 45}}
                           onChange={(e) => handleChange(e, 'gunPrice')} />
                </FormControl>

                <FormControl>
                    <span className={'formItem-title'}>Цена патрона</span>
                    <Input id="component-simple"
                           value={cartridgePrice || ''}
                           error={!cartridgePrice}
                           style={{width: 45}}
                           onChange={(e) => handleChange(e, 'cartridgePrice')} />
                </FormControl>

                <FormControl>
                    <span className={'formItem-title'}>Стоимость инструктора</span>
                    <Input id="component-simple"
                           error={!instructorPrice}
                           value={instructorPrice || ''}
                           style={{width: 45}}
                           onChange={(e) => handleChange(e, 'instructorPrice')} />
                </FormControl>

                <FormControl>
                    <span className={'formItem-title'}>Аренда галереи</span>
                    <Input id="component-simple"
                           error={!shootingGalleryRent}
                           value={shootingGalleryRent || ''}
                           style={{width: 45}}
                           onChange={(e) => handleChange(e, 'shootingGalleryRent')} />
                </FormControl>

            </div>
        </Container>
    );
};

export default Calc
