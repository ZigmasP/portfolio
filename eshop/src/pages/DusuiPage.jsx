import ProductList from "../components/ProductList";
import { Dusui } from "../data/Dusui";
import "./pages.scss";

const DusuiPage = () => {
    return (
      <div>
        <h1>Dušai</h1>
        <ProductList products={Dusui} />
      </div>
    );
  };
  
  export default DusuiPage;