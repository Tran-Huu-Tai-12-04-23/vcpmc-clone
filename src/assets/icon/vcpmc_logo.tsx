type IconProps = {
    width?: number;
    height?: number;
};
function Logo(props: IconProps) {
    return (
        <div
            style={{
                height: props.height || 96,
                width: props.width || 96,
                borderRadius: '50%',
                background: 'white',
            }}
        >
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '50%',
                }}
                src="https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/Untitled.png?alt=media&token=0ca5a5d0-8330-4fdc-b078-500560b914bc"
                alt="logo"
            />
        </div>
    );
}

export default Logo;
