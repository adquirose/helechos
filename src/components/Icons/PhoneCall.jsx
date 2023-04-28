// eslint-disable-next-line react/prop-types
function PhoneCall({height=32, width=32, color="#325876"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">	
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <path d="M18,2A12,12,0,0,1,30,14" fill="none"/>
                <path d="M24,14a6,6,0,0,0-6-6" fill="none"/>
                <path d="M20.693,19.293l-2.282,2.853a24.077,24.077,0,0,1-8.557-8.557l2.853-2.282a1.939,1.939,0,0,0,.56-2.3l-2.6-5.855A1.939,1.939,0,0,0,8.407,2.062L3.457,3.346A1.95,1.95,0,0,0,2.018,5.5,28.761,28.761,0,0,0,26.5,29.982a1.95,1.95,0,0,0,2.153-1.439l1.284-4.95a1.939,1.939,0,0,0-1.089-2.258l-5.855-2.6A1.939,1.939,0,0,0,20.693,19.293Z" fill="none" stroke={color}/>
            </g>
        </svg>
	);
}

export default PhoneCall;