import React,{PureComponent, createElement} from 'react';

import NxBrowser from 'next-browser';
import NxDebounceThrottle from 'next-debounce-throttle';
import NxDomEvent from 'next-dom-event';
import PropTypes from 'prop-types';
import ReactEventEmitter from 'react-event-emitter';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const INNER_STATUS = ['init', 'active', 'running'];

export default class extends ReactEventEmitter{
  /*===properties start===*/
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
  /*===properties end===*/

  constructor(props) {
    super(props);
    const {refresherStatus, infiniterStatus} = props;
    this.state = {
      refresherStatus,
      infiniterStatus
    };
  }

  get scrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  get wrapperBound(){
    return document.body.getBoundingClientRect();
  }

  get scrollerBound(){
    return this._scroller.getBoundingClientRect();
  }

  refresh(){
  }

  getValues(){
    return {
      top: this.scrollTop
    };
  }

  componentAttachEvents(){}

  componentWillReceiveProps(inNextProps) {
    this.setState(inNextProps);
  }

  componentDidMount() {
    const { scroller } = this.refs;
    this._scroller = scroller;
    this.attachEvents();
  }

  attachEvents(){
    this._scrollRes = NxDomEvent.on( window ,'scroll',this._onMove);
  }


  componentWillUnmount() {
    super.componentWillUnmount();
    this._scrollRes.destroy();
  }

  finishInfinte() {
    const isInnerStatus = INNER_STATUS.indexOf(this.state.infiniterStatus) > -1;
    if(isInnerStatus){
      this.setState({infiniterStatus: 'init'});
    }
  }

  finishPullToRefresh(){}

  scrollTo(inScrollX,inScrollY,inDuration){
    //todo: will implement more parames:
    this._wrapper.scrollTop = inScrollY;
  }

  activateInfinite(){
    const {distances, infiniter} = this.props;
    const isInnerStatus = INNER_STATUS.indexOf(this.state.infiniterStatus) > -1;
    if (infiniter && isInnerStatus && this._scroller) {
      const wrapperBound = this.wrapperBound;
      const scrollerBound = this.scrollerBound;
      if (scrollerBound.bottom - wrapperBound.bottom < distances[1]) {
        this.setState({infiniterStatus: 'active'});
      } else {
        this.setState({infiniterStatus: 'init'});
      }
    }
  }

  _onMove = (inEvent) =>{
    const {onScroll} = this.props;
    const {infiniterStatus} = this.state;
    this.activateInfinite();

    onScroll( inEvent );
    this.fire('scroll',inEvent);
    if(infiniterStatus === 'init'){
      this._onEnd(inEvent);
    }
  };

  _onEnd = NxDebounceThrottle.debounce((inEvent)=>{
    let {infiniterStatus} = this.state;
    let {onInfinite,onScrollEnd} = this.props;
    if (infiniterStatus === 'active') {
      this.setState({infiniterStatus: 'running'},()=>{
        onInfinite.call(this, this);
      });
    }
    onScrollEnd (inEvent);
    this.fire('scrollEnd',inEvent);
  },this.props.options.scrollingInterval);

  render(){
    const {
      className,children,
      refresher,infiniter,
      refresherStatus,infiniterStatus,
      onRefresh,onInfinite,onScroll,onScrollEnd,
      distances,options,
      ...props} = this.props;
    return (
      <section ref='scroller' data-role='scroller' className="react-n-scroller">
        <div className="bd" data-role='body'>
        {children}
        </div>
        {infiniter && createElement(infiniter, {status: this.state.infiniterStatus})}
      </section>
    );
  }
}
