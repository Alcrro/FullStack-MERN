import '../addToCartButton/addCartButton.css';

function AddCartButton() {
  return (
    <div className="card-button-container">
      <form action="">
        <input type="hidden" name="" />
        <button type="submit" className="btn btn-sm btn-primary btn-alcrro btn-block">
          <i className="fa-solid fa-cart-shopping"> </i>
          Add to Cart
        </button>
      </form>
    </div>
  );
}

export default AddCartButton;
