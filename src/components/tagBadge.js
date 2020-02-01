import React from 'react';
import styled from "styled-components";
import { determineTagColor } from '../utils/utilFunctions';
import { PriceTags } from "styled-icons/icomoon/PriceTags";

const TagWrapper = styled.span`
  background: #eee;
  padding: 0.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
`

const Icon = styled(PriceTags)`
  padding-right: 0.2rem;
`

const TagBadge = ({ tag }) => (
    <TagWrapper className="tag-badge">
        <Icon size="20" fill={determineTagColor(tag)} />
        <span>{tag}</span>
    </TagWrapper>
)

export default TagBadge;