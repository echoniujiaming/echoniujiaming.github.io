import{_ as s,c as n,o as a,a as p}from"./app.be81e4df.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/\u5B57\u7B26\u4E32/\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570.md"}'),l={name:"algorithm/\u5B57\u7B26\u4E32/\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570.md"},o=p(`<p>\u6E90\uFF1A<a href="https://leetcode.cn/problems/string-to-integer-atoi/" target="_blank" rel="noreferrer">8. \u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)</a></p><blockquote><p>\u771F\u9898\u63CF\u8FF0\uFF1A\u8BF7\u4F60\u6765\u5B9E\u73B0\u4E00\u4E2A atoi \u51FD\u6570\uFF0C\u4F7F\u5176\u80FD\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u6574\u6570\u3002 \u9996\u5148\uFF0C\u8BE5\u51FD\u6570\u4F1A\u6839\u636E\u9700\u8981\u4E22\u5F03\u65E0\u7528\u7684\u5F00\u5934\u7A7A\u683C\u5B57\u7B26\uFF0C\u76F4\u5230\u5BFB\u627E\u5230\u7B2C\u4E00\u4E2A\u975E\u7A7A\u683C\u7684\u5B57\u7B26\u4E3A\u6B62\u3002 \u5F53\u6211\u4EEC\u5BFB\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u4E3A\u6B63\u6216\u8005\u8D1F\u53F7\u65F6\uFF0C\u5219\u5C06\u8BE5\u7B26\u53F7\u4E0E\u4E4B\u540E\u9762\u5C3D\u53EF\u80FD\u591A\u7684\u8FDE\u7EED\u6570\u5B57\u7EC4\u5408\u8D77\u6765\uFF0C\u4F5C\u4E3A\u8BE5\u6574\u6570\u7684\u6B63\u8D1F\u53F7\uFF1B\u5047\u5982\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u662F\u6570\u5B57\uFF0C\u5219\u76F4\u63A5\u5C06\u5176\u4E0E\u4E4B\u540E\u8FDE\u7EED\u7684\u6570\u5B57\u5B57\u7B26\u7EC4\u5408\u8D77\u6765\uFF0C\u5F62\u6210\u6574\u6570\u3002 \u8BE5\u5B57\u7B26\u4E32\u9664\u4E86\u6709\u6548\u7684\u6574\u6570\u90E8\u5206\u4E4B\u540E\u4E5F\u53EF\u80FD\u4F1A\u5B58\u5728\u591A\u4F59\u7684\u5B57\u7B26\uFF0C\u8FD9\u4E9B\u5B57\u7B26\u53EF\u4EE5\u88AB\u5FFD\u7565\uFF0C\u5B83\u4EEC\u5BF9\u4E8E\u51FD\u6570\u4E0D\u5E94\u8BE5\u9020\u6210\u5F71\u54CD\u3002 \u6CE8\u610F\uFF1A\u5047\u5982\u8BE5\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u975E\u7A7A\u683C\u5B57\u7B26\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u6574\u6570\u5B57\u7B26\u3001\u5B57\u7B26\u4E32\u4E3A\u7A7A\u6216\u5B57\u7B26\u4E32\u4EC5\u5305\u542B\u7A7A\u767D\u5B57\u7B26\u65F6\uFF0C\u5219\u4F60\u7684\u51FD\u6570\u4E0D\u9700\u8981\u8FDB\u884C\u8F6C\u6362\u3002 \u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u82E5\u51FD\u6570\u4E0D\u80FD\u8FDB\u884C\u6709\u6548\u7684\u8F6C\u6362\u65F6\uFF0C\u8BF7\u8FD4\u56DE 0\u3002</p></blockquote><blockquote><p>\u8BF4\u660E\uFF1A \u5047\u8BBE\u6211\u4EEC\u7684\u73AF\u5883\u53EA\u80FD\u5B58\u50A8 32 \u4F4D\u5927\u5C0F\u7684\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u90A3\u4E48\u5176\u6570\u503C\u8303\u56F4\u4E3A [\u22122^31, 2^31 \u2212 1]\u3002\u5982\u679C\u6570\u503C\u8D85\u8FC7\u8FD9\u4E2A\u8303\u56F4\uFF0C\u8BF7\u8FD4\u56DE INT_MAX (2^31 \u2212 1) \u6216 INT_MIN (\u22122^31) \u3002</p></blockquote><blockquote><p>\u793A\u4F8B 1: \u8F93\u5165: &quot;42&quot; \u8F93\u51FA: 42</p></blockquote><blockquote><p>\u793A\u4F8B 2: \u8F93\u5165: &quot; -42&quot; \u8F93\u51FA: -42 \u89E3\u91CA: \u7B2C\u4E00\u4E2A\u975E\u7A7A\u767D\u5B57\u7B26\u4E3A &#39;-&#39;, \u5B83\u662F\u4E00\u4E2A\u8D1F\u53F7\u3002 \u6211\u4EEC\u5C3D\u53EF\u80FD\u5C06\u8D1F\u53F7\u4E0E\u540E\u9762\u6240\u6709\u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57\u7EC4\u5408\u8D77\u6765\uFF0C\u6700\u540E\u5F97\u5230 -42 \u3002</p></blockquote><blockquote><p>\u793A\u4F8B 3: \u8F93\u5165: &quot;4193 with words&quot; \u8F93\u51FA: 4193 \u89E3\u91CA: \u8F6C\u6362\u622A\u6B62\u4E8E\u6570\u5B57 &#39;3&#39; \uFF0C\u56E0\u4E3A\u5B83\u7684\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E0D\u4E3A\u6570\u5B57\u3002</p></blockquote><blockquote><p>\u793A\u4F8B 4: \u8F93\u5165: &quot;words and 987&quot; \u8F93\u51FA: 0 \u89E3\u91CA: \u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u662F &#39;w&#39;, \u4F46\u5B83\u4E0D\u662F\u6570\u5B57\u6216\u6B63\u3001\u8D1F\u53F7\u3002 \u56E0\u6B64\u65E0\u6CD5\u6267\u884C\u6709\u6548\u7684\u8F6C\u6362\u3002</p></blockquote><blockquote><p>\u793A\u4F8B 5: \u8F93\u5165: &quot;-91283472332&quot; \u8F93\u51FA: -2147483648 \u89E3\u91CA: \u6570\u5B57 &quot;-91283472332&quot; \u8D85\u8FC7 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\u8303\u56F4\u3002\u56E0\u6B64\u8FD4\u56DE INT_MIN (\u22122^31) \u3002</p></blockquote><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myAtoi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">*([</span><span style="color:#C3E88D;">-/+</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]*)</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">min</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">match</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">match</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">match</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isNaN</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">min</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">min</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{i as __pageData,u as default};
