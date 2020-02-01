import React from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from 'styled-icons/boxicons-regular/SearchAlt2';

const FilterWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const SearchContainer = styled.div`
    flex-basis: 60%;
`

const TagsContainer = styled.div`
    flex-basis: 40%;
`

const SearchInputWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 360px;
        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
    & > span,
    input {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
    input {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        width: 1%;
        margin-top: 0;
        margin-bottom: 0;
    }
    & > span {
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: #99A3BA;
        background: #EEF4FF;
        border: 1px solid #CDD9ED;
        transition: all .3s ease;
    }
    &:focus-within {
        & > span {
            color: #fff;
            background: #678EFE;
            border-color: #275EFE;
        }
    }
`

const SearchInput = styled.input`
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: #275EFE;
    }
`

const SearchIcon = styled(SearchAlt2)`

`

const FilterBanner = ({ searchChange }) => {
    return <FilterWrapper>
        <SearchContainer>
            <h2>Search</h2>
            <SearchInputWrapper>
                <span><SearchIcon size="20" /></span>
                <SearchInput type="text" placeholder="Search for keyword.." onChange={searchChange} />
            </SearchInputWrapper>
        </SearchContainer>
        <TagsContainer>
            <h2>Tags</h2>
        </TagsContainer>
    </FilterWrapper>
}

export default FilterBanner;