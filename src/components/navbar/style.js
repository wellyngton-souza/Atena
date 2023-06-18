import styled from 'styled-components';

export const Navbar = styled.div`
    .nav-main{
        box-sizing: border-box;
        padding: 0 1vw;

        height: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        
        background: linear-gradient(180deg, #BC9EFF 0%, #ACBCFF 100%);

        .usuario{
            display: flex;
            align-items: center;
            cursor: pointer;

            .user{
                margin-right: 10px;
            }
        }
    }

    .menu-aberto{
        box-sizing: border-box;
        padding: 0 30px;
        position: absolute;

        width: 400px;
        right: 0;

        border: 1px solid black;
        background-color: white;

        h3{
            font-size: 18px;
            font-weight: 400;
        }
    }
`;