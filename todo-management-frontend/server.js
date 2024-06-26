// Include it and extract some methods for convenience
import server from 'server';
const { get, post } = server.router;

// Launch server with options and a couple of routes
server({ port: 3000 }, [
  get('/', ctx => 'Hello world'),
  post('/', ctx => {
    console.log(ctx.data);
    return 'ok';
  })
]);
