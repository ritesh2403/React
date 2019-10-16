import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
              <form className="example serach-form" id="searchbar" action="">
          <div class="input-group">
            
            <input
              type="text"
              placeholder="Search Products"
              name="search2"
              className="form-control"
            ></input>
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>

        )
    }
}

export default Search
