
// eslint-disable-next-line react/prop-types
function Phone({height=32, width=32, color="#325876"}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g fill="000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="5">
                <path d="M41.387,38.587l-4.564,5.7A48.167,48.167,0,0,1,19.709,27.179l5.705-4.564a3.877,3.877,0,0,0,1.12-4.6l-5.2-11.71a3.878,3.878,0,0,0-4.52-2.18l-9.9,2.568A3.9,3.9,0,0,0,4.037,11,57.521,57.521,0,0,0,53,59.963a3.9,3.9,0,0,0,4.307-2.877l2.568-9.9a3.881,3.881,0,0,0-2.179-4.52l-11.709-5.2A3.874,3.874,0,0,0,41.387,38.587Z" fill="none" stroke={color}/>
            </g>
        </svg>
	);
}

export default Phone;