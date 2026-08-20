const products = [
  {
    name: "Decant Mykonos",
    description: "MYKONOS ALL VARIAN DECANT | 3ml 5ml 10ml ORIGINAL SHARE IN JAR",
    price: "Rp22.900",
    image: "https://down-id.img.susercontent.com/file/id-11134207-822wn-mo1m39jm2eit87@resize_w900_nl.webp",
    link: "https://s.shopee.co.id/6L3lm7mZx5"
  },

  {
    name: "Decant Velixir",
    description: "[ BEST SELER ] Decant Velixir - 2ml / 3ml / 5ml / 10ml – Parfum Travel Size Original Wangi Tahan Lama",
    price: "Rp28.680",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zth-mq5c5jpwzr4080@resize_w900_nl.webp",
    link: "https://s.shopee.co.id/AUtKkrn1xi"
  },

  {
    name: "Mykonos 50ML All Variant",
    description: "Mykonos 50ML All Variant - Parfum Edp / Extrait De Parfum",
    price: "Rp138.000",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81zti-mekt8rkuylmucb@resize_w900_nl.webp",
    link: "https://s.shopee.co.id/1Lf7Ei6ZUo"
  },

  {
    name: "PARFUM WATCHOUT",
    description: "PARFUM WATCHOUT EAU DE PARFUME JADE MARCELA",
    price: "Rp70.000",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7rask-m4jqnl040lmy55@resize_w900_nl.webp",
    link: "https://s.shopee.co.id/9zx49dcXGF"
  }

];


function createProduct(product) {
  return `
    <div class="product">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="product-content">

        <h2>${product.name}</h2>

        <p>
          ${product.description}
        </p>

        <div class="price">
          ${product.price}
        </div>

        <a
          href="${product.link}"
          class="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat Produk
        </a>

      </div>

    </div>
  `;
}


const productList =
  document.getElementById("product-list");


productList.innerHTML = products
  .map(createProduct)
  .join("");