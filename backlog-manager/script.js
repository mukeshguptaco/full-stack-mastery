const backlogItems = [];

function addItem() {
    const input = document.getElementById("backlogInput");
    const list = document.getElementById("backlogList");
    const item = document.createElement("li");

    if (input.value === "") {
        return;
    }

    backlogItems.push(input.value);

    item.textContent = input.value;
    list.appendChild(item);
    input.value = "";

    item.onclick = function () {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            item.remove();
        }
    }
}

async function testBackend() {
    const response = await fetch("/api/hello");
    const message = await response.text();

    alert(message);
}