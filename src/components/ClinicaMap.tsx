import { useEffect, useRef } from "react";

const ENDERECO = "Avenida Evangelizadora Neusa Dourado, 226, Redenção, PA, Brasil";
const ZOOM = 18;

const ClinicaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const encoded = encodeURIComponent(ENDERECO);

    fetch(`https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`, {
      headers: { "Accept-Language": "pt-BR" },
    })
      .then(r => r.json())
      .then(results => {
        const lat = results[0] ? parseFloat(results[0].lat) : -8.02753;
        const lng = results[0] ? parseFloat(results[0].lon) : -50.02834;
        renderMap(lat, lng);
      })
      .catch(() => renderMap(-8.02753, -50.02834));

    function renderMap(lat: number, lng: number) {
    if (!mapRef.current) return;

    import("leaflet").then((L) => {
      // Fix ícones padrão do leaflet no Vite
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [lat, lng],
        zoom: ZOOM,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Marcador customizado com logo da clínica
      const customIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            filter: drop-shadow(0 4px 12px rgba(0,0,0,0.35));
          ">
            <div style="
              background: white;
              border: 3px solid #D99441;
              border-radius: 16px;
              padding: 8px 12px;
              display: flex;
              align-items: center;
              gap: 8px;
              min-width: 160px;
              box-shadow: 0 4px 20px rgba(47,28,26,0.25);
            ">
              <img
                src="/lovable-uploads/logo_clinica.png"
                alt="Clínica PlanVida"
                style="height: 36px; width: auto; object-fit: contain;"
              />
            </div>
            <div style="
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-top: 12px solid #D99441;
              margin-top: -1px;
            "></div>
            <div style="
              width: 8px;
              height: 8px;
              background: #2F1C1A;
              border-radius: 50%;
              margin-top: 2px;
            "></div>
          </div>
        `,
        iconAnchor: [90, 68],
        popupAnchor: [0, -70],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

      marker.bindPopup(`
        <div style="font-family: Inter, sans-serif; min-width: 180px; padding: 4px 0;">
          <p style="font-weight: 700; color: #2F1C1A; margin: 0 0 4px;">Clínica PlanVida</p>
          <p style="font-size: 12px; color: #6b7280; margin: 0 0 2px;">Av. Evangelizadora Neusa Dourado, 226</p>
          <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px;">Redenção — PA</p>
          <a
            href="https://maps.google.com/?q=Av+Evangelizadora+Neusa+Dourado,226,Redenção,PA"
            target="_blank"
            style="font-size: 12px; color: #D99441; font-weight: 600; text-decoration: none;"
          >
            Ver no Google Maps →
          </a>
        </div>
      `, { maxWidth: 220 });

      marker.openPopup();
      mapInstance.current = map;
    });
    } // fim renderMap

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: "320px" }} />
    </>
  );
};

export default ClinicaMap;
