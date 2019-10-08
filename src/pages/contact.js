import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import styled from "styled-components";
import Heading from "../components/Typography/Heading";
import Description from "../components/Typography/Description";
import PageGrid from "../components/Responsive/PageGrid";
import NavLink from "../components/Navbar/NavLink";

const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
  font-size: 36px;
  line-height: 250%;
`;

const ContactLinks = styled.a`
   color: #616CAA;
`;

export default function projects({ data }) {
  return (
    <Layout>
      <PageGrid>
            <ListItem>
                <ContactLinks href="mailto:mdctleo@hotmail.com">Email</ContactLinks>
            </ListItem>
            <ListItem>
                <ContactLinks href="">Resume</ContactLinks>
            </ListItem>
      </PageGrid>
    </Layout>
  );
}
