// eslint-disable-next-line react/prop-types
function Drop({width=48, height=48, color="#dadb45"}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">	
            <g fill="#000000" stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <path d="M8,29C8,19.1,24,3,24,3S40,19.1,40,29A16,16,0,0,1,8,29Z" fill="none" stroke={color}/>
                <path d="M24,35c-1.6,0-6-1.1-6-6" fill="none"/>
            </g>
        </svg>
	);
}
export default Drop;