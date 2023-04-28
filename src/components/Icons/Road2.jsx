// eslint-disable-next-line react/prop-types
function Road2({width=48, height=48, color="#dadb45"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" stroke={color} x1="4" x2="16" y1="44" y2="4"/>
                <line fill="none" stroke={color} x1="32" x2="44" y1="4" y2="44"/>
                <line fill="none" x1="24" x2="24" y1="10" y2="14"/>
                <line fill="none" x1="24" x2="24" y1="22" y2="26"/>
                <line fill="none" x1="24" x2="24" y1="34" y2="38"/>
            </g>
        </svg>
	);
}

export default Road2;