import React, { PropTypes } from 'react';
import { searchGit } from './utils/helper'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      ipv:''
    }
  }
  et(e){
    let value = e.target.value
    this.setState({ipv:value})

  }
  componentDidMount(){
    // console.log(searchGit)
    // searchGit().then( (recData) => {console.log(recData);
    //   this.setState({data:recData.getData,wait:false
    //
    //   })
    // } )

  }
  et1(){
    let name = this.state.ipv
    searchGit(name).then( (recData) => {console.log(recData);
      this.setState({data:recData.getData,wait:false

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
        <input type='text' placeholder='github username' value={this.state.ipv} onChange={this.et.bind(this)} />
        <button onClick={this.et1.bind(this)}>serch</button><br />
        {
          this.state.wait ? '正在获取数据' :
          gitInfo
        }
      </div>
    )
  }
}

export default About;
