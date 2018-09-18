import './dev.scss';
import ReactInfiniteScroller from './main';

/*===example start===*/

// install: npm install afeiship/react-infinite-scroller --save
// import : import ReactInfiniteScroller from 'react-infinite-scroller'

class App extends React.Component {
  state = {
    value: 'loaded',
    items: []
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
    this._timer = null;
  }

  loadData() {
    return new Promise((resolve) => {
      let items = [];
      for (let index = 0; index < 20; index++) {
        items.push({
          id: index + 1,
          text: 'text-value' + (index + 1)
        });
      };
      resolve(items);
    })
  }

  componentDidMount() {
    this.loadData().then(items => {
      this.setState({ items });
    })
  }

  _onChange = inEvent => {
    let { items } = this.state;
    if (items.length <= 80) {
      this.setState({ value: 'loading' }, () => {
        this.loadData().then(response => {
          items = items.concat(response);
          this.setState({ items, value: 'loaded' });
        });
      });
    } else {
      this.setState({ value: 'complete' });
    }
  };

  render() {
    const { value, items } = this.state;
    return (
      <div className="hello-react-infinite-scroller">
        <ReactInfiniteScroller value={value} onChange={this._onChange} data-length={items.length}>
          {
            items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {item.text}
                </div>
              )
            })
          }
        </ReactInfiniteScroller>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
