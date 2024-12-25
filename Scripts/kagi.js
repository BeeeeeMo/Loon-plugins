req_headers = $request.headers;
req_headers.cookie = "kagi_session=" + $argument.session.replace("https://kagi.com/search?token=", "");

$done({ status: 200, headers: req_headers });
