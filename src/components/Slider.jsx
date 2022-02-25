import { useState, useEffect } from 'react';

const Slider = (props) => {

    const [sliderValue, setSliderValue] = useState(props.value);

    useEffect(()=>{
        setSliderValue(props.value);
    }, [props.value])

    function sliderControl(event){
        setSliderValue(event.target.value);
        props.setValue(sliderValue);
    }

    return(
        <div className='slider-container'>
            <input className='slider' type="range" min={props.end} max={props.start} value={sliderValue} onInput={sliderControl}/>
        </div>
    )
}

export default Slider