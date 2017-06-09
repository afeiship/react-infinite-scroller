import './style.scss';

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
    return this._wrapper.scrollTop || 0;
  }

  componentAttachEvents(){}

  componentDidMount() {
    const { wrapper, scroller } = this.refs;
    this._wrapper = wrapper;
    this._scroller = scroller;
    this.attachEvents();
  }

  attachEvents(){
    NxDomEvent.on(this._wrapper,'scroll',this._onMove);
  }

  finishInfinte() {
    this.setState({infiniterStatus: 'init'});
  }

  activateInfinite(){
    const {distances, infiniter} = this.props;
    if (infiniter && this._wrapper && this._scroller) {
      const wrapperBound = this._wrapper.getBoundingClientRect();
      const scrollerBound = this._scroller.getBoundingClientRect();
      if (scrollerBound.bottom - wrapperBound.bottom < distances[1]) {
        this.setState({infiniterStatus: 'active'});
      } else {
        this.setState({infiniterStatus: 'init'});
      }
    }
  }

  refresh(){
  }

  getValues(){
    return {
      top: this.scrollTop
    };
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
      onRefresh,onInfinite,onScroll,
      distances,options,
      ...props} = this.props;
    return (
      <section ref='wrapper' {...props} data-role="wrapper" className={classNames('react-n-scroller',className)}>
        <div ref='scroller' data-role='scroller' className="react-n-scroller-content">
          <div className="bd" data-role='body'>
          {children}
          </div>
          {infiniter && createElement(infiniter, {status: this.state.infiniterStatus})}
        </div>
      </section>
    );
  }
}
