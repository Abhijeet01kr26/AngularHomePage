export const navigation = {
 men:{
    id: 'men',
    name: 'Men',
    sections: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: [
          { name: 'Mens Kurtas', id: 'mens_kurta' },
          { name: 'Shirt', id: 'shirt' },
          { name: 'Pants', id: 'men_jeans' },
          { name: 'Sweaters', id: '#' },
          { name: 'T-Shirts', id: 't-shirt' },
          { name: 'Jackets', id: '#' },
          { name: 'Activewear', id: '#' },
          
        ],
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: [
          { name: 'Watches', id: '#' },
          { name: 'Wallets', id: '#' },
          { name: 'Bags', id: '#' },
          { name: 'Sunglasses', id: '#' },
          { name: 'Hats', id: '#' },
          { name: 'Belts', id: '#' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Re-Arranged', id: '#' },
          { name: 'Counterfeit', id: '#' },
          { name: 'Full Nelson', id: '#' },
          { name: 'My Way', id: '#' },
        ],
      },
    ],
  }, 
      women:{
        id: 'women',
        name: 'Women',
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Pants', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'women_sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'women_gouns' },
              { name: 'Sarees', id: 'women_saree' },
              { name: 'Kurtas', id: 'women_kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasse' },
              { name: 'Hats', id: 'hat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      
}
