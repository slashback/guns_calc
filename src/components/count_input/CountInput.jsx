import * as React from "react";

const CountInput = (props) => {
    const {
        emojii,
        count,
        handleChangeCount,
        minValue,
        maxValue,
    } = props;
    const allowAdd = count < maxValue;
    const allowRemove = count > minValue;
    const emojiiSpan = (<span>{emojii}</span>);
    const handleAdd = () => handleChangeCount(count + 1);
    const handleRemove = () => handleChangeCount(count - 1);

    return (
        <div className={'count_input'}>
            <div onClick={() => handleRemove()} style={{width: '37px'}}>{ allowRemove && '➖'}</div>
            <div className={'items'}>
                {Array(count).fill().map(()=> emojiiSpan )}
            </div>
            { allowAdd && <div onClick={() => handleAdd()}>➕</div>}
        </div>
    )
};

export default CountInput
