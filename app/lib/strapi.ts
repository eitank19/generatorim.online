import Strapi from 'strapi-sdk-js';

const strapi = new Strapi({
  url: 'http://localhost:1337',
  axiosOptions: {
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_TOKEN || '',
    },
  },
});

const populate = ['*', 'Preview_Image', 'Images'];
export default strapi;
export { populate };
