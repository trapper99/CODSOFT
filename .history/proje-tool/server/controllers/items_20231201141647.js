<!DOCTYPE html>
<html>
<head>
  <title>Item List with Bookmarks</title>
  <style>
    .item {
      margin-bottom: 10px;
    }
    .bookmark {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Item List with Bookmarks</h1>
  <div id="itemList"></div>

  <script>
    // Sample data
    const items = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ];

    // Function to render the item list
    function renderItemList() {
      const itemListElement = document.getElementById("itemList");
      itemListElement.innerHTML = "";

      items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
          <span>${item.name}</span>
          <button onclick="toggleBookmark(${item.id})">Bookmark</button>
        `;

        // Check if the item is bookmarked
        if (isBookmarked(item.id)) {
          itemElement.classList.add("bookmark");
        }

        itemListElement.appendChild(itemElement);
      });
    }

    // Function to toggle the bookmark status of an item
    function toggleBookmark(itemId) {
      const itemIndex = items.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        items[itemIndex].bookmarked = !items[itemIndex].bookmarked;
        renderItemList();
      }
    }

    // Function to check if an item is bookmarked
    function isBookmarked(itemId) {
      const item = items.find((item) => item.id === itemId);
      return item && item.bookmarked;
    }

    // Initial render
    renderItemList();
  </script>
</body>
</html>