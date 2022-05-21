import imageLoader from '../imageLoader'
const images = imageLoader(
  require.context('../carousel', false, /\.(png|jpe?g|svg)$/)
)
export default images
