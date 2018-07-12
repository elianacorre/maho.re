import menu from '~/data/menu.json';
import posts from '~/data/posts.json';

export default () => {
  return {
    clientState: {
      defaults: {
        menu,
        posts,
      },
    },
  };
};
