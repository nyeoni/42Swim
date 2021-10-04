import styled from 'styled-components'
import Input from '../../atoms/Input'

export const SearchBox = styled.div`
  width: 544px;
  height: 43px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  background: white;
  padding-right: 5px;
  display: flex;
  align-items: center;
`

export const SInput = styled(Input)`
  width: 500px;
  height: 41px;
  border-radius: 20px 0 0 20px;
`

export const SButton = styled.button`
  width: 44px;
  height: 41px;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`