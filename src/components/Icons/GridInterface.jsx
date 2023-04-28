
// eslint-disable-next-line react/prop-types
function GridInterface({width=48, height=48, color="#dadb45"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeWidth="2">
                <rect height="16" width="16" fill="none" stroke={color} strokeLinecap="square" strokeMiterlimit="10" x="4" y="4"/>
                <rect height="16" width="16" fill="none" strokeLinecap="square" strokeMiterlimit="10" x="28" y="4"/>
                <rect height="16" width="16" fill="none" strokeLinecap="square" strokeMiterlimit="10" x="4" y="28"/>
                <rect height="16" width="16" fill="none" stroke={color} strokeLinecap="square" strokeMiterlimit="10" x="28" y="28"/>
            </g>
        </svg>
	);
}

export default GridInterface;