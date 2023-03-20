import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  //Api call get request to fetch products from db.
  const fetchProducts = async () => {
    const res = await fetch(`http://localhost/eShop/`);
    const data = await res.json();

    setProducts(data);
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);
  //Pagination Logic
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 12 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="container">
      <section class="products-container">
        {products.slice(page * 10 - 10, page * 10).map((prod) => (
          <article class="product">
            <img
              className="prod_img"
              src={prod.product_image}
              alt="Product Name"
            />
            <h2>{prod.manufacturer}</h2>
            <p>{prod.name}</p>
            <div className="wrapper">
              <span className="left">Price: ${prod.price}</span>
              <span className="right">Instock: {prod.availability}</span>
            </div>
          </article>
        ))}
{/* Pagination with page numbers */}
        {products.length > 0 && (
          <div className="pagination">
            <Link
              to="/"
              className={page > 1 ? "" : "pagination__disable"}
              onClick={() => selectedPageHandler(page - 1)}
            >
              &laquo; Prev
            </Link>
            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <Link
                  to="#"
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectedPageHandler(i + 1)}
                  key={i}
                >
                  {" "}
                  {i + 1}
                </Link>
              );
            })}
         
            <Link
              to="#"
              className={
                page < products.length / 10 ? "" : "pagination__disable"
              }
              onClick={() => selectedPageHandler(page + 1)}
            >
              Next &raquo;
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
