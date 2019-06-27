import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import { getPostThunk } from './redux/actions/actions';
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getPostThunk())
  }
  render() {
    console.log(this.props);
    return (
      
        <div>
          <ProductList />
          <Cart />
          {this.props.loading && <h3>Loading...</h3>}
          {this.props.error && <h3 style={{color: "red"}}>Unknown error!</h3>}
          {this.props.posts && 
            this.props.posts.map((e,i) => {
              return <li key={i}>{e.title}</li>
            })
          }
        </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return {
    posts: store.postReducer.posts,
    loading: store.postReducer.loading,
    error: store.postReducer.error
  }
}
export default connect(mapStoreToProps)(App);
