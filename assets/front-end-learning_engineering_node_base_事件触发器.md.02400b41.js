import{_ as s,c as n,o as a,a as l}from"./app.be81e4df.js";const i=JSON.parse('{"title":"Node.js \u4E8B\u4EF6\u89E6\u53D1\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"front-end-learning/engineering/node/base/\u4E8B\u4EF6\u89E6\u53D1\u5668.md"}'),p={name:"front-end-learning/engineering/node/base/\u4E8B\u4EF6\u89E6\u53D1\u5668.md"},o=l(`<h1 id="node-js-\u4E8B\u4EF6\u89E6\u53D1\u5668" tabindex="-1">Node.js \u4E8B\u4EF6\u89E6\u53D1\u5668 <a class="header-anchor" href="#node-js-\u4E8B\u4EF6\u89E6\u53D1\u5668" aria-hidden="true">#</a></h1><p>Node.js \u63D0\u4F9B\u4E86\u4F7F\u7528 events \u6A21\u5757\u6784\u5EFA\u7C7B\u4F3C\u7CFB\u7EDF\u7684\u9009\u9879\u3002 \u5177\u4F53\u4E0A\uFF0C\u6B64\u6A21\u5757\u63D0\u4F9B\u4E86 EventEmitter \u7C7B\uFF0C\u7528\u4E8E\u5904\u7406\u4E8B\u4EF6\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> EventEmitter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">events</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eventEmitter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EventEmitter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u7528\u6CD5\uFF1A</p><ul><li>emit \u7528\u4E8E\u89E6\u53D1\u4E8B\u4EF6\u3002</li><li>on \u7528\u4E8E\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570\uFF08\u4F1A\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\u6267\u884C\uFF09</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">eventEmitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F00\u59CB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">eventEmitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u63D0\u4F9B\u53C2\u6570\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">eventEmitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u4ECE </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> \u5230 </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">eventEmitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>EventEmitter \u5BF9\u8C61\u8FD8\u516C\u5F00\u4E86\u5176\u4ED6\u51E0\u4E2A\u4E0E\u4E8B\u4EF6\u8FDB\u884C\u4EA4\u4E92\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>once(): \u6DFB\u52A0\u5355\u6B21\u76D1\u542C\u5668\u3002</li><li>removeListener() / off(): \u4ECE\u4E8B\u4EF6\u4E2D\u79FB\u9664\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</li><li>removeAllListeners(): \u79FB\u9664\u4E8B\u4EF6\u7684\u6240\u6709\u76D1\u542C\u5668\u3002</li></ul><p>\u53EF\u4EE5\u5728\u4E8B\u4EF6\u6A21\u5757\u7684\u9875\u9762 <a href="http://nodejs.cn/api/events.html" target="_blank" rel="noreferrer">http://nodejs.cn/api/events.html</a> \u4E0A\u9605\u8BFB\u5176\u6240\u6709\u8BE6\u7EC6\u4FE1\u606F\u3002</p>`,11),e=[o];function t(r,c,D,y,F,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
