"use strict";
const products = [
      {
        id: 1,
        name: "Coca-Cola",
        image: "https://static.euronews.com/articles/stories/09/00/98/00/1536x864_cmsv2_3cf1de1a-fd47-54af-bae1-72f78b8a2512-9009800.jpg",
        description: "Coca-Cola drinks recalled in 3 European countries due to high chlorate levels | Euronews",
        price: 1.5,
        category: "drink",
        rating: 4.5
      },
      {
        id: 2,
        name: "Iphone 14 Pro Max",
        image: "https://i5.walmartimages.com/seo/Apple-iPhone-14-Pro-Max-A2651-256GB-Black-US-Model-Factory-Unlocked-Cell-Phone-Very-Good-Condition_e7c05cba-c79a-4a5b-8cd3-32dfccb0492b.b68890b6d20f95d85cf00130b77075b1.jpeg",
        description: "Apple iPhone 14 Pro Max - 256GB Black - Factory Unlocked - Very Good Condition",
        price: 1799,
        category: "phone",
        rating: 4.5
      },
      {
        id: 3,
        name: "Sting",
        image: "https://i0.wp.com/uploads.saigacdn.com/2022/04/sting-energy-drink-01.jpg",
        description: 'I drank rare energy drink "Predator Energy Drink" with a royal atmosphere - Saiga NAK',
        price: 1.5,
        category: "drink",
        rating: 4.5
      },
      {
        id: 4,
        name: "Iphone 11 Pro",
        image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19206380/akrales_190913_3666_0391.jpg?quality=90&strip=all&crop=0,0,100,100",
        description: "Apple iPhone 11 Pro and Pro Max review: great battery life, screen and camera | The Verge",
        price: 1500,
        category: "phone",
        rating: 4.5
      },
      {
        id: 5,
        name: "MacBook Pro M2",
        image: "https://www.notebookcheck.net/fileadmin/_processed_/c/3/csm_AKA8518_984be0479c.jpg",
        description: "Apple MacBook Pro 14 2023 review: The M2 Pro is slowed down in the small MacBook Pro - NotebookCheck.net Reviews",
        price: 2100,
        category: "laptop",
        rating: 5.0
      },
      {
        id: 6,
        name: "Pepsi",
        image: "https://imgs.search.brave.com/bV_VHevQR-yUljS9fD-8qVTyt-tIsE6oy0SRSU9alXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMjIzNDEw/MzgvNjc3NzAvaS80/NTAvZGVwb3NpdHBo/b3Rvc182Nzc3MDQ4/NDYtc3RvY2stcGhv/dG8tb2Rlc3NhLXVr/cmFpbmUtcGVwc2kt/Y29sYS1kcmluay5q/cGc",
        description: "Refreshing Pepsi drink with a bold taste.",
        price: 1.2,
        category: "drink",
        rating: 4.0
      },
      {
        id: 7,
        name: "Asus ROG Zephyrus G14",
        image: "https://imgs.search.brave.com/hYOggs4b8FOU7OT8dfTZEsn7a3hxiur1v5NfQGJFeBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0RU/cko5NnJjNmJGTkFw/WTZyekpham4uanBn",
        description: "High-performance gaming laptop with AMD Ryzen and RTX graphics.",
        price: 1900,
        category: "laptop",
        rating: 4.8
      },
      {
        id: 8,
        name: "Dell XPS 13",
        image: "https://imgs.search.brave.com/DB4Q9iSaZ9S6cwV6nw-d98nrqDOeZ4d-d7FnMW-hlzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzhl/MDI1YzdiNjAxNzc4/MmQ4MzVmNWRiNGU1/MzZjZmVkYTBlYWI2/ZDMvaHViLzIwMTkv/MDEvMDQvN2U2ZmQ0/OWYtMWNmMy00ZDEw/LThlMWMtMGVhM2Y1/NDk2NGE1L2RlbGwt/eHBzLTEzLTE2Lmpw/Zz9hdXRvPXdlYnAm/d2lkdGg9MTIwMA",
        description: "Compact and powerful ultrabook with a sleek design.",
        price: 1600,
        category: "laptop",
        rating: 4.6
      }
    ];

    const productList = document.getElementById("productList");
    const categoryButtons = document.getElementById("categoryButtons");
    const categories = ["All", ...new Set(products.map(p => p.category))];

    // Create filter buttons
    categories.forEach(category => {
      const btn = document.createElement("button");
      btn.innerText = category.charAt(0).toUpperCase() + category.slice(1);
      btn.className = "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded";
      btn.onclick = () => renderProducts(category);
      categoryButtons.appendChild(btn);
    });

    // Render products by category
    function renderProducts(category) {
      productList.innerHTML = "";
      const filtered = category === "All" ? products : products.filter(p => p.category === category);
      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-white rounded shadow-md overflow-hidden";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
            <p class="text-sm text-gray-600 mb-2 h-16 overflow-hidden text-ellipsis">${product.description}</p>
            <p class="font-bold text-green-600 mb-1">$${product.price.toFixed(2)}</p>
            <p class="text-yellow-500"><i class="ri-star-fill"></i>${product.rating}</p>
          </div>
        `;
        productList.appendChild(card);
      });
    }
    // show my products in website
    renderProducts("All");