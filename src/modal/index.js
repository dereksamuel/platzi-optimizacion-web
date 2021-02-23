import openModal from './openModal'

export const modalListener = event => {
  const img = event.target
  const link = img.parentElement
  const videoId = link.dataset.videoid

  if (link && !link.classList.contains('js-video-prime')) return
  event.preventDefault()
  import('./openModal').then(({ openModal }) => {
    openModal(videoId)
  })
}
