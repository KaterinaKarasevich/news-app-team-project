export function createCardsMarkup(data) {
  // console.log(data);
  return data
    .map(({ title, abstract, media, published_date, url, section }) => {
      // console.log(media);

      const noImgUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

      const img = media.length ? media[0]['media-metadata'][2].url : noImgUrl;
      // console.log(img);
      return `<div class = "card">
        <div class = "card-img-wrapper">
        <img class="card__img" src=${img} alt="" width="350px" height="500px">
        <span class="card__btn">add/remove</span>
        <span class="card__category">${section}</span>
        
        </div>
        <h3 class="card__title">${title}</h3>
        <p class="card__text">${abstract}</p>
        <span class="card__date">published_date: ${published_date}</span>
        <a href="${url}">read more</a></div>`;
    })
    .join('');
}

// ['media-metadata'][2].url
