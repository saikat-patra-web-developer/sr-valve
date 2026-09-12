export default function ResponsiveImage({ src, alt, sizes = '100vw', ...props }) {
  const webp = src.replace(/\.(png|jpe?g)$/i, '.webp')
  const stem = webp.replace(/\.webp$/i, '')
  return (
    <img
      src={webp}
      srcSet={`${stem}-320.webp 320w, ${stem}-640.webp 640w, ${stem}-1280.webp 1280w`}
      sizes={sizes}
      alt={alt}
      {...props}
    />
  )
}
