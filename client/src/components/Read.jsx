import React, { Component } from 'react'
import { Jumbotron, Grid } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';

export default class Read extends Component {
     constructor(props) {
        super(props)

        this.state = {
          data: []
        };
        this.onCall = this.onCall.bind(this);
        this.getInfo = this.getInfo.bind(this);
      }


  onCall(){

  let search = document.getElementById('userInput').value;
  console.log(search);
      axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${search}&type=books&k=305318-Recreate-8YM35E55&verbose=1`)
    .then(res => {
    this.setState({
               data: res.data.Similar.Results
            })
      console.log(res.data.Similar.Results);
    });

}

getCover(){
    let search = document.getElementById('userInput').value;
  console.log(search);
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC&key=AIzaSyC8nrkYJHEwI-n_ar7v0fvipx9oWK9vQIM`)
    .then(res => {
      console.log(res);
    });

}


 getInfo(obj){
   document.getElementById('infoDiv').style.display="inline-block";
  let search = obj.target.innerHTML;
  console.log(search);
       axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${search}&type=books&k=305318-Recreate-8YM35E55&verbose=1`)
    .then(res => {
      console.log(res);
    this.setState({
               info: res.data.Similar.Info[0].wTeaser
            })
      let infoP = document.getElementById('infoP');        
             return infoP.innerHTML = this.state.info;
      console.log(res.data.Similar.Info[0].wTeaser);
    })

    let infoP = document.getElementById('infoP');        
             return infoP.innerHTML = this.state.info;
          
  }

  render() {
    return (
      <Grid className="readPage">
        <Jumbotron>
   <h3 id="readHead">Read</h3>
   <br />
          <h4>Find your next favorite book!</h4>
       <a href="/Play" className="previous">&laquo; Play</a>
<a href="/listen" className="next">Listen &raquo;</a>
        </Jumbotron>
           <input
              type="text"
              className="form-control"
              id="userInput"
              placeholder="Enter a book you like"
            />
                      <br />
            <button type="click" id="playBtn" className="btn btn-default" onClick={this.onCall}>
            Search
          </button>
          <br />
                    <ul>
            {
            this.state.data.map(data => {

              return <li id="link" onClick={this.getInfo.bind(this)} data={data} key={data.name}>{data.Name}</li>
          })
          }
          </ul>
          <div id="infoDiv">
          <p id="infoP" onClick={this.getCover}></p>
          </div>
      </Grid>
    )
  }
}