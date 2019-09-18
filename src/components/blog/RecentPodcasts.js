
import React, { Component } from 'react';

import { List } from 'semantic-ui-react';
import { graphql, StaticQuery } from "gatsby"

class BlogRecentPodcasts extends Component {
  render() {
    const { data } = this.props;

    return (
      <List>
        {data
          .recentPodcastsJson.edges
          .map(({ node }) => (
            <Podcast podcast={node} />
          ))}
      </List>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        recentPodcastsJson {
          edges {
            node {
              title
              date
              link
            }
          }
        }
      }
    `}
    render={data => <BlogRecentPodcasts data={data} {...props} />}
  />
);

const Podcast = ({ podcast }) => (
  <a href={podcast.link}>
    <h3>{podcast.title}</h3>
    <h4>{podcast.date}</h4>
  </a>
);

