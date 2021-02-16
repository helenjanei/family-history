import React from 'react';

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

function Button() {
  return (
   <Menu>
      <MenuButton className='btns'>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList className='btns'>
        <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>
        <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
        <MenuItem onSelect={() => alert("Mark as Draft")}>
          Mark as Draft
        </MenuItem>
        <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>
        <MenuLink target='_blank' as="a" href="https://reacttraining.com/workshops/">
          Attend a Workshop
        </MenuLink>
      </MenuList>
    </Menu>
  )
};
export default Button;