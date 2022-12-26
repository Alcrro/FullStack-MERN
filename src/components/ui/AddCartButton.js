import { Button } from 'react-bootstrap';
import '../../assets/addCartButton.css';

function AddCartButton() {
  return (
    <>
      <div className="add-cart-container">
        <Button as="Link" href="/test" className="btn btn-primary btn-block btn-sm">
          Add to Cart
        </Button>
      </div>
    </>
  );
}

export default AddCartButton;
