document
  .getElementById("add_item") // access the form
  .addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default behaviour of forms

    // get the value in text area when form is submitted
    const item = document.getElementById("item_data").value;

    if (!item) return; // if the item is empty, do nothing

    add_item(item); // add the item to the list created
    document.getElementById("item_data").value = ""; // clear the text area
  });

/** add_item adds an item to the tag with id=item_list
 *
 * @param {string} item - an item to add
 */
function add_item(item) {
  const list = document.getElementById("item__list");
  list.innerHTML += `<li onclick="remove_item(this)"><input type="checkbox" style="margin-right: 10px;"/>${item}</li>`;
}

/** remove_item removes an item from the list when clicked
 *
 * @param {string} item - an item to remove
 */
function remove_item(item) {
  item.remove();
}
