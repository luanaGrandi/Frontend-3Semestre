import logo from '../assets/logoLuana.jpg';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main className="inicial">
     
        <img
          src={logo}
          className="logo"
          alt="Logo do aplicativo DS GO"
        />
      

      <section>
        <button
          onClick={() => navigate('/dsgo')}
          className="entrar"
          aria-label="Entrar no aplicativo DS GO"
        >
          Entrar
        </button>
      </section>
    </main>
  );
}
