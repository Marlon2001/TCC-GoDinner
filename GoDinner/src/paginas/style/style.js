
import styled from 'styled-components';
import theme from 'styled-theming';


export const corDiv = theme('cor',{
    laranja: "#F26B3A",
    marrom: "#705348",
    verde: "#3D830B",
    preto: "#2d2d2c"
})


export const DivHeader = styled.div`
    background: ${corDiv};
    width: 100%;
    height: 20px;
`

