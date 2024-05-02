
const sideBar = document.querySelector("aside")
const menuBtn = document.querySelector("#menu_bar")
const closeBtn = document.querySelector("#close_btn")

const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click',()=>{
    sideBar.style.display="block"
})

closeBtn.addEventListener('click',()=>{

    sideBar.style.display="none"
})

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme-variables")
    themeToggler.querySelector("span:nth-child(1)").classList.toggle('active')
    themeToggler.querySelector("span:nth-child(2)").classList.toggle('active')
})

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

async function fetchRecentOrders() {
  try {
      const response = await fetch('/getwithdrawreqs'); 
      if (!response.ok) {
          throw new Error('Failed to fetch withdrawal requests');
      }
      const requests = await response.json();
      const tbody = document.querySelector('.recent_orders tbody'); 

      tbody.innerHTML = '';

      requests.forEach(request => {
          const row = document.createElement('tr');
          
          const customerUsernameCell = document.createElement('td');
          customerUsernameCell.textContent = request.username;
          row.appendChild(customerUsernameCell);

          const amountCell = document.createElement('td');
          amountCell.textContent = request.requestedAmount;
          row.appendChild(amountCell);

          const paymentCell = document.createElement('td');
          paymentCell.textContent = request.UPI_ID;
          row.appendChild(paymentCell);

          const due = document.createElement('td');
          due.textContent = "pending";
          due.classList.add('warning');
          row.appendChild(due)

          const detailsCell = document.createElement('td');
          const detailsButton = document.createElement('button');
          detailsButton.textContent = 'Pay';
          detailsButton.classList.add('primary');
          detailsButton.addEventListener('click', () => {
              window.location.href = 'https://getalife.com'; //please change this , I beg.
          });
          detailsCell.appendChild(detailsButton);
          row.appendChild(detailsCell);

          tbody.appendChild(row);
      });
  } catch (error) {
      console.error('Error fetching recent orders:', error);
      alert("L Bozo");
  }
}
  
document.addEventListener('DOMContentLoaded', () => {
    const username = getQueryParam('username');
  
    if (username) {
      const bTag = document.querySelector('.container .right .profile b');
      if (bTag) {
        bTag.textContent = username;
      }
    }

    fetchRecentOrders();
});  