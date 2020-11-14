const categoriesDataFake = [
    {
        id: 1,
        name: 'Cây để bàn',
        image: 'mega-menu-01'
    },
    {
        id: 2,
        name: 'Cây thủy sinh',
        image: 'mega-menu-02'
    },
    {
        id: 3,
        name: ' Sen đá',
        image: 'mega-menu-03'
    },
    {
        id: 4,
        name: ' Cây chậu treo',
        image: 'mega-menu-04'
    },
    {
        id: 5,
        name: 'Cây ăn trái',
        image: 'mega-menu-05'
    },
    {
        id: 6,
        name: 'Xương rồng',
        image: 'mega-menu-06'
    }
]

const generateCategoriesSubmenu = () => {
    let html = `
    <div class="container py-5">
    <div class="row">
    `
    html += categoriesDataFake.map(({id, name, image}) => {
        return `
        <div class="col-md-2">
        <a href="product-list.html?category=${id}">
            <div><img src="assets/images/${image}.jpg">
            </div>
            <div class="pt-3">
                <span style="font-weight: bold; color: #000"><i class="fas fa-leaf pr-3" style="color: #7fa15a;"></i> ${name}
                </span>
            </div>
        </a>
    </div>
    `
    }).join(' ')
       
    html += `
        </div>
    </div>
    `
    $('.sub-categories').html(html)
}

const generateCategoriesList = (category) => {
    const productList = productListMockData()
    let html = categoriesDataFake.map(({id, name}) => {
        const productsByCategory = productList.filter(({categoryId}) => categoryId === id)
        return `
        <div class="${category && category === id ? 'category-active' : ''}">
           <a href="product-list.html?category=${id}" class="d-flex justify-content-between">
            <span>${name}</span>
            <span>(${productsByCategory.length})</span>
           </a>
        </div>
    `
    }).join(' ')
$('.categories-list').html(html)
    
}

const generateCategories = () => {
    const productList = productListMockData()
    let html = categoriesDataFake.map(({id, name}) => {
        const productsByCategory = productList.filter(({categoryId}) => categoryId === id)
        return `
        <div>
           <a href="product-list.html?category=${id}" class="d-flex justify-content-between">
            <span>${name}</span>
            <span>(${productsByCategory.length})</span>
           </a>
        </div>
    `
    }).join(' ')
$('.categories-list').html(html)
    
}

const generateProductListByCategory = (id) => {
    let productList = productListMockData()
    productList = productList.filter(({categoryId}) => categoryId === Number(id))
    if (productList && productList.length > 0 ) {
        return generateProductList(productList)
    }
    return `<h3>No products</h3>`
}
