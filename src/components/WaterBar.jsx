import barImg from '../assets/water-bar.png';

export default function WaterBar() {

    return (
        <div id="container-bar" style={{ position: 'absolute', zIndex: 2 }}>
            <img src={barImg} width="90px" style={{ position: 'absolute', zIndex: 2 }}/>
            {/* <input type="checkbox" id="water" /> */}
            <label id="label-bar" for="water">
                <div id="fill"></div>
            </label>
            <span id="progress" style={{ color: 'transparent' }}>20%</span>
        </div>
    )
}