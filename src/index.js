export default {
      async fetch(request, env) {
          const url = new URL(request.url);

              if (url.pathname === "/") {
                    return new Response("Sweepstakes Agent is online!");
                        }

                            if (url.pathname === "/browser-test") {
                                  if (!env.BROWSER) {
                                          return new Response("BROWSER binding not found", { status: 500 });
                                                }

                                                      return new Response("BROWSER binding is connected!");
                                                          }

                                                              return new Response("Not found", { status: 404 });
                                                                }
                                                                };
}