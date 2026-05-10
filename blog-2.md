# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

আমরা যারা বড় কোনো প্রজেক্টে কাজ করি, তারা জানি হাজার হাজার লাইনের কোড সামলানো কতটা কঠিন। কোড যখন অনেক বেশি হয়ে যায়, তখন একটা জায়গায় পরিবর্তন করলে অন্য জায়গায় বাগ দেখা দেয়। এই ধরণের জটিলতা বা complexity কমানোর জন্যই ওওপি (OOP) এর ৪টি স্তম্ভ জাদুর মতো কাজ করে। আজ আমি একদম সহজ ভাষায় বলবো কিভাবে এগুলো আমাদের লাইফ সহজ করে দেয়।

### ১. Encapsulation :
বড় টিমে কাজ করার সময় আপনি চাইবেন না যে আপনার লেখা কোনো ভেরিয়েবল অন্য কেউ ভুল করে বদলে দিক। এনক্যাপসুলেশন ডাটাকে ক্লাসের ভেতর আটকে রাখে এবং শুধু দরকারি অংশটুকু বাইরে দেখায়।

```typescript

class BankAccount {
  private balance: number = 1000;
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
}

const account = new BankAccount();
account.deposit(500);

```
এর ফলে কোড অনেক বেশি নিরাপদ হয় এবং রানটাইমে হুটহাট ডাটা বদলে যাওয়ার ভয় থাকে না।

### ২. Inheritance :
বড় প্রজেক্টে একই লজিক বারবার লেখা মানেই বোকামি। ইনহেরিটেন্স আমাদের সুযোগ দেয় একটা কমন কোড একবার লিখে সেটা অন্য জায়গায় ব্যবহার করার। এতে কোডের সাইজ কমে এবং মেইনটেইন করা সহজ হয়।

```typescript

class Animal {
  eat(): void {
    console.log("Animal is eating");
  }
}
class Dog extends Animal {
  bark(): void {
    console.log("Dog is barking");
  }
}
const dog = new Dog();
dog.eat();  
dog.bark();

```

### ৩. Polymorphism :
পলিমরফিজম আমাদের এমন কোড লিখতে সাহায্য করে যা বিভিন্ন পরিস্থিতিতে ভিন্নভাবে আচরণ করতে পারে। এর ফলে আপনি যদি প্রজেক্টে নতুন কোনো ফিচার যোগ করতে চান, তবে আগের কোড না ভেঙেই সেটা সম্ভব হয়। এটি বড় স্কেলে কোডকে অনেক বেশি ফ্লেক্সিবল রাখে।

```typescript
class Shape {
  draw(): void {
    console.log("Drawing a shape");
  }
}
class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}
class Square extends Shape {
  draw(): void {
    console.log("Drawing a square");
  }
}

const shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw()); 
```


### ৪. Abstraction :
অ্যাবস্ট্রাকশন মানে হলো ইউজার বা অন্য ডেভেলপারদের শুধু প্রয়োজনীয় মেথডগুলো দেখানো এবং পেছনের কঠিন লজিকগুলো লুকিয়ে রাখা। এতে প্রজেক্টের ইন্টারফেস অনেক পরিষ্কার থাকে।

```typescript
abstract class Animal {
  abstract makeSound(): void;
  sleep(): void {
    console.log("Sleeping...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof Woof!");
  }
}

const dog = new Dog();
dog.makeSound();
dog.sleep();

```

বড় স্কেলের টাইপস্ক্রিপ্ট প্রজেক্টে এই ৪টি স্তম্ভ বা পিলার ব্যবহার করলে কোড হয় অনেক বেশি গোছানো, বাগ-ফ্রি এবং মেইনটেইন করা সহজ। শুরুতে একটু কঠিন মনে হলেও, একবার এগুলো আয়ত্ত করতে পারলে আপনি বুঝতে পারবেন কেন পৃথিবীর বড় বড় সফটওয়্যার ইঞ্জিনিয়াররা ওওপি (OOP) এতো পছন্দ করেন। 

