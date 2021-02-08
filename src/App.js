import React, { useState, useEffect } from 'react';

const App = ({ text, caption }) => {
  const abc = 'inner variable';
  const [state, setState] = useState(`Hello, ${text}`);

  const [stateCaption, setStateCaption] = useState(`Hello, ${caption}`);

  // useEffect life cyle is combination of
  // component did mount
  // -> when you pass empty array as second parameter
  // component did update
  //  => when you dont pass second paramete is will behave as combibation of both
  // component will unmount

  useEffect(() => {
    console.log('component did mount');
    const timer = setTimeout(() => {
      console.log('hello');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // if you want to use component did mount you have to provide empty array
  }, []);

  // without second parameter this method willl every time when any state/prop value change
  // never use useEffect like this way
  // this will degrade the performace of componet
  useEffect(() => {
    console.log('Combination of component did mount and component did update');
  });

  // componennt did update only when state value change
  useEffect(() => {
    console.log('called when only state value change');
  }, [state, stateCaption]);

  const changeText = () => {
    setState('change text');
  };

  const changeCaption = () => {
    setStateCaption('change caption');
  };

  return (
    <div>
      <h1>Hello</h1>
      <h1>{abc}</h1>
      <h1>{state}</h1>
      <h1>{stateCaption}</h1>
      <button onClick={changeText}>Change Text</button>
      <button onClick={changeCaption}>Change Caption</button>
    </div>
  );
};

export default App;

// mouting lifecycle
// -> Constructor -> cant call in function component
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// updateing lifecycle
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate -> Not available in Hooks
// componentDidUpdate

// unmout lifecycle
// -> componentWillUnmount

// error lifecyle
// getDerivedStateFromError => not availabe in hooks
// componentDidCatch => not availabe in hooks

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor");
//     this.state = {};
//   }

//   // on base on state or propvalue if you want to change statevalue you can use this life cycle
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//     // whatever you return is consider as new state;
//     return state;
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate");
//     return true;
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     document.addEventListener("mousemove", () => {
//       console.log("copied");
//     });
//     const title = document.getElementById("title");
//     title.style = "color:red;";

//     this.inteval = setInterval(() => {
//       console.log("hello");
//     }, 1000);
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate");
//     return "getSnapshotBeforeUpdate data";
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("componentDidUpdate");
//     console.log(snapshot);
//   }

//   clickButton = () => {
//     this.setState({ stateText: "value changed" });
//   };

//   componentWillUnmount() {
//     document.removeEventListener("copy");
//     clearInterval(this.inteval);
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     // Example "componentStack":
//     //   in ComponentThatThrows (created by App)
//     //   in ErrorBoundary (created by App)
//     //   in div (created by App)
//     //   in App
//     logComponentStackToMyService(info.componentStack);
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1 id="title">{this.state.stateText}</h1>
//         <h1 id="caption">{this.props.caption}</h1>
//         <button onClick={this.clickButton}>Click</button>
//       </div>
//     );
//   }
// }
