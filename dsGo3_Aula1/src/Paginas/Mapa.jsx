import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


export  function Mapa() {
  const mapRef = useRef(null);
  const routeRef = useRef(null);

  const [origem, setOrigem] = useState({
    lat: "",
    lng: "",
  });

  const [destino, setDestino] = useState({
    lat: "",
    lng: "",
  });

  // Pegar a localização atual
  function usarLocalizacaoAtual(setFunc) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setFunc({
            lat: pos.coords.latitude.toFixed(6),
            lng: pos.coords.longitude.toFixed(6),
          });
        },
        (err) => {
          console.error("Erro ao pegar geolocalização", err);
          alert("Permita o uso da localização no seu  navegador!");
        },
        { enableHighAccuracy: true }
      );
    }
  }

  // Inicializa o mapa
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [-22.80, -47.05], // centro aproximado de Campinas
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(mapRef.current);
    }
  }, []);

  // para gerar a rota
  function gerarRota() {
    if (!origem.lat || !origem.lng || !destino.lat || !destino.lng) {
      alert("Preencha todos os campos!");
      return;
    }

    const origemLatLng = L.latLng(parseFloat(origem.lat), parseFloat(origem.lng));
    const destinoLatLng = L.latLng(parseFloat(destino.lat), parseFloat(destino.lng));

    // limpa a rota antiga que estava
    if (routeRef.current) {
      mapRef.current.removeControl(routeRef.current);
    }

    // criar uma nova rota
    routeRef.current = L.Routing.control({
      waypoints: [origemLatLng, destinoLatLng],
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      lineOptions: {
        weight: 5,
      },
    }).addTo(mapRef.current);

    mapRef.current.setView(origemLatLng, 14);
  }

  return (
    <div className="map-wrapper">
      
      {/* formulario para gerar a rota */}
      <div className="painel">
        <h2>Gerar Rota</h2>

        {/* aqui voce coloca a origem */}
        <div className="grupo">
          <h3>Origem</h3>

          <label>Latitude</label>
          <input
            type="text"
            value={origem.lat}
            onChange={(e) => setOrigem({ ...origem, lat: e.target.value })}
          />

          <label>Longitude</label>
          <input
            type="text"
            value={origem.lng}
            onChange={(e) => setOrigem({ ...origem, lng: e.target.value })}
          />

          <button
            className="btn-loc"
            onClick={() => usarLocalizacaoAtual(setOrigem)}
          >
            Usar minha localização atual
          </button>
        </div>

        {/* aqui o seu destino */}
        <div className="grupo">
          <h3>Destino</h3>

          <label>Latitude</label>
          <input
            type="text"
            value={destino.lat}
            onChange={(e) => setDestino({ ...destino, lat: e.target.value })}
          />

          <label>Longitude</label>
          <input
            type="text"
            value={destino.lng}
            onChange={(e) => setDestino({ ...destino, lng: e.target.value })}
          />

          <button
            className="btn-loc"
            onClick={() => usarLocalizacaoAtual(setDestino)}
          >
            Usar minha localização atual
          </button>
        </div>

        <button className="btn-gerar" onClick={gerarRota}>
          Gerar Rota
        </button>
      </div>

      {/* mostra o mapa */}
      <div id="map" className="map-container"></div>
    </div>
  );
}
