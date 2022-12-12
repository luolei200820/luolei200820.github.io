<script setup>
    import Nerv3D from '../../../components/Nerv3D.vue'
</script>
# 欢迎来到WebGL的世界

<Nerv3D></Nerv3D>

**WebGL**是一种JavaScript API，用于在不使用插件的情况下在任何兼容的网页浏览器中呈现交互式2D和3D图形。WebGL完全集成到浏览器的所有网页标准中，可将影像处理和效果的GPU加速使用方式当做网页Canvas的一部分。WebGL元素可以加入其他HTML元素之中并与网页或网页背景的其他部分混合。WebGL程序由JavaScript编写的句柄和OpenGL Shading Language（GLSL）编写的着色器代码组成，该语言类似于C或C++，并在电脑的图形处理器（GPU）上执行。WebGL由非营利Khronos Group设计和维护。

## 设计

WebGL 1.0基于OpenGL ES 2.0，并提供了3D图形的API。它使用HTML5 Canvas并允许利用文档对象模型接口。WebGL 2.0基于OpenGL ES 3.0，确保了提供许多选择性的WebGL 1.0扩展，并引入新的API。可利用部分Javascript实现自动存储器管理。

## 历史

WebGL起源于Mozilla员工弗拉基米尔·弗基西维奇一项称为Canvas 3D的实验项目。2006年，弗基西维奇首次展示了Canvas 3D的原型。2007年底在Firefox和Opera被实现。

在2009年初，非营利技术联盟Khronos Group启动了WebGL的工作组，最初的工作成员包括Apple、Google、Mozilla、Opera等。2011年3月发布WebGL 1.0规范。截至2012年3月，工作组的主席由肯·罗素（Ken Russell，全名“Kenneth Bradley Russell”）担任。

WebGL的早期应用包括Zygote Body。

WebGL 2规范的发展始于2013年，并于2017年1月完成。该规范基于OpenGL ES 3.0。首度实现在Firefox 51、Chrome 56和Opera 43中。

## 支持

目前，WebGL在最新的浏览器中被广泛支持。然而，其可用性取决于其他因素，如GPU支持。WebGL官方网站提供了一个简单的测试页。而第三方网站提供了更详细的消息（如浏览器使用的渲染器以及可用的扩展）