import React, { PropTypes } from 'react'
import { getMd } from './utils/helper'
import marked from 'marked';
class Blog extends React.Component {
  constructor(){
     super();
     this.state={
       data:'',
       wait:true
     }
   }
   componentDidMount(){
     let add = this.props.params.title;
      getMd(add).then( (recData) => {
         console.log(recData.getMd);
         this.setState({
           data:recData.getMd,
           wait:false
         })
       });
   }
  render () {
    // console.log(this.props);
    let content = this.state.wait ? 'pelase wait' : marked(this.state.data)
    return(
      <div>

        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;
