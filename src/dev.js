import './dev.scss';
import ReactInfiniteScroller from './main';

/*===example start===*/

// install: npm install afeiship/react-infinite-scroller --save
// import : import ReactInfiniteScroller from 'react-infinite-scroller'

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
      <div className="hello-react-infinite-scroller">
        <ReactInfiniteScroller ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
