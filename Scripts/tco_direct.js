let body = $response.body;

body = body.replace(
  /,"expanded_url":"([^"]+)","url":"[^"]+"/g,
  ',"expanded_url":"$1","url":"$1"'
);

$done({ body });