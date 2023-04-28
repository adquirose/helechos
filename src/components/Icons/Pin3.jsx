
// eslint-disable-next-line react/prop-types
function Pin3({width=32, height=32, color="#325876"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <path d="M27,12c0,6.8-11,18-11,18 S5,18.9,5,12c0-7,5.7-11,11-11S27,5.1,27,12z" fill="none" stroke={color}/>
                <circle cx="16" cy="12" fill="none" r="3"/>
            </g>
        </svg>
	);
}

export default Pin3;