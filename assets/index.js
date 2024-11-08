const orders = [];

const buttons = document.querySelectorAll('.item');

for (let i = 0; i < buttons.length; i++) {
  
  buttons[i].addEventListener('click', function() {

    const fruit = buttons[i].innerText;
    orders[fruit] = (orders[fruit] || 0) + 1; 
        
    orderList();

   });
}

function orderList() {
    const orderElements = document.querySelectorAll('.order-list .order');
    let index = 0;

    for (const fruit in orders) {
      if (index < orderElements.length) {
         orderElements[index].textContent = `${fruit} x ${orders[fruit]}`;
         index++;
       }
    }

}
