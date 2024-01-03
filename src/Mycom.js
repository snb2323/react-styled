const Mycom = (props) => {
    return <button className={true && props.className}> {props.children}</button >
}

export default Mycom