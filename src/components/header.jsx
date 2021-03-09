import React, { useContext } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuItem, StyledHeader } from '../styles/components'
import Cart from '../images/assets/cart.png'
import mainlogo from '../images/header-logo.png'
import { CartContext } from '../context'

const Header = () => {
  const { cart } = useContext(CartContext);
  console.log('context?:', cart);
  return (
    <StyledHeader>
            <Link to='/'>
              <img src={mainlogo}  alt="Store_Logo"/>
            </Link>
            <nav>
              <ul>
                  <MenuItem margin ><Link to='/'>Productos</Link></MenuItem> 
                  <MenuItem margin ><a href='https://www.amazon.com/'>Amazon</a></MenuItem>
                  <MenuItem>
                    <Link to='/cart'>
                      <span>
                        <img src={Cart} alt='Cart' />
                      </span>
                      <h3>{cart.lenght}</h3>    
                    </Link>           
                  </MenuItem>
              </ul>
                        
            </nav>
    
  </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
