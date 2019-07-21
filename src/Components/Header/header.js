import React from 'react';
import  {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { auth } from '../../Firebase/firebase.utils';
import CartIcon from '../CartIcon/cart-icon';
import CartDropdown from '../CartDropdown/cart-dropdown';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors'
import { selectCurrentUser } from '../../Redux/User/user.selectors'
import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.scss';


const Header = ({ currentUser, hidden })  => (
    <div className='header'>
      <Link to='/'>
        <Logo className="logo" />
      </Link>
      <div className='options'>
        <Link className='option'  to='/shop'>
          SHOP
        </Link>
        <Link className='option'  to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className='option'  to='/signin'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
    { hidden ? null :   <CartDropdown /> }

    </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
