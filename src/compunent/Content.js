import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className='content text-center mt-5 '>
        <div className='card1 bg-light border border-white p-5 d-flex justify-content-center align-items-center w-75 mx-auto  '>
          <div>
          <div class="card-body ">
           <h5 class="card-title display-3 font-weight-bold">A warm welcome!</h5>
            <h3 class="card-text ">With supporting text below as a natural lead-in to additional content.</h3>
               <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
        </div>

        <div className='card2 row text-center  '>

          <div className='item card col-3 border border-white bg-light  '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary  "></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>
          <div className='item card col-3 border border-white bg-light '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary"></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>
          <div className='item card col-3 border border-white bg-light '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary"></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>
          <div className='item card col-3 border border-white bg-light '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary"></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>
          <div className='item card col-3 border border-white bg-light '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary"></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>
          <div className='item card col-3 border border-white bg-light '>
          <i class="fa fa-cloud-download-alt fa-4x text-primary"></i>
          <h2>Fresh new layout</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus nulla!</p>
          </div>



        </div>
      </div>
    )
  }
}
