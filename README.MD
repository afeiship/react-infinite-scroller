# react-n-scroller
> Native scroller component for react.


## properties:
```javascript

  static propTypes = {
    options: PropTypes.object,
    className:PropTypes.string,
    refresherStatus: PropTypes.string,
    infiniterStatus: PropTypes.string,
    onRefresh: PropTypes.func,
    onInfinite: PropTypes.func,
    onScroll: PropTypes.func,
    onScrollEnd: PropTypes.func,
    refresher: PropTypes.func,
    infiniter: PropTypes.func,
    distance: PropTypes.array,
  };

  static defaultProps = {
    options: {
      scrollingInterval: 100
    },
    refresherStatus: 'init',
    infiniterStatus: 'init',
    onRefresh: noop,
    onInfinite: noop,
    onScroll: noop,
    onScrollEnd: noop,
    refresher: null,
    infiniter: null,
    distances: [50, 50]
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-n-scroller --save
// import : import ReactNScroller from 'react-n-scroller'
class Infiniter extends React.PureComponent{
  render(){
    const {status} = this.props;
    return (
      <ReactStatusManager className='react-infiniter' status={status} statusList={['init','active','running','nomore']}>
        <span>上滑加载</span>
        <span>数据加载中...</span>
        <span>数据加载中...</span>
        <span>没有更多数据啦</span>
      </ReactStatusManager>
    );
  }
}


class App extends React.Component{
  state = {
    items:this.generateItems()
  };
  generateItems(startIndex){
    let result = [];
    startIndex = startIndex || 0;
    for(let i=startIndex; i<10; i++){
      result.push({
        text:'test' + i
      });
    }
    return result;
  }

  _onInfinite = e => {
    setTimeout( ()=>{
      this.setState({
        items: this.state.items.concat(this.generateItems(0))
      },()=>{
        this.refs.scroller.finishInfinte();
      })
    } ,1000);
  };

  render(){
    const {items} = this.state;
    return (
      <div className="hello-react-n-scroller">
        <ReactNScroller distances={[0,1200]} ref='scroller' infiniter={Infiniter} onInfinite={this._onInfinite}>
          {
            items.map((item,index)=>{
              return <div key={index} className="item"> {item.text} </div>
            })
          }
        </ReactNScroller>
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

