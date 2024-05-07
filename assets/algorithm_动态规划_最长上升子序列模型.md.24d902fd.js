import{_ as s,c as n,o as a,a as p}from"./app.be81e4df.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7F16\u7801\u5B9E\u73B0","slug":"\u7F16\u7801\u5B9E\u73B0","link":"#\u7F16\u7801\u5B9E\u73B0","children":[]}],"relativePath":"algorithm/\u52A8\u6001\u89C4\u5212/\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u6A21\u578B.md"}'),l={name:"algorithm/\u52A8\u6001\u89C4\u5212/\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u6A21\u578B.md"},o=p(`<blockquote><p>\u9898\u76EE\u63CF\u8FF0\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u65E0\u5E8F\u7684\u6574\u6570\u6570\u7EC4\uFF0C\u627E\u5230\u5176\u4E2D\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002</p></blockquote><blockquote><p>\u793A\u4F8B: \u8F93\u5165: [10,9,2,5,3,7,101,18] \u8F93\u51FA: 4 \u89E3\u91CA: \u6700\u957F\u7684\u4E0A\u5347\u5B50\u5E8F\u5217\u662F [2,3,7,101]\uFF0C\u5B83\u7684\u957F\u5EA6\u662F 4\u3002</p></blockquote><blockquote><p>\u8BF4\u660E: \u53EF\u80FD\u4F1A\u6709\u591A\u79CD\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u7EC4\u5408\uFF0C\u4F60\u53EA\u9700\u8981\u8F93\u51FA\u5BF9\u5E94\u7684\u957F\u5EA6\u5373\u53EF\u3002 \u4F60\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5E94\u8BE5\u4E3A O(n^2) \u3002 <strong>\u8FDB\u9636: \u4F60\u80FD\u5C06\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u964D\u4F4E\u5230 O(n log n) \u5417?</strong></p></blockquote><p><strong>\u8FD9\u91CC\u6211\u4EEC\u5173\u6CE8\u5230\u7684\u5C31\u662F\u201C\u4EE5\u5E8F\u5217\u4E2D\u7B2C <code>i</code> \u4E2A\u5143\u7D20\u4E3A\u7ED3\u5C3E\u7684\u524D<code>i</code>\u4E2A\u5143\u7D20\u7684\u72B6\u6001</strong>\u201D\u3002 \u6211\u4EEC\u7528<code>f(i)</code>\u6765\u8868\u793A\u524D<code>i</code>\u4E2A\u5143\u7D20\u4E2D\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u3002\u82E5\u60F3\u57FA\u4E8E <code>f(i)</code> \u6C42\u89E3\u51FA <code>f(i+1)</code>\uFF0C\u6211\u4EEC\u9700\u8981\u5173\u6CE8\u5230\u7684\u662F\u7B2C <code>i+1</code> \u4E2A\u5143\u7D20\u548C\u524D <code>i</code> \u4E2A\u5143\u7D20\u8303\u56F4\u5185\u7684\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u5173\u7CFB\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u6709\u4E24\u79CD\u53EF\u80FD\uFF1A</p><ol><li>\u82E5\u7B2C<code>i+1</code>\u4E2A\u5143\u7D20\u6BD4\u524D<code>i</code>\u4E2A\u5143\u7D20\u4E2D\u67D0\u4E00\u4E2A\u5143\u7D20\u8981\u5927\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5143\u7D20\u6240\u5728\u7684\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u672B\u5C3E\u8FFD\u52A0\u7B2C<code>i+1</code>\u4E2A\u5143\u7D20\uFF08\u5EF6\u957F\u539F\u6709\u7684\u5B50\u5E8F\u5217\uFF09\uFF0C\u5F97\u5230\u4E00\u4E2A\u65B0\u7684\u4E0A\u5347\u5B50\u5E8F\u5217\u3002</li><li>\u82E5\u7B2C<code>i+1</code>\u4E2A\u5143\u7D20\u5E76\u4E0D\u6BD4\u524D<code>i</code>\u4E2A\u5143\u7D20\u4E2D\u6240\u6DB5\u76D6\u7684\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u4E2D\u7684\u67D0\u4E00\u4E2A\u5143\u7D20\u5927\uFF0C\u5219\u7EF4\u6301\u539F\u72B6\uFF0C\u5B50\u5E8F\u5217\u4E0D\u5EF6\u957F\u3002</li></ol><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5F62\u5BB9\u8D77\u6765\u53EF\u80FD\u6BD4\u8F83\u62BD\u8C61\uFF0C\u4E0B\u9762\u6211\u4EEC\u7528\u4E00\u4E2A\u793A\u4F8B\u6765\u7406\u89E3\u5B83\u3002</p><p>\u62FF\u6211\u4EEC\u9898\u76EE\u793A\u4F8B\u4E2D\u7684\u6570\u7EC4<code>[10,9,2,5,3,7,101,18] </code>\u6765\u4E3E\u4F8B\u3002\u5728\u7B97\u6CD5\u7684\u521D\u59CB\u6001\uFF0C\u6211\u4EEC\u8FD8\u6CA1\u6709\u8FDB\u884C\u4EFB\u4F55\u7684\u904D\u5386\u548C\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u7D22\u5F15\u4F4D\u6765\u8BF4\uFF0C\u5B83\u90FD\u53EA\u4E0E\u4E00\u4E2A\u957F\u5EA6\u4E3A1\u7684\u5B50\u5E8F\u5217\u6709\u5173\u2014\u2014\u90A3\u5C31\u662F\u53EA\u6709\u5B83\u81EA\u5DF1\u5B58\u5728\u7684\u5B50\u5E8F\u5217\u3002\u56E0\u6B64\u6BCF\u4E00\u4E2A\u7D22\u5F15\u4F4D\u5BF9\u5E94\u7684\u72B6\u6001\u521D\u59CB\u503C\u90FD\u662F1\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/14/172b30e1f361fc8c~tplv-t2oaga2asx-jj-mark:1512:0:0:0:q75.png" alt="img"></p><p>\u540C\u65F6\u5BF9\u4E8E\u7D22\u5F15\u4F4D\u4E3A0\u7684\u5143\u7D20\u6765\u8BF4\uFF0C\u7531\u4E8E\u4EE5\u5B83\u4E3A\u7ED3\u5C3E\u7684\u5B50\u5E8F\u5217\u6709\u4E14\u4EC5\u6709 [10] \u8FD9\u4E00\u4E2A\uFF0C\u56E0\u6B64\u5B83\u7684\u72B6\u6001\u503C\u65F6\u4E00\u5F00\u59CB\u5C31\u660E\u786E\u7684\uFF0C\u90A3\u5C31\u662F1\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u9762\u57FA\u4E8E <code>f(0)</code> \u5BF9 <code>f(1)</code> \u6C42\u89E3\uFF0C\u6BD4\u8F83\u4E24\u4E2A\u7D22\u5F15\u4F4D\u4E0A\u5143\u7D20\u7684\u5927\u5C0F\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/14/172b310c6eeb4358~tplv-t2oaga2asx-jj-mark:1512:0:0:0:q75.png" alt="img"></p><p>\u53D1\u73B09\u6BD410\u5C0F\uFF0C\u6CA1\u529E\u6CD5\u5EF6\u957F\u539F\u6709\u7684\u5B50\u5E8F\u5217\uFF0C\u56E0\u6B64\u5565\u4E5F\u4E0D\u5E72\u3002\u7EE7\u7EED\u5F80\u4E0B\u904D\u5386\uFF0C\u9047\u5230\u4E862\uFF0C\u53D1\u73B02\u6BD4\u524D\u4E24\u4E2A\u6570\u90FD\u5C0F\uFF0C\u4ECD\u7136\u6CA1\u6CD5\u5EF6\u957F\u4EFB\u4F55\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u7EE7\u7EED\u5565\u4E5F\u4E0D\u5E72\u3002</p><p>\u518D\u5F80\u4E0B\u904D\u5386\uFF0C\u9047\u5230\u4E865\uFF0C\u5BF9\u6BD45\u548C\u524D\u9762\u4E09\u4E2A\u5143\u7D20\uFF0C\u53D1\u73B0\u5B83\u6BD42\u5927\uFF0C\u53EF\u4EE5\u5EF6\u957F2\u6240\u5728\u7684\u90A3\u4E2A\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\uFF0C\u5EF6\u957F\u540E\uFF0C\u4EE5 5 \u4E3A\u7ED3\u5C3E\u7684\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u5C31\u5F97\u5230\u4E86\u66F4\u65B0\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/14/172b3133fc10d147~tplv-t2oaga2asx-jj-mark:1512:0:0:0:q75.png" alt="img"></p><p>\u91CD\u590D\u4E0A\u9762\u8FD9\u4E2A\u201C\u904D\u5386\u65B0\u5143\u7D20+\u56DE\u5934\u770B\u201D\u7684\u903B\u8F91\uFF0C\u76F4\u5230\u6574\u4E2A\u6570\u7EC4\u88AB\u5B8C\u5168\u904D\u5386\uFF0C\u6211\u4EEC\u5C31\u80FD\u62FF\u5230\u4EE5\u6BCF\u4E00\u4E2A\u7D22\u5F15\u4F4D\u5143\u7D20\u4E3A\u7ED3\u5C3E\u7684\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u503C\u3002\u4ECE\u8FD9\u4E9B\u957F\u5EA6\u503C\u4E2D\u7B5B\u9009\u51FA\u6700\u5927\u503C\uFF0C\u6211\u4EEC\u4E5F\u5C31\u5F97\u5230\u4E86\u95EE\u9898\u7684\u89E3\u3002</p><h3 id="\u7F16\u7801\u5B9E\u73B0" tabindex="-1">\u7F16\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u7F16\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">nums</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">// \u5165\u53C2\u662F\u4E00\u4E2A\u6570\u5B57\u5E8F\u5217</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> lengthOfLIS </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7F13\u5B58\u5E8F\u5217\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5904\u7406\u8FB9\u754C\u6761\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u6570\u7EC4\u91CC\u9762\u6BCF\u4E00\u4E2A\u7D22\u5F15\u4F4D\u7684\u72B6\u6001\u503C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u6700\u5927\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u4E3A1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxLen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4ECE\u7B2C2\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u904D\u5386\u6574\u4E2A\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u6BCF\u904D\u5386\u4E00\u4E2A\u65B0\u5143\u7D20\uFF0C\u90FD\u8981\u201C\u56DE\u5934\u770B\u201D\uFF0C\u770B\u770B\u80FD\u4E0D\u80FD\u5EF6\u957F\u539F\u6709\u7684\u4E0A\u5347\u5B50\u5E8F\u5217</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u82E5\u9047\u5230\u4E86\u4E00\u4E2A\u6BD4\u5F53\u524D\u5143\u7D20\u5C0F\u7684\u503C\uFF0C\u5219\u610F\u5473\u7740\u9047\u5230\u4E86\u4E00\u4E2A\u53EF\u4EE5\u5EF6\u957F\u7684\u4E0A\u5347\u5B50\u5E8F\u5217\uFF0C\u6545\u66F4\u65B0\u5F53\u524D\u5143\u7D20\u7D22\u5F15\u4F4D\u5BF9\u5E94\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)  </span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u53CA\u65F6\u66F4\u65B0\u4E0A\u5347\u5B50\u5E8F\u5217\u957F\u5EA6\u7684\u6700\u5927\u503C</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxLen</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">maxLen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u904D\u5386\u5B8C\u6BD5\uFF0C\u6700\u540E\u5230\u624B\u7684\u5C31\u662F\u6700\u5927\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxLen</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8FD4\u56DE\u6700\u957F\u5B50\u5E8F\u5217\uFF1A</p></blockquote><p>\u8981\u8FD4\u56DE\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u672C\u8EAB\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u5B83\u7684\u957F\u5EA6\uFF0C\u6211\u4EEC\u9700\u8981\u7A0D\u5FAE\u4FEE\u6539\u4E0A\u9762\u7684\u7B97\u6CD5\uFF0C\u4EE5\u4FBF\u5728\u52A8\u6001\u89C4\u5212\u7684\u8FC7\u7A0B\u4E2D\u8DDF\u8E2A\u6BCF\u4E2A\u5143\u7D20\u7684\u6700\u4F18\u524D\u9A71\u3002\u8FD9\u6837\uFF0C\u5728\u627E\u5230\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u56DE\u6EAF\uFF0C\u6784\u5EFA\u51FA\u6574\u4E2A\u5B50\u5E8F\u5217\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4FEE\u6539\u540E\u7684\u5B9E\u73B0\uFF0C\u5B83\u8FD4\u56DE\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u6570\u7EC4\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">longestIncreasingSubsequence</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// dp[i]\u8868\u793A\u4EE5nums[i]\u7ED3\u5C3E\u7684\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// prev[i]\u8868\u793A\u5728\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u4E2Dnums[i]\u7684\u524D\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15  </span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxLength</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u521D\u59CB\u957F\u5EA6  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u672B\u5C3E\u5143\u7D20\u7684\u7D22\u5F15  </span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u586B\u5145dp\u548Cprev\u6570\u7EC4  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u66F4\u65B0\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u957F\u5EA6\u548C\u672B\u5C3E\u5143\u7D20\u7684\u7D22\u5F15  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maxLength</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">maxLength</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u901A\u8FC7prev\u6570\u7EC4\u6784\u5EFA\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lis</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">lis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4F7F\u7528unshift\u5728\u6570\u7EC4\u5F00\u5934\u6DFB\u52A0\u5143\u7D20  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lis</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;">// \u6D4B\u8BD5  </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">101</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">longestIncreasingSubsequence</span><span style="color:#A6ACCD;">(nums))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8F93\u51FA\uFF1A[2, 3, 7, 101] \u6216\u5176\u4ED6\u4EFB\u610F\u4E00\u79CD\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u8FD9\u4E2A\u5B9E\u73B0\u4E2D\uFF0C<code>prev</code>\u6570\u7EC4\u7528\u4E8E\u5B58\u50A8\u6BCF\u4E2A\u5143\u7D20\u7684\u6700\u4F18\u524D\u9A71\u7D22\u5F15\u3002\u901A\u8FC7\u904D\u5386<code>prev</code>\u6570\u7EC4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u7684\u672B\u5C3E\u5F00\u59CB\uFF0C\u56DE\u6EAF\u5230\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u4ECE\u800C\u6784\u5EFA\u51FA\u6574\u4E2A\u5B50\u5E8F\u5217\u3002\u6700\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528<code>unshift</code>\u65B9\u6CD5\u5C06\u5143\u7D20\u6DFB\u52A0\u5230<code>lis</code>\u6570\u7EC4\u7684\u5F00\u5934\uFF0C\u4EE5\u4FDD\u6301\u5B50\u5E8F\u5217\u7684\u987A\u5E8F\u3002\u8FD9\u6837\uFF0C<code>lis</code>\u6570\u7EC4\u5C31\u662F\u6700\u957F\u4E0A\u5347\u5B50\u5E8F\u5217\u3002</p>`,23),e=[o];function c(t,r,y,F,D,C){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
