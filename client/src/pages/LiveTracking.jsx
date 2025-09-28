import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Polyline, Circle, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import trackingData from "../assets/tracking.json"

// Create emoji marker
const createEmojiIcon = (emoji, size = 20) =>
  L.divIcon({
    html: `<div style="font-size:${size}px">${emoji}</div>`,
    className: ""
  })

// Fly/zoom helper
function FlyToAnimal({ position, zoom = 5 }) {
  const map = useMap()
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, { animate: true, duration: 1.5 })
    }
  }, [position, zoom, map])
  return null
}

// Calculate center & radius for circular region
const getCenterAndRadius = (path) => {
  if (!path || path.length === 0) return { center: [0, 0], radius: 0 }

  const lats = path.map(p => p.lat)
  const lngs = path.map(p => p.lng)
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2
  const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2

  // Approx radius in meters (1° ~ 111km)
  const latDiff = Math.max(...lats) - Math.min(...lats)
  const lngDiff = Math.max(...lngs) - Math.min(...lngs)
  const radius = Math.max(latDiff, lngDiff) * 111000 / 2

  return { center: [centerLat, centerLng], radius }
}

export default function LiveTracking() {
  const navigate = useNavigate()
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [search, setSearch] = useState("")
  const [currentPath, setCurrentPath] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const indexRef = useRef(0)
  const intervalRef = useRef(null)

  // Animate path
  useEffect(() => {
    if (!selectedAnimal) return
    setCurrentPath([selectedAnimal.path[0]])
    indexRef.current = 0
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      indexRef.current += 1
      if (indexRef.current < selectedAnimal.path.length) {
        setCurrentPath(selectedAnimal.path.slice(0, indexRef.current + 1))
      } else {
        clearInterval(intervalRef.current)
      }
    }, 800)

    return () => clearInterval(intervalRef.current)
  }, [selectedAnimal])

  // Search suggestions
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([])
      return
    }
    const matches = trackingData.filter(a =>
      a.name.toLowerCase().includes(search.toLowerCase())
    )
    setSuggestions(matches)
  }, [search])

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-[#074240] to-[#12A8A3] text-white relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white font-semibold z-50 transition-colors"
      >
        &larr; Back to Home
      </button>

      <div className="text-center mt-10 z-50 relative">
        <h1 className="text-5xl font-extrabold tracking-wide">Live Tracking</h1>
        <p className="text-xl opacity-90 mt-2">Follow real-time animal migrations 🐾</p>
      </div>

      <div className="flex flex-col items-center mt-8 relative z-50">
        <input
          type="text"
          placeholder="Search animal..."
          className="px-6 py-3 w-96 rounded-full bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {search && (
          <div className="absolute top-16 w-96 bg-white text-black rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
            {suggestions.length > 0 ? (
              suggestions.map(animal => (
                <div
                  key={animal.name}
                  onClick={() => {
                    setSelectedAnimal(animal)
                    setSearch(animal.name)
                    setSuggestions([])
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {animal.emoji} {animal.name}
                </div>
              ))
            ) : search !== selectedAnimal?.name ? (
              <div className="px-4 py-2 text-gray-600">❌ No such animal found</div>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex-1 mt-6 px-8 pb-6 z-0">
        <MapContainer
          center={[0, 0]}
          zoom={2}
          className="h-full w-full rounded-xl shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {selectedAnimal && currentPath.length > 0 && (
            <>
              {/* Fly/zoom to animal */}
              <FlyToAnimal
                position={[
                  currentPath[currentPath.length - 1].lat,
                  currentPath[currentPath.length - 1].lng
                ]}
                zoom={5}
              />

              {/* Circular region */}
              <Circle
                {...getCenterAndRadius(selectedAnimal.path)}
                pathOptions={{ fillColor: "orange", fillOpacity: 0.2, stroke: false }}
              />

              {/* Migration path */}
              <Polyline
                positions={currentPath.map(p => [p.lat, p.lng])}
                pathOptions={{ color: "blue", weight: 5 }}
              />

              {/* Current position marker */}
              <Marker
                position={[
                  currentPath[currentPath.length - 1].lat,
                  currentPath[currentPath.length - 1].lng
                ]}
                icon={createEmojiIcon(selectedAnimal.emoji, 20)}
              />
            </>
          )}
        </MapContainer>
      </div>

      {selectedAnimal && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 px-8 py-3 rounded-full z-50">
          <h2 className="text-xl font-semibold flex items-center gap-3">
            {selectedAnimal.emoji} {selectedAnimal.name}
          </h2>
        </div>
      )}
    </div>
  )
}
