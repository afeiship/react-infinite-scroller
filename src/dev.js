import './dev.scss';
import ReactWindowScroller from './main';

/*===example start===*/

// install: npm install afeiship/react-window-scroller --save
// import : import ReactWindowScroller from 'react-window-scroller'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-window-scroller">
        <ReactWindowScroller ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
