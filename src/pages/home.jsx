import NavBar from "../components/navbar/index";
import BoxPsicologo from "../components/box-psicologo";
import HomeNoticias from "../components/home-noticias";
import { SpaceHome } from "../components/box-psicologo/style";

const Home = () =>{
  const lista = [];

  for (let i = 0; i < 10; i++) {
    lista.push(<BoxPsicologo key={i} />);
  }

  return (
    <>
      <NavBar />
      <SpaceHome>
        <div>
          {lista}
        </div>
        <HomeNoticias />
      </SpaceHome>
    </>
  );
}

export default Home;
