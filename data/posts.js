const context = require.context('./posts', false, /\.(json)$/);
export default context.keys().map(context);