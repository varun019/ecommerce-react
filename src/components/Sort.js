import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();

  return (

    <Wrapper className='sort-section'>

      <div className="sorting-list--grid d-flex justify-content-between w-100" style={{flexWrap:'wrap'}}>
        <div className='d-flex mobile-view'>
        <button className={grid_view ? "active sort-btn" : "sort-btn"} onClick={setGridView}>
          <BsFillGridFill className='icon' />
        </button>

        <button className={!grid_view ? "active sort-btn" : "sort-btn"} onClick={setListView}>
          <BsList className='icon' />
        </button>
        </div>
        <div className="product-data">

          <p className='prod'>{`${filter_products && Array.isArray(filter_products) ? filter_products.length : 0} Products Available`}</p>

        </div>

        <div className="sort-selection">
          <form action='#'>
            <label htmlFor='sort'></label>
            <select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
              <option value='lowest'>Price(lowest)</option>
              <option value='#' disabled></option>
              <option value='highest'>Price(highest)</option>
              <option value='#' disabled></option>
              <option value='a-z'>Price(a-z)</option>
              <option value='#' disabled></option>
              <option value='z-a'>Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  )

}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 10px;
      color:black;
    }
    .icon {
      font-size: 1.6rem;
    }
    @media (max-width:768px){
      .prod{
        padding-left: 7.3rem;
        font-weight: bold;
      }
    }
    
    .active {
      background-color: black;
      color: #fff;
    }
  }
  .sort-selection--style{
    font-size: medium;
    font-weight: normal;
    padding: 3px;
    border: 2px solid;
    background:#fff;
  }
  @media (max-width:768px){
    .mobile-view{
      margin-bottom:10px;
    }
  }
  @media (max-width:768px){
      .sort-selection--style{
        top: -35px;
      position: relative;
      }
  }
`;

export default Sort;