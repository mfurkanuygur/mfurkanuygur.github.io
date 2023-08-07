import styled from 'styled-components'

export const ContactSection = styled.section`
margin:5rem auto;
    form{
        .col-lg-6,.form-height{
            display:flex;
            align-items:flex-start;
      
            min-height:80px;
        }
        .text-height{
            min-height:110px
        }
    }

`

export const SendButton = styled.button`
width:25%;
border-radius:5px;
border:none;
color:white;
background:#0B2447;
padding:8px 5px ;
transition:.3s ease;
&:hover{
    transform:scale(1.05)
}
`
