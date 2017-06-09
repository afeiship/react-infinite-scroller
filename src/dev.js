import './dev.scss';

import ReactNScroller from './main';
import ReactStatusManager from 'react-status-manager';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
