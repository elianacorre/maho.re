<template lang="pug">
  .section
    .container
      ul.columns
        li.column.is-one-third(v-for="(item, index) in posts", :key="index")
          .card
            .card-image
              figure.image.is-4by3
                img(:src='item.images[0].src', alt='Placeholder image')
            .card-content
              .media
                .media-content
                  p.title.is-4 {{item.title}}
                  p.subtitle.is-6 {{item.date}}
              .content
                | {{item.content}}
</template>

<script>
import posts from '~/data/posts';

export default {
  data: () => {
    return {
      posts,
    };
  },
};
</script>