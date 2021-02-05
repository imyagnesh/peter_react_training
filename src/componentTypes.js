// when ever you use hook fust keywork start "use"

// Function Component
// used concept of descructuring in props
const App = ({ text, caption }) => {
    const [stateText, setStateText] = useState(text);
  
    const buttonClick = () => {
      setStateText('Value changed')
    };
  
    return (
      <>
        {/* empty tag consider as a fragment */}
        <h1>{stateText}</h1>
        <h3>{caption}</h3>
        <button onClick={buttonClick}>Click</button>
      </>
    );
  };
  
  // function xyz() {}
  
  let xyz = "Hellos....";
  
  // Stateful Component
  // class component
  
  // Class will rerender only in this 2 schetuation
  // 1. Props change
  // 2. state chage
  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       stateText: props.text,
  //     };
  //   }
  
  //   clickButton = () => {
  //     this.setState({ stateText: "state value changed" });
  //   };
  
  //   render() {
  //     console.log("render");
  //     const { text, caption } = this.props;
  //     const  { stateText } = this.state;
  //     return (
  //       <>
  //         {/* empty tag consider as a fragment */}
  //         <h1>{stateText}</h1>
  //         <h3>{caption}</h3>
  //         <button onClick={this.clickButton}>Click</button>
  //       </>
  //     );
  //   }
  // }
  
  // props
  // you cant change props value. & static
  // we can use to pass data from parent to child
  
  // state
  // its class memory & used for manipulate UI or functionality
  // store temporary data
  