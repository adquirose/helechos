
// eslint-disable-next-line react/prop-types
function LineChart({width=48, height=48, color="#dadb45"}) {
	
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points="2 39 10 24 16 33 27 9 36 26 46 12" stroke={color} strokeLinecap="butt"/>
            </g>
        </svg>
	);
}

export default LineChart;