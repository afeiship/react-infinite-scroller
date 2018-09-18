# react-infinite-scroller
> Native scroller component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    distance: PropTypes.number,
    value: PropTypes.oneOf(STATUS_LIST),
    onChange: PropTypes.func
  };

  static defaultProps = {
    distance: 60,
    value: 'done',
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-infinite-scroller --registry=https://registry.npm.taobao.org
```

```js
import ReactInfiniteScroller from 'react-infinite-scroller';
```

```scss
// customize your styles:
$react-infinite-scroller-options:(
);

@import 'node_modules/react-infinite-scroller/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-infinite-scroller --save
// import : import ReactInfiniteScroller from 'react-infinite-scroller'

class App extends React.Component {
  state = {
    value: 'done',
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
    var t = Date.now();

    return new Promise((resolve) => {
      let items = [];
      for (let index = 0; index < 20; index++) {
        items.push({
          id: index + 1,
          text: 'text-value' + (index + 1)
        });
      };
      resolve(items);
      console.info(
        Date.now() - t
      );
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
          this.setState({ items, value: 'done' });
        });
      });
    } else {
      this.setState({ value: 'nodata' });
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

```
