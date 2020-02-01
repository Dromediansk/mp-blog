import React from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from 'styled-icons/boxicons-regular/SearchAlt2';
import TagBadge from './tagBadge';
import { Link } from 'gatsby';

const FilterWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const SearchContainer = styled.div`
    flex-basis: 40%;
`

const TagsContainer = styled.div`
    flex-basis: 60%;
    margin-left: 1rem;
     @media only screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 1rem;
    }
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
        background: #eee;
        border: 1px solid lightgrey;
        transition: all .3s ease;
    }
    &:focus-within {
        & > span {
            color: #fff;
            background: slategrey;
            border-color: slategrey;
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
    border: 1px solid lightgrey;
    background: #fff;
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: slategrey;
    }
`

const SearchIcon = styled(SearchAlt2)`
`

const TagHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const ClearButton = styled.button`
    height: 2rem;
    padding: 0.1rem 0.6rem;
    background: #eee;
    color: #aaa;
    border: 1px solid lightgrey;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;
    :hover {
        background: lightgrey;
    }
`

const TagListWrapper = styled.ul`
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    > a {
        font-style: normal;
        margin-bottom: 0.2rem;
    }
`

const FilterBanner = ({ searchValue, searchChange, tagList, filterActive, clearFilter }) => {
    return <FilterWrapper>
        <SearchContainer>
            <h2>Search</h2>
            <SearchInputWrapper>
                <span><SearchIcon size="20" /></span>
                <SearchInput value={searchValue} type="text" placeholder="Search for keyword.." onChange={searchChange} />
            </SearchInputWrapper>
        </SearchContainer>
        <TagsContainer>
            <TagHeader>
                <h2>Tags</h2>
                {filterActive &&
                    <Link to="/">
                        <ClearButton onClick={clearFilter}>
                            Clear
                        </ClearButton>
                    </Link>}
            </TagHeader>
            <TagListWrapper>
                {tagList.map((tag, index) => (
                    <TagBadge key={index} tag={tag.fieldValue} />))}
            </TagListWrapper>
        </TagsContainer>
    </FilterWrapper>
}

export default FilterBanner;