import ProductList from "../components/ProductLIst";
import { dusuiProducts } from "../data/DusuiProducts";
import "./pages.scss";

const DusuiPage = () => {
    return (
      <div>
        <h1>Dušai</h1>
        <ProductList products={dusuiProducts} />
      </div>
    );
  };
  
  export default DusuiPage;