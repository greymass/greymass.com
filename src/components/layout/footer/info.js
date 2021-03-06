import React, { Component } from 'react';
import {
  Divider,
  Grid,
} from "semantic-ui-react"

import FooterInfoResources from './info/resources';
import FooterInfoContact from './info/contact';

import footerInfoStyles from './info.module.css';

class FooterInfo extends Component {
  render() {
    return (
      <div className={footerInfoStyles.container}>
        <Grid container className={footerInfoStyles.container}>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <FooterInfoResources />
          </Grid.Column>
          <Grid.Column width={16} only='mobile'>
            <Divider />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={5} floated="right">
            <FooterInfoContact />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default FooterInfo;
