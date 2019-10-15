import React, { Component } from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

import { graphql, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';

import { Responsive } from 'semantic-ui-react';

import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';

import LayoutHeader from './layout/header';
import LayoutFooter from './layout/footer';

import layoutStyles from './layout.module.css';

import 'semantic-ui-less/semantic.less';

class Layout extends Component {
  render() {
    const {
      children,
      data,
      shortHeader,
    } = this.props;

    let {
      containerClassName
    } = this.props;

    containerClassName = containerClassName || 'greyBackground';
    return (
      <I18nextProvider i18n={i18n}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="https://greymass.com" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap"
            />
          </Helmet>
        <div className={(layoutStyles[containerClassName])}>
          {containerClassName === 'greyBackground' && (
            <div className={layoutStyles.imageBackgroundContainer}>
              <Responsive {...Responsive.onlyMobile}>
                <Img
                  alt='paper-bg-desktop'
                  fluid={data.mobileImage.childImageSharp.fluid}
                  className={
                    `${layoutStyles.imageBackground} ${
                      shortHeader ? layoutStyles.shortHeader : ''
                    }`
                  }
                />
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Img
                  alt='paper-bg-mobile'
                  fluid={data.desktopImage.childImageSharp.fluid}
                  className={layoutStyles.imageBackground}
                />
              </Responsive>
            </div>
          )}
          <div className={layoutStyles.contentContainer}>
            <LayoutHeader>
              {children()}
            </LayoutHeader>
            <LayoutFooter />
          </div>
        </div>
      </I18nextProvider>
    )
  }
}

const LayoutWrapper = translate('layout')(Layout);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            officialEmail
          }
        }
        desktopImage: file(relativePath: { eq: "images/paper-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
  			mobileImage: file(relativePath: { eq: "images/paper-bg-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <LayoutWrapper data={data} {...props} />}
  />
);



