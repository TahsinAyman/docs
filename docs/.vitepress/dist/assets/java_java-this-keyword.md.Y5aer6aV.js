import{_ as s,o as a,c as n,R as l}from"./chunks/framework.knLoFo0c.js";const u=JSON.parse('{"title":"Java this Keyword","description":"","frontmatter":{},"headers":[],"relativePath":"java/java-this-keyword.md","filePath":"java/java-this-keyword.md"}'),o={name:"java/java-this-keyword.md"},e=l(`<h1 id="java-this-keyword" tabindex="-1">Java this Keyword <a class="header-anchor" href="#java-this-keyword" aria-label="Permalink to &quot;Java this Keyword&quot;">​</a></h1><p>The this keyword can be used to refer current class instance variable. If there is ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity.</p><h2 id="usage-of-java-this-keyword" tabindex="-1">Usage of Java this Keyword <a class="header-anchor" href="#usage-of-java-this-keyword" aria-label="Permalink to &quot;Usage of Java this Keyword&quot;">​</a></h2><p>There can be a lot of usage of java this keyword. In java, this is a reference variable that refers to the current object.</p><p>Usage of java this keyword</p><p>Here is given the 6 usage of java this keyword.</p><ol><li>this can be used to refer current class instance variable.</li><li>this can be used to invoke current class method (implicitly)</li><li>this() can be used to invoke current class constructor.</li><li>this can be passed as an argument in the method call.</li><li>this can be passed as argument in the constructor call.</li><li>this can be used to return the current class instance from the method.</li></ol><h3 id="_1-this-keyword-can-be-used-to-refer-current-class-instance-variable" tabindex="-1">1) this keyword can be used to refer current class instance variable. <a class="header-anchor" href="#_1-this-keyword-can-be-used-to-refer-current-class-instance-variable" aria-label="Permalink to &quot;1) this keyword can be used to refer current class instance variable.&quot;">​</a></h3><p>The this keyword can be used to refer the current class instance variable. If there is ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;">{  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> rollno;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    String name;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;"> fee;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">rollno</span><span style="color:#E1E4E8;">,String </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fee</span><span style="color:#E1E4E8;">){  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.rollno</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">rollno;  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">name;  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.fee</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">fee;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">(){System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(rollno</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">fee);}  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;">{  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> rollno;  </span></span>
<span class="line"><span style="color:#24292E;">    String name;  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">float</span><span style="color:#24292E;"> fee;  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">rollno</span><span style="color:#24292E;">,String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">float</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fee</span><span style="color:#24292E;">){  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.rollno</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">rollno;  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">name;  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.fee</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">fee;  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">(){System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(rollno</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">fee);}  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_2-this-keyword-can-be-used-to-invoke-current-class-method-implicitly" tabindex="-1">2) this keyword can be used to invoke current class method (implicitly) <a class="header-anchor" href="#_2-this-keyword-can-be-used-to-invoke-current-class-method-implicitly" aria-label="Permalink to &quot;2) this keyword can be used to invoke current class method (implicitly)&quot;">​</a></h3><p>The this keyword can also be used to invoke the current class method (implicitly). If you don&#39;t use this keyword, compiler automatically adds this keyword while invoking the method.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;">{  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">m</span><span style="color:#E1E4E8;">(){System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello m&quot;</span><span style="color:#E1E4E8;">);}  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">n</span><span style="color:#E1E4E8;">(){  </span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello n&quot;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//m();//same as this.m()  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">m</span><span style="color:#E1E4E8;">();  </span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;">{  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">m</span><span style="color:#24292E;">(){System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello m&quot;</span><span style="color:#24292E;">);}  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">n</span><span style="color:#24292E;">(){  </span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello n&quot;</span><span style="color:#24292E;">);  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//m();//same as this.m()  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">m</span><span style="color:#24292E;">();  </span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,13),p=[e];function t(r,c,i,y,E,d){return a(),n("div",null,p)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
