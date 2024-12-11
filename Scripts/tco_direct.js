let body = $response.body;
try {
  // 如果是 JSON 字符串，先解析
  let json = JSON.parse(body);
  
  // 將 JSON 轉回字符串並進行替換
  body = JSON.stringify(json).replace(
    /,"expanded_url"\s*:\s*"([^"]+)"\s*,\s*"url"\s*:\s*"[^"]+"/g,
    ',"expanded_url":"$1","url":"$1"'
  );
  
  // 確保結果是有效的 JSON
  JSON.parse(body);
} catch(e) {
  console.log('Error:', e);
  // 如果發生錯誤，使用原始字符串進行替換
  body = body.replace(
    /,"expanded_url"\s*:\s*"([^"]+)"\s*,\s*"url"\s*:\s*"[^"]+"/g,
    ',"expanded_url":"$1","url":"$1"'
  );
}

$done({ body });
