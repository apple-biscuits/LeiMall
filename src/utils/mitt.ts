import mitt from 'mitt'
type Events = {
  'add-cart': HTMLElement
}
const emitter = mitt<Events>()

export default emitter
