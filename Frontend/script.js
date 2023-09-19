// Fetch customer data from the backend API and populate the customer list
function fetchCustomers() {
    fetch('http://localhost:3000/api/v1/user')
      .then(response => response.json())
      .then(users => {
        const table = document.querySelector('table');
        users.forEach(user => {
          const row = table.insertRow();
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.currentBalance}</td>
            <td><a href="customer.html?id=${user.id}">View Details</a></td>
          `;
        });
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  }
  
  // Fetch customer details based on the provided ID and populate the customer details page
  function fetchCustomerDetails() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const customerId = urlSearchParams.get('id');
  
    fetch(`http://localhost:3000/api/v1/user/${customerId}`)
      .then(response => response.json())
      .then(user => {
        const customerDetails = document.getElementById('customerDetails');
        customerDetails.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Balance:</strong> ${user.currentBalance}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching customer details:', error);
      });
  }
  
  // Fetch all transfers and populate the transfers list
  function fetchAllTransfers() {
    fetch('http://localhost:3000/api/v1/transfare/viewAllTransfers')
      .then(response => response.json())
      .then(transfers => {
        const table = document.querySelector('table');
        transfers.forEach(transfer => {
          const row = table.insertRow();
          row.innerHTML = `
            <td>${transfer.sender}</td>
            <td>${transfer.receiver}</td>
            <td>${transfer.amount}</td>
          `;
        });
      })
      .catch(error => {
        console.error('Error fetching transfers:', error);
      });
  }
  
  // Handle form submission for money transfer
  function handleTransferSubmission(event) {
    event.preventDefault();
    const senderEmail = document.querySelector('#sender').value;
    const receiverEmail = document.querySelector('#receiver').value;
    const amount = document.querySelector('#amount').value;
  
    const transferData = {
      from: senderEmail,
      to: receiverEmail,
      amount: amount
    };
  
    fetch('/api/transfers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transferData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Optionally, you can display a success message or perform additional actions
      })
      .catch(error => {
        console.error('Error performing transfer:', error);
        // Optionally, you can display an error message or handle the error gracefully
      });
  }