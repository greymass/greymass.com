import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import getStartedStyles from "./getStarted.module.css";

import { Link } from "gatsby"

class Banners extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className={getStartedStyles.banners}>
        <div className={getStartedStyles.helpBanner}>
          <div className={getStartedStyles.helpBannerBack}>
            <h2 className={getStartedStyles.bannerHeader}>
              {intl.formatMessage({ id: "anchor_help_banner_header" })}
            </h2>
            <div className={getStartedStyles.helpBannerSubheadings}>
              <span className={getStartedStyles.subheading}>
                {intl.formatMessage({ id: "anchor_help_banner_subheading" })}
              </span>

              <span className={getStartedStyles.subheading}>
                {intl.formatMessage({ id: "anchor_help_banner_visit" })}
              </span>
            </div>
            <a href='https://forums.greymass.com/'>
              <button>
                {intl.formatMessage({ id: "anchor_help_banner_forums" })}
              </button>
            </a>
          </div>
        </div>
        <div className={getStartedStyles.voteBanner}>
          <div className={getStartedStyles.voteBannerBack}>
            <h2 className={getStartedStyles.bannerHeader}>
              {intl.formatMessage({ id: "anchor_vote_banner_header" })}
            </h2>
            <span className={getStartedStyles.subheading}>
              {intl.formatMessage({ id: "anchor_vote_banner_subheading" })}
            </span>
            <Link to={`/${intl.locale}/support-us`}>
              <button>
                {intl.formatMessage({ id: "anchor_vote_banner_vote_us" })}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Banners);
