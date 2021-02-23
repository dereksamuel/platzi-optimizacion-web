import h from 'hyperscript'
import formatDistance from 'date-fns/formatDistance'
import parseIso from 'date-fns/parseISO'

const relativeDate = dateStr =>
  formatDistance(parseIso(dateStr, 'YYYY-MM-DD'), new Date())

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div.carrousel-item-div',
    h(
      'a.carrousel-item-div__link',
      {
        className: 'js-video-prime',
        'data-videoId': youtubeVideoId,
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.carrousel-item-div__link-img', {
        src: 'assets/play-icon.png',
        alt: 'Play',
      })
    ),
    h(
      'a.carrousel-item-div__link',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.carrousel-item-div__link-img', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) => {
  return h(
    'div.carousel-item',
    h('img.carousel-item__img', { alt: '', 'data-src': imageUrl }),
    h(
      '.carousel-item__div',
      Controls({ slug, youtubeVideoId }),
      h('p.carousel-item__title', title),
      h('p.carousel-item__subtitle', subtitle),
      h('p.carousel-item__desc', `Released: ${relativeDate(startDate)}`)
    )
  )
}

export default CarouselItem
