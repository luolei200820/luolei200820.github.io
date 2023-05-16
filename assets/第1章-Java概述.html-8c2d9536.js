import{_ as a,p as n,q as s,a1 as l}from"./framework-6f85e614.js";const e="/assets/operating-mechanism-59fa20e1.jpg",i={},t=l('<h1 id="第1章-java概述" tabindex="-1"><a class="header-anchor" href="#第1章-java概述" aria-hidden="true">#</a> 第1章 Java概述</h1><h2 id="_1-1-java诞生小故事" tabindex="-1"><a class="header-anchor" href="#_1-1-java诞生小故事" aria-hidden="true">#</a> 1.1 Java诞生小故事</h2><ul><li>1990 Sun公司绿色计划</li><li>1992 创建oak（橡树）语言-&gt;Java</li><li>1994 James Gosling参加硅谷大会，演示Java功能，震惊世界</li><li><strong>1995 Sun发布Java第一个版本</strong></li><li>2009 甲骨文收购Sun。2011 发布Java7</li></ul><h2 id="_1-2-java技术体系平台" tabindex="-1"><a class="header-anchor" href="#_1-2-java技术体系平台" aria-hidden="true">#</a> 1.2 Java技术体系平台</h2><p><strong>Java SE（Java Standard Edition）标准版</strong></p><p>支持面向桌面技术的应用（如Windows下的应用程序）的Java平台，提供了完整的Java核心API，此版本以前称为J2SE。</p><p><strong>Java EE（Java Enterprise Edition）企业版</strong></p><p>是为企业开发环境下的应用程序提供的一套解决方案。该技术体系中包含的技术如：Servlet、JSP等，主要针对Web应用程序开发。版本以前称为J2EE。</p><p><strong>Java ME（Java Micro Edition）小型版</strong></p><p>支持Java程序运行在移动终端（手机、PDA）上的平台，对Java API有所精简，并加入了针对移动端的支持，此版本以前称为J2ME。</p><h2 id="_1-3-java开发工具" tabindex="-1"><a class="header-anchor" href="#_1-3-java开发工具" aria-hidden="true">#</a> 1.3 Java开发工具</h2><ul><li>editplus++</li><li>Sublime Text</li><li>IDEA</li><li>Eclipse</li></ul><h2 id="_1-4-java特性" tabindex="-1"><a class="header-anchor" href="#_1-4-java特性" aria-hidden="true">#</a> 1.4 Java特性</h2><p><strong>Java的重要特点</strong></p><ol><li>Java是面向对象的（OOP）</li><li>Java语言是健壮的。Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮的重要保证</li><li>Java语言是跨平台性的。【即：一个编译好的.class文件可以在多个系统下运行，这种特性称为跨平台性。】</li><li>Java语言是解释型的</li></ol><p>解释型语言：JavaScript、PHP、Java，编译型语言：C/C++</p><p>区别是：解释型语言，编译后的代码，不能直接被机器执行，需要解释器来执行，编译型语言，编译后的代码，可以被机器执行</p><h2 id="_1-5-jdk介绍" tabindex="-1"><a class="header-anchor" href="#_1-5-jdk介绍" aria-hidden="true">#</a> 1.5 JDK介绍</h2><p>因为有了JVM，同一个Java程序在三个不同的操作系统中都可以执行。</p><p>这样就实现了Java程序的跨平台性</p><h3 id="_1-5-1-java运行机制及运行过程" tabindex="-1"><a class="header-anchor" href="#_1-5-1-java运行机制及运行过程" aria-hidden="true">#</a> 1.5.1 Java运行机制及运行过程</h3><ul><li><p>Java核心机制-Java虚拟机【JVM Java virtual machine】</p><ol><li>JVM是一个虚拟计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器，包含在JDK中</li><li>对于不同的平台有不同的虚拟机</li><li>Java虚拟机机制屏蔽了底层运行平台的差异，实现了“一次编译，到处运行”【示意图】<img src="'+e+`" alt="Java运行机制及运行过程"></li></ol></li></ul><h3 id="_1-5-2-jdk基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-5-2-jdk基本介绍" aria-hidden="true">#</a> 1.5.2 JDK基本介绍</h3><ol><li><p>JDK的全称（Java Development Kit ，Java开发工具包）</p><ul><li>JDK=JRE+Java的开发工具（java,javac,javadoc,javap）等</li></ul></li><li><p>JDK是提供给开发人员使用的，其中包含了Java的开发工具，也包括了JRE。所以安装了JDK就不用安装JRE了</p></li></ol><h3 id="_1-5-3-jre基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-5-3-jre基本介绍" aria-hidden="true">#</a> 1.5.3 JRE基本介绍</h3><ol><li><p>JRE（Java Runtime Environment ，Java运行环境）</p><ul><li>JRE=JVM+Java的核心类库【类】</li></ul></li><li><p>包括Java虚拟机（JVM Java Virtual Machine）和Java程序所需的核心类库等，如果想要运行一个开发好的Java程序，计算机中只需安装JRE即可。</p></li></ol><h3 id="_1-5-4-java运行机制" tabindex="-1"><a class="header-anchor" href="#_1-5-4-java运行机制" aria-hidden="true">#</a> 1.5.4 Java运行机制</h3><p>编写一个Hello.java文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 这是Java快速入门，演示Java的步骤</span>
<span class="token comment">// 对代码的相关说明</span>
<span class="token comment">// 1. public class Hello，表示Hello是一个类，是一个public公有类</span>
<span class="token comment">// 2. Hello {} 表示一个类的开始和结束</span>
<span class="token comment">// 3. public static void main(String[] args)表示一个主方法，即我们程序的入口</span>
<span class="token comment">// 4. main(){} 表示方法的开始和结束</span>
<span class="token comment">// 5. System.out.println(&quot;hello,world~&quot;);表示输出&quot;hello,world~&quot;到屏幕上</span>
<span class="token comment">// 6. ;表示语句结束</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>

    <span class="token comment">// 编写一个main方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;老王 is studying java!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件编码格式选择GBK</p><p>原因：控制台编码格式为GBK，运行javac时无法识别文件中的字符编码</p><p>解决方法：在编辑器中选择使用GBK编码保存</p><h3 id="_1-5-5-java执行流程分析" tabindex="-1"><a class="header-anchor" href="#_1-5-5-java执行流程分析" aria-hidden="true">#</a> 1.5.5 Java执行流程分析</h3><ol><li><p>.java源文件经过<code>javac</code>编译得到.class字节码文件</p></li><li><p><code>java</code>运行</p></li></ol><p><strong>什么是编译</strong></p><p>javac Hello.java</p><ol><li>有了java源文件，通过编译器将其编译成JVM可以识别的字节码文件</li><li>在该源文件目录下，通过javac工具对Hello.java进行编译</li><li>如果程序没有错误，没有任何提示，在当前目录下出现一个Hello.class文件，该文件称为字节码文件，也是可以执行的java程序</li></ol><p><strong>什么是运行</strong></p><ol><li>有了可执行的Java程序（Hello.class字节码文件）</li><li>通过运行工具java.exe对字节码进行执行，本质就是.class装载到JVM机进行执行</li></ol><p><strong>Java开发注意事项</strong></p><ol><li>修改源代码.java文件之后，需要重新编译.class字节码文件，再进行执行才能生效</li></ol><h2 id="_1-6-java开发细节" tabindex="-1"><a class="header-anchor" href="#_1-6-java开发细节" aria-hidden="true">#</a> 1.6 Java开发细节</h2><p><strong>Java开发注意事项和细节说明</strong></p><ol><li>Java源文件是以.java为扩展名。源文件的基本组成部分是类（class），如本类中的Hello类。</li><li>Java应用程序的入口是main()方法。有固定的书写格式：<code>public static void main(String[] args) {}</code></li><li>Java语言严格区分大小写</li><li>每个语句以;结尾</li><li>大括号成对出现，先写完大括号再写里面的内容</li><li>一个源文件中最多只能有一个public类，其他类的个数不限[演示]</li><li>如果源文件包含一个public类，则文件名必须按该类命名[演示]</li><li>一个源文件中最多只能有一个public类。其他类的个数不限，也可以将main方法写在非public类中，然后指定运行非public类，这样入口方法就是非public的main方法</li></ol><h2 id="_1-7-转义字符" tabindex="-1"><a class="header-anchor" href="#_1-7-转义字符" aria-hidden="true">#</a> 1.7 转义字符</h2><p><strong>Java常用的转义字符</strong></p><ol><li>\\t：一个制表符，实现对齐功能</li><li>\\n：换行符</li><li>\\\\：一个\\</li><li>&quot;：一个&quot;</li><li>&#39;：一个&#39;</li><li>\\r：一个回车</li></ol><h2 id="_1-8-注释" tabindex="-1"><a class="header-anchor" href="#_1-8-注释" aria-hidden="true">#</a> 1.8 注释</h2><p>单行注释：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 这是单行注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多行注释：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*  示意=》可读性很好
    这是多行注释
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用细节：被注释的文字不会被JVM解释执行</p><p>多行注释不允许有多行注释嵌套</p><h2 id="_1-9-文档注释" tabindex="-1"><a class="header-anchor" href="#_1-9-文档注释" aria-hidden="true">#</a> 1.9 文档注释</h2><p>注释内容可以被JDK提供的工具javadoc所解析，生成一套以网页文件形式体现的该程序的说明文档，一般写在类</p><p>生成方式：<code>javadoc -d E:\\\\\\temp -author -version Comment02.java</code></p><p><strong>Javadoc标签大全</strong></p><table><thead><tr><th style="text-align:center;">标签</th><th style="text-align:center;">描述</th><th style="text-align:center;">示例</th></tr></thead><tbody><tr><td style="text-align:center;">@author</td><td style="text-align:center;">标识一个类的作者</td><td style="text-align:center;">@author description</td></tr><tr><td style="text-align:center;">@deprecated</td><td style="text-align:center;">指名一个过期的类或成员</td><td style="text-align:center;">@deprecated description</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h2 id="_1-10-代码规范" tabindex="-1"><a class="header-anchor" href="#_1-10-代码规范" aria-hidden="true">#</a> 1.10 代码规范</h2><ol><li>类、方法的注释，要以javadoc的方式来书写</li><li>非javadoc的注释，往往是给维护者看的，着重告诉读者为什么这么写，如何修改，注意什么问题等</li><li>使用Tab键操作，实现缩进，默认整体向右边移动，用Shift+Tab整体向左移动</li><li>运算符和 = 两边习惯各加一个空格。比如 2 + 4 * 5 + 345 - 89</li><li>源文件使用UTF-8编码</li><li>行宽度不超过80字符</li><li>代码编写<strong>次行风格</strong>和<strong>行尾风格</strong>（推荐行尾风格）</li></ol><h2 id="_1-11-第二章作业" tabindex="-1"><a class="header-anchor" href="#_1-11-第二章作业" aria-hidden="true">#</a> 1.11 第二章作业</h2><ol><li><p>输出&quot;hello,world&quot;</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Homework01</span> <span class="token punctuation">{</span>

    <span class="token comment">// 编写一个main方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello,world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将个人信息（姓名、性别、籍贯、住址）输出，各条占一行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Homework02</span> <span class="token punctuation">{</span>

    <span class="token comment">// 编写一个main方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;姓名\\t性别\\t籍贯\\t住址\\n罗磊\\t男\\t广西\\t南宁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>JDK,JRE,JVM的关系</p><blockquote><ol><li>JDK = JRE + Java开发工具</li><li>JRE = JVM + 核心类库</li></ol></blockquote></li><li><p>环境变量path配置的作用</p><blockquote><ol><li>环境变量的作用是为了命令行在任意目录，可以去使用java和javac</li><li>先配置JAVA_HOME = 指向jdk的安装目录</li><li>编辑path变量，增加%JAVA_HOME%\\bin</li></ol><p>用户变量只对当前用户生效，系统变量对所有用户生效</p><p>使用%JAVA_HOME%变量可以方便地替换，以后Eclipse等IDE也会使用到此变量</p></blockquote></li><li><p>Java编写步骤</p><blockquote><ol><li>编写Java的源代码</li><li>javac 编译，得到对应的 .class 字节码文件</li><li>java 运行，本质就是把 .class 加载到 JVM 运行</li></ol></blockquote></li><li><p>Java编写的7个规范</p><blockquote><ol><li>类，方法的注释使用javadoc的方式，即文档注释</li><li>非javadoc注释往往是对代码的说明，给程序的维护者看的，说明如何修改，注意事项</li><li>使用Tab键整体将代码向右移动，使用Shift + Tab整体左移</li><li>运算符和 = 的两边习惯性地给空格，代码看上去清楚 <code>int n = 1 + 4;</code></li><li>源码文件使用UTF-8编码</li><li>行宽的字符不要超过80</li><li>代码编写<strong>次行风格</strong>和<strong>行尾风格</strong>（推荐行尾风格）</li></ol></blockquote></li><li><p>初学者Java易犯错误</p><blockquote><ol><li>编译运行时找不到文件 <code>javac Hello.java</code></li><li>主类名和文件名不一致，修改时保持一致</li><li>缺少;</li><li>拼写错误，1-&gt;l，0-&gt;O，void-&gt;viod，要求写代码时要小心</li></ol></blockquote></li></ol>`,63),o=[t];function c(p,d){return n(),s("div",null,o)}const v=a(i,[["render",c],["__file","第1章-Java概述.html.vue"]]);export{v as default};
