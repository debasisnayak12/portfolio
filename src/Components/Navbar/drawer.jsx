import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="menu-icon"/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link to="/">
            <p className="link">About</p>
          </Link>
          <Link to="/skills">
            <p className="link">Skills</p>
          </Link>
          <Link to="/experience">
            <p className="link">Experience</p>
          </Link>
          <Link to="/project">
            <p className="link">Project</p>
          </Link>
          <Link to="/education">
          <p className="link">Education</p>
        </Link>
          <Link to="/contact">
            <p className="link">Contact Us</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}