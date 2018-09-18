import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';
import RCM from 'react-status-manager';

// status list:
const STATUS_LIST = ['done', 'loading', 'nodata'];

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  get scrollY() {
    return window.scrollY;
  };

  get direction() {
    var value = this._lastScrollY - this.scrollY;
    return !!value ? (value / Math.abs(value)) : 0;
  };

  get boundary() {
    const { distance } = this.props;
    return document.documentElement.scrollHeight - (window.innerHeight + this.scrollY) <= distance;
  };

  constructor(inProps) {
    super(inProps);
    this.state = { value: inProps.value };
    this._lastScrollY = this.scrollY;
  }

  componentDidMount() {
    this.attachEvents();
  }

  componentWillUnmount() {
    this.detachEvents();
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  attachEvents() {
    this._scrollRes = NxDomEvent.on(window, 'scroll', this._onScroll);
  }

  detachEvents() {
    this._scrollRes && this._scrollRes.destroy();
  }

  _onScroll = (inEvent) => {
    const { onChange } = this.props;
    const _value = this.state.value;
    const target = { value: 'loading' };
    //sync direction:
    if (this.boundary && this.direction <= 0 && _value !== 'loading') {
      this.setState(target, () => {
        onChange({ target });
      });
    }
    this._lastScrollY = this.scrollY;
  };

  render() {
    const { className, children, value, onChange, ...props } = this.props;
    const _value = this.state.value;

    return (
      <div
        className={classNames('react-infinite-scroller', className)}
        data-status={_value}
        {...props}
      >
        {children}
        <RCM nodeName='footer' className="ft" value={_value} items={STATUS_LIST}>
          <div data-status="done">上拉加载更多</div>
          <div data-status="loading">数据加载中</div>
          <div data-status="nodata">没有更多数据了</div>
        </RCM>
      </div>
    );
  }
}
