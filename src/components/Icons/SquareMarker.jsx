// eslint-disable-next-line react/prop-types
function SquareMarker({width=48, height=48, color="#dadb45"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points=" 18,34 10,34 4,46 44,46 38,34 30,34 "/>
                <circle cx="24" cy="13" fill="none" r="11" stroke={color}/>
                <line fill="none" stroke={color} x1="24" x2="24" y1="24" y2="38"/>
            </g>
        </svg>
	)
}

export default SquareMarker;