import { Link } from 'react-router-dom';
import missao from '../assets/missoes.png';
import mapa from '../assets/GeoLocalizacacao.png';
import bau from '../assets/Inventario.png';
import camera from '../assets/camera.png';

export function Menu() {
  return (
    <nav className="menu" aria-label="Menu principal">
      <ul>
        <li>
          <Link to="missao" aria-label="Ir para Missões">
            <figure>
              <img src={missao} alt="Ícone de Missões" />
              <figcaption>Missões</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to='inventario' aria-label="Ir para Inventário">
            <figure>
              <img src={bau} alt="Ícone de Inventário" />
              <figcaption>Inventário</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="#" aria-label="Ir para GeoLocalização">
            <figure>
              <img src={mapa} alt="Ícone de GeoLocalização" />
              <figcaption>GeoLocalização</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="camera" aria-label="Abrir Câmera">
            <figure>
              <img src={camera} alt="Ícone de Câmera" />
              <figcaption>Câmera</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
