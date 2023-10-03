import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './ButtonMenuTablet.css'

export default function ButtonMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='promo-button'>Menu<ArrowDropDownIcon /></span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >  
      <div className='container-grid-promo'>
        <div className='first-column-promo'>
          <MenuItem onClick={handleClose}>Amazon</MenuItem>
          <MenuItem onClick={handleClose}>AliExpress</MenuItem>
          <MenuItem onClick={handleClose}>Nike</MenuItem>
          <MenuItem onClick={handleClose}>Intersport</MenuItem>
          <MenuItem onClick={handleClose}>Samsung</MenuItem>
          <MenuItem onClick={handleClose}>Conforama</MenuItem>
          <MenuItem onClick={handleClose}>Norauto</MenuItem>
          <MenuItem onClick={handleClose}>Booking.com</MenuItem>
        </div> 
        <div className='second-column-promo'>
          <MenuItem onClick={handleClose}>Cdiscount</MenuItem>
          <MenuItem onClick={handleClose}>Zalando</MenuItem>
          <MenuItem onClick={handleClose}>Carrefour</MenuItem>
          <MenuItem onClick={handleClose}>Blancheporte</MenuItem>
          <MenuItem onClick={handleClose}>Fnac</MenuItem>
          <MenuItem onClick={handleClose}>Decathlon</MenuItem>
          <MenuItem onClick={handleClose}>Courir</MenuItem>
          <MenuItem onClick={handleClose}>Lastminute</MenuItem>
        </div> 
        <Button  className="button-allPromo-custom" variant="outlined">Voir tous les codes promo</Button>
      </div>                
      </Menu>
    </div>
  );
}