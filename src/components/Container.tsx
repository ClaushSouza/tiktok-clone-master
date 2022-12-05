import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import '../img/virginia.png'

import '../main.css';


function Container() {
  return (
    <div className="body-container">
      <div className='homeicon'>
        <button>
          <HomeIcon/>
        </button>
        <h2>Para você</h2>
      </div>
      <div className='seguindo'>
        <button>
          <PeopleOutlineIcon/>
        </button>
        <h2>Seguindo</h2>
      </div>
      <div className='video'>
        <button>
          <HomeIcon/>
        </button>
        <h2>LIVE</h2>
      </div>
      <br />
      <Divider variant="middle" className='Divider'/>
      <div className='paragrafo'>
        <p className='texto'>Faça login para seguir criadores,  curtir vídeos<br/>
          e ver comentários.</p>
      </div>
      <div className='buttonbtn'>
        <button className='btn'>Entrar</button>
      </div>
      <br />
      <br />
      <Divider variant="middle" className='DividerEspaco'/>
      <div className='navfotos'>
        <p className='sugeridas'>Contas sugeridas</p>
        <div className='tiktok-1mo2fkg-DivUserLinkContainer'>
          <Avatar className='Avatar'
            alt="Remy Sharp"
            src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/536a93f31865418f893b57f07ac520d6~c5_100x100.jpeg?x-expires=1668189600&x-signature=oUqE4ecMXs%2Fib2R7a7D517PexXM%3D"
            sx={{ width: 26, height: 24,}}
          />
          <div className='tituloh4'>
            <h4 className='nomeh4'>virginiafonseca</h4>
          </div>
          <p className='Sobrenome'>Virginia</p>
        </div>
      </div>
    </div>

  )
}

export default Container
