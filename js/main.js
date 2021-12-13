const cardContainer = document.querySelector('.card-container');
const card = `
<div class="product-card">
  <img src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image" class="product-img">
  <div class="produc-info">
    <div>
      <p>$120.00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="../assets/icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
`;

for (let i = 0; i <= 10; i++){
  const div = document.createElement('div');
  div.innerHTML = card;
  cardContainer.appendChild(div.firstElementChild);
}