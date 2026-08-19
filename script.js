const products = [
  {
    name: "Parfum mykonos all varian",
    description: "[ BELI 2 GRATIS 1 ] Decant Mykonos Original | Free Tester | Parfum Mykonos | Parfum unisex | Parfum Fresh | Share in bottle | By Aflah",
    price: "Rp18.230",
    image: "https://down-tx-id.img.susercontent.com/id-11134207-8224o-ml2obyklwhzb81.webp",
    link: "https://s.shopee.co.id/5VUePrrLk5"
  },

  {
    name: "Charger IP",
    description: "CHARGER IP 8 X XR XS XSMAX 11 12 13 14 15 16 17 20W 25W FAST CHARGING",
    price: "Rp99.000",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-822wg-mp2mvkst9moecb.webp",
    link: "https://s.shopee.co.id/2Vr2roou4z"
  },

  {
    name: "tumbler double wall",
    description: "Javish tumbler double wall 40oz premium stainless steel / botol minum portable teh kopi fitness vacuum insulation thermos",
    price: "Rp121.250",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7rbk8-m7ga4vlk2x2kb4.webp",
    link: "https://s.shopee.co.id/1gHvsRiOpg"
  },

  {
    name: "Office Professional Plus",
    description: "100% Ori | License Office 2021 | 2019 | 2016 | 2024 | 365 | Professional Plus Serial Key For Windows",
    price: "Rp36.000",
    image: "https://down-bs-id.img.susercontent.com/id-11134207-7rbk0-mau4ij3k882hc4.webp",
    link: "https://s.shopee.co.id/3g30GJrapO"
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
          Beli Sekarang
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