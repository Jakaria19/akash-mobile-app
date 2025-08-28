const transactionData = [];

//* reusable function

function IntValueById(id) {
  return parseInt(document.getElementById(id).value);
}

function ValueById(id) {
  return document.getElementById(id).value;
}

function IntTextById(id) {
  return parseInt(document.getElementById(id).innerText);
}

function setTextById(id, constVariable) {
  return (document.getElementById(id).innerText = constVariable);
}

function formToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (let form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

function actBtnToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (let formBtn of formBtns) {
    formBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");

    formBtn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

//* add money

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = ValueById("bank");

    const account = ValueById("account");

    if (account.length < 11) {
      alert("Please provide a valid account number.");
      return;
    }

    const amount = IntValueById("add-amount");

    if (amount.length <= 0) {
      alert("Please write valid amount.");
      return;
    }

    const pin = ValueById("pin");

    if (pin.length != 4) {
      alert("Please provide a valid pin number.");
      return;
    }

    const balance = IntTextById("balance");

    const newBalance = balance + amount;

    setTextById("balance", newBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

//* cash out

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = ValueById("agent-number");

    if (agentNumber.length < 11) {
      alert("Please provide a valid agent number.");
      return;
    }

    const cashOutAmount = IntValueById("cash-out-amount");

    if (cashOutAmount.length <= 0) {
      alert("Please write valid amount.");
      return;
    }

    const pin = ValueById("pin");

    if (pin.length != 4) {
      alert("Please provide a valid pin number.");
      return;
    }

    const balance = IntTextById("balance");

    const newBalance = balance - cashOutAmount;

    setTextById("balance", newBalance);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

//* transfer money

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const userNumber = ValueById("user-number");

    if (userNumber.length < 11) {
      alert("Please provide a valid agent number.");
      return;
    }

    const transferAmount = IntValueById("transfer-money-amount");

    if (transferAmount.length <= 0) {
      alert("Please write valid amount.");
      return;
    }

    const pin = ValueById("pin");

    if (pin.length != 4) {
      alert("Please provide a valid pin number.");
      return;
    }

    const balance = IntTextById("balance");

    const newBalance = balance - transferAmount;

    setTextById("balance", newBalance);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

//* reusable toggling feature

document.getElementById("add-money").addEventListener("click", function () {
  formToggle("add-money-form");
  actBtnToggle("add-money");
});

document.getElementById("cash-out").addEventListener("click", function () {
  formToggle("cash-out-form");
  actBtnToggle("cash-out");
});

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    formToggle("transfer-money-form");
    actBtnToggle("transfer-money");
  });

document.getElementById("bonus").addEventListener("click", function () {
  formToggle("bonus-form");
  actBtnToggle("bonus");
});

document.getElementById("pay-bill").addEventListener("click", function () {
  formToggle("pay-bill-form");
  actBtnToggle("pay-bill");
});

//* transactions

document.getElementById("transactions").addEventListener("click", function () {
  formToggle("transactions-form");
  actBtnToggle("transactions");

  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";

  for (let data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white mt-3 p-3 rounded-xl flex justify-between items-center">
                <div class="flex gap-3">
                    <div class="rounded-full p-3 bg-[#f4f5f7]">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="font-bold text-gray-700">${data.name}</h1>
                        <p class="text-gray-700">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
    `;

    transactionContainer.appendChild(div);
  }
});
