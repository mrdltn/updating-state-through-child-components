import React, {Component} from "react";
import {Posts} from './components/Posts'


class App extends Component {
  state = {
      posts: [
        {id: '123qwe', name: 'test 1'},
        {id: '234wer', name: 'test 2'},
        {id: '345ert', name: 'test 3'}
      ]
  }

  deletePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  } 

  render() {
    const {posts} = this.state
    return (
      <div className="App">
        <Posts posts={posts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default App
