export function GreenTexturedBackground() {
  return (
    <>
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: '#111c0d',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #7db542 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, #4a752a 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #223816 0%, transparent 60%)
          `,
        }}
      ></div>
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      ></div>
    </>
  );
}
