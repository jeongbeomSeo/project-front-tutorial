import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: rgba(251, 247, 242, 1);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const Left = styled.div``;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Right = styled.div`
  font-size: 20px;
`;

const Items = styled.ul`
  display: flex;
`;

const Item = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(134, 139, 148, 1);
  font-weight: 700;
  margin-left: 10px;
`;

function Header() {
  return (
    <Container>
      <Box>
        <Left>
          <Link to={`/`}>
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Clova_assistant_icon.svg/1200px-Clova_assistant_icon.svg.png"
              alt=""
            />
          </Link>
        </Left>
        <Right>
          <Items>
            <Item>
              <StyledLink to={`products`}>상품들</StyledLink>
            </Item>
            <Item>
              <StyledLink to={`signup`}>회원 가입</StyledLink>
            </Item>
            <Item>
              <StyledLink to={`user`}>유저</StyledLink>
            </Item>
          </Items>
        </Right>
      </Box>
    </Container>
  );
}

export default Header;
