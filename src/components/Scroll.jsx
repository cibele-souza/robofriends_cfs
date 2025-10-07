const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
// it should render whatever is wrapped into this component (in our case, CardList)
// it should render the children in the way we want