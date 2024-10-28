// pluginpage.js
import React from 'react';
import '../styles/Pluginpage.module.css';
import { Badge } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pluginpage = () => {
  return (
    <nav className="pluginpage pluginpage-expand-lg pluginpage-dark bg-dark px-4">
      <a className="pluginpage-brand" href="#">
        Sisense
      </a>
      <button
        className="pluginpage-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#pluginpageNav"
        aria-controls="pluginpageNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="pluginpage-toggler-icon"></span>
      </button>
      <div className="collapse pluginpage-collapse" id="pluginpageNav">
        <ul className="pluginpage-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Amazon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Analyst
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DVK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Google
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Minimalist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sisense
            </a>
          </li>
        </ul>
        <ul className="pluginpage-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <DownloadIcon /> Exports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Badge badgeContent={1} color="primary">
                <FilterListIcon />
              </Badge>
              Filters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Badge badgeContent={26} color="primary">
                <BookmarkIcon />
              </Badge>
              Bookmarks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Badge badgeContent={1} color="primary">
                <NotificationsIcon />
              </Badge>
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <EmailIcon /> Emails
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <HelpIcon /> Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Badge badgeContent={1} color="primary">
                <SentimentSatisfiedAltIcon />
              </Badge>
              Rate Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <RefreshIcon /> Refresh
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Badge badgeContent={'!'} color="error">
                <AccountCircleIcon />
              </Badge>
              Notice
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default pluginpage;
