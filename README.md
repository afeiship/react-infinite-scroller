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

```
