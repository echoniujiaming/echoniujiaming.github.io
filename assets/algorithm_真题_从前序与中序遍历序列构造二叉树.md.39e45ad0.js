import{_ as s,c as n,o as a,a as p}from"./app.be81e4df.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":3,"title":"\u7F16\u7801\u5B9E\u73B0","slug":"\u7F16\u7801\u5B9E\u73B0","link":"#\u7F16\u7801\u5B9E\u73B0","children":[]},{"level":3,"title":"\u5176\u4ED6\u7248\u672C","slug":"\u5176\u4ED6\u7248\u672C","link":"#\u5176\u4ED6\u7248\u672C","children":[]}],"relativePath":"algorithm/\u771F\u9898/\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811.md"}'),l={name:"algorithm/\u771F\u9898/\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811.md"},o=p(`<p><a href="https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" target="_blank" rel="noreferrer">105. \u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811</a></p><blockquote><p>\u9898\u76EE\u63CF\u8FF0\uFF1A\u6839\u636E\u4E00\u68F5\u6811\u7684\u524D\u5E8F\u904D\u5386\u4E0E\u4E2D\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u6811\u3002</p></blockquote><blockquote><p>\u6CE8\u610F: \u4F60\u53EF\u4EE5\u5047\u8BBE\u6811\u4E2D\u6CA1\u6709\u91CD\u590D\u7684\u5143\u7D20\u3002 \u4F8B\u5982\uFF0C\u7ED9\u51FA \u524D\u5E8F\u904D\u5386 preorder = [3,9,20,15,7] \u4E2D\u5E8F\u904D\u5386 inorder = [9,3,15,20,7] \u8FD4\u56DE\u5982\u4E0B\u7684\u4E8C\u53C9\u6811\uFF1A</p></blockquote><div class="language-markdown"><button class="copy"></button><span class="lang">markdown</span><pre><code><span class="line"><span style="color:#A6ACCD;">    3</span></span>
<span class="line"><span style="color:#A6ACCD;">   / \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  9  20</span></span>
<span class="line"><span style="color:#A6ACCD;">    /  \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   15   7</span></span>
<span class="line"></span></code></pre></div><p><strong>\u547D\u9898\u5173\u952E\u5B57\uFF1A\u4E8C\u53C9\u6811\u3001\u524D\u5E8F\u3001\u4E2D\u5E8F\u3001\u904D\u5386\u5E8F\u5217\u7279\u5F81\u3001\u9012\u5F52</strong></p><h3 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h3><p>\u8FD9\u9053\u9898\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u7ECF\u5178\u3002 <strong>\u7B2C\u4E00\u6B21\u89C1\u5230\u5B83\uFF0C\u6CA1\u601D\u8DEF\uFF0C\u662F\u6B63\u5E38\u7684</strong>\uFF1B\u7B2C\u4E8C\u6B21\u89C1\u5230\u5B83\uFF0C\u5199\u4E0D\u987A\uFF0C\u4E5F\u662F\u6B63\u5E38\u7684\u2014\u2014\u5BF9\u4E8E\u7ECF\u5178\u7684\u9898\u76EE\uFF0C\u6211\u4EEC\u672A\u5FC5\u4E00\u5B9A\u8981\u5B8C\u5168\u9760\u81EA\u5DF1\u7684\u806A\u660E\u624D\u667A\u53BB\u89E3\u51B3\u5B83\uFF08\u76F4\u63A5\u770B\u7B54\u6848\u4E00\u70B9\u4E5F\u4E0D\u4E22\u4EBA\uFF09\uFF0C\u4F46\u4E00\u5B9A\u8981\u8FFD\u6C42\u4E00\u4E2A<strong>\u719F\u7EC3\u5EA6</strong>\uFF08\u4F60\u5F97\u5BF9\u7B54\u6848\u6709\u5145\u5206\u7684\u7406\u89E3\u548C\u628A\u63E1\uFF0C\u80FD\u9760\u6761\u4EF6\u53CD\u5C04\u6765\u505A\u9898\uFF09\u3002</p><p>\u8FD9\u9053\u9898\u89E3\u9898\u7684\u4E00\u4E2A\u5207\u5165\u70B9\uFF0C\u5C31\u662F<strong>\u524D\u5E8F\u904D\u5386\u5E8F\u5217\u548C\u4E2D\u5E8F\u904D\u5386\u4E4B\u95F4\u7684\u5173\u7CFB</strong>\u3002</p><p>\u6211\u4EEC\u5047\u8BBE\u524D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\u7684\u5143\u7D20\u5206\u522B\u4E3A p1\u3001p2......pn\uFF0C\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\u7684\u5143\u7D20\u5206\u522B\u4E3A i1\u3001i2......in\u3002\u90A3\u4E48\u4E24\u4E2A\u5E8F\u5217\u4E4B\u95F4\u5C31\u6709\u4EE5\u4E0B\u5173\u7CFB\uFF1A</p><div class="language-rust"><button class="copy"></button><span class="lang">rust</span><pre><code><span class="line"><span style="color:#A6ACCD;">        root  </span><span style="color:#89DDFF;">|&lt;-</span><span style="color:#A6ACCD;">\u5DE6\u5B50\u6811</span><span style="color:#89DDFF;">-&gt;|</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|&lt;-</span><span style="color:#A6ACCD;"> \u53F3\u5B50\u6811 </span><span style="color:#89DDFF;">-&gt;|</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">         \u2193</span></span>
<span class="line"><span style="color:#A6ACCD;">\u524D\u5E8F\u5E8F\u5217  p1    p2</span><span style="color:#89DDFF;">......</span><span style="color:#A6ACCD;">pk   </span><span style="color:#82AAFF;">p</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)......</span><span style="color:#A6ACCD;">pn  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|&lt;-</span><span style="color:#A6ACCD;"> \u5DE6\u5B50\u6811 </span><span style="color:#89DDFF;">-&gt;|</span><span style="color:#A6ACCD;">      root  </span><span style="color:#89DDFF;">|&lt;-</span><span style="color:#A6ACCD;"> \u53F3\u5B50\u6811 </span><span style="color:#89DDFF;">-&gt;|</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                             \u2193</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E2D\u5E8F\u5E8F\u5217  i1 i2</span><span style="color:#89DDFF;">......</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   ik   </span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)......</span><span style="color:#F78C6C;">in</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u8574\u542B\u7740\u4E24\u4E2A\u91CD\u8981\u7684\u89C4\u5F8B\uFF1A</p><ol><li>\u524D\u5E8F\u5E8F\u5217\u5934\u90E8\u7684\u5143\u7D20 <code>p1</code>\uFF0C\u4E00\u5B9A\u662F\u5F53\u524D\u4E8C\u53C9\u6811\u7684\u6839\u7ED3\u70B9\uFF08\u60F3\u4E00\u60F3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\uFF09\u3002</li><li>\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\uFF0C\u4EE5\u4E8C\u53C9\u6811\u7684\u6839\u7ED3\u70B9\u4E3A\u754C\u5212\u5206\u51FA\u7684\u4E24\u4E2A\u5B50\u5E8F\u5217\uFF0C\u5206\u522B\u5BF9\u5E94\u7740\u4E8C\u53C9\u6811\u7684\u5DE6\u5B50\u6811\u548C\u4E8C\u53C9\u6811\u7684\u53F3\u5B50\u6811\u3002</li></ol><p>\u57FA\u4E8E\u4EE5\u4E0A\u4E24\u4E2A\u89C4\u5F8B\uFF0C\u6211\u4EEC\u4E0D\u96BE\u660E\u786E\u8FD9\u9053\u9898\u7684\u89E3\u9898\u601D\u8DEF\uFF1A\u5728\u4E2D\u5E8F\u5E8F\u5217\u4E2D\u5B9A\u4F4D\u5230\u6839\u7ED3\u70B9(<code>p1</code>)\u5BF9\u5E94\u7684\u5750\u6807\uFF0C\u7136\u540E\u57FA\u4E8E\u8FD9\u4E2A\u5750\u6807\u5212\u5206\u51FA\u5DE6\u53F3\u5B50\u6811\u5BF9\u5E94\u7684\u4E24\u4E2A\u5B50\u5E8F\u5217\uFF0C\u8FDB\u800C\u660E\u786E\u5230\u5DE6\u53F3\u5B50\u6811\u5404\u81EA\u5728\u524D\u5E8F\u3001\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\u5BF9\u5E94\u7684\u7D22\u5F15\u533A\u95F4\uFF0C\u7531\u6B64\u6784\u9020\u5DE6\u53F3\u5B50\u6811\u3002</p><p>\u4EE5\u4E0A\u9762\u7684\u793A\u610F\u7B80\u56FE\u4E3A\u4F8B\uFF0C\u6839\u7ED3\u70B9(<code>p1</code>)\u5728\u4E2D\u5E8F\u5E8F\u5217\u4E2D\u7684\u5750\u6807\u7D22\u5F15\u4E3A <code>k</code>\uFF0C\u4E8E\u662F\u5DE6\u5B50\u6811\u7684\u7ED3\u70B9\u4E2A\u6570\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u5F97\u51FA\uFF1A</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#F07178;">numLeft</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> k - 1</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u4E3A\u4E86\u786E\u4FDD\u903B\u8F91\u7684\u901A\u7528\u6027\uFF0C\u6211\u4EEC\u628A\u524D\u5E8F\u5E8F\u5217\u5F53\u524D\u8303\u56F4\u7684\u5934\u90E8\u7D22\u5F15\u8BB0\u4E3A <code>preL</code>\uFF0C\u5C3E\u90E8\u7D22\u5F15\u8BB0\u4E3A <code>preR</code>\uFF1B\u628A\u4E2D\u5E8F\u5E8F\u5217\u5F53\u524D\u8303\u56F4\u7684\u5934\u90E8\u7D22\u5F15\u8BB0\u4E3A <code>inL</code>\uFF0C\u5C3E\u90E8\u7D22\u5F15\u8BB0\u4E3A <code>inR</code>\u3002 \u90A3\u4E48\u5DE6\u5B50\u6811\u5728\u524D\u5E8F\u5E8F\u5217\u4E2D\u7684\u7D22\u5F15\u533A\u95F4\u5C31\u662F <code>[preL+1,preL+numLeft]</code>\uFF0C\u5728\u4E2D\u5E8F\u5E8F\u5217\u4E2D\u7684\u7D22\u5F15\u533A\u95F4\u662F <code>[inL, k-1]</code>\uFF1B\u53F3\u5B50\u6811\u5728\u524D\u5E8F\u5E8F\u5217\u7684\u7D22\u5F15\u533A\u95F4\u662F <code>[preL+numLeft+1, preR]</code>\uFF0C\u5728\u4E2D\u5E8F\u5E8F\u5217\u4E2D\u7684\u7D22\u5F15\u533A\u95F4\u662F <code>[k+1, inR]</code>\u3002</p><p>\u6B64\u65F6\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C\u57FA\u4E8E\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u5404\u81EA\u5BF9\u5E94\u7684\u524D\u5E8F\u3001\u4E2D\u5E8F\u5B50\u5E8F\u5217\uFF0C\u6211\u4EEC\u5B8C\u5168\u53EF\u4EE5\u76F4\u63A5\u91CD\u590D\u6267\u884C\u4E0A\u9762\u7684\u903B\u8F91\u6765\u5B9A\u4F4D\u5230\u5DE6\u53F3\u5B50\u6811\u5404\u81EA\u7684\u6839\u7ED3\u70B9\u548C\u5B50\u6811\u7684\u5E8F\u5217\u533A\u95F4\u3002\u901A\u8FC7\u53CD\u590D<code>\u91CD\u590D\u8FD9\u5957\u5B9A\u4F4D+\u6784\u9020</code>\u7684\u903B\u8F91\uFF0C\u6211\u4EEC\u5C31\u80FD\u591F\u5B8C\u6210\u6574\u4E2A\u4E8C\u53C9\u6811\u7684\u6784\u5EFA\u3002</p><p>\u4E8C\u53C9\u6811\u7C7B\u9898\u76EE\u4E2D\u7684\u91CD\u590D\u903B\u8F91\uFF0C90%\u90FD\u662F\u7528\u9012\u5F52\u6765\u5B8C\u6210\u7684\u3002\u4E0B\u9762\u6211\u5C31\u57FA\u4E8E\u9012\u5F52\u601D\u60F3\u6765\u5B8C\u6210\u8FD9\u9053\u9898\u7684\u7F16\u7801\u793A\u8303\uFF08\u6CE8\u610F\u770B\u6CE8\u91CA\u91CC\u7684\u89E3\u6790\uFF09\uFF1A</p><h3 id="\u7F16\u7801\u5B9E\u73B0" tabindex="-1">\u7F16\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u7F16\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u9884\u5B9A\u4E49\u6811\u7684\u7ED3\u70B9\u7ED3\u6784.</span></span>
<span class="line"><span style="color:#676E95;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#676E95;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#676E95;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">preorder</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">inorder</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> buildTree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u7F13\u5B58\u7ED3\u70B9\u603B\u4E2A\u6570\uFF08\u904D\u5386\u5E8F\u5217\u7684\u957F\u5EA6\uFF09</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5B9A\u4E49\u6784\u9020\u4E8C\u53C9\u6811\u7ED3\u70B9\u7684\u9012\u5F52\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">preL</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preR</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inL</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inR</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5904\u7406\u8D8A\u754C\u60C5\u51B5</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preR</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u76EE\u6807\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#F07178;">()  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u76EE\u6807\u7ED3\u70B9\u6620\u5C04\u7684\u662F\u5F53\u524D\u524D\u5E8F\u904D\u5386\u5E8F\u5217\u7684\u5934\u90E8\u7ED3\u70B9\uFF08\u4E5F\u5C31\u662F\u5F53\u524D\u8303\u56F4\u7684\u6839\u7ED3\u70B9\uFF09</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preorder</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">preL</span><span style="color:#F07178;">]  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5B9A\u4F4D\u5230\u6839\u7ED3\u70B9\u5728\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u4E2D\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8BA1\u7B97\u51FA\u5DE6\u5B50\u6811\u4E2D\u7ED3\u70B9\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">numLeft</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inL</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6784\u9020\u5DE6\u5B50\u6811</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">build</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preL</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preL</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">numLeft</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inL</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)    </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6784\u9020\u53F3\u5B50\u6811</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">build</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preL</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">numLeft</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">preR</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inR</span><span style="color:#F07178;">)  </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8FD4\u56DE\u5F53\u524D\u7ED3\u70B9</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u9012\u5F52\u6784\u9020\u4E8C\u53C9\u6811</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">build</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="\u5176\u4ED6\u7248\u672C" tabindex="-1">\u5176\u4ED6\u7248\u672C <a class="header-anchor" href="#\u5176\u4ED6\u7248\u672C" aria-hidden="true">#</a></h3><blockquote><p>\u524D\u5E8F\u904D\u5386\u7684\u987A\u5E8F\u662F\uFF1A\u6839\u8282\u70B9 -&gt; \u5DE6\u5B50\u6811 -&gt; \u53F3\u5B50\u6811</p></blockquote><blockquote><p>\u4E2D\u5E8F\u904D\u5386\u7684\u987A\u5E8F\u662F\uFF1A\u5DE6\u5B50\u6811 -&gt; \u6839\u8282\u70B9 -&gt; \u53F3\u5B50\u6811</p></blockquote><p>\u57FA\u4E8E\u8FD9\u4E24\u4E2A\u904D\u5386\u987A\u5E8F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91CD\u6784\u51FA\u539F\u59CB\u7684\u4E8C\u53C9\u6811\u3002\u524D\u5E8F\u904D\u5386\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u603B\u662F\u6839\u8282\u70B9\uFF0C\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5728\u4E2D\u5E8F\u904D\u5386\u4E2D\u627E\u5230\u8FD9\u4E2A\u6839\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u4ECE\u800C\u5206\u5272\u51FA\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u3002\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u9012\u5F52\u5730\u5BF9\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u8FDB\u884C\u540C\u6837\u7684\u64CD\u4F5C\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F7F\u7528 JavaScript \u5B9E\u73B0\u7684\u4F8B\u5B50\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">buildTree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u6839\u8282\u70B9</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5728\u4E2D\u5E8F\u904D\u5386\u4E2D\u627E\u5230\u6839\u8282\u70B9\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rootIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u9012\u5F52\u5730\u6784\u5EFA\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">buildTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rootIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rootIndex</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">buildTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">preorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">rootIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inorder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">rootIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A TreeNode \u7C7B</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8BF7\u6CE8\u610F\uFF0C\u6B64\u4EE3\u7801\u5047\u8BBE <code>preorder</code> \u548C <code>inorder</code> \u6570\u7EC4\u7684\u957F\u5EA6\u76F8\u540C\u4E14\u90FD\u4E0D\u4E3A\u7A7A\uFF0C\u4E14 <code>preorder</code> \u548C <code>inorder</code> \u63CF\u8FF0\u7684\u662F\u540C\u4E00\u68F5\u4E8C\u53C9\u6811\u3002\u6B64\u5916\uFF0C\u6B64\u4EE3\u7801\u5047\u8BBE\u4E8C\u53C9\u6811\u4E2D\u6CA1\u6709\u91CD\u590D\u7684\u8282\u70B9\u503C\uFF0C\u5982\u679C\u6709\u91CD\u590D\u7684\u8282\u70B9\u503C\uFF0C\u90A3\u4E48\u5C31\u65E0\u6CD5\u6839\u636E\u4E2D\u5E8F\u904D\u5386\u548C\u524D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\u6765\u552F\u4E00\u786E\u5B9A\u4E00\u68F5\u4E8C\u53C9\u6811\u3002</p><p>\u4E3A\u4E86\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u4F60\u9700\u8981\u63D0\u4F9B\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u7684\u6570\u7EC4\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> preorder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> inorder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">buildTree</span><span style="color:#A6ACCD;">(preorder</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> inorder)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>root</code> \u5C31\u662F\u6839\u636E\u524D\u5E8F\u904D\u5386\u548C\u4E2D\u5E8F\u904D\u5386\u91CD\u6784\u51FA\u7684\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9\u3002</p>`,30),e=[o];function r(c,t,F,y,D,C){return a(),n("div",null,e)}const d=s(l,[["render",r]]);export{i as __pageData,d as default};
