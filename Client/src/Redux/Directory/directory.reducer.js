const INITIAL_STATE = {
  sections: [
    {
      title: 'Hats',
      imageUrl: 'https://ruthlesseditor.com/wp-content/uploads/wearing-many-hats.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://www.saratogahealthandwellness.com/wp-content/uploads/2013/03/sneakers.jpg',
      id: 2,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'Jackets',
      imageUrl: 'http://thinkfashionable.com/wp-content/uploads/2019/02/2019-New-Japan-Style-Casual-Bomber-Jacket-Men-Jaqueta-Masculina-Mens-Jackets-Coat-Chaquetas-Hombre-Veste.jpg',
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Womens',
      imageUrl: 'http://3.bp.blogspot.com/-xjHdLHx9QUI/Tk65raGIbgI/AAAAAAAAMaU/UWLWSQodMwU/s1600/womens+clothes.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://www.whattowearonholiday.com/capsule-wardrobes/slides/cruise-men-main.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

export default directoryReducer;
