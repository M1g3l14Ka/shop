export default function Hero() {
return (
    <div className="relative w-full min-h-[105vh] flex items-center justify-center overflow-hidden">
        
        <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute h-full w-full inset-0 object-cover pointer-events-none"
            src="/logo/logos.mp4"
        />
    </div>
    )
}