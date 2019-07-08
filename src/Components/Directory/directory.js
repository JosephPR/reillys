import React, {Component} from 'react';
import MenuItem from '../MenuItem/menu-item'
import '../MenuItem/menu-item'
import './directory.scss'

export default class Directory extends Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'FUNNY',
          imageUrl: 'http://static1.squarespace.com/static/58d9aba3893fc01b3a3e1310/595288fe4c8b036ff814ba34/5af0700f8a922ddd8dd60e89/1553140731386/NEW-Stickers-Squarespace_Artboard+25.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'CUTE',
          imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s---INt7UTw--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1508896856/production/designs/1997769_1.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'LAPTOP',
          imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/Apple-Art-Vinyl-Decals.jpeg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'SKATER',
          imageUrl: 'https://i.etsystatic.com/5434622/r/il/3a72cc/1902135439/il_794xN.1902135439_8mh4.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'RANDOM',
          imageUrl: 'http://thumb2.zeppy.io/d/l400/pict/183301428287/1000x-vinyl-decal-graffiti-stickers-bomb-for-car-luggage-laptop-skate-waterproof',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
      {
        this.state.sections.map(({title, imageUrl, size, id}) => {
          return (
            <MenuItem key={id}  title={title} imageUrl={imageUrl} size={size}/>
          )
        })



      }

      </div>
    )
  }
}
