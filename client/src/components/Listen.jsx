import React, { Component } from 'react'
import { Jumbotron, Grid } from 'react-bootstrap';
import './Home.css';
import axios from 'axios';

export default class Listen extends Component {

     constructor(props) {
        super(props)

        this.state = {
          data: [],
          info: []
        };
        this.onCall = this.onCall.bind(this);
        this.getInfo = this.getInfo.bind(this);
      }

  onCall(){

  let search = document.getElementById('userInput').value;
  console.log(search);
       axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${search}&type=music&k=305318-Recreate-8YM35E55&verbose=1`)
    .then(res => {
    this.setState({
               data: res.data.Similar.Results
            })
      console.log(res.data.Similar.Results);
    });
}

  getInfo(obj){
 document.getElementById('infoDiv').style.display="inline-block";
  let search = obj.target.innerHTML;
  console.log(search);
       axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${search}&type=music&k=305318-Recreate-8YM35E55&verbose=1`)
    .then(res => {
      console.log(res);
    this.setState({
               info: res.data.Similar.Info[0].wTeaser
            })
        this.setState({
               movie: res.data.Similar.Info[0].yUrl
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
      <Grid>
        <Jumbotron>
   <h3 id="listenHead">Listen</h3>
   <br />
          <h4>Find your next favorite artist!</h4>
         <a href="/read" className="previous">&laquo; Read</a>
<a href="/watch" className="next">Watch &raquo;</a>
        </Jumbotron>
           <input
              type="text"
              className="form-control"
              id="userInput"
              placeholder="Enter an artist you like"
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
                 <div id="clip">
                <iframe src={this.state.movie}></iframe>
        </div>

          <p id="infoP"></p>
          </div>
      </Grid>
    )
  }
}