amis.define('docs/zh-CN/components/qrcode.md', function(require, exports, module, define) {

  module.exports = {
    "title": "QRCode 二维码",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "QRCode 二维码",
    "icon": null,
    "order": 61,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"qr-code\",\n    \"codeSize\": 128,\n    \"value\": \"https://www.baidu.com\"\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>根据 QR 码国际标准，二进制模式最多可存储<code>2953</code>字节的内容（1 中文汉字=2 字节）</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E8%83%8C%E6%99%AF%E8%89%B2\" href=\"#%E9%85%8D%E7%BD%AE%E8%83%8C%E6%99%AF%E8%89%B2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置背景色</h2><p>背景色默认为<code>#fff</code>（纯白色）, <code>backgroundColor</code>属性可以修改背景色。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n    {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"backgroundColor\": \"#108cee\",\n        \"foregroundColor\": \"#000\",\n        \"value\": \"https://www.baidu.com\"\n    }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E5%89%8D%E6%99%AF%E8%89%B2\" href=\"#%E9%85%8D%E7%BD%AE%E5%89%8D%E6%99%AF%E8%89%B2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置前景色</h2><p>前景色默认为<code>#000</code>（纯黑色）, <code>foregroundColor</code>属性可以前景色。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n    {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"backgroundColor\": \"#fff\",\n        \"foregroundColor\": \"#108cee\",\n        \"value\": \"https://www.baidu.com\"\n    }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%BA%A0%E9%94%99%E7%AD%89%E7%BA%A7\" href=\"#%E7%BA%A0%E9%94%99%E7%AD%89%E7%BA%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>纠错等级</h2><p><code>level</code>属性可以设置二维码的纠错等级，纠错等级分为四种（<code>&#39;L&#39; &#39;M&#39; &#39;Q&#39; &#39;H&#39;</code>），从左到右依次提升，默认为<code>&#39;L&#39;</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"hbox\",\n  \"columns\": [\n    {\n      \"type\": \"qr-code\",\n      \"codeSize\": 128,\n      \"level\": \"L\",\n      \"value\": \"https://www.baidu.com\"\n    },\n    {\n      \"type\": \"qr-code\",\n      \"codeSize\": 128,\n      \"level\": \"M\",\n      \"value\": \"https://www.baidu.com\"\n    },\n    {\n      \"type\": \"qr-code\",\n      \"codeSize\": 128,\n      \"level\": \"Q\",\n      \"value\": \"https://www.baidu.com\"\n    },\n    {\n      \"type\": \"qr-code\",\n      \"codeSize\": 128,\n      \"level\": \"H\",\n      \"value\": \"https://www.baidu.com\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87\" href=\"#%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>嵌入图片</h2><p><code>imageSettings</code>属性可以设置二维码中嵌入的图片，<code>src</code>设置图片链接地址，图片大小默认为二维码大小的 10%，图片位置默认水平垂直居中。</p>\n<blockquote>\n<p>1.10.0 及以上版本。\n建议根据图片大小，调整二维码纠错等级，避免图片遮挡导致二维码无法被正确识别</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"qr-code\",\n    \"codeSize\": 128,\n    \"level\": \"Q\",\n    \"value\": \"https://www.baidu.com\",\n    \"imageSettings\": {\n      \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg\",\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%85%B3%E8%81%94%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%98%E9%87%8F\" href=\"#%E5%85%B3%E8%81%94%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%98%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>关联上下文变量</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"imgSrc\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg\"\n    },\n    \"body\": {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"level\": \"Q\",\n        \"value\": \"https://www.baidu.com\",\n        \"imageSettings\": {\n            \"width\": 50,\n            \"height\": 30,\n            \"src\": \"${imgSrc}\"\n        }\n    }\n\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E5%AE%BD%E9%AB%98\" href=\"#%E5%9B%BE%E7%89%87%E5%AE%BD%E9%AB%98\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片宽高</h3><p><code>width</code> 和 <code>height</code> 可以设置图片的宽度和高度。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"qr-code\",\n    \"codeSize\": 128,\n    \"level\": \"Q\",\n    \"value\": \"https://www.baidu.com\",\n    \"imageSettings\": {\n      \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg\",\n      \"width\": 50,\n      \"height\": 30\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E5%81%8F%E7%A7%BB%E9%87%8F\" href=\"#%E5%9B%BE%E7%89%87%E5%81%8F%E7%A7%BB%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片偏移量</h3><p>以二维码<strong>左上角</strong>为原点，<code>x</code>，<code>y</code>分别设置图片的水平偏移量和垂直偏移量。示例通过<code>codeSize</code>和图片的<code>width</code> 和 <code>height</code> 计算出偏移量<code>{&quot;x&quot;: 78, &quot;y&quot;: 98}</code>，使图片位于右下角。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"qr-code\",\n    \"codeSize\": 128,\n    \"level\": \"Q\",\n    \"value\": \"https://www.baidu.com\",\n    \"imageSettings\": {\n      \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg\",\n      \"width\": 50,\n      \"height\": 30,\n      \"x\": 78,\n      \"y\": 98\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%A0%81%E7%9C%BC-%E7%A0%81%E7%82%B9%E6%A0%B7%E5%BC%8F\" href=\"#%E7%A0%81%E7%9C%BC-%E7%A0%81%E7%82%B9%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>码眼\\码点样式</h3><ul>\n<li>码眼类型<code>eyeType</code>可配置<code>default</code>、<code>rounded</code>、<code>circle</code></li>\n<li>码眼边框大小<code>eyeBorderSize</code>可配置<code>default</code>、<code>sm</code>、<code>xs</code></li>\n<li>码眼边框<code>eyeBorderColor</code>和内部颜色<code>eyeInnerColor</code>可分别配置，默认使用<code>foregroundColor</code></li>\n<li>码点类型<code>pointType</code>可配置<code>default</code>、<code>circle</code></li>\n<li>码点大小<code>pointTypeSize</code>可配置<code>default</code>、<code>sm</code>、<code>xs</code></li>\n<li>码点大小可<code>pointSizeRandom</code>，增加大小随机</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"body\": [{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\"\n\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeType\": \"rounded\"\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeType\": \"circle\"\n      }\n    ]\n  },{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeBorderSize\": \"sm\"\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeBorderSize\": \"xs\"\n      }\n    ]\n  },{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeBorderColor\": \"red\"\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeInnerColor\": \"blue\"\n      }\n    ]\n  },{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\"\n\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"pointType\": \"circle\"\n      }\n    ]\n  },{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"pointSize\": \"sm\"\n      },\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"pointSize\": \"xs\"\n      }\n    ]\n  },{\n    \"type\": \"hbox\",\n    \"columns\": [\n      {\n        \"type\": \"qr-code\",\n        \"codeSize\": 128,\n        \"value\": \"https://www.baidu.com\",\n        \"eyeType\": \"rounded\",\n        \"eyeBorderSize\": \"sm\",\n        \"pointType\": \"circle\",\n        \"pointSizeRandom\": true\n      }\n    ]\n  }]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8B%E8%BD%BD%E4%BA%8C%E7%BB%B4%E7%A0%81\" href=\"#%E4%B8%8B%E8%BD%BD%E4%BA%8C%E7%BB%B4%E7%A0%81\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>下载二维码</h2><blockquote>\n<p>3.6.0 及以上版本</p>\n</blockquote>\n<p>基于事件动作实现</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"action\",\n    \"label\": \"下载二维码\",\n    \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"actionType\": \"saveAs\",\n              \"componentId\": \"qr-code-download\",\n              \"args\": {\n                \"name\": \"download.png\"\n              }\n            }\n          ]\n        }\n      }\n  },\n  {\n    \"type\": \"qr-code\",\n    \"id\": \"qr-code-download\",\n    \"codeSize\": 128,\n    \"value\": \"https://www.baidu.com\"\n }\n]\n</script></div><div class=\"markdown-body\">\n<p>需要注意这种方式不支持嵌入图片，如果要嵌入图片建议直接截图</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;qr-code&quot;</code></td>\n<td>指定为 QRCode 渲染器</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td><code>&quot;canvas&quot;</code></td>\n<td>渲染模式，有<code>canvas</code>和<code>svg</code>两种</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>qrcodeClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>二维码的类名</td>\n</tr>\n<tr>\n<td>codeSize</td>\n<td><code>number</code></td>\n<td><code>128</code></td>\n<td>二维码的宽高大小</td>\n</tr>\n<tr>\n<td>backgroundColor</td>\n<td><code>string</code></td>\n<td><code>&quot;#fff&quot;</code></td>\n<td>二维码背景色</td>\n</tr>\n<tr>\n<td>foregroundColor</td>\n<td><code>string</code></td>\n<td><code>&quot;#000&quot;</code></td>\n<td>二维码前景色</td>\n</tr>\n<tr>\n<td>level</td>\n<td><code>string</code></td>\n<td><code>&quot;L&quot;</code></td>\n<td>二维码复杂级别，有（&#39;L&#39; &#39;M&#39; &#39;Q&#39; &#39;H&#39;）四种</td>\n</tr>\n<tr>\n<td>value</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td><code>&quot;https://www.baidu.com&quot;</code></td>\n<td>扫描二维码后显示的文本，如果要显示某个页面请输入完整 url（<code>&quot;http://...&quot;</code>或<code>&quot;https://...&quot;</code>开头），支持使用 <a href=\"./concepts/template\">模板</a></td>\n</tr>\n<tr>\n<td>imageSettings</td>\n<td><code>object</code></td>\n<td></td>\n<td>QRCode 图片配置</td>\n</tr>\n<tr>\n<td>imageSettings.src</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片链接地址</td>\n</tr>\n<tr>\n<td>imageSettings.width</td>\n<td><code>number</code></td>\n<td>默认为<code>codeSize</code>的 10%</td>\n<td>图片宽度</td>\n</tr>\n<tr>\n<td>imageSettings.height</td>\n<td><code>number</code></td>\n<td>默认为<code>codeSize</code>的 10%</td>\n<td>图片高度</td>\n</tr>\n<tr>\n<td>imageSettings.x</td>\n<td><code>number</code></td>\n<td>默认水平居中</td>\n<td>图片水平方向偏移量</td>\n</tr>\n<tr>\n<td>imageSettings.y</td>\n<td><code>number</code></td>\n<td>默认垂直居中</td>\n<td>图片垂直方向偏移量</td>\n</tr>\n<tr>\n<td>eyeType</td>\n<td><code>string</code></td>\n<td><code>&quot;default&quot;</code></td>\n<td>码眼类型，有<code>default</code>、<code>circle</code>、<code>rounded</code>三种</td>\n</tr>\n<tr>\n<td>eyeBorderColor</td>\n<td><code>string</code></td>\n<td><code>&quot;#000000&quot;</code></td>\n<td>码眼边框颜色</td>\n</tr>\n<tr>\n<td>eyeBorderSize</td>\n<td><code>string</code></td>\n<td><code>&quot;default&quot;</code></td>\n<td>码眼边框大小，有<code>default</code>、<code>sm</code>、<code>xs</code>三种</td>\n</tr>\n<tr>\n<td>eyeInnerColor</td>\n<td><code>string</code></td>\n<td><code>&quot;#000000&quot;</code></td>\n<td>码眼内部颜色</td>\n</tr>\n<tr>\n<td>pointType</td>\n<td><code>string</code></td>\n<td><code>&quot;default&quot;</code></td>\n<td>码点类型，有<code>default</code>、<code>circle</code>两种</td>\n</tr>\n<tr>\n<td>pointSize</td>\n<td><code>string</code></td>\n<td><code>&quot;default&quot;</code></td>\n<td>码点大小，有<code>default</code>、<code>sm</code>、<code>xs</code>三种</td>\n</tr>\n<tr>\n<td>pointSizeRandom</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>码点大小随机</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>saveAs</td>\n<td><code>name?: string</code> 文件名</td>\n<td>下载文档</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "配置背景色",
          "fragment": "%E9%85%8D%E7%BD%AE%E8%83%8C%E6%99%AF%E8%89%B2",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E8%83%8C%E6%99%AF%E8%89%B2",
          "level": 2
        },
        {
          "label": "配置前景色",
          "fragment": "%E9%85%8D%E7%BD%AE%E5%89%8D%E6%99%AF%E8%89%B2",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E5%89%8D%E6%99%AF%E8%89%B2",
          "level": 2
        },
        {
          "label": "纠错等级",
          "fragment": "%E7%BA%A0%E9%94%99%E7%AD%89%E7%BA%A7",
          "fullPath": "#%E7%BA%A0%E9%94%99%E7%AD%89%E7%BA%A7",
          "level": 2
        },
        {
          "label": "嵌入图片",
          "fragment": "%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87",
          "fullPath": "#%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87",
          "level": 2,
          "children": [
            {
              "label": "关联上下文变量",
              "fragment": "%E5%85%B3%E8%81%94%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%98%E9%87%8F",
              "fullPath": "#%E5%85%B3%E8%81%94%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%98%E9%87%8F",
              "level": 3
            },
            {
              "label": "图片宽高",
              "fragment": "%E5%9B%BE%E7%89%87%E5%AE%BD%E9%AB%98",
              "fullPath": "#%E5%9B%BE%E7%89%87%E5%AE%BD%E9%AB%98",
              "level": 3
            },
            {
              "label": "图片偏移量",
              "fragment": "%E5%9B%BE%E7%89%87%E5%81%8F%E7%A7%BB%E9%87%8F",
              "fullPath": "#%E5%9B%BE%E7%89%87%E5%81%8F%E7%A7%BB%E9%87%8F",
              "level": 3
            },
            {
              "label": "码眼\\码点样式",
              "fragment": "%E7%A0%81%E7%9C%BC-%E7%A0%81%E7%82%B9%E6%A0%B7%E5%BC%8F",
              "fullPath": "#%E7%A0%81%E7%9C%BC-%E7%A0%81%E7%82%B9%E6%A0%B7%E5%BC%8F",
              "level": 3
            }
          ]
        },
        {
          "label": "下载二维码",
          "fragment": "%E4%B8%8B%E8%BD%BD%E4%BA%8C%E7%BB%B4%E7%A0%81",
          "fullPath": "#%E4%B8%8B%E8%BD%BD%E4%BA%8C%E7%BB%B4%E7%A0%81",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
