import{_ as s,c as a,o as n,a as p}from"./app.be81e4df.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":3,"title":"\u7F16\u7801\u5B9E\u73B0","slug":"\u7F16\u7801\u5B9E\u73B0","link":"#\u7F16\u7801\u5B9E\u73B0","children":[]}],"relativePath":"algorithm/\u6808/\u6BCF\u65E5\u6E29\u5EA6.md"}'),l={name:"algorithm/\u6808/\u6BCF\u65E5\u6E29\u5EA6.md"},o=p(`<p><a href="https://leetcode.cn/problems/daily-temperatures/" target="_blank" rel="noreferrer">739. \u6BCF\u65E5\u6E29\u5EA6</a></p><blockquote><p>\u9898\u76EE\u63CF\u8FF0: \u6839\u636E\u6BCF\u65E5\u6C14\u6E29\u5217\u8868\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u5217\u8868\uFF0C\u5BF9\u5E94\u4F4D\u7F6E\u7684\u8F93\u51FA\u662F\u9700\u8981\u518D\u7B49\u5F85\u591A\u4E45\u6E29\u5EA6\u624D\u4F1A\u5347\u9AD8\u8D85\u8FC7\u8BE5\u65E5\u7684\u5929\u6570\u3002\u5982\u679C\u4E4B\u540E\u90FD\u4E0D\u4F1A\u5347\u9AD8\uFF0C\u8BF7\u5728\u8BE5\u4F4D\u7F6E\u7528 0 \u6765\u4EE3\u66FF\u3002</p></blockquote><blockquote><p>\u4F8B\u5982\uFF0C\u7ED9\u5B9A\u4E00\u4E2A\u5217\u8868 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]\uFF0C\u4F60\u7684\u8F93\u51FA\u5E94\u8BE5\u662F [1, 1, 4, 2, 1, 1, 0, 0]\u3002</p></blockquote><blockquote><p>\u63D0\u793A\uFF1A\u6C14\u6E29 \u5217\u8868\u957F\u5EA6\u7684\u8303\u56F4\u662F [1, 30000]\u3002\u6BCF\u4E2A\u6C14\u6E29\u7684\u503C\u7684\u5747\u4E3A\u534E\u6C0F\u5EA6\uFF0C\u90FD\u662F\u5728 [30, 100] \u8303\u56F4\u5185\u7684\u6574\u6570\u3002</p></blockquote><h3 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h3><p>\u770B\u5230\u8FD9\u9053\u9898\uFF0C\u5927\u5BB6\u4E0D\u96BE\u60F3\u5230\u66B4\u529B\u904D\u5386\u6CD5\uFF1A\u76F4\u63A5\u4E24\u5C42\u904D\u5386\uFF0C\u7B2C\u4E00\u5C42\u5B9A\u4F4D\u4E00\u4E2A\u6E29\u5EA6\uFF0C\u7B2C\u4E8C\u5C42\u5B9A\u4F4D\u79BB\u8FD9\u4E2A\u6E29\u5EA6\u6700\u8FD1\u7684\u4E00\u6B21\u5347\u6E29\u662F\u54EA\u5929\uFF0C\u7136\u540E\u6C42\u51FA\u4E24\u4E2A\u6E29\u5EA6\u5BF9\u5E94\u7D22\u5F15\u7684\u5DEE\u503C\u5373\u53EF\u3002</p><p>\u4E00\u4E2A\u6570\u7EC4\u4E24\u5C42\u904D\u5386\uFF0C\u5C5E\u4E8E\u6BD4\u8F83\u5C11\u89C1\u4E14\u9AD8\u5371\u7684\u64CD\u4F5C\u3002\u4E8B\u51FA\u53CD\u5E38\u5FC5\u6709\u5996\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u9700\u8981\u53CD\u601D\uFF1A\u8FD9\u9053\u9898\u662F\u4E0D\u662F\u538B\u6839\u4E0D\u8BE5\u7528\u66B4\u529B\u904D\u5386\u6765\u505A\uFF1F</p><p>\u7B54\u6848\u662F\u80AF\u5B9A\u7684\u3002\u56E0\u4E3A\u5728\u8FD9\u4E2A\u66B4\u529B\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5176\u5B9E\u505A\u4E86\u5F88\u591A\u201C\u591A\u4F59\u201D\u7684\u4E8B\u60C5\u3002</p><p>\u62FF\u7B2C\u4E09\u4E2A\u7D22\u5F15\u4F4D\u4E0A\u8FD9\u4E2A 75 \u6765\u8BF4\uFF0C\u6211\u4EEC\u5728\u5B9A\u4F4D\u6BD4 75 \u9AD8\u7684\u7B2C\u4E00\u4E2A\u6E29\u5EA6\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5C31\u8DEF\u8FC7\u4E86 71\u300169\u300172 \u8FD9\u4E09\u4E2A\u6E29\u5EA6\uFF0C\u5176\u4E2D\uFF0C72 \u6B63\u662F 71 \u5BF9\u5E94\u7684\u76EE\u6807\u6E29\u5EA6\uFF0C\u53EF\u6211\u4EEC\u5374\u50CF\u6CA1\u770B\u89C1\u5B83\u4E00\u6837\u3001\u5565\u4E5F\u6CA1\u5E72\u3002\u53EA\u6709\u7B49\u6700\u5916\u5C42\u904D\u5386\u8D70\u5230 71 \u65F6\uFF0C\u6211\u4EEC\u624D\u53C8\u91CD\u590D\u4E86\u4E00\u904D\u521A\u521A\u8D70\u8FC7\u7684\u8DEF\u3001\u786E\u8BA4\u4E86 71 \u548C 72 \u4E4B\u95F4\u7684\u5173\u7CFB\u2014\u2014\u50CF\u8FD9\u79CD\u4E0D\u5FC5\u8981\u7684\u91CD\u590D\uFF0C\u6211\u4EEC\u8981\u60F3\u529E\u6CD5\u628A\u5B83\u5E72\u6389\u3002</p><p><strong>\u6808\u7ED3\u6784\u53EF\u4EE5\u5E2E\u6211\u4EEC\u907F\u514D\u91CD\u590D\u64CD\u4F5C</strong>\u3002 \u907F\u514D\u91CD\u590D\u64CD\u4F5C\u7684\u79D8\u8BC0\u5C31\u662F<strong>\u53CA\u65F6\u5730\u5C06\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u51FA\u6808</strong>\uFF0C\u907F\u514D\u5B83\u5BF9\u6211\u4EEC\u540E\u7EED\u7684\u904D\u5386\u4EA7\u751F\u5E72\u6270\u3002</p><p>\u62FF\u8FD9\u9053\u9898\u6765\u8BF4\uFF0C\u6211\u4EEC\u7684\u601D\u8DEF\u5C31\u662F\uFF1A<strong>\u5C1D\u8BD5\u53BB\u7EF4\u6301\u4E00\u4E2A\u9012\u51CF\u6808</strong>\u3002 \u5F53\u904D\u5386\u8FC7\u7684\u6E29\u5EA6\uFF0C\u7EF4\u6301\u7684\u662F\u4E00\u4E2A<strong>\u5355\u8C03\u9012\u51CF</strong>\u7684\u6001\u52BF\u65F6\uFF0C\u6211\u4EEC\u5C31\u5BF9\u8FD9\u4E9B\u6E29\u5EA6\u7684\u7D22\u5F15\u4E0B\u6807\u6267\u884C\u5165\u6808\u64CD\u4F5C\uFF1B\u53EA\u8981\u51FA\u73B0\u4E86\u4E00\u4E2A\u6570\u5B57\uFF0C\u5B83\u6253\u7834\u4E86\u8FD9\u79CD\u5355\u8C03\u9012\u51CF\u7684\u8D8B\u52BF\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B83\u6BD4\u524D\u4E00\u4E2A\u6E29\u5EA6\u503C\u9AD8\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5C31\u5BF9\u524D\u540E\u4E24\u4E2A\u6E29\u5EA6\u7684\u7D22\u5F15\u4E0B\u6807\u6C42\u5DEE\uFF0C\u5F97\u51FA\u524D\u4E00\u4E2A\u6E29\u5EA6\u8DDD\u79BB\u7B2C\u4E00\u6B21\u5347\u6E29\u7684\u76EE\u6807\u5DEE\u503C\u3002\u8FD9\u4E48\u8BF4\u53EF\u80FD\u6709\u70B9\u62BD\u8C61\uFF0C\u6211\u4EEC\u7528\u4E00\u5F20\u52A8\u56FE\u6765\u7406\u89E3\u4E00\u4E0B\u8FD9\u4E2A\u8FC7\u7A0B\uFF08\u8FD9\u4E2A\u8FC7\u7A0B\u5B9E\u9645\u6709\u5C06\u8FD1\u4E00\u5206\u949F\u90A3\u4E48\u957F\uFF0C\u8D34\u4E0A\u6765\u4E4B\u540E\u6211\u53D1\u73B0\u5B8C\u5168\u52A0\u8F7D\u4E0D\u51FA\u6765\uFF0C\u8FD9\u91CC\u5448\u73B0\u7684\u662F\u622A\u6B62\u5230\u7B2C\u4E00\u4E2A\u5143\u7D20\u51FA\u6808\u7684\u7247\u6BB5\uFF0C\u5B8C\u6574\u5728<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV12t4y1274o%2F" target="_blank" rel="noreferrer">\u5C0F\u7834\u7AD9</a>\uFF09\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/14/17177748909c5571~tplv-t2oaga2asx-jj-mark:1512:0:0:0:q75.awebp" alt="\u6E29\u5EA6\u95EE\u9898\u7684\u52A8\u753B"></p><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u4EC5\u5BF9\u6BCF\u4E00\u4E2A\u6E29\u5EA6\u6267\u884C\u6700\u591A\u4E00\u6B21\u5165\u6808\u64CD\u4F5C\u3001\u4E00\u6B21\u51FA\u6808\u64CD\u4F5C\uFF0C\u6574\u4E2A\u6570\u7EC4\u53EA\u4F1A\u88AB\u904D\u5386\u4E00\u6B21\uFF0C\u56E0\u6B64\u65F6\u95F4\u590D\u6742\u5EA6\u5C31\u662FO(n)\u3002\u76F8\u5BF9\u4E8E\u4E24\u6B21\u904D\u5386\u5E26\u6765\u7684 O(n^2)\u7684\u5F00\u9500\u6765\u770B\uFF0C\u6808\u7ED3\u6784\u771F\u662F\u5E2E\u4E86\u54B1\u4EEC\u5927\u5FD9\u4E86\u3002</p><h3 id="\u7F16\u7801\u5B9E\u73B0" tabindex="-1">\u7F16\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u7F16\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">temperatures</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> dailyTemperatures </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">temperatures</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temperatures</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temperatures</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temperatures</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">stack</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">top</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(r,c,y,F,D,A){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{i as __pageData,u as default};
