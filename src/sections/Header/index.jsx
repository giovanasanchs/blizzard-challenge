import { Banner, CreateAccountButton, HeaderContainer, LoginButton, Logo, MainButton, MainHeaderContainer, MainSubtitle, MainTextContent, MainTitle, Menu, MenuLink, NavButtonsContent, Navegation, SliderMenu } from "./style";
import DiabloBG from '../../assets/banner-hero/games/diablo-bg.png';
import LogoBlizzard from '../../assets/logo-blizzard.png';
import DiabloIcon from '../../assets/banner-hero/icons/game-1.png';
import HeartStoneIcon from '../../assets/banner-hero/icons/game-2.png';
import WorldOfWarCraftIcon from '../../assets/banner-hero/icons/game-3.png';
import DiabloImortalIcon from '../../assets/banner-hero/icons/game-4.png';
import StarCraftIcon from '../../assets/banner-hero/icons/game-5.png';

export default function Header(){
    return(
        <HeaderContainer>
            <Banner src={DiabloBG} alt="Diablo IV Background" />
                <Navegation>
                    <Logo src={LogoBlizzard}/>
                    <Menu>
                        <MenuLink>Jogos</MenuLink>
                        <MenuLink>Esportes</MenuLink>
                        <MenuLink>Loja</MenuLink>
                        <MenuLink>Noticias</MenuLink>
                        <MenuLink>Suporte</MenuLink>
                    </Menu>
                    <NavButtonsContent>
                        <CreateAccountButton>Criar conta</CreateAccountButton>
                        <LoginButton>Logar</LoginButton>
                    </NavButtonsContent>
                </Navegation>
                <MainHeaderContainer>
                    <SliderMenu>
                        <img src={DiabloIcon} />
                        <img src={HeartStoneIcon} />
                        <img src={WorldOfWarCraftIcon} />
                        <img src={DiabloImortalIcon} />
                        <img src={StarCraftIcon} />
                    </SliderMenu>
                    <MainTextContent>
                        <MainTitle>Retorne à escuridão com o game Diablo IV</MainTitle>
                        <MainSubtitle>O retorno de Lilith traz uma era de escuridão e sofrimento.</MainSubtitle>
                        <MainButton>Jogue agora</MainButton>
                    </MainTextContent>
                    <div>
                        <div>Assista ao trailer</div>
                    </div>
                </MainHeaderContainer>
        </HeaderContainer>
    )
}