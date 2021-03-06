const Button = (props) => {
    // props is an object

    const {onClickFunction, buttonText}=props;
    return (
        <button
            onClick={onClickFunction}
        >
            {buttonText}
            button
        </button>
    )
}

export default Button;