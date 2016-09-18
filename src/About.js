import React, { PropTypes } from 'react';
import { searchGit } from './utils/helper'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    // console.log(searchGit)
    searchGit().then( (data) => {console.log(data);
      this.setState({data:data.data,wait:false

      })
    } )

  }
  render () {
    let gitInfo = (
      <div>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        {
          this.state.wait ? '正在获取数据' :
          gitInfo
        }
      </div>
    )
  }
}

export default About;
