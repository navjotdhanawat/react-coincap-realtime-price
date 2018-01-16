import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import openSocket from 'socket.io-client';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { usersActions } from './actions/coin.action';
import { connect } from 'react-redux';
import CoinCard from './CoinCard';

const style = {
  height: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px',
  'width': '20%'
};

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: '20px'
  },
  button: {
    margin: 12
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.coins = ["BTC"];
    this.state = {};
    this.props.fetchCoins();
    var self = this;
    var socket = openSocket('https://coincap.io');
    socket.on('trades', function (trade) {
      if (self.coins.indexOf(trade.coin) !== -1) {
        self.setState({
          [trade.coin]: trade.msg.price
        });
      }
    })
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({ count: this.state.count + result.movement });
  }

  render() {

    return (
      <div>
        {this.props.data.coins.map((item) => (
          <CoinCard item={item} state={this.state} key={item.short} />
        ))}
      </div>
    );
  }
}

// Mapping isInCart state to props to access easily in component
const mapStateToProps = (state, props) => {
  return {
    data: state
  }
}

// Mapping dispatch functions to props to access easily
const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(usersActions.fetchCoins())
})


export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);