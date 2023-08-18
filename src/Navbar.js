import { Link, useMatch, useResolvedPath } from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {setDarkMode} from './darkMode'

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  
  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <nav className={'nav'}>
      <Link to="/" className="site-title">
        FörsäkringGirot Assignment
      </Link>
      <div className="nav-right">
      <ul>
        <CustomLink to="/">Chili fruit</CustomLink>
        <CustomLink to="/update">Update Quantity</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      <div className="settings-icon" onClick={handleModalOpen} style={{display:'flex', alignItems:'center'}}>
        <SettingsIcon/>
      </div>
      <SettingsModal
        open={openModal}
        onClose={handleModalClose}
      />
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

function SettingsModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Settings
        <IconButton
          aria-label="close"
          style={{ position: 'absolute', right: '8px', top: '8px', marginTop:'4px'}}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Button variant="outlined" onClick={() => setDarkMode('dark')} style={{marginRight:'10px'}}>
          Dark Mode
        </Button>
        <Button variant="outlined" onClick={() => setDarkMode('light')}>
          Light Mode
        </Button>
      </DialogContent>
    </Dialog>
  );
}