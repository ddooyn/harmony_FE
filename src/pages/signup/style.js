import styled from "styled-components";

export const Container = styled.form`
    height: 100vh;
    padding: 20px;
    position: relative;
    background: #F2F2F2;
`

export const Top = styled.div`
    width: 100%;
    height: 50px;
    padding: 15px 0;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
`

export const Title = styled.div`
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`

export const InputWrap = styled.div`
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const IconWrap = styled.span`
    width: 20px;
    height: 20px;
    border: 1px solid #DDDDDD;
    border-radius: 12px;`

export const PolicyWrap = styled.div`
    margin-top: 22px;
    position: relative;
`

export const PolicyDesc = styled.div`
    font-size: 14px;
    font-weight: 600;
`

export const PolicyLink = styled.div`
    font-size: 12px;
    text-decoration: underline;
    color: #7D7D7D;
`

export const PolicyCheck = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

`

export const PolicyIcon = styled.img`
    position: absolute;
    top: 58px;
    left: 5px;
`

export const ButtonWrap = styled.div`
    margin-top: 40px;
`

export const ErrorMsg = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #C53737;
    margin-top: 8px;
`