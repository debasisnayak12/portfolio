import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { HashLink } from "react-router-hash-link";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="menu-icon"/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <HashLink smooth to="#about">
            <p className="link">About</p>
          </HashLink>
          <HashLink smooth to="#skills">
            <p className="link">Skills</p>
          </HashLink>
          <HashLink smooth to="#experience">
            <p className="link">Experience</p>
          </HashLink>
          <HashLink smooth to="#projects">
            <p className="link">Project</p>
          </HashLink>
          <HashLink smooth to="#education">
          <p className="link">Education</p>
        </HashLink>
          <HashLink smooth to="#contact">
            <p className="link">Contact Us</p>
          </HashLink>
        </div>
      </Drawer>
    </div>
  );
}