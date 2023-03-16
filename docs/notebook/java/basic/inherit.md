# 第5章 继承

继承在面向对象编程中的基本思想是，基于已有的类创建新的类，复用方法和字段，添加一些新的方法和字段，使类能够适应新的情况。

## 5.1 类、超类和子类

假设经理和员工有很多相同之处，但仅仅是经理在完成任务后能获得绩效奖金，员工则按月发放工资。这种情况就需要使用继承。

`Manager`和`Employee`之间是“is-a”（是）的关系，每一个经理都是一个员工。

“is-a”是继承的一个关键特征。

### 5.1.1 定义子类

可以如下继承`Employee`类定义`Manager`类

```java
public class Manager extends Employee {
    add methods and fields...
}
```

关键字`extends`表明正在构造的新类派生于一个已经存在的类。这个类被称作超类（super class）、基类（base class）或父类（parent class）；新类被称作子类（subclass）、派生类（derived class）或孩子类（child class）。

超类和子类是Java程序员最常用的称呼。

在`Manager`类中增加了奖金字段`bouns`和设置奖金的方法`setBounds`，由于这些不是在`Employee`类中定义的，所以属于`Employee`类的对象不能调用。

然而，尽管`Manager`类没有显式地定义`getName`和`getHireDay`等方法，但可以对`Manager`类地对象调用这些方法，这是因为`Manager`类自动继承了超类中的这些方法。

设计类的时候应该将最一般的方法放在超类中，而将更特殊的方法放在子类中。

### 5.1.2 覆盖方法

经理和员工的`getSalary`的计算方式不一样，子类可以对超类中同名的方法进行覆写。

在覆写时注意，`Manager`类无法直接访问`Employee`类中私有的`slaray`字段，需要调用超类的`getSalary`方法才能得到。

可以使用`super`关键字指示编译器使用超类中的同名方法，如果不加`super`而直接调用`getSlaray`则会无限循环地调用自身，最终程序崩溃。

`super`与`this`关键字不一样，`this`是实例对象的引用，而`super`不是，例如不能将`super`赋值给另一个对象变量，它只是指示编译器调用超类方法的特殊关键字。

### 5.1.3 子类的构造器

```java
public Manager(String name, double salary, int year, int month, int day)
{
   super(name, salary, year, month, day);
   bonus = 0;
}
```

值得注意的是这里的`super`关键字的含义有所不同，在这里是用来调用超类Employee中带有n、s、year、month和day参数的构造器。

由于超类的私有字段子类无法访问，因此必须通过调用超类的构造器进行初始化。

super()应当放在子类构造器的第一句。

如果没有显式调用超类构造器，那么默认会调用超类的无参数构造器，如果超类没有无参数构造器，那么编译就会报一个错。

下面对Manager类进行测试

```java
// construct a Manager object
var boss = new Manager("Carl Cracker", 80000, 1987, 12, 15);
boss.setBonus(5000);

var staff = new Employee[3];

// fill the staff array with Manager and Employee objects

staff[0] = boss;
staff[1] = new Employee("Harry Hacker", 50000, 1989, 10, 1);
staff[2] = new Employee("Tommy Tester", 40000, 1990, 3, 15);

// print out information about all Employee objects
for (Employee e : staff)
    System.out.println("name=" + e.getName() + ",salary=" + e.getSalary());
```

这条循环语句会输出：

```
Carl Cracker 85000.0
Harry Hacker 50000.0
Tommy Tester 40000.0
```

staff[1]、staff[2]仅输出了基本工资，因为他们是Employee对象，而staff[0]是Manager对象，它会将基本工资与奖金相加。

需要注意的是`e.getSalary()`，尽管这里声明的对象变量e的类型是Employee，但是虚拟机知道e实际引用的对象类型，因此能够正确调用相应的方法。

这种用一个对象变量表示多种不同类型对象的现象叫做**多态**（polymorphism）。

在运行时能够正确选择相应的方法，称为**动态绑定**（dynamic binding）。

### 5.1.4 继承层次

继承不限于一个层次，比如还可以从Manager类派生出Executive类

从Employee类派生出与Manager类同级的Programer、Secretary类

通常一个祖先可以有多个子孙链，由一个公共超类派生出来的所有类的集合称为**继承层次**

从某个特定类到其祖先的路径称为**继承链**

### 5.1.5 多态

在前面的代码中，可以调用boss.setBouns()，但是不能调用staff[0].setBouns()

这是因为staff数组是Employee类型的数组，每一个元素都应该是Employee类型的对象，而setBouns不是Employee类的方法

也不能将超类对象的引用赋值给子类变量，比如`Manager m = staff[i]`，原因很简单：不是所有员工都是经理，如果赋值成功则后面调用setBouns会出错

> 警告：在Java中子类引用的数组可以不需要强制转化就可以转化为超类引用的数组，比如：
> 
> ```java
> Manager[] managers = new Manager[10];
> Employee [] staff = managers; // OK
> ```
> 
> 这样做不会有问题，毕竟每一个manager也是employee
> 但是考虑这样一个情况：
> 
> ```java
> staff[0] = new Employee("luolei",...); // OK
> managers[0].setBouns(1000); // ERROR
> ```
> 
> 似乎把一个普通员工混入了经理行列！为了不发生这种情况，所有数组都要牢记创建时的元素类型（new ...），并负责监督仅将类型兼容的引用存储到数组中。
> 

### 5.1.6 理解方法调用

准确地理解方法在对象上的调用很重要，下面假设调用x.f(String)，隐式参数x声明为类C的一个对象，下面是调用过程的详细步骤

1. 编译器查看对象的类型和方法名——列举C类的方法名和超类中可访问的方法名
2. 编译器确定方法的参数类型String（这个过程可能发生参数类型转换，情况可能会比较复杂，比如int转化为double，这个确定的过程叫做**重载解析**），至此编译器已经知道了需要调用的方法名和参数类型
3. 如果方法是private、final、static的，那么编译器可以精确地知道应该调用哪个方法，因为不需要了解隐式参数的实际类型，这称为**静态绑定**
4. 与此对应的是**动态绑定**，调用的过程中需要依赖隐式参数的实际类型。假设x的实际类型是D，C是D的超类，如果D类定义了方法f，那么就会调用D.f(String)，否则就会在D的超类中寻找

每次调用方法都要完成这个搜索，时间开销相当大，因此虚拟机为每个类计算了一个方法表，其中列出了所有方法的签名和要调用的实际类型。

比如Manager类的方法表（只重载了getSalary方法和新增了一个setBouns方法）：

```
Manager:
    getName()-> Employee.getName()
    getSalary()-> Manager.getSalary()
    setBouns(double)->Manager.setBouns(double)
    ...
```

> 注意在覆盖一个方法时，子类方法的可见性不能低于超类方法的可见性，例如超类方法为public，那么子类方法也要声明为public

### 5.1.7 组织继承

有时候希望阻止利用某个类定义子类，可以使用关键字`final`，例如：

```java
public final class Executive extends Manager
{
    ...
}
```

类中的某个方法也可与被声明为`final`，如果这样做，子类就不能覆写这个方法。

类声明为`final`后，类中的所有方法都会变成`final`，而字段不会。

### 5.1.8 强制类型转换

有时候需要将某个类的对象的引用转化为另一个类的对象的引用，例如`Manager m = (Manager)staff[0];`，以使用转化后对象的全部功能。

* 只能在继承的层次内进行转化
* 在将超类转化为子类之前，应该使用`instanceof`进行检查

仅在需要访问子类所特有的部分（比如setBouns方法）时才需要进行强制类型转换，尽量少用强制类型转换和instanceof。

### 5.1.9 抽象类



