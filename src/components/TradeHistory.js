import React, { Component } from 'react';
import '../App.css';
import OrderBookLi from './OrderBookLi';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Minus } from '../assets/minus.svg';
import ScrollingOrders from './ScrollingOrders';
class TradeHistory extends Component {
  render () {
    return (

      <div className='OrderBook'>
        <div className='OrderBookHeader'>
          <div className='BlockTitle'> Trade History</div>
          <div className='OrderBookHeaderButtons'>
            <button className='OrderBookHeaderButton'><Plus className='SVGIcon' /></button>
            <button className='OrderBookHeaderButton'><Minus className='SVGIcon' /></button>
          </div>
        </div>
        <div className='ListHeader'>
          <div>My Size</div>
          <div>Size</div>
          <di>Price(BTC)</di>
        </div>
        <ul>
          <ScrollingOrders />
        </ul>
      </div>
    );
  }
}

export default TradeHistory;
