<template lang="pug">
  ul
    li(v-for="(item, index) in posts", :key="index")
      h3 {{item.title}}
      p {{item.content}}
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    posts: gql`
      {
        posts @client {
          content
          date
          title
        }
      }
    `,
  },
};
</script>