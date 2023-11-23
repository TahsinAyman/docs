import{_ as t,o as a,c as s,R as e}from"./chunks/framework.knLoFo0c.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/java-operators.md","filePath":"java/java-operators.md"}'),o={name:"java/java-operators.md"},r=e(`<h2 id="java-operators" tabindex="-1">Java Operators <a class="header-anchor" href="#java-operators" aria-label="Permalink to &quot;Java Operators&quot;">​</a></h2><p>Operators are used to perform operations on variables and values.</p><p>In the example below, we use the + operator to add together two values:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="java-arithmetic-operators" tabindex="-1">Java Arithmetic Operators <a class="header-anchor" href="#java-arithmetic-operators" aria-label="Permalink to &quot;Java Arithmetic Operators&quot;">​</a></h3><p>Arithmetic operators are used to perform common mathematical operations.</p><table><thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>+</td><td>Addition</td><td>Adds together two values</td></tr><tr><td>-</td><td>Subtraction</td><td>Subtracts one value from another</td></tr><tr><td>*</td><td>Multiplication</td><td>Multiplies two values</td></tr><tr><td>/</td><td>Division</td><td>Divides one value by another</td></tr><tr><td>%</td><td>Modulus</td><td>Returns the division remainder</td></tr><tr><td>++</td><td>Increment</td><td>Increases the value of a variable by 1</td></tr><tr><td>--</td><td>Decrement</td><td>Decreases the value of a variable by 1</td></tr></tbody></table><h3 id="java-assignment-operators" tabindex="-1">Java Assignment Operators <a class="header-anchor" href="#java-assignment-operators" aria-label="Permalink to &quot;Java Assignment Operators&quot;">​</a></h3><p>Assignment operators are used to assign values to variables.</p><table><thead><tr><th>Operator</th><th>Example</th><th>Same As</th></tr></thead><tbody><tr><td>=</td><td>x = 5</td><td>x = 5</td></tr><tr><td>+=</td><td>x += 3</td><td>x = x + 3</td></tr><tr><td>-=</td><td>x -= 3</td><td>x = x - 3</td></tr><tr><td>*=</td><td>x *= 3</td><td>x = x * 3</td></tr><tr><td>/=</td><td>x /= 3</td><td>x = x / 3</td></tr><tr><td>%=</td><td>x %= 3</td><td>x = x % 3</td></tr><tr><td>&amp;=</td><td>x &amp;= 3</td><td>x = x &amp; 3</td></tr><tr><td>|=</td><td>x |= 3</td><td>x = x | 3</td></tr><tr><td>^=</td><td>x ^= 3</td><td>x = x ^ 3</td></tr><tr><td>&gt;&gt;=</td><td>x &gt;&gt;= 3</td><td>x = x &gt;&gt; 3</td></tr><tr><td>&lt;&lt;=</td><td>x &lt;&lt;= 3</td><td>x = x &lt;&lt; 3</td></tr></tbody></table><h3 id="java-comparison-operators" tabindex="-1">Java Comparison Operators <a class="header-anchor" href="#java-comparison-operators" aria-label="Permalink to &quot;Java Comparison Operators&quot;">​</a></h3><p>Comparison operators are used to compare two values.</p><table><thead><tr><th>Operator</th><th>Name</th><th>Example</th></tr></thead><tbody><tr><td>==</td><td>Equal to</td><td>x == y</td></tr><tr><td>!=</td><td>Not equal</td><td>x != y</td></tr><tr><td>&gt;</td><td>Greater than</td><td>x &gt; y</td></tr><tr><td>&lt;</td><td>Less than</td><td>x &lt; y</td></tr><tr><td>&gt;=</td><td>Greater than or equal</td><td>x &gt;= y</td></tr><tr><td>&lt;=</td><td>Less than or equal</td><td>x &lt;= y</td></tr></tbody></table><h3 id="java-logical-operators" tabindex="-1">Java Logical Operators <a class="header-anchor" href="#java-logical-operators" aria-label="Permalink to &quot;Java Logical Operators&quot;">​</a></h3><p>Logical operators are used to determine the logic between variables or values.</p><table><thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>and</td><td>Returns true if both statements are true</td></tr><tr><td>||</td><td>or</td><td>Returns true if one of the statements is true</td></tr><tr><td>!</td><td>not</td><td>Reverse the result, returns false if the result is true</td></tr></tbody></table><h3 id="java-bitwise-operators" tabindex="-1">Java Bitwise Operators <a class="header-anchor" href="#java-bitwise-operators" aria-label="Permalink to &quot;Java Bitwise Operators&quot;">​</a></h3><p>Bitwise operators are used to perform bitwise operations on integers.</p><table><thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>AND</td><td>Sets each bit to 1 if both bits are 1</td></tr><tr><td>|</td><td>OR</td><td>Sets each bit to 1 if one of two bits is 1</td></tr><tr><td>^</td><td>XOR</td><td>Sets each bit to 1 if only one of two bits is 1</td></tr><tr><td>~</td><td>NOT</td><td>Inverts all the bits</td></tr><tr><td>&lt;&lt;</td><td>Zero fill left shift</td><td>Shift left by pushing zeros in from the right and let the leftmost bits fall off</td></tr><tr><td>&gt;&gt;</td><td>Signed right shift</td><td>Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off</td></tr><tr><td>&gt;&gt;&gt;</td><td>Zero fill right shift</td><td>Shift right by pushing zeros in from the left, and let the rightmost bits fall off</td></tr></tbody></table><h3 id="java-ternary-operator" tabindex="-1">Java Ternary Operator <a class="header-anchor" href="#java-ternary-operator" aria-label="Permalink to &quot;Java Ternary Operator&quot;">​</a></h3><p>The ternary operator is shorthand for if-then-else statements.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> time </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">String result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (time </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Good day.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Good evening.&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(result); </span><span style="color:#6A737D;">// Outputs &quot;Good evening.&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> time </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">String result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (time </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Good day.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Good evening.&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(result); </span><span style="color:#6A737D;">// Outputs &quot;Good evening.&quot;</span></span></code></pre></div>`,22),n=[r];function l(d,p,i,c,h,y){return a(),s("div",null,n)}const v=t(o,[["render",l]]);export{E as __pageData,v as default};
