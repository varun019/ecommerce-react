import styled from "styled-components";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { useFilterContext } from "../context/filter_context";

const Products = ()=>{
    return(
        <Wrapper>
            <div className="container d-flex" style={{flexWrap:'wrap'}}>
                <div className="mobile-view">
                    <FilterSection/>
                </div>

            <section className="product-view--sort" style={{flex:'1'}}>
                <div className="sort-filter">
                    <Sort/>
                </div>
                <div className="main-product">
                    <ProductList/>
                </div>
            </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width:768px){
    .mobile-view{
      width:100%
    }
  }
`;

export default Products;