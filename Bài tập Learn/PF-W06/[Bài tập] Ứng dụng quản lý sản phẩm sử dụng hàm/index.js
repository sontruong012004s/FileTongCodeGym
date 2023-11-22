let totalProducts = 0;

function updateTotalProducts() {
    document.getElementById("productCount").textContent = totalProducts;
}

document.getElementById("productTableBody").addEventListener("click", (event) => {
    const row = event.target.closest("tr");

    if (event.target.classList.contains("editBtn")) {
        handleEdit(row);
    } else if (event.target.classList.contains("deleteBtn")) {
        row.remove();
        totalProducts--;
        updateTotalProducts();
    }
});

document.getElementById("add").addEventListener("click", () => {
    const productName = document.getElementById("text").value;

    if (productName.trim() !== "") {
        const newRow = createTableRow(productName);
        document.getElementById("productTableBody").appendChild(newRow);
        document.getElementById("text").value = "";
        totalProducts++;
        updateTotalProducts();
    }
});

function createTableRow(productName) {
    const newRow = document.createElement("tr");
    const productNameCell = document.createElement("td");
    productNameCell.innerHTML = `<div class="productName">${productName}</div>`;
    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editBtn");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteBtn");

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    newRow.appendChild(productNameCell);
    newRow.appendChild(actionCell);

    return newRow;
}

function handleEdit(row) {
    const productNameElement = row.querySelector(".productName");
    const productName = productNameElement.textContent;

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = productName;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("saveBtn");

    productNameElement.innerHTML = "";
    productNameElement.appendChild(inputField);
    productNameElement.appendChild(saveButton);

    saveButton.addEventListener("click", () => {
        const updatedProductName = inputField.value;
        productNameElement.innerHTML = `<div class="productName">${updatedProductName}</div>`;
        row.querySelector(".editBtn").disabled = false;
        row.querySelector(".deleteBtn").disabled = false;
    });

    row.querySelector(".editBtn").disabled = true;
    row.querySelector(".deleteBtn").disabled = true;
}
updateTotalProducts();
