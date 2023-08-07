import styled from 'styled-components'

export const HomeSection = styled.section`
// background:#A6E3E9;
color:#222831;
margin:5rem auto;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width:992px){
    .container{
        .row{
            flex-direction:column-reverse
        }
    }
}
`
export const EnterTitle = styled.h5`
margin:0;
padding:0;

`
export const Title = styled.h1`
margin:0;
padding:0;
font-size:80px;
font-weight:900;
letter-spacing:.4rem;
line-height:120px

`
export const Subtitle = styled.h2`
font-weight:600;


`
export const AboutText = styled.p`
text-align:justify;
margin:20px 0;

`