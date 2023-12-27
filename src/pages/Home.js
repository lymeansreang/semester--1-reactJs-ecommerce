import React, {useContext} from 'react';

// import product context
import { ProductContext } from '../contexts/ProductContext';
// import component
import Product from '../components/Product'
const Home = () => {
  // get products from product context
  const {products } = useContext(ProductContext);
  // console.log(products);
  // get only men & women category
  const filteredProducts = products.filter((item) => {
    return (item.category === "men's clothing" || item.category
    === "women's clothing" || item.category === "jewelery" || item.category === "electronics");
  })
  return <div className='py-16'>
    <section className='container mx-auto '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 rounded-xl'>
        {filteredProducts.map(product => {
          return <Product product={product} key={product.id} />
        })}
      </div>
    </section>
  </div>;
};

export default Home;
