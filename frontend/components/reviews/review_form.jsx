import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {body: '', recommended: true}
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createSingleReview(this.state,this.props.businessId)
    this.setState({body:'',recommended:true})
    //fire post request
    // console.log('your parents were eaten ')
  }

  update(field){
    // console.log(this.state)
    if(field === 'recommended'){
      return(e) => {
        let recommendation = e.target.value === 'unrecommend' ? false : true;
        this.setState({[field]:recommendation})
      }
    }else{
      return(e) => {
        this.setState({[field]:e.target.value})
      }
    }

  }

  render(){
    return(
      <div className='review-form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>Write a Review</h2>

          <textarea value={this.state.body} onChange={this.update('body')} placeholder='Thoughts, ideas, and meanderings...'/>
          <br></br>
            <select onChange={this.update('recommended')}>
              <option value="recommend">Recommend</option>
              <option value="unrecommend">Don't recommend</option>
            </select>
            <br></br>

          <input type='submit' ></input>
        </form>
      </div>
    )
  }
}

export default ReviewForm;
