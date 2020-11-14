const productListFake = [{
    id: 1, 
    name: 'Aliquam furniture',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus`,
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus',
    price: 85,
    priceSale: 79,
    categoryId: 1,
    mainImage: 'product-01',
    relatedImages: ['product-01', 'product-04', 'product-02'],
    relatedProducts: [2,3,4],
    isSale: true,
    isHot: true,
    reviewer: [],
    isSummer: true
},
{
    id: 2, 
    name: 'Aliquet auctor sem',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.`,
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus`,
    price: 87,
    priceSale: 75,
    categoryId: 1,
    mainImage: 'product-03',
    relatedImages: ['product-03','product-07', 'product-14'],
    relatedProducts: [1,3,5],
    isSale: true,
    isHot: false,
    reviewer: [],
    isSummer: false
},
{
    id: 3, 
    name: 'Aliquam lobortis',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.`,
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus`,
    price: 12,
    categoryId: 1,
    mainImage: 'product-05',
    relatedImages: ['product-05','product-06', 'product-02', 'product-04'],
    relatedProducts: [2,5,6,1],
    isSale: false,
    isHot: true,
    reviewer: [],
    isSummer: true
},
{
    id: 4, 
    name: 'Aliquam sit amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.`,
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus`,
    price: 88,
    priceSale: 80,
    categoryId: 1,
    mainImage: 'product-27',
    relatedImages: ['product-27','product-24', 'product-21', 'product-06'],
    relatedProducts: [],
    isSale: true,
    isHot: false,
    reviewer: [],
    isSummer: true
},
{
    id: 5, 
    name: 'Egestas dapibus',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.`,
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus`,
    price: 55,
    priceSale: 45,
    categoryId: 1,
    mainImage: 'product-28',
    relatedImages: ['product-28','product-11', 'product-10', 'product-19'],
    relatedProducts: [],
    isSale: true,
    isHot: false,
    reviewer: [],
    isSummer: true
},
{
    id: 6, 
    name: 'Aliquet auctor sem',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.`,
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus
    `,
    price: 76,
    priceSale: 55,
    categoryId: 1,
    mainImage: 'product-81',
    relatedImages: ['product-81','product-12', 'product-14', 'product-26'],
    relatedProducts: [],
    isSale: true,
    isHot: false,
    reviewer: [],
    isSummer: false
}]

function productListMockData() {
    return productListFake
}

function generateProduct (product) {
    const html = `
    <div class="product-image">
        <div class="product-thumb">
            <a href="product.html?product=${product.id}">
                <img
                    src="assets/images/${product.mainImage}.jpg">
            </a>
        </div>
        <div class="product-flash-wrap">
        ${product.isSale ? 
            `
            <span class="on-sale product-flash">Sale</span>
            `: ''
        }
        ${product.isHot ? 
            `
            <span class="on-featured product-flash">Hot</span>
            `: ''
        }
        
        </div>
        <div class="product-action">
            <div class="add-to-cart">
                <span onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </span>
            </div>
            <div class="add-to-wishlist">
                <span>
                    <i class="far fa-heart"></i>
                </span>
            </div>
            <div class="quick-view">
                <span>
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
    </div>
    <div class="product-info">
        <h4 class="product-name product-title">${product.name}</h4>
        <span class="price">${product.priceSale ? `<del><span>$${product.price}.00</span></del>` : ''} $${product.priceSale || product.price}.00</span>
    </div>
`
return html
}

function generateProductList(productList = []) {
    let html = ``
    productList.map((product) => {
        html += `<div class="col-md-3 product">`
        html += generateProduct(product)
        html += `</div>`
    })
    return html
}

function showProductList(condition) {
    let productList = productListMockData()
    switch(condition) {
        case 'hot': 
            productList = productList.filter(({isHot}) => isHot)
            return generateProductList(productList)
        
        case 'sale': 
            productList = productList.filter(({isSale}) => isSale)
            return generateProductList(productList)
        
        case 'summer': 
            productList = productList.filter(({isSummer}) => isSummer)
            return generateProductList(productList)
        
        default: 
            return generateProductList(productList)
    }
}

const getProductionById = (productId) => {
    return productListMockData().find(({id}) => id === Number(productId))
}

const generateProductDetail = (product) => {
    let html = `
    <div class="row">
    <div class="col-md-7 col-sm-12">
        <div class="main-image">
            <img src="assets/images/${product.mainImage}.jpg">
        </div>
        <div class="other-image mt-3">
            <ul class="row">
        `
    html += (product.relatedImages || []).map((e) => {
        return `
        <li class="col-md-3 col-sm-6">
            <a>
                <img src="assets/images/${e}.jpg">
            </a>
        </li>
        `    
    }).join(' ')         
    html += `</ul>
        </div>
    </div>
    <div class="col-md-5 col-sm-12 d-flex justify-content-between flex-column">
        <div class="product-title">
            <h3>${product.name}</h3>
        </div>
        <p class="price" style="font-size: 20px;">
            ${product.priceSale ? `<del><span>$${product.price}.00</span></del>` : ''}
            <span>$${product.priceSale || product.price}.00</span>
        </p>
        <div class="product-description">
            <p>
               ${product.shortDescription}
            </p>
        </div>
        <div class="d-flex align-items-center">
            <label class="pr-3 mb-0">QUANTITY</label>
            <input class="quantity" id="quantity_product_detail" type="number" value="1" min="1" max="1000" step="1" size="4" />
        </div>
        <div class="cart">
            <button type="button" class="btn add" onClick="addToCart_(${product.id})"><i class="fas fa-shopping-cart"></i> Add to
                card</button>
            <button type="button" class="btn wishlist"><i class="far fa-heart"></i></button>
        </div>
        <hr style="width: 100%;">
        <div class="more-info">
            <span>Category: <a href="#">Cây cảnh để bàn</a></span>
        </div>
    </div>
</div>
<div class="more-product-information mt-3">
    <div class="row">
        <div class="col-md-9 col-sm-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item pr-5">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true">Description</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                        aria-controls="profile" aria-selected="false">Reviews (${(product.reviewer || []).length})</a>
                </li>
            </ul>
            <div class="tab-content py-3" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    ${product.description}
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            </div>
        </div>
    </div>
</div>
    `
    return html
}

const generateProductListByIds = (ids = []) => {
    let productList = productListMockData()
    productList = productList.filter(({id}) => ids.includes(id))
    return generateProductList(productList)
}

const addToCart = (productId) => {
    let cartInfo = JSON.parse(localStorage.getItem('cart') || '[]')
    isExisting = cartInfo.find(({id}) => id === productId)
    if (isExisting) {
        isExisting.quantity += 1
    } else {
        cartInfo.push({
            id: productId,
            quantity: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cartInfo))
    displayCartQuantity()
}

const addToCart_ = (productId) => {
    let cartInfo = JSON.parse(localStorage.getItem('cart') || '[]')
    cartInfo = cartInfo.filter(({id}) => id !== Number(productId))
    const newQuantityList = $('#quantity_product_detail').val()
    cartInfo.push({
        id: productId,
        quantity: Number(newQuantityList)
    })
    localStorage.setItem('cart', JSON.stringify(cartInfo))
    displayCartQuantity()
}
