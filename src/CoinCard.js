import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import openSocket from 'socket.io-client';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { usersActions } from './actions/coin.action';
import { connect } from 'react-redux';

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

class CoinCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.state);
    return (
      <Paper style={style} zDepth={1} key={this.props.item.short}>
        <div style={styles.paper}>{this.props.item.long}<br/><span>({this.props.item.short})</span></div><br/>
        <div>Price(USD): <RaisedButton label={this.props.state[this.props.item.short] ? (this.props.state[this.props.item.short]).toFixed(2) : (this.props.item.price).toFixed(2)} primary={true} style={styles.button} /></div>
      </Paper>
    );
  }
}


export default CoinCard;