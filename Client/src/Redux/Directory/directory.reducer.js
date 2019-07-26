const INITIAL_STATE = {
  sections: [
    {
      title: 'Hats',
      imageUrl: 'http://static1.squarespace.com/static/58d9aba3893fc01b3a3e1310/595288fe4c8b036ff814ba34/5af0700f8a922ddd8dd60e89/1553140731386/NEW-Stickers-Squarespace_Artboard+25.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s---INt7UTw--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508896856/production/designs/1997769_1.jpg',
      id: 2,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'Jackets',
      imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/Apple-Art-Vinyl-Decals.jpeg',
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.etsystatic.com/5434622/r/il/3a72cc/1902135439/il_794xN.1902135439_8mh4.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'http://thumb2.zeppy.io/d/l400/pict/183301428287/1000x-vinyl-decal-graffiti-stickers-bomb-for-car-luggage-laptop-skate-waterproof',
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
