import React from 'react';
import styled from "styled-components";
import { determineTagColor, slugify } from '../utils/utilFunctions';
import { Link } from 'gatsby';
import { PriceTags } from "styled-icons/icomoon/PriceTags";

const TagLink = styled(Link)`
  text-decoration: none;
  background: #eee;
  padding: 0.2rem 0.5rem;
  margin-right: 0.3rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s;
  :hover {
    background: #ddd;
  }
`

const Icon = styled(PriceTags)`
  padding-right: 0.2rem;
`

const TagBadge = ({ tag }) => (
  <TagLink to={`/?tag=${slugify(tag)}`} className="tag-badge">
    <Icon size="20" fill={determineTagColor(tag)} />
    <span>{tag}</span>
  </TagLink>
)

export default TagBadge;