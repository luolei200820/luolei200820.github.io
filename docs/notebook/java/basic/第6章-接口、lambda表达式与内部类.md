# 第6章 接口、lambda表达式与内部类

## 6.1 接口

接口用来描述类应该做什么，而不指定类具体应该如何去做，是类的行为规范。一个类可以实现一个或多个接口。

举例：

使用Arrays类的sort方法对Employee数组进行排序

为泛型Comparable接口提供一个类型参数

```java
class Employee implements Comparable<Employee>
{
    ...
    // 对接口中的所有方法提供定义
    public int compareTo(Employee other)
    {
        return Double.compare(salary,other.salary);
    }
}
```

### 6.1.2 接口的属性

接口不是类，因此不能用new关键字实例化。可以声明接口变量，必须为其赋值为实现了这个接口的类的对象。也可以使用instanceof检查一个对象是否实现了接口。

```java
var x = new Comparable(...); // ERROR
Comparable x = new Employee(...); // OK

if(x instanceof Comparable){...}
```

与类的继承层次类似，也可以扩展接口，同样只能单继承。虽然在接口中不能包含实例字段，但是可以包含常量，与方法被声明为`public abstract`一样，常量被声明为`public static final`。虽然书写关键字有助于提高代码的清晰度，但Java语言规范建议不要提供多余的关键字。

```java
public interface Moveable
{
    void move(double x,double y);
}

public interface Powered extends Moveable
{
    double milesPerGallon(); // a public abstract
    double SPEED_LIMIT = 95; // a public static final
}
```

### 6.1.3 接口与抽象类

可以同时实现多个接口，也可以继承之后实现一个或多个接口。使用继承而不是抽象类的原因在于，Java只允许单继承而不允许多继承，如果一个类已经扩展了一个类，那么它就不能再继承第二个类了。

```java
class Employee extends Person implements Comparable<Employee>,Cloneable
```

### 6.1.4 静态和私有方法

在Java 8之后可以为接口提供静态方法，虽然这有违将接口作为抽象规范的初衷。这样一来就不需要为实用方法提供一个实现类。反例可以参考标准库中的Path接口和Paths实现类。

在Java 9之后接口的方法可以是私有的，包括静态方法和实例方法，但这种用途十分有限，因为只能在接口中使用，只能作为其他方法的辅助方法。


### 6.1.5 默认方法

可以为接口的方法加上default关键字将其设置为默认方法，这么做的目的是为了修改接口时实现类无需修改。

如果接口新增加了一个方法，那么实现类将无法通过编译，如果仅仅只是包含这个类的JAR文件或者.class文件，那么可以正常构造对象，但是如果在对象上调用新增加的方法会抛出一个AbstractMethodError。将方法设置为默认（default）方法，实现类就又能够重新编译了，如果实现类没有重新定义新方法，那么调用新方法将调用接口中定义的默认方法。

直接调用接口的默认方法的语法：接口名.super.方法名

### 6.1.6 解决默认方法冲突

如果一个接口中的方法定义为默认方法，然后超类或者另一个接口中定义了同样的方法，Java的解决规则如下：

1. 超类优先。如果超类定义了一个具体方法，那么接口中同名并且参数相同的方法会被忽略。
2. 接口冲突。如果接口定义了一个默认方法，另一个接口中定义了一个同名且参数相同的方法，那么实现类必须重写这个方法来解决冲突。


### 6.1.7 接口与回调

可以向定时器（java.swing.Timer）传入一个类的对象，这个类实现了java.awt.event.ActionListener接口。定时器会在你设定的间隔时间循环调用这个对象的actionPerformed方法。

例子：

```java
public class TimerTest
{  
   public static void main(String[] args)
   {  
      var listener = new TimePrinter();

      // construct a timer that calls the listener
      // once every second
      var timer = new Timer(1000, listener);
      timer.start();

      // keep program running until the user selects "OK"
      JOptionPane.showMessageDialog(null, "Quit program?");
      System.exit(0);
   }
}

class TimePrinter implements ActionListener
{  
   public void actionPerformed(ActionEvent event)
   {  
      System.out.println("At the tone, the time is " 
         + Instant.ofEpochMilli(event.getWhen()));
      Toolkit.getDefaultToolkit().beep();
   }
}
```

### 6.1.8 Comparator接口

在之前介绍的Arrays.sort方法要求类实现了Comparable接口，String类实现了Comparable接口，它默认是按字典顺序排序的。

假设现在我们需要按照字符串长度进行排序，为此更改String类的实现是不合理的，于是Arrays.sort方法还有另一个版本，第一个参数是数组，第二个参数是比较器（comparator）。

例子：

```java
public interface Comparator<T>
{
    int compare(T first,T seconnd);
}

class LengthComparator implements Comparator<String>
{
    public int compare(String first,String second)
    {
        return first.length() - second.length();
    }
}

// 在比较时
Arrays.sort(friends,new LengthComparator());
```
